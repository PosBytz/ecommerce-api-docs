"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[200],{46800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>c,toc:()=>b});var s=a(87462),o=(a(67294),a(3905)),r=a(26389),i=a(94891),n=(a(74933),a(47507)),l=a(24310),p=a(63303),d=(a(75035),a(85162));const u={id:"customer-signup",title:"Customer Signup",description:"This API allows to sign up for a new account.",sidebar_label:"Customer Signup",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"customerSignup",description:"This API allows to sign up for a new account.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{email:{type:"string",description:"The email address of the customer."},mobile:{description:"The valid phone number of the customer.",allOf:[{type:"object",properties:{code:{type:"string",description:"Unique numeric country code"},number:{type:"string",description:"The valid phone number of the customer."}},required:["code","number"]}]},password:{type:"string",minLength:8,maxLength:32,description:"The password of the customer, should be greater than or equal to 8 characters and less than or equal to 32 characters."}},required:["password"]}}}},responses:{201:{description:"Success response",content:{"application/json":{example:{statusCode:201,data:{email:{id:"harish@bytize.in",token:"e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",verified:!1},mobile:{code:"+91",number:"9962794005",verified:!1},createdAt:"2022-09-22T10:09:14.205Z",deletedAt:null,_id:"632c34752269f12c57952275",addresses:[]}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{email:["email must be an email"],mobile:{number:["number must be a valid phone number"]},password:["password must be longer than or equal to 8 characters"]},message:"Bad Request"}}}},422:{description:"Validation error response",content:{"application/json":{example:{statusCode:422,errors:{email:["Email already exists"]}}}}}},tags:["Auth"],security:[{oauth2:["users:read","users:write"]}],method:"post",path:"/v1/auth/signup",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},jsonRequestBodyExample:{email:"string",mobile:{code:"string",number:"string"},password:"string"},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Customer Signup",description:{content:"This API allows to sign up for a new account.",type:"text/plain"},url:{path:["v1","auth","signup"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"pos-bytz-e-commerce-api"},m=void 0,c={unversionedId:"customer-signup",id:"customer-signup",title:"Customer Signup",description:"This API allows to sign up for a new account.",source:"@site/docs/customer-signup.api.mdx",sourceDirName:".",slug:"/customer-signup",permalink:"/customer-signup",draft:!1,tags:[],version:"current",frontMatter:{id:"customer-signup",title:"Customer Signup",description:"This API allows to sign up for a new account.",sidebar_label:"Customer Signup",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"customerSignup",description:"This API allows to sign up for a new account.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{email:{type:"string",description:"The email address of the customer."},mobile:{description:"The valid phone number of the customer.",allOf:[{type:"object",properties:{code:{type:"string",description:"Unique numeric country code"},number:{type:"string",description:"The valid phone number of the customer."}},required:["code","number"]}]},password:{type:"string",minLength:8,maxLength:32,description:"The password of the customer, should be greater than or equal to 8 characters and less than or equal to 32 characters."}},required:["password"]}}}},responses:{201:{description:"Success response",content:{"application/json":{example:{statusCode:201,data:{email:{id:"harish@bytize.in",token:"e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",verified:!1},mobile:{code:"+91",number:"9962794005",verified:!1},createdAt:"2022-09-22T10:09:14.205Z",deletedAt:null,_id:"632c34752269f12c57952275",addresses:[]}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{email:["email must be an email"],mobile:{number:["number must be a valid phone number"]},password:["password must be longer than or equal to 8 characters"]},message:"Bad Request"}}}},422:{description:"Validation error response",content:{"application/json":{example:{statusCode:422,errors:{email:["Email already exists"]}}}}}},tags:["Auth"],security:[{oauth2:["users:read","users:write"]}],method:"post",path:"/v1/auth/signup",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},jsonRequestBodyExample:{email:"string",mobile:{code:"string",number:"string"},password:"string"},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Customer Signup",description:{content:"This API allows to sign up for a new account.",type:"text/plain"},url:{path:["v1","auth","signup"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Auth",permalink:"/category/auth"},next:{title:"Customer Signin",permalink:"/customer-signin"}},h={},b=[{value:"Customer Signup",id:"customer-signup",level:2}],g={toc:b};function y(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"customer-signup"},"Customer Signup"),(0,o.kt)("p",null,"This API allows to sign up for a new account."),(0,o.kt)(i.Z,{mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"email",required:!1,schemaDescription:"The email address of the customer.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"mobile"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"code",required:!0,schemaDescription:"Unique numeric country code",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"number",required:!0,schemaDescription:"The valid phone number of the customer.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(l.Z,{collapsible:!1,name:"password",required:!0,schemaDescription:"The password of the customer, should be greater than or equal to 8 characters and less than or equal to 32 characters.",schemaName:"string",qualifierMessage:"**Possible values:** `>= 8 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(r.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Success response")),(0,o.kt)("div",null,(0,o.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(p.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "statusCode": 201,\n  "data": {\n    "email": {\n      "id": "harish@bytize.in",\n      "token": "e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",\n      "verified": false\n    },\n    "mobile": {\n      "code": "+91",\n      "number": "9962794005",\n      "verified": false\n    },\n    "createdAt": "2022-09-22T10:09:14.205Z",\n    "deletedAt": null,\n    "_id": "632c34752269f12c57952275",\n    "addresses": []\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Validation error response")),(0,o.kt)("div",null,(0,o.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(p.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "statusCode": 400,\n  "errors": {\n    "email": [\n      "email must be an email"\n    ],\n    "mobile": {\n      "number": [\n        "number must be a valid phone number"\n      ]\n    },\n    "password": [\n      "password must be longer than or equal to 8 characters"\n    ]\n  },\n  "message": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(d.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Validation error response")),(0,o.kt)("div",null,(0,o.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(p.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "statusCode": 422,\n  "errors": {\n    "email": [\n      "Email already exists"\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);