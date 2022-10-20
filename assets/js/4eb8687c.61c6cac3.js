"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[980],{9949:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>m,toc:()=>y});var a=t(87462),r=(t(67294),t(3905)),d=t(26389),i=t(94891),o=t(74933),n=t(47507),l=(t(24310),t(63303)),p=(t(75035),t(85162));const u={id:"delete-address",title:"Delete Address",description:"This API is used to delete the address for an existing user.",sidebar_label:"Delete Address",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"deleteAddress",description:"This API is used to delete the address for an existing user.",parameters:[{name:"id",required:!0,in:"path",description:"The unique ID of the user address.",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:[]}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"delete",path:"/v1/users/address/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Delete Address",description:{content:"This API is used to delete the address for an existing user.",type:"text/plain"},url:{path:["v1","users","address",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The unique ID of the user address.",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"pos-bytz-e-commerce-api"},c=void 0,m={unversionedId:"delete-address",id:"delete-address",title:"Delete Address",description:"This API is used to delete the address for an existing user.",source:"@site/docs/delete-address.api.mdx",sourceDirName:".",slug:"/delete-address",permalink:"/delete-address",draft:!1,tags:[],version:"current",frontMatter:{id:"delete-address",title:"Delete Address",description:"This API is used to delete the address for an existing user.",sidebar_label:"Delete Address",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"deleteAddress",description:"This API is used to delete the address for an existing user.",parameters:[{name:"id",required:!0,in:"path",description:"The unique ID of the user address.",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:[]}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"delete",path:"/v1/users/address/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Delete Address",description:{content:"This API is used to delete the address for an existing user.",type:"text/plain"},url:{path:["v1","users","address",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The unique ID of the user address.",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Update Address",permalink:"/update-address"},next:{title:"Update Profile",permalink:"/update-profile"}},h={},y=[{value:"Delete Address",id:"delete-address",level:2}],b={toc:y};function k(e){let{components:s,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,t,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"delete-address"},"Delete Address"),(0,r.kt)("p",null,"This API is used to delete the address for an existing user."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The unique ID of the user address.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(d.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Success response")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "statusCode": 200,\n  "data": []\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);