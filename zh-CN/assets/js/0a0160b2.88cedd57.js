(self.webpackChunk=self.webpackChunk||[]).push([[6146],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>h,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82950:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>h,default:()=>d});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r=["components"],l={id:"maintain-guides-how-to-chill",title:"How to Chill",sidebar_label:"How to Chill"},s=void 0,c={unversionedId:"maintain-guides-how-to-chill",id:"maintain-guides-how-to-chill",isDocsHomePage:!1,title:"How to Chill",description:"Stakers can be in any one of the three states: validating, nominating, or chilling. When a staker",source:"@site/../docs/maintain-guides-how-to-chill.md",sourceDirName:".",slug:"/maintain-guides-how-to-chill",permalink:"/zh-CN/docs/maintain-guides-how-to-chill",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-how-to-chill.md",version:"current",lastUpdatedBy:"Trevor Arjeski",lastUpdatedAt:1626103540,formattedLastUpdatedAt:"2021/7/12",frontMatter:{id:"maintain-guides-how-to-chill",title:"How to Chill",sidebar_label:"How to Chill"}},h=[{value:"Chilling as a Nominator",id:"chilling-as-a-nominator",children:[]},{value:"Chilling as a Validator",id:"chilling-as-a-validator",children:[{value:"Involuntary Chills",id:"involuntary-chills",children:[]}]}],u={toc:h};function d(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Stakers can be in any one of the three states: validating, nominating, or chilling. When a staker\nwants to temporarily pause their active engagement in staking, but does not want to unbond their\nfunds, they can choose to "chill" their involvement and keep their funds staked.'),(0,i.kt)("p",null,'An account can step back from participating in active staking by clicking "Stop" under the\n',(0,i.kt)("inlineCode",{parentName:"p"},"Network > Staking > Account actions")," page in ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"PolkadotJS Apps")," or by\ncalling the ",(0,i.kt)("inlineCode",{parentName:"p"},"chill")," extrinsic in the ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_staking/enum.Call.html#variant.chill"},"staking pallet"),". When an account chooses to\nchill, they will become inactive in the next era. The call must be signed by the ",(0,i.kt)("em",{parentName:"p"},"controller"),"\naccount, not the ",(0,i.kt)("em",{parentName:"p"},"stash"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If you need a refresher on the different responsibilities of the stash and controller\naccount when staking, take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-staking#accounts"},"accounts")," section in the general staking guide.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"staking",src:n(63214).Z})),(0,i.kt)("h2",{id:"chilling-as-a-nominator"},"Chilling as a Nominator"),(0,i.kt)("p",null,"When you chill after being a nominator, your nominations will be reset. This means that when you\ndecide to start nominating again you will need to select validators to nominate once again. These\ncan be the same validators if you prefer, or a completely new set. Just be aware - your nominations\nwill not persist across chills."),(0,i.kt)("p",null,"Your nominator will remain bonded when it is chilled. When you are ready to nominate again, you will\nnot need to go through the whole process of bonding again, rather you will issue a new nominate call\nthat specifies the new targets to nominate."),(0,i.kt)("h2",{id:"chilling-as-a-validator"},"Chilling as a Validator"),(0,i.kt)("p",null,"When you voluntarily chill after being a validator, your nominators will not automatically go away.\nAs long as your nominators make no action, you will still have the nominations when you choose to\nbecome an active validator once again. However, if your nominators decide to nominate other\nvalidators then these nominations will take priority when the validator comes back. It may also be\nthe case that your nominators change their entire nomination targets (all 16 of the allowed\nnominations). In this case your nominators would need to explicitly specify your validator as a\ntarget when your validator comes back."),(0,i.kt)("p",null,"When you become an active validator you will also need to reset your validator preferences\n(commission, etc.). These can be configured as the same values that were set previously or something\ntotally different."),(0,i.kt)("h3",{id:"involuntary-chills"},"Involuntary Chills"),(0,i.kt)("p",null,"If a validator was unresponsive or found to have committed a slashable offense within two eras, the\nvalidator will be removed from the active set in a process known as ",(0,i.kt)("em",{parentName:"p"},"involuntary chilling.")," When a\nvalidator has been involuntarily chilled, it is necessary for the nominators that were previously\nnominating that validator to re-issue the nominate call."),(0,i.kt)("p",null,'Nominators who have the option to renominate an involuntarily chilled validator will have a display\nrow to do so using Polkadot-JS Apps. This row is displayed in the "Account Actions" tab for the\nnominator under a heading that says "Redenomination required". If your validator has been\ninvoluntarily chilled, you will need to request your nominators to re-issue the nominate call in\norder to start nominating you again.'))}d.isMDXComponent=!0},63214:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/staking-keys_stash_controller-ab610fee1332a02465a8cb914259f281.png"}}]);