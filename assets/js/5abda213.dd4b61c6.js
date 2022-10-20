"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[625],{91736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var s=r(87462),a=(r(67294),r(3905)),i=r(26389),o=r(94891),d=r(74933),l=r(47507),n=(r(24310),r(63303)),p=(r(75035),r(85162));const u={id:"get-orders",title:"Get Orders",description:"This API is used to retrieve a full list of Orders.",sidebar_label:"Get Orders",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getOrders",description:"This API is used to retrieve a full list of Orders.",parameters:[{name:"page",required:!1,in:"query",description:"By default first page will be listed. For navigating through pages, use the page parameter.",schema:{default:1,type:"number"}},{name:"limit",required:!1,in:"query",description:"The number of results to return per request.",schema:{default:20,type:"number"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,message:"Success"}}}}},tags:["Orders"],security:[{oauth2:["orders:read","orders:write"]}],method:"get",path:"/v1/orders",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Get Orders",description:{content:"This API is used to retrieve a full list of Orders.",type:"text/plain"},url:{path:["v1","orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"By default first page will be listed. For navigating through pages, use the page parameter.",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"The number of results to return per request.",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},c=void 0,m={unversionedId:"get-orders",id:"get-orders",title:"Get Orders",description:"This API is used to retrieve a full list of Orders.",source:"@site/docs/get-orders.api.mdx",sourceDirName:".",slug:"/get-orders",permalink:"/ecommerce-api-docs/get-orders",draft:!1,tags:[],version:"current",frontMatter:{id:"get-orders",title:"Get Orders",description:"This API is used to retrieve a full list of Orders.",sidebar_label:"Get Orders",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getOrders",description:"This API is used to retrieve a full list of Orders.",parameters:[{name:"page",required:!1,in:"query",description:"By default first page will be listed. For navigating through pages, use the page parameter.",schema:{default:1,type:"number"}},{name:"limit",required:!1,in:"query",description:"The number of results to return per request.",schema:{default:20,type:"number"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,message:"Success"}}}}},tags:["Orders"],security:[{oauth2:["orders:read","orders:write"]}],method:"get",path:"/v1/orders",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Get Orders",description:{content:"This API is used to retrieve a full list of Orders.",type:"text/plain"},url:{path:["v1","orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"By default first page will be listed. For navigating through pages, use the page parameter.",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"The number of results to return per request.",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Orders",permalink:"/ecommerce-api-docs/category/orders"},next:{title:"Create Order",permalink:"/ecommerce-api-docs/create-order"}},h={},g=[{value:"Get Orders",id:"get-orders",level:2}],y={toc:g};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-orders"},"Get Orders"),(0,a.kt)("p",null,"This API is used to retrieve a full list of Orders."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"page",required:!1,in:"query",description:"By default first page will be listed. For navigating through pages, use the page parameter.",schema:{default:1,type:"number"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"limit",required:!1,in:"query",description:"The number of results to return per request.",schema:{default:20,type:"number"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Success response")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(n.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "statusCode": 200,\n  "message": "Success"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);