"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6969],{71243:(e,t,a)=>{a.d(t,{A:()=>E});var n=a(58168),r=a(96540),i=a(20053),l=a(17559),c=a(84142),s=a(99169),o=a(75489),m=a(21312),d=a(86025);function u(e){return r.createElement("svg",(0,n.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){var e=(0,d.A)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.A,{"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:v.breadcrumbHomeIcon})))}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function g(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(o.A,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function p(e){var t=e.children,a=e.active,l=e.index,c=e.addMicrodata;return r.createElement("li",(0,n.A)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.A)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function E(){var e=(0,c.OF)(),t=(0,s.Dt)();return e?r.createElement("nav",{className:(0,i.A)(l.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(h,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(g,{href:t.href,isLast:n},t.label))})))):null}},3514:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(96540),r=a(20053),i=a(84142),l=a(75489),c=a(16654),s=a(21312);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){var t=e.href,a=e.children;return n.createElement(l.A,{href:t,className:(0,r.A)("card padding--lg",o.cardContainer)},a)}function d(e){var t=e.href,a=e.icon,i=e.title,l=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,r.A)("text--truncate",o.cardTitle),title:i},a," ",i),l&&n.createElement("p",{className:(0,r.A)("text--truncate",o.cardDescription),title:l},l))}function u(e){var t,a=e.item,r=(0,i._o)(a);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:null!=(t=a.description)?t:(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function v(e){var t,a,r=e.item,l=(0,c.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.cC)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:l,title:r.label,description:null!=(a=r.description)?a:null==s?void 0:s.description})}function h(e){var t=e.item;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,a=(0,i.$S)();return n.createElement(g,{items:a.items,className:t})}function g(e){var t=e.items,a=e.className;if(!t)return n.createElement(b,e);var l=(0,i.d1)(t);return n.createElement("section",{className:(0,r.A)("row",a)},l.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e}))})))}},65847:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(96540),r=a(69024),i=a(84142),l=a(86025),c=a(3514),s=a(86929),o=a(51878),m=a(4267),d=a(71243),u=a(51107);const v={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function h(e){var t=e.categoryGeneratedIndex;return n.createElement(r.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.A)(t.image)})}function b(e){var t=e.categoryGeneratedIndex,a=(0,i.$S)();return n.createElement("div",{className:v.generatedIndexPage},n.createElement(o.A,null),n.createElement(d.A,null),n.createElement(m.A,null),n.createElement("header",null,n.createElement(u.A,{as:"h1",className:v.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(c.A,{items:a.items,className:v.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(s.A,{previous:t.navigation.previous,next:t.navigation.next})))}function g(e){return n.createElement(n.Fragment,null,n.createElement(h,e),n.createElement(b,e))}},86929:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(58168),r=a(96540),i=a(21312),l=a(20053),c=a(75489);function s(e){var t=e.permalink,a=e.title,n=e.subLabel,i=e.isNext;return r.createElement(c.A,{className:(0,l.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(s,(0,n.A)({},t,{subLabel:r.createElement(i.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(s,(0,n.A)({},a,{subLabel:r.createElement(i.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4267:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540),r=a(20053),i=a(21312),l=a(17559),c=a(32252);function s(e){var t=e.className,a=(0,c.r)();return a.badge?n.createElement("span",{className:(0,r.A)(t,l.G.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},51878:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(96540),r=a(20053),i=a(44586),l=a(75489),c=a(21312),s=a(44070),o=a(17559),m=a(55597),d=a(32252);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(c.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.A,{to:a,onClick:r},n.createElement(c.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,a=e.className,l=e.versionMetadata,c=(0,i.A)().siteConfig.title,d=(0,s.vT)({failfast:!0}).pluginId,u=(0,m.g1)(d).savePreferredVersionName,b=(0,s.HW)(d),g=b.latestDocSuggestion,p=b.latestVersionSuggestion,E=null!=g?g:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.A)(a,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:c,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:E.path,onClick:function(){return u(p.name)}})))}function g(e){var t=e.className,a=(0,d.r)();return a.banner?n.createElement(b,{className:t,versionMetadata:a}):null}},51107:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(58168),r=a(98587),i=a(96540),l=a(20053),c=a(21312),s=a(6342),o=a(75489);const m={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};var d=["as","id"];function u(e){var t=e.as,a=e.id,u=(0,r.A)(e,d),v=(0,s.p)().navbar.hideOnScroll;if("h1"===t||!a)return i.createElement(t,(0,n.A)({},u,{id:void 0}));var h=(0,c.T)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:a});return i.createElement(t,(0,n.A)({},u,{className:(0,l.A)("anchor",v?m.anchorWithHideOnScrollNavbar:m.anchorWithStickyNavbar,u.className),id:a}),u.children,i.createElement(o.A,{className:"hash-link",to:"#"+a,"aria-label":h,title:h},"\u200b"))}}}]);