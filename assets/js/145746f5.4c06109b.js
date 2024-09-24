"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6789],{3734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var r=t(74848),s=t(28453),a=t(11470),i=t(19365);const l={id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"},d=void 0,o={id:"maintain/maintain-polkadot-parameters",title:"Polkadot Parameters",description:"A description about fundamental Polkadot parameters.",source:"@site/../docs/maintain/maintain-polkadot-parameters.md",sourceDirName:"maintain",slug:"/maintain-polkadot-parameters",permalink:"/docs/maintain-polkadot-parameters",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1727167801e3,frontMatter:{id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"},sidebar:"docs",previous:{title:"Code of Conduct",permalink:"/docs/kusama-coc"},next:{title:"Timeline",permalink:"/docs/kusama-timeline"}},c={},h=[{value:"Periods of common actions and attributes",id:"periods-of-common-actions-and-attributes",level:3},{value:"Governance",id:"governance",level:3},{value:"Staking, Validating, and Nominating",id:"staking-validating-and-nominating",level:3},{value:"Parachains",id:"parachains",level:3},{value:"Treasury",id:"treasury",level:3},{value:"Precision",id:"precision",level:3}];function u(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Many of these parameter values can be updated via on-chain governance. If you require absolute\ncertainty of these parameter values, it is recommended you directly check the constants by looking\nat the ",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/chainstate/constants",children:"chain state"})," and/or\n",(0,r.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/chainstate",children:"storage"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"periods-of-common-actions-and-attributes",children:"Periods of common actions and attributes"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"NOTE: Polkadot generally runs at \xbcth the speed of Kusama, except in the time slot duration\nitself."})}),"\n",(0,r.jsxs)(a.A,{groupId:"periods",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],children:[(0,r.jsxs)(i.A,{value:"polkadot",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Slot: 6 seconds *(generally one block per slot, although see note below)"}),"\n",(0,r.jsx)(n.li,{children:"Epoch: 4 hours (2_400 slots x 6 seconds)"}),"\n",(0,r.jsx)(n.li,{children:"Session: 4 hours (Session and Epoch lengths are the same)"}),"\n",(0,r.jsx)(n.li,{children:"Era: 24 hours (6 sessions per Era, 2_400 slots x 6 epochs x 6 seconds)"}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Polkadot"}),(0,r.jsx)(n.th,{children:"Time"}),(0,r.jsx)(n.th,{children:"Slots*"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Slot"}),(0,r.jsx)(n.td,{children:"6 seconds"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Epoch"}),(0,r.jsx)(n.td,{children:"4 hours"}),(0,r.jsx)(n.td,{children:"2_400"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Session"}),(0,r.jsx)(n.td,{children:"4 hours"}),(0,r.jsx)(n.td,{children:"2_400"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Era"}),(0,r.jsx)(n.td,{children:"24 hours"}),(0,r.jsx)(n.td,{children:"14_400"})]})]})]})]}),(0,r.jsxs)(i.A,{value:"kusama",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Slot: 6 seconds *(generally one block per slot, although see note below)"}),"\n",(0,r.jsx)(n.li,{children:"Epoch: 1 hour (600 slots x 6 seconds)"}),"\n",(0,r.jsx)(n.li,{children:"Session: 1 hour (6 sessions per Era)"}),"\n",(0,r.jsx)(n.li,{children:"Era: 6 hours (3600 slots x 6 seconds)"}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Kusama"}),(0,r.jsx)(n.th,{children:"Time"}),(0,r.jsx)(n.th,{children:"Slots*"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Slot"}),(0,r.jsx)(n.td,{children:"6 seconds"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Epoch"}),(0,r.jsx)(n.td,{children:"1 hour"}),(0,r.jsx)(n.td,{children:"600"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Session"}),(0,r.jsx)(n.td,{children:"1 hour"}),(0,r.jsx)(n.td,{children:"600"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Era"}),(0,r.jsx)(n.td,{children:"6 hours"}),(0,r.jsx)(n.td,{children:"3_600"})]})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["*",(0,r.jsxs)(n.em,{children:["A maximum of one block per slot can be in a canonical chain. Occasionally, a slot will be without\na block in the chain. Thus, the times given are ",(0,r.jsx)(n.em,{children:"estimates"}),". See\n",(0,r.jsx)(n.a,{href:"/docs/learn-consensus",children:"Consensus"})," for more details."]})]}),"\n",(0,r.jsx)(n.h3,{id:"governance",children:"Governance"}),"\n",(0,r.jsxs)(a.A,{groupId:"governance",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],children:[(0,r.jsx)(i.A,{value:"polkadot",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Time"}),(0,r.jsx)(n.th,{children:"Slots"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Voting period"}),(0,r.jsx)(n.td,{children:"28 days"}),(0,r.jsx)(n.td,{children:"403_200"}),(0,r.jsx)(n.td,{children:"How long the public can vote on a referendum."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Enactment period"}),(0,r.jsx)(n.td,{children:"28 days"}),(0,r.jsx)(n.td,{children:"403_200"}),(0,r.jsx)(n.td,{children:"Time it takes for a successful referendum to be implemented on the network."})]})]})]})}),(0,r.jsx)(i.A,{value:"kusama",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Time"}),(0,r.jsx)(n.th,{children:"Slots"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Voting period"}),(0,r.jsx)(n.td,{children:"7 days"}),(0,r.jsx)(n.td,{children:"100_800"}),(0,r.jsx)(n.td,{children:"How long the public can vote on a referendum."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Enactment period"}),(0,r.jsx)(n.td,{children:"8 days"}),(0,r.jsx)(n.td,{children:"115_200"}),(0,r.jsx)(n.td,{children:"Time it takes for a successful referendum to be implemented on the network."})]})]})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"staking-validating-and-nominating",children:"Staking, Validating, and Nominating"}),"\n",(0,r.jsxs)(n.p,{children:["The maximum number of validators that can be nominated by a nominator is can be see\n",(0,r.jsx)(n.a,{href:"/docs/chain-state-values#maximum-votes-per-nominator",children:"here"}),"."]}),"\n",(0,r.jsxs)(a.A,{groupId:"staking",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],children:[(0,r.jsx)(i.A,{value:"polkadot",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Time"}),(0,r.jsx)(n.th,{children:"Slots"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Term duration"}),(0,r.jsx)(n.td,{children:"1 Day"}),(0,r.jsx)(n.td,{children:"14_400"}),(0,r.jsx)(n.td,{children:"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case that a validator misbehaves."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Nomination period"}),(0,r.jsx)(n.td,{children:"1 Day"}),(0,r.jsx)(n.td,{children:"14_400"}),(0,r.jsxs)(n.td,{children:["How often a new validator set is elected according to ",(0,r.jsx)(n.a,{href:"/docs/learn-phragmen",children:"Phragm\xe9n's method"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bonding duration"}),(0,r.jsx)(n.td,{children:"28 days"}),(0,r.jsx)(n.td,{children:"403_200"}),(0,r.jsx)(n.td,{children:"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Slash defer duration"}),(0,r.jsx)(n.td,{children:"28 days"}),(0,r.jsx)(n.td,{children:"403_200"}),(0,r.jsx)(n.td,{children:'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.'})]})]})]})}),(0,r.jsx)(i.A,{value:"kusama",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Time"}),(0,r.jsx)(n.th,{children:"Slots"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Term duration"}),(0,r.jsx)(n.td,{children:"6 hours"}),(0,r.jsx)(n.td,{children:"3_600"}),(0,r.jsx)(n.td,{children:"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case that a validator misbehaves."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Nomination period"}),(0,r.jsx)(n.td,{children:"6 hours"}),(0,r.jsx)(n.td,{children:"3_600"}),(0,r.jsxs)(n.td,{children:["How often a new validator set is elected according to ",(0,r.jsx)(n.a,{href:"/docs/learn-phragmen",children:"Phragm\xe9n's method"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bonding duration"}),(0,r.jsx)(n.td,{children:"7 days"}),(0,r.jsx)(n.td,{children:"604_800"}),(0,r.jsx)(n.td,{children:"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Slash defer duration"}),(0,r.jsx)(n.td,{children:"7 days"}),(0,r.jsx)(n.td,{children:"604_800"}),(0,r.jsx)(n.td,{children:'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.'})]})]})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"parachains",children:"Parachains"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Crowdloans and Auctions"}),(0,r.jsx)(n.th,{children:"Time"}),(0,r.jsx)(n.th,{children:"Slots"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Auction duration"}),(0,r.jsx)(n.td,{children:"7 days"}),(0,r.jsx)(n.td,{children:"100_800"}),(0,r.jsx)(n.td,{children:"The total duration of the slot auction, subject to the candle auction mechanism."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Opening period"}),(0,r.jsx)(n.td,{children:"2 days"}),(0,r.jsx)(n.td,{children:"28_800"}),(0,r.jsx)(n.td,{children:"The opening period of the slot auction."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Ending period"}),(0,r.jsx)(n.td,{children:"5 days"}),(0,r.jsx)(n.td,{children:"72_000"}),(0,r.jsx)(n.td,{children:"The ending period of the slot auction."})]})]})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parachain Slot"}),(0,r.jsx)(n.th,{children:"Time"}),(0,r.jsx)(n.th,{children:"Slots"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Lease period"}),(0,r.jsx)(n.td,{children:"12 weeks"}),(0,r.jsx)(n.td,{children:"1_209_600"}),(0,r.jsx)(n.td,{children:"The length of one lease period in a parachain slot."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Total slot duration"}),(0,r.jsx)(n.td,{children:"2 years"}),(0,r.jsx)(n.td,{children:"10_512_000"}),(0,r.jsx)(n.td,{children:"The maximum duration a parachain can lease by winning a slot auction (8 lease periods)."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"treasury",children:"Treasury"}),"\n",(0,r.jsxs)(a.A,{groupId:"treasury",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],children:[(0,r.jsxs)(i.A,{value:"polkadot",children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Treasury"}),(0,r.jsx)(n.th,{children:"Time"}),(0,r.jsx)(n.th,{children:"Slots"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Periods between spends"}),(0,r.jsx)(n.td,{children:"24 days"}),(0,r.jsx)(n.td,{children:"345_600"}),(0,r.jsx)(n.td,{children:"When the treasury can spend again after spending previously."})]})})]}),(0,r.jsxs)(n.p,{children:["Burn percentage is currently ",(0,r.jsx)(n.code,{children:"1.00%"}),"."]})]}),(0,r.jsxs)(i.A,{value:"kusama",children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Treasury"}),(0,r.jsx)(n.th,{children:"Time"}),(0,r.jsx)(n.th,{children:"Slots"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Periods between spends"}),(0,r.jsx)(n.td,{children:"6 days"}),(0,r.jsx)(n.td,{children:"86_400"}),(0,r.jsx)(n.td,{children:"When the treasury can spend again after spending previously."})]})})]}),(0,r.jsxs)(n.p,{children:["Burn percentage is currently ",(0,r.jsx)(n.code,{children:"0.20%"}),", though instead of being burned this amount is temporarily\nredirected into the ",(0,r.jsx)(n.a,{href:"/docs/maintain-guides-society-kusama",children:"Society"}),"'s treasury to\nfund growth."]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"precision",children:"Precision"}),"\n",(0,r.jsxs)(a.A,{groupId:"precision",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],children:[(0,r.jsxs)(i.A,{value:"polkadot",children:[(0,r.jsx)(n.p,{children:"DOT have 10 decimals of precision. In other words, 10 ** 10 (10_000_000_000 or ten billion)\nPlancks make up a DOT."}),(0,r.jsxs)(n.p,{children:["The denomination of DOT was changed from 12 decimals of precision at block #1,248,328 in an event\nknown as ",(0,r.jsx)(n.em,{children:"Denomination Day"}),". See ",(0,r.jsx)(n.a,{href:"/docs/learn/learn-redenomination",children:"Redenomination"})," for\ndetails."]})]}),(0,r.jsx)(i.A,{value:"kusama",children:(0,r.jsx)(n.p,{children:"KSM have 12 decimals of precision. In other words, 1e12 (1_000_000_000_000, or one trillion) Plancks\nmake up a single KSM."})})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),s=t(34164),a=t(23104),i=t(56347),l=t(205),d=t(57485),o=t(31682),c=t(42349);function h(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.XI)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function x(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,t=void 0!==n&&n,s=e.groupId,a=(0,i.W6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:s});return[(0,d.aZ)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(a.location.search);n.set(l,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[l,a])]}function m(e){var n,t,s,a,i=e.defaultValue,d=e.queryString,o=void 0!==d&&d,h=e.groupId,m=u(e),p=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var s=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:m})})),b=p[0],v=p[1],f=j({queryString:o,groupId:h}),g=f[0],y=f[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,c.Dv)(n),s=t[0],a=t[1],[s,(0,r.useCallback)((function(e){n&&a.set(e)}),[n,a])]),w=k[0],T=k[1],_=function(){var e=null!=g?g:w;return x({value:e,tabValues:m})?e:null}();return(0,l.A)((function(){_&&v(_)}),[_]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!x({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),T(e)}),[y,T,m]),tabValues:m}}var p=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function f(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,l=e.tabValues,d=[],o=(0,a.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=d.indexOf(n),s=l[t].value;s!==r&&(o(n),i(s))},h=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,s=d.indexOf(e.currentTarget)+1;t=null!=(r=d[s])?r:d[0];break;case"ArrowLeft":var a,i=d.indexOf(e.currentTarget)-1;t=null!=(a=d[i])?a:d[d.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,a=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return d.push(e)},onKeyDown:h,onClick:c},a,{className:(0,s.A)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function g(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=i.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:(0,s.A)("margin-top--md",l.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=m(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,v.jsx)(f,Object.assign({},n,e)),(0,v.jsx)(g,Object.assign({},n,e))]})}function k(e){var n=(0,p.A)();return(0,v.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);