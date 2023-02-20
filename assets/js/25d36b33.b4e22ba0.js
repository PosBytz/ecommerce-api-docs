"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[1024],{43521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>b});var o=a(87462),r=(a(67294),a(3905)),i=a(26389),s=a(94891),n=(a(74933),a(47507)),d=a(24310),p=a(63303),l=(a(75035),a(85162));const c={id:"update-profile",title:"Update Profile",description:"This API is used to update the basic information of an user.",sidebar_label:"Update Profile",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateProfile",description:"This API is used to update the basic information of an user.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{name:{type:"string",description:"The name of the user."},dob:{type:"string",description:"The date of birth of the user."},gender:{type:"string",description:"The Gender identity of the user."}},required:["name","dob","gender"]}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{_id:"632c34752269f12c57952273",email:{id:"harish@bytize.in",token:"e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",verified:!0},mobile:{code:"+91",number:"9962794005",verified:!1},createdAt:"2022-09-22T10:09:14.205Z",deletedAt:null,addresses:[],__v:0,otp:{code:214524,createdAt:"2022-09-22T10:09:57.544Z"},dob:"1993-07-05T00:00:00.000Z",gender:"Male",name:"Harish Mohan"}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{dob:["dob must be a valid ISO 8601 date string"]},message:"Bad Request"}}}}},tags:["User"],security:[{oauth2:["user:read","user:write"]}],method:"patch",path:"/ecommerce/v1/user/profile",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},jsonRequestBodyExample:{name:"string",dob:"string",gender:"string"},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Profile",description:{content:"This API is used to update the basic information of an user.",type:"text/plain"},url:{path:["ecommerce","v1","user","profile"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"patch api-method",info_path:"pos-bytz-e-commerce-api"},u=void 0,m={unversionedId:"update-profile",id:"update-profile",title:"Update Profile",description:"This API is used to update the basic information of an user.",source:"@site/docs/update-profile.api.mdx",sourceDirName:".",slug:"/update-profile",permalink:"/ecommerce-api-docs/update-profile",draft:!1,tags:[],version:"current",frontMatter:{id:"update-profile",title:"Update Profile",description:"This API is used to update the basic information of an user.",sidebar_label:"Update Profile",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateProfile",description:"This API is used to update the basic information of an user.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{name:{type:"string",description:"The name of the user."},dob:{type:"string",description:"The date of birth of the user."},gender:{type:"string",description:"The Gender identity of the user."}},required:["name","dob","gender"]}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{_id:"632c34752269f12c57952273",email:{id:"harish@bytize.in",token:"e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",verified:!0},mobile:{code:"+91",number:"9962794005",verified:!1},createdAt:"2022-09-22T10:09:14.205Z",deletedAt:null,addresses:[],__v:0,otp:{code:214524,createdAt:"2022-09-22T10:09:57.544Z"},dob:"1993-07-05T00:00:00.000Z",gender:"Male",name:"Harish Mohan"}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{dob:["dob must be a valid ISO 8601 date string"]},message:"Bad Request"}}}}},tags:["User"],security:[{oauth2:["user:read","user:write"]}],method:"patch",path:"/ecommerce/v1/user/profile",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["country:read","store:read","category:read","item:read","user:read","user:write","cart:read","cart:write","order:read","order:write","search:read","reviews: read","reviews: write","brand:read"]}}}},jsonRequestBodyExample:{name:"string",dob:"string",gender:"string"},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Profile",description:{content:"This API is used to update the basic information of an user.",type:"text/plain"},url:{path:["ecommerce","v1","user","profile"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"patch api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Delete Address",permalink:"/ecommerce-api-docs/delete-address"},next:{title:"Update Email",permalink:"/ecommerce-api-docs/update-email"}},h={},b=[{value:"Update Profile",id:"update-profile",level:2}],f={toc:b};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"update-profile"},"Update Profile"),(0,r.kt)("p",null,"This API is used to update the basic information of an user."),(0,r.kt)(s.Z,{mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaDescription:"The name of the user.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"dob",required:!0,schemaDescription:"The date of birth of the user.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"gender",required:!0,schemaDescription:"The Gender identity of the user.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Success response")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "statusCode": 200,\n  "data": {\n    "_id": "632c34752269f12c57952273",\n    "email": {\n      "id": "harish@bytize.in",\n      "token": "e9b346d5610346249444f0dad8ff6212ec105e6881675885b2736ecd9d89243b",\n      "verified": true\n    },\n    "mobile": {\n      "code": "+91",\n      "number": "9962794005",\n      "verified": false\n    },\n    "createdAt": "2022-09-22T10:09:14.205Z",\n    "deletedAt": null,\n    "addresses": [],\n    "__v": 0,\n    "otp": {\n      "code": 214524,\n      "createdAt": "2022-09-22T10:09:57.544Z"\n    },\n    "dob": "1993-07-05T00:00:00.000Z",\n    "gender": "Male",\n    "name": "Harish Mohan"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation error response")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "statusCode": 400,\n  "errors": {\n    "dob": [\n      "dob must be a valid ISO 8601 date string"\n    ]\n  },\n  "message": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);