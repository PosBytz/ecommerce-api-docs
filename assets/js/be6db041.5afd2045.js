"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[870],{49453:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>h});var a=s(87462),r=(s(67294),s(3905)),o=s(26389),i=s(94891),n=(s(74933),s(47507)),d=(s(24310),s(63303)),l=(s(75035),s(85162));const u={id:"delete-user",title:"Delete User",description:"This API is used to delete an existing user.",sidebar_label:"Delete User",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"deleteUser",description:"This API is used to delete an existing user.",parameters:[],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,message:"Success"}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"delete",path:"/v1/users",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Delete User",description:{content:"This API is used to delete an existing user.",type:"text/plain"},url:{path:["v1","users"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"pos-bytz-e-commerce-api"},p=void 0,c={unversionedId:"delete-user",id:"delete-user",title:"Delete User",description:"This API is used to delete an existing user.",source:"@site/docs/delete-user.api.mdx",sourceDirName:".",slug:"/delete-user",permalink:"/delete-user",draft:!1,tags:[],version:"current",frontMatter:{id:"delete-user",title:"Delete User",description:"This API is used to delete an existing user.",sidebar_label:"Delete User",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"deleteUser",description:"This API is used to delete an existing user.",parameters:[],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,message:"Success"}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"delete",path:"/v1/users",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Delete User",description:{content:"This API is used to delete an existing user.",type:"text/plain"},url:{path:["v1","users"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Update Social Data",permalink:"/update-user-social-data"},next:{title:"Search",permalink:"/category/search"}},m={},h=[{value:"Delete User",id:"delete-user",level:2}],y={toc:h};function b(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"delete-user"},"Delete User"),(0,r.kt)("p",null,"This API is used to delete an existing user."),(0,r.kt)("div",null,(0,r.kt)(o.Z,{mdxType:"ApiTabs"},(0,r.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Success response")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "statusCode": 200,\n  "message": "Success"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);