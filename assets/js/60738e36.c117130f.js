(self.webpackChunk=self.webpackChunk||[]).push([[9071],{71345:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>X,contentTitle:()=>F,default:()=>$,frontMatter:()=>K,metadata:()=>G,toc:()=>_});var n=a(87462),r=a(63366),l=a(67294),s=a(3905),c=a(67855);var i=a(74165),o=a(15861),m=a(87152),u=a(17145);var p,d=JSON.parse('{"v6":{"To":"^10.10.1"}}').v6.To.substring(1),E=[{name:"Polkadot",rpc:"wss://rpc.polkadot.io"},{name:"Kusama",rpc:"wss://kusama-rpc.polkadot.io"},{name:"Westend",rpc:"wss://westend-rpc.polkadot.io"},{name:"Polkadot Asset Hub",rpc:"wss://polkadot-asset-hub-rpc.polkadot.io"},{name:"Kusama Asset Hub",rpc:"wss://kusama-asset-hub-rpc.polkadot.io"},{name:"Westmint",rpc:"wss://westmint-rpc.polkadot.io"},{name:"Rococo",rpc:"wss://rococo-rpc.polkadot.io"}],h=[];function y(e){var t=e.version,a=(0,l.useState)(""),n=a[0],r=a[1];return(0,l.useEffect)((0,o.Z)((0,i.Z)().mark((function e(){var a,n,s,c,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="Polkadot","Metadata Explorer \xb7 Guide"===document.title&&(a="Kusama"),n=E.find((function(e){return e.name===a})),s=n.rpc,c=[],E.forEach((function(e){var t=l.createElement("option",{value:e.rpc,key:e.name},""+(e.name.charAt(0).toUpperCase()+e.name.slice(1)));c.push(t)})),o=l.createElement("select",{defaultValue:n.rpc,style:R,onChange:function(e){return f(t,e.target.value,o,r)}},c.map((function(e){return e}))),r(l.createElement("div",{style:j},l.createElement("b",null,"Loading Metadata Explorer..."))),e.next=10,f(t,s,o,r);case 10:case"end":return e.stop()}}),e)}))),[]),n}function f(e,t,a,n){return b.apply(this,arguments)}function b(){return(b=(0,o.Z)((0,i.Z)().mark((function e(t,a,n,r){var s,c,o,p,E,y,f,b,k;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A("metadataLoading",!1),s=new m.U(a),e.next=4,u.G.create({provider:s});case 4:return c=e.sent,h=[],e.next=8,c.rpc.state.getMetadata();case 8:o=e.sent,p=o.toHuman(),E=p.metadata[t].lookup.types,(y=p.metadata[t].pallets).sort((function(e,t){return e.name.localeCompare(t.name)})),f=[],y.forEach((function(e){var t=g(e,c.consts[""+x(e.name)],"constants",E),a=g(e,c.errors[""+x(e.name)],"errors",E),n=g(e,c.events[""+x(e.name)],"events",E),r=g(e,c.tx[""+x(e.name)],"extrinsics",E),s=g(e,c.query[x(e.name)],"storage",E),i=C(e.name,"constants",t),o=C(e.name,"errors",a),m=C(e.name,"events",n),u=C(e.name,"extrinsics",r),p=C(e.name,"storage",s);f.push(l.createElement("div",{key:e.name,style:W},l.createElement("span",null,l.createElement("b",{id:e.name+"-button",style:Z,onClick:function(){P(e.name)}},"+"),"\xa0",l.createElement("b",null,e.name)),l.createElement("div",{id:e.name,style:H},i,o,m,u,p))),h.push(e.name),h.push(e.name+"-constants",e.name+"-errors",e.name+"-events",e.name+"-extrinsics",e.name+"-storage")})),b=v(c.rpc,"rpc"),k=v(c.call,"runtime"),A("metadataLoading",!0),r(l.createElement("div",null,l.createElement("div",{style:S},l.createElement("input",{id:"metaSearch",type:"text",placeholder:"Search Metadata",style:O,onInput:function(){return I()}}),l.createElement("br",null),n,l.createElement("div",{id:"buttonControls"},l.createElement("button",{style:U,onClick:function(){return M(!0)}},l.createElement("span",{style:{fontSize:"10px"}},"Expand All")),l.createElement("button",{style:U,onClick:function(){return M(!1)}},l.createElement("span",{style:{fontSize:"10px"}},"Collapse All"))),l.createElement("div",{style:{fontSize:"10px"}},l.createElement("b",{style:j},"metadata"),l.createElement("b",null," "+t),"\xa0",l.createElement("b",{style:j},"@polkadot/api"),l.createElement("b",null," V"+d)),l.createElement("div",{id:"metadataLoading",style:V},l.createElement("b",null,"Connecting to "+a+"...")),l.createElement("div",{id:"searchLoading",style:V},l.createElement("b",null,"Searching...")),l.createElement("div",{id:"searchResults",style:V},l.createElement("b",null,"Matches: "),l.createElement("b",{id:"searchCount",style:j},"0"))),l.createElement("b",{style:q},"Pallets:"),f,l.createElement("br",null),l.createElement("b",{style:q},"RPC:"),b,l.createElement("br",null),l.createElement("b",{style:q},"Runtime:"),k));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t,a,n){var r=[];null!=t&&Object.keys(t).sort((function(e,t){return e.localeCompare(t)})).forEach((function(s){var c,i=t[s].meta.toHuman(),o=w(i.docs.join(" ")),m=s.charAt(0).toUpperCase()+s.slice(1);switch(a){case"constants":var u=n[i.type].type.def;c=l.createElement("ul",null,l.createElement("li",{className:"searchable"},l.createElement("u",null,"Description"),": ",o),l.createElement("li",{className:"searchable"},l.createElement("u",null,"API Endpoint"),": ",l.createElement("span",{style:j},"api.consts."+x(e.name)+"."+x(s))),l.createElement("li",{className:"searchable"},l.createElement("u",null,"Chain Value"),": ",l.createElement("span",{style:j},""+JSON.stringify(t[s]))),l.createElement("li",{className:"searchable"},l.createElement("u",null,"Chain Value Type"),": ","("+Object.keys(u)[0]+": "+Object.values(u)[0]+")"));break;case"errors":c=l.createElement("ul",null,l.createElement("li",{className:"searchable"},l.createElement("u",null,"Description"),": ",o),l.createElement("li",{className:"searchable"},l.createElement("u",null,"API Endpoint"),": ",l.createElement("span",{style:j},"api.errors."+x(e.name)+"."+x(s))));break;case"events":c=l.createElement("ul",null,l.createElement("li",{className:"searchable"},l.createElement("u",null,"Description"),": ",o),l.createElement("li",{className:"searchable"},l.createElement("u",null,"API Endpoint"),": ",l.createElement("span",{style:j},"api.events."+x(e.name)+"."+x(s))),l.createElement("li",{className:"searchable"},l.createElement("u",null,"Fields"),": ",N(i,"events")));break;case"extrinsics":c=l.createElement("ul",null,l.createElement("li",{className:"searchable"},l.createElement("u",null,"Description"),": ",o),l.createElement("li",{className:"searchable"},l.createElement("u",null,"API Endpoint"),": ",l.createElement("span",{style:j},"api.tx."+x(e.name)+"."+x(s))),l.createElement("li",{className:"searchable"},l.createElement("u",null,"Parameters"),": ",N(i,"extrinsics")));break;case"storage":c=l.createElement("ul",null,l.createElement("li",{className:"searchable"},l.createElement("u",null,"Description"),": ",o),l.createElement("li",{className:"searchable"},l.createElement("u",null,"API Endpoint"),": ",l.createElement("span",{style:j},"api.query."+x(e.name)+"."+x(s))),l.createElement("li",{className:"searchable"},l.createElement("u",null,"Return Type"),": ",N(i,"storage",n)));break;default:!function(e){throw new TypeError('"'+e+'" is read-only')}("item")}var p=l.createElement("li",{key:s},l.createElement("b",null,m),c);r.push(p)}));return r=k(r)}function v(e,t){var a=[],n=Object.keys(e);return n.sort((function(e,t){return e.localeCompare(t)})),n.forEach((function(n){var r=[],s=e[n],c=Object.keys(s);c.sort((function(e,t){return e.localeCompare(t)})),c.forEach((function(e){var a,c=s[e].meta,i=w(c.description);switch(t){case"rpc":a=l.createElement("ul",{style:L},l.createElement("li",{className:"searchable"},l.createElement("u",null,"Description"),": ",i),l.createElement("li",{className:"searchable"},l.createElement("u",null,"API Endpoint"),": ",l.createElement("span",{style:j},"api.rpc."+n+"."+e)),l.createElement("li",{className:"searchable"},l.createElement("u",null,"Return Type"),": ",c.type),l.createElement("li",{className:"searchable"},l.createElement("u",null,"Parameters"),": ",N(c,"rpc")));break;case"runtime":a=l.createElement("ul",{style:L},l.createElement("li",{className:"searchable"},l.createElement("u",null,"Description"),": ",i),l.createElement("li",{className:"searchable"},l.createElement("u",null,"API Endpoint"),": ",l.createElement("span",{style:j},"api.call."+n+"."+e)),l.createElement("li",{className:"searchable"},l.createElement("u",null,"Type"),": ",c.type))}var o=l.createElement("div",{key:n+"."+e},l.createElement("b",null,""+(e.charAt(0).toUpperCase()+e.slice(1))),a);r.push(o)})),r=k(r);var i=n.charAt(0).toUpperCase()+n.slice(1),o=l.createElement("div",{key:n,style:W},l.createElement("span",null,l.createElement("b",{id:n+"-button",style:Z,onClick:function(){P(n)}},"+"),"\xa0",l.createElement("b",null,i)),l.createElement("div",{id:n,style:H},l.createElement("ul",{style:L},r)));a.push(o),h.push(n)})),a}function x(e){return e.charAt(0).toLowerCase()+e.slice(1)}function k(e){return 0===e.length?l.createElement("p",{style:L},"None"):e}function C(e,t,a){return l.createElement("ul",{style:L},l.createElement("span",null,l.createElement("b",{id:e+"-"+t+"-button",style:Z,onClick:function(){P(e+"-"+t)}},"+"),"\xa0",l.createElement("b",null,t.charAt(0).toUpperCase()+t.slice(1))),l.createElement("div",{id:e+"-"+t,style:z},l.createElement("ul",null,a)))}function w(e){for(var t=e.split("`"),a=[],n=0;n<t.length;n++)n%2==0?a.push(l.createElement("p",{key:n,style:D},t[n])):a.push(l.createElement("p",{key:n,style:B},t[n]));return l.createElement("span",null,a)}function N(e,t,a){void 0===a&&(a=null);var n="(";switch(t){case"rpc":e.params.forEach((function(e){n+=e.name+": "+e.type+", "}));break;case"extrinsics":for(var r=0;r<e.args.length;r++)n+=e.args[r].name+": "+e.args[r].type+", ";break;case"events":for(var l=0;l<e.args.length;l++)n+=e.fields[l].typeName+": "+e.args[l]+", ";break;case"storage":var s=Object.keys(e.type)[0];if("Plain"===s){var c=a[e.type.Plain].type.def;n=T(c,a)}else if("Map"===s){var i=a[e.type.Map.key].type.def;n=T(i,a)}else console.log("Unknown Storage Type")}return"("!==(n=n.slice(0,-2)+")")&&")"!==n||(n="None"),n}function T(e,t){var a="(";switch(Object.keys(e)[0]){case"Array":var n=e.Array.len,r=t[e.Array.type].type.def,l=Object.keys(r)[0],s=r[l];a+="Array["+n+"]: "+l+" "+s+" )";break;case"Compact":a=T(t[e.Compact.type].type.def,t);break;case"Composite":e.Composite.fields.forEach((function(e){a=T(t[e.type].type.def,t)}));break;case"Primitive":var c=e.Primitive;a+="Primitive: "+c+") ";break;case"Sequence":a=T(t[e.Sequence.type].type.def,t);break;case"Tuple":a+="Tuple: [ ",e.Tuple.forEach((function(e){a+=T(t[e].type.def,t)+", "})),a=a.slice(0,-2)+"]  ";break;case"Variant":a+="Variant: ",e.Variant.variants.forEach((function(e){var t=[];e.fields.forEach((function(e){t.push(e.typeName)})),a+="{"+e.name+": ["+t.join(", ")+"]}, "})),a=a.slice(0,-2)+"  ";break;default:console.log("Unknown Decoder Type")}return a}function A(e,t){var a=document.getElementById(e);null!==a&&(a.style.display=!1===t?"block":"none")}function P(e){var t=document.getElementById(e),a=document.getElementById(e+"-button");"0px"===t.style.maxHeight?(t.style.maxHeight="100%",a.innerText="-"):(t.style.maxHeight="0px",a.innerText="+")}function M(e){h.forEach((function(t){var a=document.getElementById(t),n=document.getElementById(t+"-button");e?(a.style.maxHeight="100%",n.innerText="-"):(a.style.maxHeight="0px",n.innerText="+")}))}function I(){A("searchLoading",!1),clearTimeout(p),p=setTimeout((function(){var e=document.getElementById("metaSearch").value;if(e.length<2)M(!1),h.forEach((function(e){for(var t,a=document.getElementById(e).getElementsByClassName("searchable"),n=(0,c.Z)(a);!(t=n()).done;){t.value.style.background="transparent"}})),A("searchResults",!0);else{var t=new RegExp(e,"gi"),a=0;h.forEach((function(e){var n=document.getElementById(e),r=n.getElementsByClassName("searchable"),l=document.getElementById(e+"-button");if(t.test(n.innerText)){for(var s,i=(0,c.Z)(r);!(s=i()).done;){var o=s.value;t.test(o.innerText)?(o.style.background="#ffff00",a+=1):o.style.background="transparent"}n.style.maxHeight="100%",l.innerText="-"}else{for(var m,u=(0,c.Z)(r);!(m=u()).done;){m.value.style.background="transparent"}n.style.maxHeight="0px",l.innerText="+"}document.getElementById("searchCount").innerText=a})),A("searchResults",!1)}A("searchLoading",!0)}),200)}var j={color:"#e6007a"},S={textAlign:"center "},D={margin:"0px",display:"inline"},B={color:"#e6007a",margin:"0px",display:"inline",background:"#f0f0f0",paddingLeft:"5px",paddingRight:"5px"},H={maxHeight:"0px",overflow:"hidden"},z={maxHeight:"0px",overflow:"hidden",margin:"0px"},L={margin:"0px"},R={border:"1px solid #e6007a",width:"400px",height:"40px",fontSize:"16px",textAlign:"center",fontWeight:"bold",margin:"1px",cursor:"pointer"},U={border:"1px solid #e6007a",width:"199px",height:"28px",margin:"1px",fontWeight:"bold",cursor:"pointer"},V={display:"none"},Z={margin:"0px",color:"#e6007a",cursor:"pointer"},O={border:"1px solid #e6007a",width:"400px",height:"40px",fontSize:"16px",textAlign:"center",margin:"1px"},q={fontSize:"18px"},W={paddingLeft:"16px"},J=["components"],K={id:"metadata",title:"Metadata Explorer",sidebar_label:"Metadata Explorer",description:"Visualize Metadata and related Documentation.",keywords:["docs","substrate","metadata","explorer","search","api","tools","js","javascript"],slug:"../metadata"},F=void 0,G={unversionedId:"general/metadata",id:"general/metadata",title:"Metadata Explorer",description:"Visualize Metadata and related Documentation.",source:"@site/../docs/general/metadata.md",sourceDirName:"general",slug:"/metadata",permalink:"/docs/metadata",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1688135081,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"metadata",title:"Metadata Explorer",sidebar_label:"Metadata Explorer",description:"Visualize Metadata and related Documentation.",keywords:["docs","substrate","metadata","explorer","search","api","tools","js","javascript"],slug:"../metadata"},sidebar:"docs",previous:{title:"Introduction to Parachains",permalink:"/docs/learn-parachains"},next:{title:"Parathreads",permalink:"/docs/learn-parathreads"}},X={},_=[],Y={toc:_},Q="wrapper";function $(e){var t=e.components,a=(0,r.Z)(e,J);return(0,s.kt)(Q,(0,n.Z)({},Y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Metadata Explorer")," tool helps visualize the metadata of various parachains by retrieving the\nlatest data directly from the chain using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api"},"polkadot-js api"),".\nThe dropdown below allows you to update the chain selection to visualize. You can search all\nsub-categories using the provided search field. The information is categorized by the chains\n",(0,s.kt)("inlineCode",{parentName:"p"},"Pallets"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"RPC")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Runtime")," information."),(0,s.kt)(y,{version:"V14",mdxType:"Metadata"}))}$.isMDXComponent=!0},46601:()=>{}}]);