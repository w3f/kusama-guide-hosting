"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,p=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(p,r(r({ref:t},h),{},{components:n})):a.createElement(p,r({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15418:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>h,default:()=>u});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"maintain-guides-how-to-chill",title:"How to Chill",sidebar_label:"How to Chill",description:"Steps on chilling as a network participant.",keywords:["chill","chilling","pause"],slug:"../maintain-guides-how-to-chill"},s=void 0,c={unversionedId:"maintain/maintain-guides-how-to-chill",id:"maintain/maintain-guides-how-to-chill",title:"How to Chill",description:"Steps on chilling as a network participant.",source:"@site/../docs/maintain/maintain-guides-how-to-chill.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-chill",permalink:"/docs/maintain-guides-how-to-chill",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-chill.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649858068,formattedLastUpdatedAt:"4/13/2022",frontMatter:{id:"maintain-guides-how-to-chill",title:"How to Chill",sidebar_label:"How to Chill",description:"Steps on chilling as a network participant.",keywords:["chill","chilling","pause"],slug:"../maintain-guides-how-to-chill"}},h=[{value:"Chilling as a Nominator",id:"chilling-as-a-nominator",children:[],level:2},{value:"Chilling as a Validator",id:"chilling-as-a-validator",children:[{value:"Involuntary Chills",id:"involuntary-chills",children:[],level:3}],level:2},{value:"Chill Other",id:"chill-other",children:[],level:2}],d={toc:h};function u(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Stakers can be in any one of the three states: validating, nominating, or chilling. When a staker\nwants to temporarily pause their active engagement in staking but does not want to unbond their\nfunds, they can choose to "chill" their involvement and keep their funds staked.'),(0,o.kt)("p",null,'An account can step back from participating in active staking by clicking "Stop" under the\nNetwork > Staking > Account actions page in ',(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"PolkadotJS Apps")," or by\ncalling the ",(0,o.kt)("inlineCode",{parentName:"p"},"chill")," extrinsic in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/rustdocs/latest/pallet_staking/pallet/enum.Call.html#variant.chill"},"staking pallet"),". When an account chooses to\nchill, it becomes inactive in the next era. The call must be signed by the ",(0,o.kt)("em",{parentName:"p"},"controller")," account, not\nthe ",(0,o.kt)("em",{parentName:"p"},"stash"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Primer on stash and controller accounts")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you need a refresher on the different responsibilities of the stash and controller\naccount when staking, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-staking#accounts"},"accounts")," section in the general staking guide."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"staking",src:n(28323).Z,width:"793",height:"310"})),(0,o.kt)("h2",{id:"chilling-as-a-nominator"},"Chilling as a Nominator"),(0,o.kt)("p",null,"When you chill after being a nominator, your nominations will be reset. This means that when you\ndecide to start nominating again you will need to select validators to nominate once again. These\ncan be the same validators if you prefer, or, a completely new set. Just be aware - your nominations\nwill not persist across chills."),(0,o.kt)("p",null,"Your nominator will remain bonded when it is chilled. When you are ready to nominate again, you will\nnot need to go through the whole process of bonding again, rather, you will issue a new nominate\ncall that specifies the new targets to nominate."),(0,o.kt)("h2",{id:"chilling-as-a-validator"},"Chilling as a Validator"),(0,o.kt)("p",null,"When you voluntarily chill after being a validator, your nominators will not automatically go away.\nAs long as your nominators make no action, you will still have the nominations when you choose to\nbecome an active validator once again. However, if your nominators decide to nominate other\nvalidators then these nominations will take priority when the validator comes back. It may also be\nthe case that your nominators change their entire nomination targets (all 16 of the allowed\nnominations). In this case, your nominators would need to explicitly specify your validator as a\ntarget when your validator comes back."),(0,o.kt)("p",null,"When you become an active validator you will also need to reset your validator preferences\n(commission, etc.). These can be configured as the same values that were set previously or something\ndifferent."),(0,o.kt)("h3",{id:"involuntary-chills"},"Involuntary Chills"),(0,o.kt)("p",null,"If a validator was unresponsive or found to have committed a slashable offense within two eras, the\nvalidator will be removed from the active set in a process known as ",(0,o.kt)("em",{parentName:"p"},"involuntary chilling.")," When a\nvalidator has been involuntarily chilled, it is necessary for the nominators that were previously\nnominating that validator to re-issue the nominate call."),(0,o.kt)("p",null,'Nominators who have the option to renominate an involuntarily chilled validator will have a display\nrow to do so using Polkadot-JS Apps. This row is displayed in the "Account Actions" tab for the\nnominator under a heading that says "Renomination required". If your validator has been\ninvoluntarily chilled, you will need to request your nominators to re-issue the nominate call in\norder to start nominating you again.'),(0,o.kt)("h2",{id:"chill-other"},"Chill Other"),(0,o.kt)("p",null,"An unbounded and unlimited number of nominators and validators in Polkadot's NPoS is just not possible due to constraints in the runtime. As a result, multiple checks are incorporated to keep the size of staking system manageable, like mandating minimum active bond requirements for both nominators and validators. When these requirements are modified through on-chain governance, they can be enforced only on the accounts that newly call ",(0,o.kt)("inlineCode",{parentName:"p"},"nominate")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," after the update. The changes to the bonding parameters would not automatically chill the active accounts on-chain which do not meet the requirements."),(0,o.kt)("p",null,"For instance, let us consider a scenario where the minimum staking requirement for nominators is changed from 80 DOTs to 120 DOTs. An account that was actively nominating with 80 DOTs before this update would still keep receiving staking rewards. To handle this corner case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"chill_other")," extrinsic was incorporated which also helps to keep things backwards compatible and safe. The ",(0,o.kt)("inlineCode",{parentName:"p"},"chill_other")," extrinsic is permissionless and any third party user can target it on an account where the minimum active bond is not satisfied, and chill that account. The list of addresses of all the active validators and their nominators can be viewed by running ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/validator-stats"},"validator stats")," script."))}u.isMDXComponent=!0},28323:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/staking-keys_stash_controller-ab610fee1332a02465a8cb914259f281.png"}}]);