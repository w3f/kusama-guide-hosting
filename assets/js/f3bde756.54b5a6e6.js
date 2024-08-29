"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9625],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>u});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(t),g=a,u=c["".concat(s,".").concat(g)]||c[g]||y[g]||r;return t?o.createElement(u,i(i({ref:n},l),{},{components:t})):o.createElement(u,i({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},33418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var o=t(58168),a=t(98587),r=(t(96540),t(15680)),i=["components"],p={id:"maintain-bootnode",title:"Set up a Boot Node",sidebar_label:"Set up a Boot Node",description:"Steps on setting up a boot node.",keywords:["bootnode","web socket","remote","connection","secure websocket"],slug:"../maintain-bootnode"},s=void 0,d={unversionedId:"maintain/maintain-bootnode",id:"maintain/maintain-bootnode",title:"Set up a Boot Node",description:"Steps on setting up a boot node.",source:"@site/../docs/maintain/maintain-bootnode.md",sourceDirName:"maintain",slug:"/maintain-bootnode",permalink:"/docs/maintain-bootnode",draft:!1,tags:[],version:"current",lastUpdatedBy:"Stakeworld",lastUpdatedAt:1683623723,formattedLastUpdatedAt:"May 9, 2023",frontMatter:{id:"maintain-bootnode",title:"Set up a Boot Node",sidebar_label:"Set up a Boot Node",description:"Steps on setting up a boot node.",keywords:["bootnode","web socket","remote","connection","secure websocket"],slug:"../maintain-bootnode"}},l={},c=[{value:"Accessing the Bootnode",id:"accessing-the-bootnode",level:2},{value:"Network Key",id:"network-key",level:2},{value:"Running the Bootnode",id:"running-the-bootnode",level:2},{value:"Testing Bootnode Connection",id:"testing-bootnode-connection",level:2}],y={toc:c},g="wrapper";function u(e){var n=e.components,t=(0,a.A)(e,i);return(0,r.yg)(g,(0,o.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},'When you first start a node, it has to find a way to find other nodes in the network. For that\npurpose, you need "bootnodes". After the first bootnode is found, it can use that node\u2019s connections\nto continue expanding and play its role in the network, like participating as a validator.')),(0,r.yg)("h2",{id:"accessing-the-bootnode"},"Accessing the Bootnode"),(0,r.yg)("p",null,"The consensus is that bootnodes have to be accessible in three ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"p2p"),": the p2p port, which can be set by ",(0,r.yg)("inlineCode",{parentName:"li"},"--listen-addr /ip4/0.0.0.0/tcp/<port>"),". This port is\nnot automatically set on a non-validator node (for example, an archive RPC node)."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"p2p/ws"),": the WebSocket version, which can be set by ",(0,r.yg)("inlineCode",{parentName:"li"},"--listen-addr /ip4/0.0.0.0/tcp/<port>/ws"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"p2p/wss"),": the ",(0,r.yg)("em",{parentName:"li"},"secure")," websocket version. An SSL-secured connection to the p2p/ws port must be\nachieved by a proxy since the node cannot include certificates. It is needed for light clients.\nSee ",(0,r.yg)("a",{parentName:"li",href:"/docs/maintain-wss"},"here")," for info about setting this up.")),(0,r.yg)("h2",{id:"network-key"},"Network Key"),(0,r.yg)("p",null,"Starting a node creates its node key in the ",(0,r.yg)("inlineCode",{parentName:"p"},"chains/<chain>/network/secret_ed25519")," file. You can\nalso create a node-key by ",(0,r.yg)("inlineCode",{parentName:"p"},"polkadot key generate-node-key")," and use that node-key in the startup\ncommand line."),(0,r.yg)("p",null,"It is essential you backup the node key, especially if it gets included in the polkadot binary\nbecause it gets hardcoded in the binary and needs to be recompiled to change."),(0,r.yg)("h2",{id:"running-the-bootnode"},"Running the Bootnode"),(0,r.yg)("p",null,"Say we are running a polkadot node with\n",(0,r.yg)("inlineCode",{parentName:"p"},"polkadot --chain polkadot --name dot-bootnode --listen-addr /ip4/0.0.0.0/tcp/30310 --listen-addr /ip4/0.0.0.0/tcp/30311/ws"),"\nthen we would have the p2p on port 30310 and p2p/ws on port 30311. For the p2p/wss port, we need to\nset up a proxy, a DNS name, and a corresponding certificate. These concepts and example setups are\ndescribed ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss#secure-the-ws-port"},"here"),". The following\nexample is for the popular nginx server and enables p2p/wss on port 30312 by proxying the p2p/ws\nport 30311:"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"/etc/nginx/sites-enabled/dot-bootnode")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'server {\n       listen       30312 ssl http2 default_server;\n       server_name  dot-bootnode.stakeworld.io;\n       root         /var/www/html;\n\n       ssl_certificate "<your_cert";\n       ssl_certificate_key "<your_key>";\n\n       location / {\n         proxy_buffers 16 4k;\n         proxy_buffer_size 2k;\n         proxy_pass http://localhost:30311;\n         proxy_http_version 1.1;\n         proxy_set_header Upgrade $http_upgrade;\n         proxy_set_header Connection "Upgrade";\n         proxy_set_header Host $host;\n   }\n\n}\n')),(0,r.yg)("h2",{id:"testing-bootnode-connection"},"Testing Bootnode Connection"),(0,r.yg)("p",null,"If we have the above node running with DNS name ",(0,r.yg)("inlineCode",{parentName:"p"},"dot-bootnode.stakeworld.io"),", proxied with a valid\ncertificate and node-id ",(0,r.yg)("inlineCode",{parentName:"p"},"12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg"),' then the following\ncommands should give you a: "syncing 1 peers".'),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"You can add ",(0,r.yg)("inlineCode",{parentName:"p"},"-lsub-libp2p=trace")," on the end to get libp2p trace logging for debugging purposes.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"p2p"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/30310/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"p2p/ws"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/30311/ws/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"p2p/wss"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/30312/wss/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks\n')))}u.isMDXComponent=!0}}]);