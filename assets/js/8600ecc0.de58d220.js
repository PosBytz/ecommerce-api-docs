"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[678],{64830:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var o=s(87462),a=(s(67294),s(3905)),r=s(26389),i=s(94891),n=(s(74933),s(47507)),p=s(24310),d=s(63303),m=(s(75035),s(85162));const c={id:"forgot-password",title:"Forgot password",description:"This API is used to change the customer password.",sidebar_label:"Forgot password",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"forgotPassword",description:"This API is used to change the customer password.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{email:{type:"string"},mobile:{type:"object",properties:{code:{type:"string",description:"Unique numeric country code"},number:{type:"string",description:"The valid phone number of the customer."}},required:["code","number"]}}}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzJjMzQ3NTIyNjlmMTJjNTc5NTIyNzMiLCJpYXQiOjE2NjM4NDMyODAsImV4cCI6MTY2Mzg0Njg4MH0.zo2mIgKO_uHYiENpSPhOfMJf_zZFQb66BhB4sjU0Lec",tokenType:"Bearer",expiresIn:3600}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{email:["email must be an email"],mobile:{number:["number must be a valid phone number"]}},message:"Bad Request"}}}}},tags:["Auth"],security:[{oauth2:["users:read","users:write"]}],method:"post",path:"/v1/auth/password/forgot",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},jsonRequestBodyExample:{email:"string",mobile:{code:"string",number:"string"}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Forgot password",description:{content:"This API is used to change the customer password.",type:"text/plain"},url:{path:["v1","auth","password","forgot"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"pos-bytz-e-commerce-api"},l=void 0,u={unversionedId:"forgot-password",id:"forgot-password",title:"Forgot password",description:"This API is used to change the customer password.",source:"@site/docs/forgot-password.api.mdx",sourceDirName:".",slug:"/forgot-password",permalink:"/ecommerce-api-docs/forgot-password",draft:!1,tags:[],version:"current",frontMatter:{id:"forgot-password",title:"Forgot password",description:"This API is used to change the customer password.",sidebar_label:"Forgot password",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"forgotPassword",description:"This API is used to change the customer password.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{email:{type:"string"},mobile:{type:"object",properties:{code:{type:"string",description:"Unique numeric country code"},number:{type:"string",description:"The valid phone number of the customer."}},required:["code","number"]}}}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzJjMzQ3NTIyNjlmMTJjNTc5NTIyNzMiLCJpYXQiOjE2NjM4NDMyODAsImV4cCI6MTY2Mzg0Njg4MH0.zo2mIgKO_uHYiENpSPhOfMJf_zZFQb66BhB4sjU0Lec",tokenType:"Bearer",expiresIn:3600}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{email:["email must be an email"],mobile:{number:["number must be a valid phone number"]}},message:"Bad Request"}}}}},tags:["Auth"],security:[{oauth2:["users:read","users:write"]}],method:"post",path:"/v1/auth/password/forgot",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},jsonRequestBodyExample:{email:"string",mobile:{code:"string",number:"string"}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Forgot password",description:{content:"This API is used to change the customer password.",type:"text/plain"},url:{path:["v1","auth","password","forgot"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Email Verification",permalink:"/ecommerce-api-docs/verify-email"},next:{title:"Users",permalink:"/ecommerce-api-docs/category/users"}},h={},y=[{value:"Forgot password",id:"forgot-password",level:2}],g={toc:y};function b(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"forgot-password"},"Forgot password"),(0,a.kt)("p",null,"This API is used to change the customer password."),(0,a.kt)(i.Z,{mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"email",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"mobile"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"code",required:!0,schemaDescription:"Unique numeric country code",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"number",required:!0,schemaDescription:"The valid phone number of the customer.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Success response")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "statusCode": 200,\n  "data": {\n    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzJjMzQ3NTIyNjlmMTJjNTc5NTIyNzMiLCJpYXQiOjE2NjM4NDMyODAsImV4cCI6MTY2Mzg0Njg4MH0.zo2mIgKO_uHYiENpSPhOfMJf_zZFQb66BhB4sjU0Lec",\n    "tokenType": "Bearer",\n    "expiresIn": 3600\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Validation error response")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "statusCode": 400,\n  "errors": {\n    "email": [\n      "email must be an email"\n    ],\n    "mobile": {\n      "number": [\n        "number must be a valid phone number"\n      ]\n    }\n  },\n  "message": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);