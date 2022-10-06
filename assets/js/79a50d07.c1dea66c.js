"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[102],{16191:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>T,frontMatter:()=>k,metadata:()=>v,toc:()=>g});var o=a(87462),r=a(67294),l=a(3905);var n=a(86010),s=a(72389),i=a(67392),c=a(7094),u=a(12466);const m="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:l,defaultValue:s,values:p,groupId:b,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??k.map((e=>{let{props:{value:t,label:a,attributes:o}}=e;return{value:t,label:a,attributes:o}})),v=(0,i.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:z}=(0,c.U)(),[T,E]=(0,r.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==T&&y.some((t=>t.value===e))&&E(e)}const C=e=>{const t=e.currentTarget,a=w.indexOf(t),o=y[a].value;o!==T&&(P(t),E(o),null!=b&&z(b,String(o)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},h)},y.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:I,onFocus:C,onClick:C},l,{className:(0,n.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function b(e){const t=(0,s.Z)();return r.createElement(p,(0,o.Z)({key:String(t)},e))}var h=a(85162);const k={id:"pos-bytz-e-commerce-api",title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},y=void 0,v={unversionedId:"pos-bytz-e-commerce-api",id:"pos-bytz-e-commerce-api",title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",source:"@site/docs/pos-bytz-e-commerce-api.info.mdx",sourceDirName:".",slug:"/pos-bytz-e-commerce-api",permalink:"/ecommerce-api-docs/docs/pos-bytz-e-commerce-api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pos-bytz-e-commerce-api.info.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"pos-bytz-e-commerce-api",title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},sidebar:"ecommerceSidebar",next:{title:"Countries",permalink:"/ecommerce-api-docs/docs/category/countries"}},f={},g=[],z={toc:g};function T(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},z,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 1.0"),(0,l.kt)("h1",{id:"posbytz-e-commerce-api"},"PosBytz E-Commerce API"),(0,l.kt)("p",null,"The PosBytz E-Commerce API description"),(0,l.kt)("div",{style:{marginBottom:"2rem"}},(0,l.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,l.kt)(b,{mdxType:"Tabs"},(0,l.kt)(h.Z,{label:"OAuth 2.0",value:"oauth2",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Security Scheme Type:"),(0,l.kt)("td",null,"oauth2")),(0,l.kt)("tr",null,(0,l.kt)("th",null,"authorizationCode OAuth Flow:"),(0,l.kt)("td",null,(0,l.kt)("p",null,"Token URL: https://gateway-api.smartbytz.com/ecommerce/oauth2/token"),(0,l.kt)("p",null,"Authorization URL: https://gateway-api.smartbytz.com/ecommerce/oauth2/authorize"),(0,l.kt)("span",null,"Scopes:"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"0: countries:read"),(0,l.kt)("li",null,"1: merchants:read"),(0,l.kt)("li",null,"2: categories:read"),(0,l.kt)("li",null,"3: items:read"),(0,l.kt)("li",null,"4: users:read"),(0,l.kt)("li",null,"5: users:write"),(0,l.kt)("li",null,"6: carts:read"),(0,l.kt)("li",null,"7: carts:write"),(0,l.kt)("li",null,"8: order:read"),(0,l.kt)("li",null,"9: orders:write"),(0,l.kt)("li",null,"10: search:read")))))))))))}T.isMDXComponent=!0}}]);