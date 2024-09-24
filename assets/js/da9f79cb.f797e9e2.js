"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3044],{44903:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=o(74848),i=o(28453),a=o(67141);const s={id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Staking through Polkadot's Nomination Pools.",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"},r=void 0,l={id:"learn/learn-nomination-pools",title:"Nomination Pools",description:"Staking through Polkadot's Nomination Pools.",source:"@site/../docs/learn/learn-nomination-pools.md",sourceDirName:"learn",slug:"/learn-nomination-pools",permalink:"/docs/learn-nomination-pools",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726760224e3,frontMatter:{id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Staking through Polkadot's Nomination Pools.",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"},sidebar:"docs",previous:{title:"Nominator",permalink:"/docs/learn-nominator"},next:{title:"Kusama OpenGov",permalink:"/docs/learn-polkadot-opengov-index"}},d={},c=[{value:"Key Components",id:"key-components",level:2},{value:"Pool Member Lifecycle",id:"pool-member-lifecycle",level:2},{value:"Join a pool",id:"join-a-pool",level:3},{value:"Claim rewards",id:"claim-rewards",level:3},{value:"Claim Permissions",id:"claim-permissions",level:3},{value:"Unbond and withdraw funds",id:"unbond-and-withdraw-funds",level:3},{value:"Limitations of Nomination Pools",id:"limitations-of-nomination-pools",level:3},{value:"Pool Administration",id:"pool-administration",level:2},{value:"States",id:"states",level:3},{value:"Roles",id:"roles",level:3},{value:"Pool Commissions",id:"pool-commissions",level:3},{value:"Pool Lifecycle",id:"pool-lifecycle",level:2},{value:"Nomination Pools - Slashing",id:"nomination-pools---slashing",level:2},{value:"Nominating vs Joining a Pool",id:"nominating-vs-joining-a-pool",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.A,{message:"<b>Nomination Pools are evolving!</b>\nSoon you'll be able to participate in a pool and in OpenGov with your pooled funds!\nYou do not need to do anything, unless you are participating in a pool and also staking solo from the same account. In this case, please check [<b>this article</b>](https://support.polkadot.network/support/solutions/articles/65000188140-changes-for-nomination-pool-members-and-opengov-participation) on the actions you need to take as soon as possible."}),"\n",(0,t.jsx)(n.admonition,{title:"Nomination Pools are live on Polkadot!",type:"info",children:(0,t.jsxs)(n.p,{children:["Nomination pools are a new feature for Polkadot\u2019s staking system that allows users to pool their\ntokens together on-chain to nominate validators and receive rewards, significantly improving the\nsystem\u2019s scalability. Now, anyone with as little as\n",(0,t.jsx)(n.a,{href:"https://polkadot.network/blog/nomination-pools-are-live-stake-natively-with-just-1-dot/",children:"1 DOT can receive rewards for staking natively on Polkadot"}),".\nNote that rewards are not guaranteed for those pools that do not have enough bonded funds to be\nincluded within the ",(0,t.jsx)(n.a,{href:"/docs/learn-staking-advanced#bags-list",children:"bags list"}),". ",(0,t.jsx)(n.strong,{children:"Only members of active\npools will receive rewards."})]})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Learn the key differences between\n",(0,t.jsx)(n.a,{href:"#nominating-vs-joining-a-pool",children:(0,t.jsx)(n.strong,{children:"Staking directly vs Joining a Nomination Pool"})}),"."]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"For Ledger users:"})," Joining a nomination pool is possible only with the XL version of the Polkadot\nLedger App. This should be installed by default on Ledger Nano X and S Plus, but not on the Nano S."]}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["If you become a nomination pool member or a pool admin, you cannot participate in Governance with\nthe bonded tokens in the pool, as they are held in a\n",(0,t.jsx)(n.a,{href:"/docs/learn-account-advanced#system-accounts",children:"system account"}),"."]})})]}),"\n",(0,t.jsx)(n.admonition,{title:"Have questions on Nomination Pools?",type:"tip",children:(0,t.jsxs)(n.p,{children:["Please join the ",(0,t.jsx)(n.a,{href:"https://dot.li/discord",children:"Polkadot Discord"})," for asking general questions about\nNomination Pools. If you are a developer, please join our\n",(0,t.jsx)(n.a,{href:"https://matrix.to/#/#nompools-support:matrix.parity.io",children:"nomination pools support channel"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nomination Pools",src:o(16088).A+"",width:"1720",height:"963"})}),"\n",(0,t.jsx)(n.p,{children:"Nomination pools are one of the key features from the roadmap of staking improvements. They are\ndesigned to permissionlessly allow members to pool their funds together and act as a single\nnominator account."}),"\n",(0,t.jsxs)(n.p,{children:["Due to the current runtime constraints, the relay chain can only handle a limited number of\nnominators (22500 on Polkadot and 12500 on Kusama) comfortably in the\n",(0,t.jsx)(n.a,{href:"/docs/learn-nominator#staking-election-stages",children:"electing set"}),". As one of the objectives of the\n",(0,t.jsx)(n.a,{href:"/docs/learn-phragmen",children:"NPoS algorithm"})," is to maximize the overall stake on the network, it can be\ninferred that the staking system favors nominators with a larger stake. Only the nominator accounts\nwhich back the validators in the active set are eligible for receiving staking rewards. This leaves\nout nomination intents from the accounts with lower token balance than the min-active nomination and\nplaces them in a waiting queue to enter electing set. Nomination pools will be handy for members who\nwant to participate in the staking system with a stake much lower than the dynamic min-active\nnomination threshold on the network. All operations are constant space and time complexity relative\nto the number of members, eliminating any theoretical upper bound on the number of members the\nsystem can handle and thus scaling the number of accounts that can participate and earn rewards in\nthe staking system. In summary, each nomination pool is viewed as a single nominator from the NPoS\nsystem point of view."]}),"\n",(0,t.jsx)(n.admonition,{title:"Why aren't the members in the nomination pools called delegators?",type:"info",children:(0,t.jsxs)(n.p,{children:["The term ",(0,t.jsx)(n.code,{children:"delegator"})," is associated too much with Delegated Proof of Staking (DPoS), and since the\nnetwork implements Nominated Proof of Staking (NPoS), naming them delegators would be misleading.\nThe term ",(0,t.jsx)(n.code,{children:"member"})," is our generic replacement for ",(0,t.jsx)(n.code,{children:"delegator"}),". In action, members are quite similar\nto delegators and delegate their nomination power to the pool."]})}),"\n",(0,t.jsx)(n.p,{children:"The pool\u2019s earnings are split pro rata to a member's stake in the bonded pool (and thus, the staking\nrewards for members will be the same as if they were a nominator). Importantly, slashes are also\napplied proportionally to members who may have been actively bonded."}),"\n",(0,t.jsx)(n.h2,{id:"key-components",children:"Key Components"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bonded Pool: Tracks the distribution of actively staked funds."}),"\n",(0,t.jsx)(n.li,{children:"Reward Pool: Tracks rewards earned by actively staked funds."}),"\n",(0,t.jsx)(n.li,{children:"Unbonding Sub Pools: Collection of pools at different phases (i.e. eras) of the unbonding\nlifecycle."}),"\n",(0,t.jsx)(n.li,{children:"Members: Accounts that nominate to the pools."}),"\n",(0,t.jsx)(n.li,{children:"Point: Unit of measure for a member\u2019s portion of a pool's funds. All pools start with a point to\nPlanck ratio of 1. Over time, if the pool receives rewards, they increase in value, and if the\npool is slashed, it decreases in value."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pool-member-lifecycle",children:"Pool Member Lifecycle"}),"\n",(0,t.jsx)(n.h3,{id:"join-a-pool",children:"Join a pool"}),"\n",(0,t.jsxs)(n.p,{children:["A member delegates funds to a pool by transferring some amount to the pool\u2019s bonded account with the\n",(0,t.jsx)(n.code,{children:"join"})," extrinsic. The pool then increases its bond with the new funds. A member is afforded the\nability to bond additional funds or re-stake rewards as long as they are already actively bonded.\nNote that a member may only belong to one pool at a time."]}),"\n",(0,t.jsxs)(n.p,{children:["The current minimum bond to join a pool can be seen\n",(0,t.jsx)(n.a,{href:"/docs/chain-state-values#minimum-bond-to-join-a-nomination-pool",children:"here"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The funds nominated to a pool will not be visible in the member's account balance on Polkadot JS\nApps UI. This is because the member funds are transferred from their account to the pool's\n",(0,t.jsx)(n.a,{href:"/docs/learn-account-advanced#system-accounts",children:"system account"}),". This pool account is not accessible\nby anyone (including the pool root or depositor) and only the pool's internal logic can access the\naccount."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Use Proxy Accounts to join Nomination Pools",type:"tip",children:(0,t.jsxs)(n.p,{children:["Depending on how much control you want to give your proxy, you might choose between any >\nnon-transfer > staking > nomination pool proxy, with the latter being only able to sign transactions\nrelated to the ",(0,t.jsx)(n.code,{children:"NominationPool"})," pallet."]})}),"\n",(0,t.jsxs)(n.p,{children:['Check the "How to join a pool" section in\n',(0,t.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools",children:"this support article"}),"\nfor guidelines."]}),"\n",(0,t.jsx)(n.h3,{id:"claim-rewards",children:"Claim rewards"}),"\n",(0,t.jsxs)(n.p,{children:['The member can claim their portion of any rewards that have accumulated since the previous time they\nclaimed (or in the case that they have never claimed, any rewards that have accumulated since the\nera after they joined). Rewards are split pro rata among the actively bonded members. Check the "How\nto claim rewards" section in\n',(0,t.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools",children:"this support article"}),"\nfor guidelines."]}),"\n",(0,t.jsx)(n.h3,{id:"claim-permissions",children:"Claim Permissions"}),"\n",(0,t.jsx)(n.p,{children:"As a pool member, you can grant permission to any other account to claim and compound rewards on\nyour behalf. There are four permission options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Permissioned"})," (default): you need to claim and compound your rewards."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PermissionlessCompound"}),": you grant permission to any other account to compound (claim and bond)\nyour rewards on your behalf."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PermissionlessWithdraw"}),": you grant permission to any other account to withdraw (claim and keep as\na free balance) your rewards on your behalf."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PermissionlessAll"}),": you grant permission to any other account to compound or withdraw your\nrewards on your behalf."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/docs/staking-dashboard#pools",children:"Staking Dashboard page"})," for more information about\nhow to set your claim permissions."]}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/docs/learn-guides-staking-pools#claim-rewards-for-other-pool-members",children:"advanced guides"})," to\nlearn how to claim rewards for another pool member."]}),"\n",(0,t.jsx)(n.h3,{id:"unbond-and-withdraw-funds",children:"Unbond and withdraw funds"}),"\n",(0,t.jsxs)(n.p,{children:["At any point in time after joining the pool, a member can start the process of exiting by unbonding.\n",(0,t.jsx)(n.code,{children:"unbond"})," will unbond part or all of the member's funds. After unbond has been called and the\n",(0,t.jsx)(n.a,{href:"/docs/chain-state-values#unbonding-duration",children:"unbonding duration"})," has passed a member may\nwithdraw their funds with ",(0,t.jsx)(n.code,{children:"withdrawUnbonded"}),'. Withdrawing effectively ends a member\'s relationship\nwith their pool, allowing them to join a different pool if desired. Check the "Withdraw unbonded\nfunds" section in\n',(0,t.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools",children:"this support article"}),"\nfor guidelines."]}),"\n",(0,t.jsx)(n.admonition,{title:"Unbonding transaction automatically triggers withdrawal of rewards",type:"info",children:(0,t.jsx)(n.p,{children:"When there is a change in the bonded balance, the accumulated rewards in the pool thus far are\nautomatically withdrawn to the account. The rewards are then accrued based on the updated bonded\nbalance."})}),"\n",(0,t.jsx)(n.h3,{id:"limitations-of-nomination-pools",children:"Limitations of Nomination Pools"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A member cannot vote (e.g. in Referenda or for Council members) with their nominated funds. This\nmay be changed in the future once accounts are afforded the ability to split votes."}),"\n",(0,t.jsx)(n.li,{children:"For a member to switch pools, all funds from the account must be unbonded. This process takes 28\neras."}),"\n",(0,t.jsx)(n.li,{children:"A member can partially unbond the staked funds in the pool (at most 16 partial unbonds)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pool-administration",children:"Pool Administration"}),"\n",(0,t.jsx)(n.h3,{id:"states",children:"States"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open: The pool is open to be joined by anyone."}),"\n",(0,t.jsx)(n.li,{children:"Blocked: The pool is blocked; no joiners are permitted."}),"\n",(0,t.jsx)(n.li,{children:"Destroying: The pool is in the process of being destroyed. Once in this state, the pool may never\nrevert to any other state; it can only proceed to be destroyed. All members can be\npermissionlessly unbonded; this allows the pool to be dismantled regardless of any member\u2019s\nproactivity."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"roles",children:"Roles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Depositor: Creates the pool and is the initial member. The depositor can only leave the pool once\nall other members have left. Once they leave by withdrawing, the pool is fully removed from the\nsystem."}),"\n",(0,t.jsx)(n.li,{children:"Nominator: Can select the validators the pool nominates."}),"\n",(0,t.jsx)(n.li,{children:"Bouncer: Can change the pool\u2019s state and kick (permissionlessly unbond/withdraw) members if the\npool is blocked."}),"\n",(0,t.jsx)(n.li,{children:"Root: Can change the nominator, bouncer, or itself. Further, it can perform any of the actions the\nnominator or bouncer can."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"pool-commissions",children:"Pool Commissions"}),"\n",(0,t.jsxs)(n.p,{children:["As the pool root role, you can set pool commissions that will be applied to the staking rewards paid\nout to the pool's system account before rewards are allocated for the pool members. You can set pool\ncommissions through the ",(0,t.jsx)(n.a,{href:"/docs/staking-dashboard#pools",children:"Polkadot Staking Dashboard"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Three methods can be used when setting the pool commission:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Commission Rate"})," (",(0,t.jsx)(n.code,{children:"nominationPools.setCommission"})," extrinsic): the start or new commission rate\n(",(0,t.jsx)(n.code,{children:"newCommission"})," parameter) that can be set between 0% and the\n",(0,t.jsx)(n.a,{href:"/docs/chain-state-values#nomination-pool-max-commission",children:"max commission parameter"}),"\n(decided through ",(0,t.jsx)(n.a,{href:"/docs/learn-polkadot-opengov",children:"governance referendum"}),") via the\n",(0,t.jsx)(n.a,{href:"https://paritytech.github.io/substrate/master/pallet_nomination_pools/pallet/type.GlobalMaxCommission.html",children:(0,t.jsx)(n.code,{children:"globalMaxCommission"})}),"\nparameter. You will need to specify an Input Payee Account, i.e. the account that will receive the\ncommission."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Max Commission"})," (",(0,t.jsx)(n.code,{children:"nominationPools.setCommissionMax"})," extrinsic): the maximum commission\n(",(0,t.jsx)(n.code,{children:"maxCommission"})," parameter) the pool will apply to its members (between 0% and Max Commission).\nNote that once set, ",(0,t.jsx)(n.strong,{children:"the pool admin can only lower it"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Change Rate"})," (",(0,t.jsx)(n.code,{children:"nominationPools.setCommissionChangeRate"})," extrinsic): the maximum rate increase\n(",(0,t.jsx)(n.code,{children:"maxIncrease"})," parameter) allowed for a single commission update. Note that once set, ",(0,t.jsx)(n.strong,{children:"the pool\nadmin can only lower it"}),". When setting the Change Rate, it will also be possible to set a\n",(0,t.jsx)(n.code,{children:"minDelay"})," quantified as the number of blocks (since last commission update) after which it is\npossible to change the commission (i.e. the minimum delay between commission updates). Note that\nonce set, ",(0,t.jsx)(n.strong,{children:"the pool admin can only increase it"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Max Commission and Change Rate must not be necessarily set. It is the choice of the pool admin to\nset those parameters and provide transparency to the pool members about the pool's commission\npolicy."}),"\n",(0,t.jsx)(n.admonition,{title:"Max Commission and Change Rate are currently permanent",type:"warning",children:(0,t.jsxs)(n.p,{children:["Once the Max Commission and the Change Rate are set, the pool admin currently can only decrease\nthose values. The minimum delay between commission updates can only be increased. The situation can\nchange in the future and a ",(0,t.jsx)(n.code,{children:"forceSetCommissionMax"})," method can be proposed through governance\nreferendum."]})}),"\n",(0,t.jsx)(n.p,{children:"Let's take, for example, Pool A, which sets the Commission Rate to 10%, the Max Commission to 100%,\nand the Change Rate to 1% every 300 blocks (which equates to approximately 30 minutes). The\nfollowing statements are true:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The pool commission can be increased by 1% every 30 minutes. Bigger increases are not allowed.\nIncreases of less than or equal to 1% are not allowed sooner than 30 minutes since the last\ncommission update."}),"\n",(0,t.jsx)(n.li,{children:"The Max Commission can only be decreased from 100%. Once decreased, it can be decreased again but\nit cannot be increased."}),"\n",(0,t.jsx)(n.li,{children:"The Change Rate's maximum increase can only be decreased from 1%. Once decreased, it can be\ndecreased again but it cannot be increased."}),"\n",(0,t.jsx)(n.li,{children:"The Change Rate's minimum delay between updates of 30 min can only be increased. Once increased,\nit can be increased again but it cannot be decreased."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pool-lifecycle",children:"Pool Lifecycle"}),"\n",(0,t.jsx)(n.admonition,{title:"Advanced How-to Guides",type:"info",children:(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"./learn-guides-staking-pools#pool-creation",children:"this page"})," for more information about the lifecycle\nof nomination pools. The cycle includes creation, upkeep and destruction."]})}),"\n",(0,t.jsx)(n.h2,{id:"nomination-pools---slashing",children:"Nomination Pools - Slashing"}),"\n",(0,t.jsxs)(n.p,{children:["Suppose the staking system ",(0,t.jsx)(n.a,{href:"/docs/learn-offenses",children:"slashes"})," a pool\u2019s underlying nomination account. In\nthat case, the slash is distributed evenly across the bonded pool, and the unbonding pools from\nslash era+1 through the slash apply era. Thus, any member who either a) was unbonding or b) was\nactively bonded in the aforementioned range of eras will be affected by the slash. In other words, a\nmember who may have been actively bonded during the offence is slashed pro rata based on its stake\nrelative to the total slash amount."]}),"\n",(0,t.jsx)(n.p,{children:"Unbonding pools need to be slashed to ensure all nominators who were in the bonded pool while it was\nbacking a validator that committed an offense are punished. Without these measures a nominator could\nunbond right after a validator equivocated with no consequences."}),"\n",(0,t.jsx)(n.p,{children:"This strategy is unfair to members who joined after the slash because they get slashed as well, but\nit spares members who unbond. The latter is much more important for security: if a pool's validators\nattack the network, their members need to unbond fast! Avoiding additional slashes gives them an\nincentive to do that if validators get repeatedly slashed."}),"\n",(0,t.jsx)(n.h2,{id:"nominating-vs-joining-a-pool",children:"Nominating vs Joining a Pool"}),"\n",(0,t.jsxs)(n.p,{children:["Nominating is the action of choosing validators. It does not simply involve bonding tokens.\nNominating is an active task, which implies that you regularly monitor that your stake is backing an\nactive validator in all the eras and check if you are receiving your staking rewards. More\nimportantly, ensure that the validators you chose always act in the best interests of the network\nprotocol and have less chance of getting ",(0,t.jsx)(n.a,{href:"/docs/learn-offenses",children:"slashed"}),". To nominate you need a\n",(0,t.jsx)(n.a,{href:"/docs/chain-state-values#minimum-bond-to-participate-in-staking",children:"minimum bond"}),", while to\nreceive rewards, you need at least a balance greater than the\n",(0,t.jsx)(n.a,{href:"/docs/chain-state-values#minimum-active-bond",children:"minimum active bond"}),". If the validator\nmisbehaves, It is worth noting that your stake is subject to slashing, irrespective of whether you\nare at the top nominators or not."]}),"\n",(0,t.jsx)(n.p,{children:"As the minimum active bond is a dynamic value, it can make your nomination inactive when the\nthreshold goes above your bonded balance. Hence, to be eligible to earn rewards while nominating,\nyou would need to stake a much higher balance than the minimum active bond."}),"\n",(0,t.jsx)(n.p,{children:"Nomination pools are a way to participate in staking with as little as 1 DOT and earn staking\nrewards. Nomination pools differ from custodial solutions (like staking through central exchanges)\nbecause they are non-custodial, native to Polkadot's protocol, permissionless, transparent, and run\nin a decentralized way by the community. Before joining a nomination pool, you must ensure that the\npool is earning rewards and nominating the validators that match your preferences. Participating in\npools is more of a set-and-forget action than nominating by yourself. The pool operator maintains\nthe list of validators nominated by the pool, and so, in a way, you are trusting the pool operator\nto act in your best interests. However, it is advised to check the validators nominated by the pool\nfrom time to time and change the pool if necessary."}),"\n",(0,t.jsx)(n.admonition,{title:"Minimum Active Nomination Value is Dynamic",type:"info",children:(0,t.jsxs)(n.p,{children:["The minimum amount required to become an active nominator and earn rewards can be seen\n",(0,t.jsx)(n.a,{href:"/docs/chain-state-values#minimum-active-bond",children:"here"}),". If you have less tokens than the\nminimum active nomination and still want to participate in staking, you can join the nomination\npools with a\n",(0,t.jsx)(n.a,{href:"/docs/chain-state-values#minimum-bond-to-participate-in-staking",children:"smaller bond"}),". For\nadditional information, see\n",(0,t.jsx)(n.a,{href:"https://polkadot.network/blog/nomination-pools-are-live-stake-natively-with-just-1-dot/",children:"this blog post"}),".\nCheck the wiki doc on ",(0,t.jsx)(n.a,{href:"/docs/learn-nomination-pools",children:"nomination pools"})," for more information."]})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Nominating"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Joining a Pool"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Minimum 250 DOT to nominate."}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Minimum 1 DOT to be a member."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Rewards can be compounded automatically or sent to any account."}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Rewards can be manually claimed to the pool member's account and be bonded in the pool again to compound them."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"If the active validator gets slashed, all active nominators are subjected to slashing."}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"If the active validator gets slashed, all pool members are subjected to slashing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Can bond and stake DOT indefinitely."}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Can bond and stake DOT until the pool exists."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Unbonding period of 28 days. Can switch validators without unbonding."}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Unbonding period of 28 days. Need to unbond before switching to a different pool."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Maximum uncapped."}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Maximum uncapped."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:["Should bond more than the ",(0,t.jsx)(n.a,{href:"/docs/learn-nominator#minimum-active-nomination-to-receive-staking-rewards",children:"minimum active nomination"})," in an era to be eligible to earn staking rewards, although it can depend on multiple other factors outlined in the linked document."]}),(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:["A nomination pool earns rewards in an era if it satisfies all the conditions mentioned for the nominator (as the nomination pool is just a nominator from ",(0,t.jsx)(n.a,{href:"/docs/learn-phragmen",children:"the NPoS system"})," perspective)."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Staked tokens can be used for participation in Governance."}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Staked tokens cannot be used for participation in Governance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,t.jsx)(n.a,{href:"/docs/learn-staking-advanced#claiming-rewards",children:"Rewards payout"})," can be triggered permissionlessly by anyone (typically done by the validator)."]}),(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:["A pool member can self claim the rewards or can grant permission to any other account to claim and compound rewards on your behalf. See ",(0,t.jsx)(n.a,{href:"https://wiki.polkadot.network/docs/learn-nomination-pools#claim-permissions",children:"Claim Permissions"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Bonded funds remain in your account."}),(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:["Bonded funds are transferred to a pool account which is administered by the network protocol and is not accessible to anyone else. See ",(0,t.jsx)(n.a,{href:"/docs/learn-account-advanced#system-accounts",children:"System Accounts"})," for more information."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Nominator manages the list of staked validators (up to 16)."}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Nominations managed by the pool operator."})]})]})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},67141:(e,n,o)=>{o.d(n,{A:()=>a});var t=o(96540),i=o(74848);const a=function(e){var n,o=e.message,a=(0,t.useState)(!0),s=a[0],r=a[1];return(0,i.jsx)(i.Fragment,{children:s&&(0,i.jsxs)("div",{className:"message-box",children:[(0,i.jsx)("button",{className:"close-button",onClick:function(){r(!1)},children:"\u2716 "}),(0,i.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(n=o,n.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},16088:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/NPoS-Pools-b758caea750e9e772fe7fcdbd6babeca.png"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(96540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);