"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4190],{47347:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=a(74848),s=a(28453);const t={id:"maintain-guides-async-backing",title:"Upgrade Parachain for Asynchronous Backing Compatibility",sidebar_label:"Async Backing Upgrade",description:"Steps on how to upgrade a parachain to be compatible with the relay chain's async backing feature.",keywords:["async","backing","parachain","consensus"],slug:"../maintain-guides-async-backing"},r=void 0,c={id:"maintain/maintain-guides-async-backing",title:"Upgrade Parachain for Asynchronous Backing Compatibility",description:"Steps on how to upgrade a parachain to be compatible with the relay chain's async backing feature.",source:"@site/../docs/maintain/maintain-guides-async-backing.md",sourceDirName:"maintain",slug:"/maintain-guides-async-backing",permalink:"/docs/maintain-guides-async-backing",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1716630535e3,frontMatter:{id:"maintain-guides-async-backing",title:"Upgrade Parachain for Asynchronous Backing Compatibility",sidebar_label:"Async Backing Upgrade",description:"Steps on how to upgrade a parachain to be compatible with the relay chain's async backing feature.",keywords:["async","backing","parachain","consensus"],slug:"../maintain-guides-async-backing"}},l={},o=[{value:"Async Backing Prerequisites",id:"async-backing-prerequisites",level:2},{value:"Async Backing Terminology and Parameters",id:"async-backing-terminology-and-parameters",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Phase 1 - Update Parachain Runtime",id:"phase-1---update-parachain-runtime",level:2},{value:"Phase 2 - Update Parachain Nodes",id:"phase-2---update-parachain-nodes",level:2},{value:"Phase 3 - Activate Async Backing",id:"phase-3---activate-async-backing",level:2},{value:"Timing by Block Number",id:"timing-by-block-number",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"Who is this guide for?",type:"info",children:(0,i.jsxs)(n.p,{children:["This guide is relevant for cumulus based parachain projects started in 2023 or before. Later\nprojects should already be async backing compatible. If starting a new parachain project, please use\nan async backing compatible template such as\n",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/templates/parachain",children:(0,i.jsx)(n.code,{children:"cumulus/parachain-template"})}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"The rollout process for Async Backing has three phases. Phases 1 and 2 below put new infrastructure\nin place. Then we can simply turn on async backing in phase 3. But first, some pre-reqs and context\nto set the stage."}),"\n",(0,i.jsx)(n.h2,{id:"async-backing-prerequisites",children:"Async Backing Prerequisites"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For more contextual information about asynchronous backing, see\n",(0,i.jsx)(n.a,{href:"/docs/learn-async-backing",children:"this page"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Pull the latest version of Cumulus for use with your parachain. It contains necessary changes for\nasync backing compatibility. Latest on master branch of\n",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk",children:"Polkadot-SDK"})," is currently sufficient. Any 2024 release\nwill work as well."]}),"\n",(0,i.jsx)(n.h2,{id:"async-backing-terminology-and-parameters",children:"Async Backing Terminology and Parameters"}),"\n",(0,i.jsx)(n.p,{children:"Time for a bit of context before we get started. The following concepts will aid in demystifying the\ncollator side of Async Backing and establish a basic understanding of the changes being made:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unincluded segment"})," - From the perspective of a parachain block under construction, the\nunincluded segment describes a chain of recent block ancestors which have yet to be included on\nthe relay chain. The ability to build new blocks on top of the unincluded segment rather than on\ntop of blocks freshly included in the relay chain is the core of asynchronous backing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Capacity"})," - The maximum size of the unincluded segment. The longer this is, the farther ahead a\nparachain can work, producing new candidates before the ancestors of those candidates have been\nseen as included on-chain. Practically, a capacity of 2-3 is sufficient to realize the full\nbenefits of asynchronous backing, at least until the release of elastic scaling."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Velocity"})," - The base rate at which a parachain should produce blocks. A velocity of 1 indicates\nthat 1 parachain block should be produced per relay chain block. In order to fill the unincluded\nsegment with candidates, collators may build up to ",(0,i.jsx)(n.code,{children:"Velocity + 1"})," candidates per aura slot while\nthere is remaining capacity. When elastic scaling has been released velocities greater than 1 will\nbe supported."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AllowMultipleBlocksPerSlot"})," - If this is ",(0,i.jsx)(n.code,{children:"true"}),", Aura will allow slots to stay the same across\nsequential parablocks. Otherwise the slot number must increase with each block. To fill the\nunincluded segment as described above we need this to be ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FixedVelocityConsensusHook"})," - This is a variety of ",(0,i.jsx)(n.code,{children:"ConsensusHook"})," intended to be passed to\n",(0,i.jsx)(n.code,{children:"parachain-system"})," as part of its ",(0,i.jsx)(n.code,{children:"Config"}),". It is triggered on initialization of a new runtime. An\ninstance of ",(0,i.jsx)(n.code,{children:"FixedVelocityConsensusHook"})," is defined with both a fixed capacity and velocity. It\naborts the runtime early if either capacity or velocity is exceeded, as the collator shouldn\u2019t be\ncreating additional blocks in that case."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AsyncBackingParams.max_candidate_depth"})," - This parameter determines the maximum unincluded\nsegment depth the relay chain will support. Candidates sent to validators which exceed\n",(0,i.jsx)(n.code,{children:"max_candidate_depth"})," will be ignored. ",(0,i.jsx)(n.code,{children:"Capacity"}),", as mentioned above, should not exceed\n",(0,i.jsx)(n.code,{children:"max_candidate_depth"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AsyncBackingParams.allowed_ancestry_len"})," - Each parachain block candidate has a ",(0,i.jsx)(n.code,{children:"relay_parent"}),"\nfrom which its execution and validation context is derived. Before async backing the\n",(0,i.jsx)(n.code,{children:"relay_parent"})," for a candidate not yet backed was required to be the fresh head of a fork. With\nasync backing we can relax this requirement. Instead we set a conservative maximum age in blocks\nfor the ",(0,i.jsx)(n.code,{children:"relay_parent"}),"s of candidates in the unincluded segment. This age, ",(0,i.jsx)(n.code,{children:"allowed_ancestry_len"}),"\nlives on the relay chain and is queried by parachains when deciding which block to build on top\nof."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lookahead Collator"})," - A collator for Aura that looks ahead of the most recently included\nparachain block when determining what to build upon. This collator also builds additional blocks\nwhen the maximum backlog is not saturated. The size of the backlog is determined by invoking the\nAuraUnincludedSegmentApi. If that runtime API is not supported, this assumes a maximum backlog\nsize of 1."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,i.jsx)(n.p,{children:"The relay chain needs to have async backing enabled so double-check that the relay-chain\nconfiguration contains the following three parameters (especially when testing locally e.g. with\nzombienet):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"async_backing_params": {\n    "max_candidate_depth": 3,\n    "allowed_ancestry_len": 2\n},\n"scheduling_lookahead": 2\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["warning ",(0,i.jsx)(n.code,{children:"scheduling_lookahead"})," must be set to 2, otherwise parachain block times will"]}),(0,i.jsx)(n.p,{children:"degrade to worse than with sync backing!"})]}),"\n",(0,i.jsx)(n.h2,{id:"phase-1---update-parachain-runtime",children:"Phase 1 - Update Parachain Runtime"}),"\n",(0,i.jsx)(n.p,{children:"This phase involves configuring your parachain\u2019s runtime to make use of async backing system."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Establish constants for ",(0,i.jsx)(n.code,{children:"capacity"})," and ",(0,i.jsx)(n.code,{children:"velocity"})," and set both of them to 1 in\n",(0,i.jsx)(n.code,{children:"/runtime/src/lib.rs"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Establish a constant relay chain slot duration measured in milliseconds equal to ",(0,i.jsx)(n.code,{children:"6000"})," in\n",(0,i.jsx)(n.code,{children:"/runtime/src/lib.rs"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"/// Maximum number of blocks simultaneously accepted by the Runtime, not yet included into the\n/// relay chain.\npub const UNINCLUDED_SEGMENT_CAPACITY: u32 = 1;\n/// How many parachain blocks are processed by the relay chain per parent. Limits the number of\n/// blocks authored per slot.\npub const BLOCK_PROCESSING_VELOCITY: u32 = 1;\n/// Relay chain slot duration, in milliseconds.\npub const RELAY_CHAIN_SLOT_DURATION_MILLIS: u32 = 6000;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Establish constants ",(0,i.jsx)(n.code,{children:"MILLISECS_PER_BLOCK"})," and ",(0,i.jsx)(n.code,{children:"SLOT_DURATION"})," if not already present in\n",(0,i.jsx)(n.code,{children:"/runtime/src/lib.rs"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"\n/// BLOCKSkkhasd will be produced at a minimum duration defined by `SLOT_DURATION`.\n/// `SLOT_DURATION` is picked up by `pallet_timestamp` which is in turn picked\n/// up by `pallet_aura` to implement `fn slot_duration()`.\n///\n/// Change this to adjust the block time.\npub const MILLISECS_PER_BLOCK: u64 = 12000;\npub const SLOT_DURATION: u64 = MILLISECS_PER_BLOCK;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure ",(0,i.jsx)(n.code,{children:"cumulus_pallet_parachain_system"})," in ",(0,i.jsx)(n.code,{children:"runtime/src/lib.rs"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Define a ",(0,i.jsx)(n.code,{children:"FixedVelocityConsensusHook"})," using our capacity, velocity, and relay slot duration\nconstants. Use this to set the parachain system ",(0,i.jsx)(n.code,{children:"ConsensusHook"})," property."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl cumulus_pallet_parachain_system::Config for Runtime {\n\ttype RuntimeEvent = RuntimeEvent;\n\ttype OnSystemEvent = ();\n\ttype SelfParaId = parachain_info::Pallet<Runtime>;\n\ttype OutboundXcmpMessageSource = XcmpQueue;\n\ttype DmpQueue = frame_support::traits::EnqueueWithOrigin<MessageQueue, RelayOrigin>;\n\ttype ReservedDmpWeight = ReservedDmpWeight;\n\ttype XcmpMessageHandler = XcmpQueue;\n\ttype ReservedXcmpWeight = ReservedXcmpWeight;\n\ttype CheckAssociatedRelayNumber = RelayNumberMonotonicallyIncreases;\n // highlight-next-line\n\ttype ConsensusHook = ConsensusHook;\n\ttype WeightInfo = weights::cumulus_pallet_parachain_system::WeightInfo<Runtime>;\n}\n// highlight-start\ntype ConsensusHook = cumulus_pallet_aura_ext::FixedVelocityConsensusHook<\n\tRuntime,\n\tRELAY_CHAIN_SLOT_DURATION_MILLIS,\n\tBLOCK_PROCESSING_VELOCITY,\n\tUNINCLUDED_SEGMENT_CAPACITY,\n>;\n// highlight-end\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the parachain system property ",(0,i.jsx)(n.code,{children:"CheckAssociatedRelayNumber"})," to\n",(0,i.jsx)(n.code,{children:"RelayNumberMonotonicallyIncreases"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl cumulus_pallet_parachain_system::Config for Runtime {\n\ttype RuntimeEvent = RuntimeEvent;\n\ttype OnSystemEvent = ();\n\ttype SelfParaId = parachain_info::Pallet<Runtime>;\n\ttype OutboundXcmpMessageSource = XcmpQueue;\n\ttype DmpQueue = frame_support::traits::EnqueueWithOrigin<MessageQueue, RelayOrigin>;\n\ttype ReservedDmpWeight = ReservedDmpWeight;\n\ttype XcmpMessageHandler = XcmpQueue;\n\ttype ReservedXcmpWeight = ReservedXcmpWeight;\n // highlight-next-line\n\ttype CheckAssociatedRelayNumber = RelayNumberMonotonicallyIncreases;\n\ttype ConsensusHook = ConsensusHook;\n\ttype WeightInfo = weights::cumulus_pallet_parachain_system::WeightInfo<Runtime>;\n}\ntype ConsensusHook = cumulus_pallet_aura_ext::FixedVelocityConsensusHook<\n\tRuntime,\n\tRELAY_CHAIN_SLOT_DURATION_MILLIS,\n\tBLOCK_PROCESSING_VELOCITY,\n\tUNINCLUDED_SEGMENT_CAPACITY,\n>;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure ",(0,i.jsx)(n.code,{children:"pallet_aura"})," in ",(0,i.jsx)(n.code,{children:"runtime/src/lib.rs"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"AllowMultipleBlocksPerSlot"})," to ",(0,i.jsx)(n.code,{children:"false"})," (don't worry, we will set it to ",(0,i.jsx)(n.code,{children:"true"})," when we\nactivate async backing in phase 3)."]}),"\n",(0,i.jsxs)(n.li,{children:["Define ",(0,i.jsx)(n.code,{children:"pallet_aura::SlotDuration"})," using our constant ",(0,i.jsx)(n.code,{children:"SLOT_DURATION"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'impl pallet_aura::Config for Runtime {\n\ttype AuthorityId = AuraId;\n\ttype DisabledValidators = ();\n\ttype MaxAuthorities = ConstU32<100_000>;\n // highlight-start\n\ttype AllowMultipleBlocksPerSlot = ConstBool<false>;\n\t#[cfg(feature = "experimental")]\n\ttype SlotDuration = ConstU64<SLOT_DURATION>;\n // highlight-end\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Update ",(0,i.jsx)(n.code,{children:"aura_api::SlotDuration()"})," to match the constant ",(0,i.jsx)(n.code,{children:"SLOT_DURATION"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl_runtime_apis! {\n\timpl sp_consensus_aura::AuraApi<Block, AuraId> for Runtime {\n\t\tfn slot_duration() -> sp_consensus_aura::SlotDuration {\n         // highlight-next-line\n\t\t\tsp_consensus_aura::SlotDuration::from_millis(SLOT_DURATION)\n\t\t}\n\n\t\tfn authorities() -> Vec<AuraId> {\n\t\t\tAura::authorities().into_inner()\n\t\t}\n\t}\n...\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Implement the ",(0,i.jsx)(n.code,{children:"AuraUnincludedSegmentApi"}),", which allows the collator client to query its runtime\nto determine whether it should author a block."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the dependency ",(0,i.jsx)(n.code,{children:"cumulus-primitives-aura"})," to the ",(0,i.jsx)(n.code,{children:"runtime/Cargo.toml"})," file for your runtime"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'cumulus-pallet-aura-ext = { path = "../../../../pallets/aura-ext", default-features = false }\ncumulus-pallet-parachain-system = { path = "../../../../pallets/parachain-system", default-features = false, features = ["parameterized-consensus-hook"] }\ncumulus-pallet-session-benchmarking = { path = "../../../../pallets/session-benchmarking", default-features = false }\ncumulus-pallet-xcm = { path = "../../../../pallets/xcm", default-features = false }\ncumulus-pallet-xcmp-queue = { path = "../../../../pallets/xcmp-queue", default-features = false, features = ["bridging"] }\n// highlight-next-line\ncumulus-primitives-aura = { path = "../../../../primitives/aura", default-features = false }\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the same file, add ",(0,i.jsx)(n.code,{children:'"cumulus-primitives-aura/std",'})," to the ",(0,i.jsx)(n.code,{children:"std"})," feature."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Inside the ",(0,i.jsx)(n.code,{children:"impl_runtime_apis!"})," block for your runtime, implement the ",(0,i.jsx)(n.code,{children:"AuraUnincludedSegmentApi"}),"\nas shown below."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl cumulus_primitives_aura::AuraUnincludedSegmentApi<Block> for Runtime {\n\tfn can_build_upon(\n\t\tincluded_hash: <Block as BlockT>::Hash,\n\t\tslot: cumulus_primitives_aura::Slot,\n\t) -> bool {\n\t\tConsensusHook::can_build_upon(included_hash, slot)\n\t}\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," With a capacity of 1 we have an effective velocity of \xbd even when velocity is configured\nto some larger value. This is because capacity will be filled after a single block is produced and\nwill only be freed up after that block is included on the relay chain, which takes 2 relay blocks to\naccomplish. Thus with capacity 1 and velocity 1 we get the customary 12 second parachain block time."]}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsxs)(n.li,{children:["If your ",(0,i.jsx)(n.code,{children:"runtime/src/lib.rs"})," provides a ",(0,i.jsx)(n.code,{children:"CheckInherents"})," type to ",(0,i.jsx)(n.code,{children:"register_validate_block"}),",\nremove it. ",(0,i.jsx)(n.code,{children:"FixedVelocityConsensusHook"})," makes it unnecessary. The following example shows how\n",(0,i.jsx)(n.code,{children:"register_validate_block"})," should look after removing ",(0,i.jsx)(n.code,{children:"CheckInherents"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"cumulus_pallet_parachain_system::register_validate_block! {\n\tRuntime = Runtime,\n\tBlockExecutor = cumulus_pallet_aura_ext::BlockExecutor::<Runtime, Executive>,\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"phase-2---update-parachain-nodes",children:"Phase 2 - Update Parachain Nodes"}),"\n",(0,i.jsx)(n.p,{children:"This phase consists of plugging in the new lookahead collator node."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Import ",(0,i.jsx)(n.code,{children:"cumulus_primitives_core::ValidationCode"})," to ",(0,i.jsx)(n.code,{children:"node/src/service.rs"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use cumulus_primitives_core::{\n// highlight-next-line\n\trelay_chain::{CollatorPair, ValidationCode},\n\tParaId,\n};\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["In ",(0,i.jsx)(n.code,{children:"node/src/service.rs"}),", modify ",(0,i.jsx)(n.code,{children:"sc_service::spawn_tasks"})," to use a clone of ",(0,i.jsx)(n.code,{children:"Backend"})," rather\nthan the original"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"sc_service::spawn_tasks(sc_service::SpawnTasksParams {\n\trpc_builder,\n\tclient: client.clone(),\n\ttransaction_pool: transaction_pool.clone(),\n\ttask_manager: &mut task_manager,\n\tconfig: parachain_config,\n\tkeystore: params.keystore_container.keystore(),\n  // highlight-next-line\n\tbackend: backend.clone(),\n\tnetwork: network.clone(),\n\tsync_service: sync_service.clone(),\n\tsystem_rpc_tx,\n\ttx_handler_controller,\n\ttelemetry: telemetry.as_mut(),\n})?;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"backend"})," as a parameter to ",(0,i.jsx)(n.code,{children:"start_consensus()"})," in ",(0,i.jsx)(n.code,{children:"node/src/service.rs"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"fn start_consensus(\n    client: Arc<ParachainClient>,\n    // highlight-next-line\n    backend: Arc<ParachainBackend>,\n    block_import: ParachainBlockImport,\n    prometheus_registry: Option<&Registry>,\n    telemetry: Option<TelemetryHandle>,\n    task_manager: &TaskManager,\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"if validator {\n    start_consensus(\n    client.clone(),\n    // highlight-next-line\n    backend.clone(),\n    block_import,\n    prometheus_registry.as_ref(),\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["In ",(0,i.jsx)(n.code,{children:"node/src/service.rs"})," import the lookahead collator rather than the basic collator"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use cumulus_client_consensus_aura::collators::lookahead::{self as aura, Params as AuraParams};\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["In ",(0,i.jsx)(n.code,{children:"start_consensus()"})," replace the ",(0,i.jsx)(n.code,{children:"BasicAuraParams"})," struct with ",(0,i.jsx)(n.code,{children:"AuraParams"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Change the struct type from ",(0,i.jsx)(n.code,{children:"BasicAuraParams"})," to ",(0,i.jsx)(n.code,{children:"AuraParams"})]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.code,{children:"para_client"})," field, pass in a cloned para client rather than the original"]}),"\n",(0,i.jsxs)(n.li,{children:["Add a ",(0,i.jsx)(n.code,{children:"para_backend"})," parameter after ",(0,i.jsx)(n.code,{children:"para_client"}),", passing in our para backend"]}),"\n",(0,i.jsxs)(n.li,{children:["Provide a ",(0,i.jsx)(n.code,{children:"code_hash_provider"})," closure like that shown below"]}),"\n",(0,i.jsxs)(n.li,{children:["Increase ",(0,i.jsx)(n.code,{children:"authoring_duration"})," from 500 milliseconds to 1500"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"let params = AuraParams {\n    create_inherent_data_providers: move |_, ()| async move { Ok(()) },\n    block_import,\n    para_client: client.clone(),\n    para_backend: backend.clone(),\n    relay_client: relay_chain_interface,\n    code_hash_provider: move |block_hash| {\n        client.code_at(block_hash).ok().map(|c| ValidationCode::from(c).hash())\n    },\n    sync_oracle,\n    keystore,\n    collator_key,\n    para_id,\n    overseer_handle,\n    relay_chain_slot_duration,\n    proposer,\n    collator_service,\n    // highlight-next-line\n    authoring_duration: Duration::from_millis(1500),\n    reinitialize: false,\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Set ",(0,i.jsx)(n.code,{children:"authoring_duration"})," to whatever you want, taking your own hardware into account. But\nif the backer who should be slower than you due to reading from disk, times out at two seconds your\ncandidates will be rejected."]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["In ",(0,i.jsx)(n.code,{children:"start_consensus()"})," replace ",(0,i.jsx)(n.code,{children:"basic_aura::run"})," with ",(0,i.jsx)(n.code,{children:"aura::run"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'let fut = aura::run::<\n    Block,\n    sp_consensus_aura::sr25519::AuthorityPair,\n    _,\n    _,\n    _,\n    _,\n    _,\n    _,\n    _,\n    _,\n    _,\n    >(params);\ntask_manager.spawn_essential_handle().spawn("aura", None, fut);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"phase-3---activate-async-backing",children:"Phase 3 - Activate Async Backing"}),"\n",(0,i.jsx)(n.p,{children:"This phase consists of changes to your parachain\u2019s runtime that activate async backing feature."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Configure ",(0,i.jsx)(n.code,{children:"pallet_aura"}),", setting ",(0,i.jsx)(n.code,{children:"AllowMultipleBlocksPerSlot"})," to true in ",(0,i.jsx)(n.code,{children:"runtime/src/lib.rs"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'impl pallet_aura::Config for Runtime {\n    type AuthorityId = AuraId;\n    type DisabledValidators = ();\n    type MaxAuthorities = ConstU32<100_000>;\n    // highlight-next-line\n    type AllowMultipleBlocksPerSlot = ConstBool<true>;\n    #[cfg(feature = "experimental")]\n    type SlotDuration = ConstU64<SLOT_DURATION>;\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Increase the maximum ",(0,i.jsx)(n.code,{children:"UNINCLUDED_SEGMENT_CAPACITY"})," in ",(0,i.jsx)(n.code,{children:"runtime/src/lib.rs"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"/// Maximum number of blocks simultaneously accepted by the Runtime, not yet included into the\n/// relay chain.\npub const UNINCLUDED_SEGMENT_CAPACITY: u32 = 3;\n/// How many parachain blocks are processed by the relay chain per parent. Limits the number of\n/// blocks authored per slot.\npub const BLOCK_PROCESSING_VELOCITY: u32 = 1;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Decrease ",(0,i.jsx)(n.code,{children:"MILLISECS_PER_BLOCK"})," to 6000."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Note: For a parachain which measures time in terms of its own block number rather than by relay\nblock number it may be preferable to increase velocity. Changing block time may cause\ncomplications, requiring additional changes. See the section \u201cTiming by Block Number\u201d."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"/// This determines the average expected block time that we are targeting.\n/// Blocks will be produced at a minimum duration defined by `SLOT_DURATION`.\n/// `SLOT_DURATION` is picked up by `pallet_timestamp` which is in turn picked\n/// up by `pallet_aura` to implement `fn slot_duration()`.\n///\n/// Change this to adjust the block time.\npub const MILLISECS_PER_BLOCK: u64 = 6000;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Update ",(0,i.jsx)(n.code,{children:"MAXIMUM_BLOCK_WEIGHT"})," to reflect the increased time available for block production."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"/// We allow for 2 seconds of compute with a 6 second average block.\npub const MAXIMUM_BLOCK_WEIGHT: Weight = Weight::from_parts(\n    WEIGHT_REF_TIME_PER_SECOND.saturating_mul(2),\n    cumulus_primitives_core::relay_chain::MAX_POV_SIZE as u64,\n);\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Add a feature flagged alternative for ",(0,i.jsx)(n.code,{children:"MinimumPeriod"})," in ",(0,i.jsx)(n.code,{children:"pallet_timestamp"}),". The type should be\n",(0,i.jsx)(n.code,{children:"ConstU64<0>"})," with the feature flag experimental, and ",(0,i.jsx)(n.code,{children:"ConstU64<{SLOT_DURATION / 2}>"})," without."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'impl pallet_timestamp::Config for Runtime {\n    type Moment = u64;\n    type OnTimestampSet = Aura;\n    #[cfg(feature = "experimental")]\n    type MinimumPeriod = ConstU64<0>;\n    #[cfg(not(feature = "experimental"))]\n    type MinimumPeriod = ConstU64<{ SLOT_DURATION / 2 }>;\n    type WeightInfo = weights::pallet_timestamp::WeightInfo<Runtime>;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"timing-by-block-number",children:"Timing by Block Number"}),"\n",(0,i.jsx)(n.p,{children:"With asynchronous backing it will be possible for parachains to opt for a block time of 6 seconds\nrather than 12 seconds. But modifying block duration isn\u2019t so simple for a parachain which was\nmeasuring time in terms of its own block number. It could result in expected and actual time not\nmatching up, stalling the parachain."}),"\n",(0,i.jsxs)(n.p,{children:["One strategy to deal with this issue is to instead rely on relay chain block numbers for timing.\nRelay block number is kept track of by each parachain in ",(0,i.jsx)(n.code,{children:"pallet-parachain-system"})," with the storage\nvalue ",(0,i.jsx)(n.code,{children:"LastRelayChainBlockNumber"}),". This value can be obtained and used wherever timing based on\nblock number is needed."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var i=a(96540);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);