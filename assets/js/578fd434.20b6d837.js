"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[67],{82200:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>T,frontMatter:()=>m,metadata:()=>c,toc:()=>b});var s=t(87462),o=(t(67294),t(3905)),i=t(26389),r=t(94891),n=(t(74933),t(47507)),d=t(24310),l=t(63303),p=(t(75035),t(85162));const m={id:"update-email",title:"Update Email",description:"This API is used to update the email address of an user.",sidebar_label:"Update Email",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateEmail",description:"This API is used to update the email address of an user.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{email:{type:"string",description:"The email address of the user."}},required:["email"]}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:201,data:{_id:"632c34752269f12c57952273",email:{id:"harish@bytize.com",token:"e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",verified:!1},mobile:{code:"+91",number:"9962794005",verified:!1},createdAt:"2022-09-22T10:09:14.205Z",deletedAt:null,addresses:[],__v:0,otp:{code:214524,createdAt:"2022-09-22T10:09:57.544Z"},dob:"1993-07-05T00:00:00.000Z",gender:"Male",name:"Harish Mohan"}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{email:["email must be an email","email should not be empty"]},message:"Bad Request"}}}},422:{description:"Validation error response",content:{"application/json":{example:{statusCode:422,errors:{email:["The email has already been taken."]}}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"post",path:"/v1/users/email/change",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},jsonRequestBodyExample:{email:"string"},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Email",description:{content:"This API is used to update the email address of an user.",type:"text/plain"},url:{path:["v1","users","email","change"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"pos-bytz-e-commerce-api"},u=void 0,c={unversionedId:"update-email",id:"update-email",title:"Update Email",description:"This API is used to update the email address of an user.",source:"@site/docs/update-email.api.mdx",sourceDirName:".",slug:"/update-email",permalink:"/ecommerce-api-docs/update-email",draft:!1,tags:[],version:"current",frontMatter:{id:"update-email",title:"Update Email",description:"This API is used to update the email address of an user.",sidebar_label:"Update Email",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateEmail",description:"This API is used to update the email address of an user.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{email:{type:"string",description:"The email address of the user."}},required:["email"]}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:201,data:{_id:"632c34752269f12c57952273",email:{id:"harish@bytize.com",token:"e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",verified:!1},mobile:{code:"+91",number:"9962794005",verified:!1},createdAt:"2022-09-22T10:09:14.205Z",deletedAt:null,addresses:[],__v:0,otp:{code:214524,createdAt:"2022-09-22T10:09:57.544Z"},dob:"1993-07-05T00:00:00.000Z",gender:"Male",name:"Harish Mohan"}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{email:["email must be an email","email should not be empty"]},message:"Bad Request"}}}},422:{description:"Validation error response",content:{"application/json":{example:{statusCode:422,errors:{email:["The email has already been taken."]}}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"post",path:"/v1/users/email/change",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},jsonRequestBodyExample:{email:"string"},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Email",description:{content:"This API is used to update the email address of an user.",type:"text/plain"},url:{path:["v1","users","email","change"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Update Profile",permalink:"/ecommerce-api-docs/update-profile"},next:{title:"Update Mobile",permalink:"/ecommerce-api-docs/update-mobile"}},h={},b=[{value:"Update Email",id:"update-email",level:2}],y={toc:b};function T(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,s.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"update-email"},"Update Email"),(0,o.kt)("p",null,"This API is used to update the email address of an user."),(0,o.kt)(r.Z,{mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"email",required:!0,schemaDescription:"The email address of the user.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Success response")),(0,o.kt)("div",null,(0,o.kt)(r.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "statusCode": 201,\n  "data": {\n    "_id": "632c34752269f12c57952273",\n    "email": {\n      "id": "harish@bytize.com",\n      "token": "e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",\n      "verified": false\n    },\n    "mobile": {\n      "code": "+91",\n      "number": "9962794005",\n      "verified": false\n    },\n    "createdAt": "2022-09-22T10:09:14.205Z",\n    "deletedAt": null,\n    "addresses": [],\n    "__v": 0,\n    "otp": {\n      "code": 214524,\n      "createdAt": "2022-09-22T10:09:57.544Z"\n    },\n    "dob": "1993-07-05T00:00:00.000Z",\n    "gender": "Male",\n    "name": "Harish Mohan"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Validation error response")),(0,o.kt)("div",null,(0,o.kt)(r.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "statusCode": 400,\n  "errors": {\n    "email": [\n      "email must be an email",\n      "email should not be empty"\n    ]\n  },\n  "message": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(p.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Validation error response")),(0,o.kt)("div",null,(0,o.kt)(r.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "statusCode": 422,\n  "errors": {\n    "email": [\n      "The email has already been taken."\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);