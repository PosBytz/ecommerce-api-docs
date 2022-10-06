"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[4558],{13884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>y});var a=r(87462),o=(r(67294),r(3905)),i=r(26389),s=r(94891),l=r(74933),n=r(47507),m=(r(24310),r(63303)),d=(r(75035),r(85162));const u={id:"auth-controller-verify-email",title:"AuthController_verifyEmail",description:"AuthController_verifyEmail",sidebar_label:"AuthController_verifyEmail",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthController_verifyEmail",parameters:[{name:"userId",required:!0,in:"query",schema:{type:"string"}},{name:"token",required:!0,in:"query",schema:{type:"string"}}],responses:{200:{description:""},400:{description:"Validation error response",content:{"application/json":{example:'{"statusCode":400,"errors":{"userId":["userId must be a mongodb id"],"token":["token must be a string"]},"message":"Bad Request"}'}}},401:{description:"Invalid token error response",content:{"application/json":{example:'{"statusCode":401,"message":"Invalid token","error":"Unauthorized"}'}}}},tags:["Auth"],security:[{oauth2:["users:read","users:write"]}],description:"AuthController_verifyEmail",method:"get",path:"/v1/auth/email/verify",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/authorize",tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["countries:read","merchants:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","order:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",version:"1.0",contact:{}},postman:{name:"Auth Controller verify Email",description:{type:"text/plain"},url:{path:["v1","auth","email","verify"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},key:"userId",value:""},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},key:"token",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/pos-bytz-e-commerce-api"},p=void 0,c={unversionedId:"auth-controller-verify-email",id:"auth-controller-verify-email",title:"AuthController_verifyEmail",description:"AuthController_verifyEmail",source:"@site/docs/auth-controller-verify-email.api.mdx",sourceDirName:".",slug:"/auth-controller-verify-email",permalink:"/ecommerce-api-docs/docs/auth-controller-verify-email",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/auth-controller-verify-email.api.mdx",tags:[],version:"current",frontMatter:{id:"auth-controller-verify-email",title:"AuthController_verifyEmail",description:"AuthController_verifyEmail",sidebar_label:"AuthController_verifyEmail",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthController_verifyEmail",parameters:[{name:"userId",required:!0,in:"query",schema:{type:"string"}},{name:"token",required:!0,in:"query",schema:{type:"string"}}],responses:{200:{description:""},400:{description:"Validation error response",content:{"application/json":{example:'{"statusCode":400,"errors":{"userId":["userId must be a mongodb id"],"token":["token must be a string"]},"message":"Bad Request"}'}}},401:{description:"Invalid token error response",content:{"application/json":{example:'{"statusCode":401,"message":"Invalid token","error":"Unauthorized"}'}}}},tags:["Auth"],security:[{oauth2:["users:read","users:write"]}],description:"AuthController_verifyEmail",method:"get",path:"/v1/auth/email/verify",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/authorize",tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["countries:read","merchants:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","order:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",version:"1.0",contact:{}},postman:{name:"Auth Controller verify Email",description:{type:"text/plain"},url:{path:["v1","auth","email","verify"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},key:"userId",value:""},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},key:"token",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"AuthController_verifyOtp",permalink:"/ecommerce-api-docs/docs/auth-controller-verify-otp"},next:{title:"Users",permalink:"/ecommerce-api-docs/docs/category/users"}},h={},y=[{value:"AuthController_verifyEmail",id:"authcontroller_verifyemail",level:2}],v={toc:y};function k(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"authcontroller_verifyemail"},"AuthController_verifyEmail"),(0,o.kt)("p",null,"AuthController_verifyEmail"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Query Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(l.Z,{className:"paramsItem",param:{name:"userId",required:!0,in:"query",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,o.kt)(l.Z,{className:"paramsItem",param:{name:"token",required:!0,in:"query",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null),(0,o.kt)("div",null)),(0,o.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Validation error response")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{"statusCode":400,"errors":{"userId":["userId must be a mongodb id"],"token":["token must be a string"]},"message":"Bad Request"}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Invalid token error response")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{"statusCode":401,"message":"Invalid token","error":"Unauthorized"}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);