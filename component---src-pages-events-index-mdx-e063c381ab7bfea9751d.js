"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[4354],{5726:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return c}});var n=a(3366),r=(a(7294),a(4983)),l=a(4295),i=["components"],o={},m={_frontmatter:o},s=l.Z;function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(s,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Upcoming Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"),(0,r.kt)("th",{parentName:"tr",align:null},"When"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ibm.biz/apic-saas-office-hours"},"API Connect on AWS Office Hours")),(0,r.kt)("td",{parentName:"tr",align:null},"Informal session for Q&A"),(0,r.kt)("td",{parentName:"tr",align:null},"10 March @ 11:00 EST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bzb.tools.ibm.com/TechCon2023"},"IBM TechCon 2023")),(0,r.kt)("td",{parentName:"tr",align:null},"Online technical conference with an entire track dedicated to API Management and Gateways"),(0,r.kt)("td",{parentName:"tr",align:null},"21-23 March")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ibm.biz/apic-saas-office-hours"},"API Connect on AWS Office Hours")),(0,r.kt)("td",{parentName:"tr",align:null},"Informal session for Q&A"),(0,r.kt)("td",{parentName:"tr",align:null},"14 April @ 11:00 EST")))))}c.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(9403),m=a(3321),s=a(5900),c=a.n(s),d=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,m=l.subDirectory,s=o+"/edit/"+l.branch+m+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},p=a(4275),g=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],m=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),m=a===o,s=new RegExp(o+"/?(#.*)?$"),d=r.replace(s,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=m,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},m))))))},t}(n.Component),h=b,f=a(2881),E=a(6958),N=a(36),k=function(e){var t=e.date,a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,r=e.location,s=e.Title,c=t.frontmatter,g=void 0===c?{}:c,b=t.relativePagePath,N=t.titleType,v=g.tabs,P=g.title,y=g.theme,x=g.description,w=g.keywords,T=g.date,C=(0,E.Z)().interiorTheme,Z=(0,i.useStaticQuery)("2456312558").site.pathPrefix,A=Z?r.pathname.replace(Z,""):r.pathname,D=v?A.split("/").filter(Boolean).slice(-1)[0]||l()(v[0],{lower:!0}):"",H=y||C;return n.createElement(m.Z,{tabs:v,homepage:!1,theme:H,pageTitle:P,pageDescription:x,pageKeywords:w,titleType:N},n.createElement(d,{title:s?n.createElement(s,null):P,label:"label",tabs:v,theme:H}),v&&n.createElement(h,{title:P,slug:A,tabs:v,currentTab:D}),n.createElement(f.Z,{padded:!0},a,n.createElement(u,{relativePagePath:b}),n.createElement(k,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:A,tabs:v,currentTab:D}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-events-index-mdx-e063c381ab7bfea9751d.js.map