(self.webpackChunk=self.webpackChunk||[]).push([[5749],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(a),c=o,m=h["".concat(l,".").concat(c)]||h[c]||p[c]||i;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},23207:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>u,toc:()=>d,default:()=>h});var n=a(22122),o=a(19756),i=(a(67294),a(3905)),r=["components"],s={id:"maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",sidebar_label:"How to run a Validator on Kusama"},l=void 0,u={unversionedId:"maintain-guides-how-to-validate-kusama",id:"maintain-guides-how-to-validate-kusama",isDocsHomePage:!1,title:"Run a Validator (Kusama)",description:"This guide will instruct you how to set up a validator node on the Kusama network.",source:"@site/../docs/maintain-guides-how-to-validate-kusama.md",sourceDirName:".",slug:"/maintain-guides-how-to-validate-kusama",permalink:"/docs/maintain-guides-how-to-validate-kusama",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-how-to-validate-kusama.md",version:"current",lastUpdatedBy:"michalisFr",lastUpdatedAt:1625881290,formattedLastUpdatedAt:"7/10/2021",frontMatter:{id:"maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",sidebar_label:"How to run a Validator on Kusama"}},d=[{value:"Preliminaries",id:"preliminaries",children:[{value:"How Many KSM Do I Need?",id:"how-many-ksm-do-i-need",children:[]}]},{value:"Initial Set-up",id:"initial-set-up",children:[{value:"Requirements",id:"requirements",children:[]},{value:"Node Prerequisites: Install Rust and Dependencies",id:"node-prerequisites-install-rust-and-dependencies",children:[]},{value:"Install &amp; Configure Network Time Protocol (NTP) Client",id:"install--configure-network-time-protocol-ntp-client",children:[]},{value:"Building and Installing the <code>polkadot</code> Binary",id:"building-and-installing-the-polkadot-binary",children:[]},{value:"Synchronize Chain Data",id:"synchronize-chain-data",children:[]}]},{value:"Bond KSM",id:"bond-ksm",children:[]},{value:"Set Session Keys",id:"set-session-keys",children:[{value:"Generating the Session Keys",id:"generating-the-session-keys",children:[]},{value:"Submitting the <code>setKeys</code> Transaction",id:"submitting-the-setkeys-transaction",children:[]},{value:"Setup via Validator Tab",id:"setup-via-validator-tab",children:[]}]},{value:"Thousand Validators Programme",id:"thousand-validators-programme",children:[]},{value:"FAQ",id:"faq",children:[{value:"Why am I unable to synchronize the chain with 0 peers?",id:"why-am-i-unable-to-synchronize-the-chain-with-0-peers",children:[]},{value:"How do I clear all my chain data?",id:"how-do-i-clear-all-my-chain-data",children:[]}]},{value:"VPS List",id:"vps-list",children:[]},{value:"Using Docker",id:"using-docker",children:[]}],p={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will instruct you how to set up a validator node on the Kusama network."),(0,i.kt)("h2",{id:"preliminaries"},"Preliminaries"),(0,i.kt)("p",null,"Running a validator on a live network is a lot of responsibility! You will be accountable for not\nonly your own stake, but also the stake of your current nominators. If you make a mistake and get\nslashed, your money and your reputation will be at risk. However, running a validator can also be\nvery rewarding, knowing that you contribute to the security of a decentralized network while growing\nyour stash."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning:")," It is highly recommended that you have significant system administration experience\nbefore attempting to run your own validator."),(0,i.kt)("p",null,"Since security is so important to running a successful validator, you should take a look at the\n",(0,i.kt)("a",{parentName:"p",href:"maintain-guides-validator.md"},"validator setup")," information to make you understand the factors\nto consider when constructing your infrastructure. The Web3 Foundation also maintains a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-validator-setup"},"reference implementation for a validator set-up"),"\nthat you can use by deploying yourself. As you progress in your journey as a validator, you will\nlikely want to use this repository as a ",(0,i.kt)("em",{parentName:"p"},"starting point")," for your own modifications and\ncustomizations."),(0,i.kt)("p",null,"If you need help, please reach out on the\n",(0,i.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/#KusamaValidatorLounge:polkadot.builders"},"Kusama validator chat")," on\nMatrix. The team and other validators are there to help answer questions and provide experience. You\ncan join directly in your web browser (link above) or using a client such as Element (formerly\nRiot.im) using ",(0,i.kt)("a",{parentName:"p",href:"https://matrix.to/#/#KusamaValidatorLounge:polkadot.builders"},"this link"),"."),(0,i.kt)("h3",{id:"how-many-ksm-do-i-need"},"How Many KSM Do I Need?"),(0,i.kt)("p",null,"You can have a rough estimate on that by using the methods listed\n",(0,i.kt)("a",{parentName:"p",href:"/docs/faq#What-is-the-minimum-stake-necessary-to-be-elected-as-an-active-validator-?"},"here"),". Validators\nare elected based on ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"Phragm\xe9n's algorithm"),". To be elected into the set, you need a\nminimum stake behind your validator. This stake can come from yourself or from\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator"},"nominators"),". This means that as a minimum, you will need enough KSM to set up\nStash and Controller ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-keys"},"accounts")," with the existential deposit, plus a little extra for\ntransaction fees. The rest can come from nominators."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning:")," Any KSM that you stake for your validator is liable to be slashed, meaning that an\ninsecure or improper setup may result in loss of KSM tokens! If you are not confident in your\nability to run a validator node, it is recommended to nominate your KSM to a trusted validator node\ninstead."),(0,i.kt)("h2",{id:"initial-set-up"},"Initial Set-up"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"The most common way for a beginner to run a validator is on a cloud server running Linux. You may\nchoose whatever ",(0,i.kt)("a",{parentName:"p",href:"#vps-list"},"VPS")," provider that your prefer, and whatever operating system you are\ncomfortable with. For this guide we will be using ",(0,i.kt)("strong",{parentName:"p"},"Ubuntu 18.04"),", but the instructions should be\nsimilar for other platforms."),(0,i.kt)("p",null,"The transactions weights in Polkadot were benchmarked on standard hardware. It is recommended that\nvalidators run at least the standard hardware in order to ensure they are able to process all blocks\nin time. The following are not ",(0,i.kt)("em",{parentName:"p"},"minimum requirements")," but if you decide to run with less than this\nbeware that you might have performance issue."),(0,i.kt)("h4",{id:"standard-hardware"},"Standard Hardware"),(0,i.kt)("p",null,"For the full details of the standard hardware please see\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/5848"},"here"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CPU")," - Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Storage")," - A NVMe solid state drive. Should be reasonably sized to deal with blockchain growth.\nStarting around 80GB - 160GB will be okay for the first six months of Polkadot, but will need to\nbe re-evaluated every six months."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Memory")," - 64GB.")),(0,i.kt)("p",null,"The specs posted above are by no means the minimum specs that you could use when running a\nvalidator, however you should be aware that if you are using less you may need to toggle some extra\noptimizations in order to be equal to other validators that are running the standard."),(0,i.kt)("h3",{id:"node-prerequisites-install-rust-and-dependencies"},"Node Prerequisites: Install Rust and Dependencies"),(0,i.kt)("p",null,"Once you choose your cloud service provider and set-up your new server, the first thing you will do\nis install Rust."),(0,i.kt)("p",null,"If you have never installed Rust, you should do this first. "),(0,i.kt)("p",null,"If you have already installed Rust, run the following command to make sure you are using\nthe latest version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rustup update\n")),(0,i.kt)("p",null,"If not, this command will fetch the latest version of Rust and install it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://sh.rustup.rs -sSf | sh -s -- -y \n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'If you do not have "curl" installed, run "sudo apt install curl"')),(0,i.kt)("p",null,"To configure your shell, run the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"source $HOME/.cargo/env\n")),(0,i.kt)("p",null,"Verify your installation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rustc --version\n")),(0,i.kt)("p",null,"Finally, run this command to install the necessary dependencies for compiling and running the\nPolkadot node software."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install make clang pkg-config libssl-dev build-essential\n")),(0,i.kt)("p",null,"Note - if you are using OSX and you have ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," installed, you can issue the\nfollowing equivalent command INSTEAD of the previous one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew install cmake pkg-config openssl git llvm\n")),(0,i.kt)("h3",{id:"install--configure-network-time-protocol-ntp-client"},"Install & Configure Network Time Protocol (NTP) Client"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_Time_Protocol"},"NTP")," is a networking protocol designed to\nsynchronize the clocks of computers over a network. NTP allows you to synchronize the clocks of all\nthe systems within the network. Currently it is required that validators' local clocks stay\nreasonably in sync, so you should be running NTP or a similar service. You can check whether you\nhave the NTP client by running:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you are using Ubuntu 18.04 / 19.04, NTP Client should be installed by default.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"timedatectl\n")),(0,i.kt)("p",null,"If NTP is installed and running, you should see ",(0,i.kt)("inlineCode",{parentName:"p"},"System clock synchronized: yes")," (or a similar\nmessage). If you do not see it, you can install it by executing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install ntp\n")),(0,i.kt)("p",null,"ntpd will be started automatically after install. You can query ntpd for status information to\nverify that everything is working:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ntpq -p\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"WARNING"),": Skipping this can result in the validator node missing block authorship opportunities.\nIf the clock is out of sync (even by a small amount), the blocks the validator produces may not\nget accepted by the network. This will result in ",(0,i.kt)("inlineCode",{parentName:"p"},"ImOnline")," heartbeats making it on chain, but\nzero allocated blocks making it on chain.")),(0,i.kt)("h3",{id:"building-and-installing-the-polkadot-binary"},"Building and Installing the ",(0,i.kt)("inlineCode",{parentName:"h3"},"polkadot")," Binary"),(0,i.kt)("p",null,"You will need to build the ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot")," binary from the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},"paritytech/polkadot")," repository on GitHub using the source\ncode available in the ",(0,i.kt)("strong",{parentName:"p"},"v0.8")," branch."),(0,i.kt)("p",null,"You should generally use the latest ",(0,i.kt)("strong",{parentName:"p"},"0.8.x")," tag. At the time of writing, this was ",(0,i.kt)("strong",{parentName:"p"},"0.8.26-1"),',\nbut you should review the output from the "git tag" command to see a list of all the potential 0.8\nreleases. You should replace ',(0,i.kt)("inlineCode",{parentName:"p"},"VERSION")," with the latest build (i.e., the highest number). You can\nalso find the latest Kusama version on the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases"},"release")," tab."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If you prefer to use SSH rather than HTTPS, you can replace the first line of the below with\n",(0,i.kt)("inlineCode",{parentName:"p"},"git clone git@github.com:paritytech/polkadot.git"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/paritytech/polkadot.git\ncd polkadot\n")),(0,i.kt)("p",null,"Run the following command to find the latest version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git tag -l | sort -V | grep -v -- '-rc'\n")),(0,i.kt)("p",null,'Find the latest version; replace "VERSION" in the commmand below and\nrun to change your branch.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout VERSION\n./scripts/init.sh\n")),(0,i.kt)("p",null,"Build native code with the cargo release profile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo build --release\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"This step will take a while (generally 10 - 40 minutes, depending on your hardware)."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note if you run into compile errors, you may have to switch to a less recent nightly. This can be\ndone by running:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rustup install nightly-2021-06-09\nrustup target add wasm32-unknown-unknown --toolchain nightly-2021-06-09\ncargo +nightly-2021-06-09 build --release\n")),(0,i.kt)("p",{parentName:"blockquote"},"You may also need to run the build more than once. "),(0,i.kt)("p",{parentName:"blockquote"},"If you would like to execute the tests, run the following command: "),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo test --all\n"))),(0,i.kt)("p",null,"If you are interested in generating keys locally, you can also install ",(0,i.kt)("inlineCode",{parentName:"p"},"subkey")," from the same\ndirectory. You may then take the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"subkey")," executable and transfer it to an air-gapped\nmachine for extra security."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install --force --git https://github.com/paritytech/substrate subkey\n")),(0,i.kt)("h3",{id:"synchronize-chain-data"},"Synchronize Chain Data"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," By default, Validator nodes are in archive mode. If you've already synced the chain not\nin archive mode, you must first remove the database with ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot purge-chain")," and then ensure\nthat you run Polkadot with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--pruning=archive")," option."),(0,i.kt)("p",{parentName:"blockquote"},"You may run a validator node in non-archive mode by adding the following flags:\n",(0,i.kt)("inlineCode",{parentName:"p"},"--unsafe-pruning --pruning <NUMBER OF BLOCKS>"),", but note that an archive node and non-archive\nnode's databases are not compatible with each other, and to switch you will need to purge the\nchain data.")),(0,i.kt)("p",null,"You can begin syncing your node by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./target/release/polkadot --pruning=archive --chain kusama\n")),(0,i.kt)("p",null,"if you do not want to start in validator mode right away."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2021-06-17 02:34:25 ----------------------------    \n2021-06-17 02:34:25 This chain is not in any way    \n2021-06-17 02:34:25       endorsed by the           \n2021-06-17 02:34:25      KUSAMA FOUNDATION          \n2021-06-17 02:34:25 ----------------------------    \n2021-06-17 02:34:25 Parity Polkadot    \n2021-06-17 02:34:25 \u270c\ufe0f  version 0.9.5-95f6aa201-x86_64-linux-gnu    \n2021-06-17 02:34:25 \u2764\ufe0f  by Parity Technologies <admin@parity.io>, 2017-2021    \n2021-06-17 02:34:25 \ud83d\udccb Chain specification: Kusama    \n2021-06-17 02:34:25 \ud83c\udff7 Node name: obtainable-kitten-0716    \n2021-06-17 02:34:25 \ud83d\udc64 Role: FULL    \n2021-06-17 02:34:25 \ud83d\udcbe Database: RocksDb at /root/.local/share/polkadot/chains/ksmcc3/db    \n2021-06-17 02:34:25 \u26d3  Native runtime: kusama-9050 (parity-kusama-0.tx5.au2)    \n2021-06-17 02:34:25 \ud83d\udd28 Initializing Genesis block/state (state: 0xb000\u2026ef6b, header-hash: 0xb0a8\u2026dafe)    \n2021-06-17 02:34:25 \ud83d\udc74 Loading GRANDPA authority set from genesis on what appears to be first startup.    \n2021-06-17 02:34:26 \u23f1  Loaded block-time = 6s from block 0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe    \n2021-06-17 02:34:26 \ud83d\udc76 Creating empty BABE epoch changes on what appears to be first startup.    \n2021-06-17 02:34:26 \ud83c\udff7 Local node identity is: 12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB    \n2021-06-17 02:34:26 \ud83d\udce6 Highest known block at #0    \n2021-06-17 02:34:26 \u303d\ufe0f Prometheus server started at 127.0.0.1:9615    \n2021-06-17 02:34:26 Listening for new connections on 127.0.0.1:9944.  \n")),(0,i.kt)("p",null,"Example of node sync:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2021-06-17 02:34:34 \ud83d\udd0d Discovered new external address for our node: /ip4/100.102.231.64/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB    \n2021-06-17 02:34:36 \u2699\ufe0f  Syncing 409.2 bps, target=#8062689 (5 peers), best: #3477 (0x63ad\u2026e046), finalized #3072 (0x0e4c\u2026f587), \u2b07 153.2kiB/s \u2b06 12.9kiB/s    \n2021-06-17 02:34:37 \ud83d\udd0d Discovered new external address for our node: /ip4/100.111.175.0/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB    \n2021-06-17 02:34:38 \ud83d\udd0d Discovered new external address for our node: /ip4/100.100.176.0/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB    \n2021-06-17 02:34:41 \u2699\ufe0f  Syncing 386.2 bps, target=#8062690 (7 peers), best: #5409 (0x1d76\u20268c3d), finalized #5121 (0x8ad1\u2026b6dc), \u2b07 96.1kiB/s \u2b06 10.9kiB/s    \n2021-06-17 02:34:46 \u2699\ufe0f  Syncing 394.8 bps, target=#8062691 (11 peers), best: #7383 (0x0689\u20266f1e), finalized #7168 (0x72a9\u20268d8c), \u2b07 352.9kiB/s \u2b06 5.1kiB/s    \n2021-06-17 02:34:51 \u2699\ufe0f  Syncing 347.0 bps, target=#8062692 (12 peers), best: #9118 (0x66fc\u2026cce3), finalized #8704 (0x14c9\u2026705e), \u2b07 62.7kiB/s \u2b06 1.7kiB/s \n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--pruning=archive")," flag is implied by the ",(0,i.kt)("inlineCode",{parentName:"p"},"--validator")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--sentry")," flags, so it is only\nrequired explicitly if you start your node without one of these two options. If you do not set your\npruning to archive node, even when not running in validator and sentry mode, you will need to\nre-sync your database when you switch."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Validators should sync using the RocksDb backend. This is implicit by default, but can\nbe explicit by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--database RocksDb")," flag."),(0,i.kt)("p",{parentName:"blockquote"},"In the future, it is recommended to switch to the faster and more efficient ParityDB option. Note\nthat ",(0,i.kt)("strong",{parentName:"p"},"ParityDB is still experimental and should not be used in production.")," If you want to test\nout ParityDB, you can add the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--database paritydb"),". Switching between database backends will\nrequire a resync.")),(0,i.kt)("p",null,"Depending on the size of the chain when you do this, this step may take anywhere from a few minutes\nto a few hours."),(0,i.kt)("p",null,"If you are interested in determining how much longer you have to go, your server logs (printed to\nSTDOUT from the ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot")," process) will tell you the latest block your node has processed and\nverified. You can then compare that to the current highest block via\n",(0,i.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Kusama"},"Telemetry")," or the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS Block Explorer"),"."),(0,i.kt)("h2",{id:"bond-ksm"},"Bond KSM"),(0,i.kt)("p",null,"It is highly recommended that you make your controller and stash accounts be two separate accounts.\nFor this, you will create two accounts and make sure each of them have at least enough funds to pay\nthe fees for making transactions. Keep most of your funds in the stash account since it is meant to\nbe the custodian of your staking funds."),(0,i.kt)("p",null,"Make sure not to bond all your KSM balance since you will be unable to pay transaction fees from\nyour bonded balance."),(0,i.kt)("p",null,"It is now time to set up our validator. We will do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bond the KSM of the Stash account. These KSM will be put at stake for the security of the network\nand can be slashed."),(0,i.kt)("li",{parentName:"ul"},"Select the Controller. This is the account that will decide when to start or stop validating.")),(0,i.kt)("p",null,"First, go to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Staking"),' section. Click on\n"Account Actions", and then the "New stake" button.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dashboard bonding",src:a(46168).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stash account")," - Select your Stash account. In this example, we will bond 100 milliKSM - make\nsure that your Stash account contains ",(0,i.kt)("em",{parentName:"li"},"at least")," this much. You can, of course, stake more than\nthis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Controller account")," - Select the Controller account created earlier. This account will also\nneed a small amount of KSM in order to start and stop validating."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Value bonded")," - How much KSM from the Stash account you want to bond/stake. Note that you do\nnot need to bond all of the KSM in that account. Also note that you can always bond ",(0,i.kt)("em",{parentName:"li"},"more")," KSM\nlater. However, ",(0,i.kt)("em",{parentName:"li"},"withdrawing")," any bonded amount requires the duration of the unbonding period. On\nKusama, the unbonding period is 7 days. On Polkadot, the planned unbonding period is 28 days."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment destination")," - The account where the rewards from validating are sent. More info\n",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-staking#reward-distribution"},"here"),".\nStarting with runtime version v2023 natively included in client version\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/releases/tag/v0.9.3"},"0.9.3"),", payouts can go to any\ncustom address. If you'd like to redirect payments to an account that is neither the controller\nnor the stash account, set one up. Note that it is extremely unsafe to set an exchange address as\nthe recipient of the staking rewards.")),(0,i.kt)("p",null,"Once everything is filled in properly, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Bond")," and sign the transaction with your Stash\naccount."),(0,i.kt)("p",null,'After a few seconds, you should see an "ExtrinsicSuccess" message. You should now see a new card\nwith all your accounts (note: you may need to refresh the screen). The bonded amount on the right\ncorresponds to the funds bonded by the Stash account.'),(0,i.kt)("h2",{id:"set-session-keys"},"Set Session Keys"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The session keys are consensus critical, so if you are not sure if your node has the\ncurrent session keys that you made the ",(0,i.kt)("inlineCode",{parentName:"p"},"setKeys")," transaction then you can use one of the two\navailable RPC methods to query your node:\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/api/substrate/rpc.html#haskey-publickey-bytes-keytype-text-bool"},"hasKey"),"\nto check for a specific key or\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/api/substrate/rpc.html#hassessionkeys-sessionkeys-bytes-bool"},"hasSessionKeys"),"\nto check the full session key public key string.")),(0,i.kt)("p",null,"Once your node is fully synced, stop the process by pressing Ctrl-C. At your terminal prompt, you\nwill now start running the node in validator mode with a flag allowing unsafe RPC calls, needed for\nsome advanced operations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'./target/release/polkadot --validator --name "name on telemetry" --chain kusama\n')),(0,i.kt)("p",null,"Similarly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2021-06-17 02:47:05 ----------------------------    \n2021-06-17 02:47:05 This chain is not in any way    \n2021-06-17 02:47:05       endorsed by the           \n2021-06-17 02:47:05      KUSAMA FOUNDATION          \n2021-06-17 02:47:05 ----------------------------    \n2021-06-17 02:47:05 Parity Polkadot    \n2021-06-17 02:47:05 \u270c\ufe0f  version 0.9.5-95f6aa201-x86_64-linux-gnu    \n2021-06-17 02:47:05 \u2764\ufe0f  by Parity Technologies <admin@parity.io>, 2017-2021    \n2021-06-17 02:47:05 \ud83d\udccb Chain specification: Kusama    \n2021-06-17 02:47:05 \ud83c\udff7 Node name: techedtest    \n2021-06-17 02:47:05 \ud83d\udc64 Role: AUTHORITY    \n2021-06-17 02:47:05 \ud83d\udcbe Database: RocksDb at /root/.local/share/polkadot/chains/ksmcc3/db   \n2021-06-17 02:47:05 \u26d3  Native runtime: kusama-9050 (parity-kusama-0.tx5.au2)    \n2021-06-17 02:47:07 \ud83c\udff7 Local node identity is: 12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB    \n2021-06-17 02:47:07 \ud83d\udce6 Highest known block at #139917    \n2021-06-17 02:47:07 \u303d\ufe0f Prometheus server started at 127.0.0.1:9615    \n2021-06-17 02:47:07 Listening for new connections on 127.0.0.1:9944.    \n2021-06-17 02:47:07 \ud83d\udc76 Starting BABE Authorship worker  \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2021-06-17 02:48:15 \ud83d\udd0d Discovered new external address for our node: /ip4/10.2.99.4/tcp/30333/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB    \n\n2021-06-17 02:48:17 \u2699\ufe0f  Syncing 235.6 bps, target=#8062826 (49 peers), best: #155136 (0x23ea\u2026e4fc), finalized #154624 (0x234f\u2026f6a0), \u2b07 380.0kiB/s \u2b06 57.4kiB/s\n")),(0,i.kt)("p",null,"You can give your validator any name that you like, but note that others will be able to see it, and\nit will be included in the list of all servers using the same telemetry server. Since numerous\npeople are using telemetry, it is recommended that you choose something likely to be unique."),(0,i.kt)("h3",{id:"generating-the-session-keys"},"Generating the Session Keys"),(0,i.kt)("p",null,"You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what\nassociates your validator node with your Controller account on Polkadot."),(0,i.kt)("h4",{id:"option-1-polkadot-js-apps"},"Option 1: Polkadot-JS Apps"),(0,i.kt)("p",null,"You can generate your\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-keys#session-keys"},"Session keys")," in the\nclient via the apps RPC. If you are doing this, make sure that you have the Polkadot-JS Apps\nexplorer attached to your validator node. You can configure the apps dashboard to connect to the\nendpoint of your validator in the Settings tab. If you are connected to a default endpoint hosted by\nParity of Web3 Foundation, you will not be able to use this method since making RPC requests to this\nnode would effect the local keystore hosted on a ",(0,i.kt)("em",{parentName:"p"},"public node")," and you want to make sure you are\ninteracting with the keystore for ",(0,i.kt)("em",{parentName:"p"},"your node"),"."),(0,i.kt)("p",null,"Once ensuring that you have connected to your node, the easiest way to set session keys for your\nnode is by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"author_rotateKeys")," RPC request to create new keys in your validator's\nkeystore. Navigate to Toolbox tab and select RPC Calls then select the author > rotateKeys() option\nand remember to save the output that you get back for a later step."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Explorer RPC call",src:a(47535).Z})),(0,i.kt)("h4",{id:"option-2-cli"},"Option 2: CLI"),(0,i.kt)("p",null,"If you are on a remote server, it is easier to run this command on the same machine (while the node\nis running with the default HTTP RPC port configured):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n')),(0,i.kt)("p",null,'The output will have a hex-encoded "result" field. The result is the concatenation of the four\npublic keys. Save this result for a later step.'),(0,i.kt)("h3",{id:"submitting-the-setkeys-transaction"},"Submitting the ",(0,i.kt)("inlineCode",{parentName:"h3"},"setKeys")," Transaction"),(0,i.kt)("p",null,"You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what\nassociates your validator with your Controller account."),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Staking > Account Actions"),', and click "Set\nSession Key" on the bonding account you generated earlier. Enter the output from ',(0,i.kt)("inlineCode",{parentName:"p"},"author_rotateKeys"),'\nin the field and click "Set Session Key".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"staking-change-session",src:a(82946).Z}),"\n",(0,i.kt)("img",{alt:"staking-session-result",src:a(82151).Z})),(0,i.kt)("p",null,"Submit this extrinsic and you are now ready to start validating."),(0,i.kt)("h3",{id:"setup-via-validator-tab"},"Setup via Validator Tab"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dashboard validate",src:a(71338).Z})),(0,i.kt)("p",null,"Here you will need to input the Keys from ",(0,i.kt)("inlineCode",{parentName:"p"},"rotateKeys"),", which\nis the Hex output from ",(0,i.kt)("inlineCode",{parentName:"p"},"author_rotateKeys"),". The keys will show\nas pending until applied at the start of a new session."),(0,i.kt)("p",null,'The "reward commission percentage" is the commission percentage\nthat you can declare against your validator\'s rewards. This is the rate that your validator will be commissioned with. '),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment preferences")," - You can specify the percentage of the rewards that will get paid to you.\nThe remaining will be split among your nominators.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: setting a commission rate of 100% suggests that you do not\nwant your validator to receive nominations.")),(0,i.kt)("p",null,'You can also determine if you would like to receive nominations\nwith the "allows new nominations" option.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dashboard validate",src:a(80414).Z})),(0,i.kt)("p",null,'Click "Bond & Validate".'),(0,i.kt)("p",null,'If you go to the "Staking" tab, you will see a list of active validators currently running on the\nnetwork. At the top of the page, it shows how many validator slots are available as well as how many\nnodes have signaled their intention to be a validator. You can also go to the "Waiting" tab to\ndouble check to see whether your node is listed there.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"staking queue",src:a(84785).Z})),(0,i.kt)("p",null,"The validator set is refreshed every era. In the next era, if there is a slot available and your\nnode is selected to join the validator set, your node will become an active validator. Until then,\nit will remain in the ",(0,i.kt)("em",{parentName:"p"},"waiting")," queue. If your validator is not selected to become part of the\nvalidator set, it will remain in the ",(0,i.kt)("em",{parentName:"p"},"waiting")," queue until it is. There is no need to re-start if\nyou are not selected for the validator set in a particular era. However, it may be necessary to\nincrease the number of KSM staked or seek out nominators for your validator in order to join the\nvalidator set."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations!")," If you have followed all of these steps, and been selected to be a part of the\nvalidator set, you are now running a Kusama validator! If you need help, reach out on the\n",(0,i.kt)("a",{parentName:"p",href:"https://forum.kusama.network/"},"Kusama forum")," or in the\n",(0,i.kt)("a",{parentName:"p",href:"https://riot.im/app/#/room/#KusamaValidatorLounge:polkadot.builders"},"Kusama Validator chat"),"."),(0,i.kt)("h2",{id:"thousand-validators-programme"},"Thousand Validators Programme"),(0,i.kt)("p",null,"The Thousand Validators Programme is a joint initiative by Web3 Foundation and Parity Technologies\nto provide support for community validators. If you are interested in applying for the programme,\nyou can find more information ",(0,i.kt)("a",{parentName:"p",href:"/docs/thousand-validators"},"on the wiki page"),"."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"why-am-i-unable-to-synchronize-the-chain-with-0-peers"},"Why am I unable to synchronize the chain with 0 peers?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"zero-peer",src:a(45359).Z})),(0,i.kt)("p",null,"Make sure to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"30333")," libp2p port. Eventually, it will take a little bit of time to discover\nother peers over the network."),(0,i.kt)("h3",{id:"how-do-i-clear-all-my-chain-data"},"How do I clear all my chain data?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./target/release/polkadot purge-chain\n")),(0,i.kt)("h2",{id:"vps-list"},"VPS List"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ovh.com.au/"},"OVH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/"},"Digital Ocean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.vultr.com/"},"Vultr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linode.com/"},"Linode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://contabo.com/"},"Contabo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.scaleway.com/"},"Scaleway"))),(0,i.kt)("h2",{id:"using-docker"},"Using Docker"),(0,i.kt)("p",null,"If you have Docker installed, you can use it to start your validator node without needing to build\nthe binary. You can do this with a simple one line command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ docker run parity/polkadot:latest --validator --name "name on telemetry" --chain kusama\n')))}h.isMDXComponent=!0},46168:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusama-dashboard-bonding-574d34c92535e7fce781fb453a90e11f.png"},84785:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusama-dashboard-staking-387feafd4c968a158a52deced0e47363.png"},71338:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusama-dashboard-validate-1-b7635916e9a4003a8a34d63fdc1da099.png"},80414:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusama-dashboard-validate-2-081be4c6b5062377187f0035e0aa7ef6.png"},82946:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusama-set-session-key-1-4780ebd162480061346839dceecfae07.png"},82151:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusama-set-session-key-2-554e1dd98fa501e8e4eb4680dfe97a31.png"},47535:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadot-explorer-rotatekeys-rpc-6d5ba5d9ffb20fd9683432e9a6ccd0f9.jpg"},45359:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadot-zero-peer-2642d52b7e07893a66a0ddfd492cce38.jpg"}}]);