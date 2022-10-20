"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[714],{83745:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>b});var s=t(87462),o=(t(67294),t(3905)),i=t(26389),r=t(94891),d=t(74933),n=t(47507),c=(t(24310),t(63303)),l=(t(75035),t(85162));const p={id:"update-user-social-data",title:"Update Social Data",description:"This API is used to update the social media information of an user.",sidebar_label:"Update Social Data",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateUserSocialData",description:"This API is used to update the social media information of an user.",parameters:[{name:"platform",required:!0,in:"path",description:"The social media platform, such as facebook.",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{_id:"632c78d94bdbb11808d5bf32",email:{id:"harish@bytize.in",token:"68fc2fc55b33c76048c00ea826e36d483edadd5d0db6ffc70921b999db3a50ce",verified:!0},mobile:{code:"+91",number:"9962794004",verified:!1},createdAt:"2022-09-22T15:01:09.098Z",deletedAt:null,addresses:[],otp:{code:929664,createdAt:"2022-09-22T15:01:45.699Z"},social:{facebook:{name:"Harish Mohan",dob:"1993-07-05",gender:"Male"}}}}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"patch",path:"/v1/users/social/{platform}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Social Data",description:{content:"This API is used to update the social media information of an user.",type:"text/plain"},url:{path:["v1","users","social",":platform"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The social media platform, such as facebook.",type:"text/plain"},type:"any",value:"",key:"platform"}]},header:[{key:"Accept",value:"application/json"}],method:"PATCH",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"patch api-method",info_path:"pos-bytz-e-commerce-api"},u=void 0,m={unversionedId:"update-user-social-data",id:"update-user-social-data",title:"Update Social Data",description:"This API is used to update the social media information of an user.",source:"@site/docs/update-user-social-data.api.mdx",sourceDirName:".",slug:"/update-user-social-data",permalink:"/update-user-social-data",draft:!1,tags:[],version:"current",frontMatter:{id:"update-user-social-data",title:"Update Social Data",description:"This API is used to update the social media information of an user.",sidebar_label:"Update Social Data",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateUserSocialData",description:"This API is used to update the social media information of an user.",parameters:[{name:"platform",required:!0,in:"path",description:"The social media platform, such as facebook.",schema:{type:"string"}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{_id:"632c78d94bdbb11808d5bf32",email:{id:"harish@bytize.in",token:"68fc2fc55b33c76048c00ea826e36d483edadd5d0db6ffc70921b999db3a50ce",verified:!0},mobile:{code:"+91",number:"9962794004",verified:!1},createdAt:"2022-09-22T15:01:09.098Z",deletedAt:null,addresses:[],otp:{code:929664,createdAt:"2022-09-22T15:01:45.699Z"},social:{facebook:{name:"Harish Mohan",dob:"1993-07-05",gender:"Male"}}}}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"patch",path:"/v1/users/social/{platform}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Social Data",description:{content:"This API is used to update the social media information of an user.",type:"text/plain"},url:{path:["v1","users","social",":platform"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The social media platform, such as facebook.",type:"text/plain"},type:"any",value:"",key:"platform"}]},header:[{key:"Accept",value:"application/json"}],method:"PATCH",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"patch api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Update Password",permalink:"/update-password"},next:{title:"Delete User",permalink:"/delete-user"}},h={},b=[{value:"Update Social Data",id:"update-social-data",level:2}],f={toc:b};function y(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,s.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"update-social-data"},"Update Social Data"),(0,o.kt)("p",null,"This API is used to update the social media information of an user."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(d.Z,{className:"paramsItem",param:{name:"platform",required:!0,in:"path",description:"The social media platform, such as facebook.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Success response")),(0,o.kt)("div",null,(0,o.kt)(r.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "statusCode": 200,\n  "data": {\n    "_id": "632c78d94bdbb11808d5bf32",\n    "email": {\n      "id": "harish@bytize.in",\n      "token": "68fc2fc55b33c76048c00ea826e36d483edadd5d0db6ffc70921b999db3a50ce",\n      "verified": true\n    },\n    "mobile": {\n      "code": "+91",\n      "number": "9962794004",\n      "verified": false\n    },\n    "createdAt": "2022-09-22T15:01:09.098Z",\n    "deletedAt": null,\n    "addresses": [],\n    "otp": {\n      "code": 929664,\n      "createdAt": "2022-09-22T15:01:45.699Z"\n    },\n    "social": {\n      "facebook": {\n        "name": "Harish Mohan",\n        "dob": "1993-07-05",\n        "gender": "Male"\n      }\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);