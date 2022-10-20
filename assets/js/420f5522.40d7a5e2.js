"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[81],{22578:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var r=a(87462),s=(a(67294),a(3905)),o=a(26389),i=a(94891),n=a(74933),d=a(47507),c=(a(24310),a(63303)),l=(a(75035),a(85162));const p={id:"get-cart",title:"Get Cart",description:"This API is used to retrieve the details of the cart.",sidebar_label:"Get Cart",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getCart",description:"This API is used to retrieve the details of the cart.",parameters:[{name:"cartId",required:!0,in:"query",description:"The unique id of the cart.",schema:{}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{_id:"632488c1d491729ad937ac7d",locationId:1364,bill:{subtotal:200,tax:0,taxes:[],discount:0,discounts:[],charge:0,charges:[],roundOff:0,total:200},items:[],__v:0}}}}},404:{description:"Cart not found error response",content:{"application/json":{example:{statusCode:404,message:"cart not found",error:"Not Found"}}}}},tags:["Carts"],security:[{oauth2:["carts:read","carts:write"]}],method:"get",path:"/v1/carts",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Get Cart",description:{content:"This API is used to retrieve the details of the cart.",type:"text/plain"},url:{path:["v1","carts"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The unique id of the cart.",type:"text/plain"},key:"cartId",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},u=void 0,m={unversionedId:"get-cart",id:"get-cart",title:"Get Cart",description:"This API is used to retrieve the details of the cart.",source:"@site/docs/get-cart.api.mdx",sourceDirName:".",slug:"/get-cart",permalink:"/ecommerce-api-docs/get-cart",draft:!1,tags:[],version:"current",frontMatter:{id:"get-cart",title:"Get Cart",description:"This API is used to retrieve the details of the cart.",sidebar_label:"Get Cart",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getCart",description:"This API is used to retrieve the details of the cart.",parameters:[{name:"cartId",required:!0,in:"query",description:"The unique id of the cart.",schema:{}}],responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,data:{_id:"632488c1d491729ad937ac7d",locationId:1364,bill:{subtotal:200,tax:0,taxes:[],discount:0,discounts:[],charge:0,charges:[],roundOff:0,total:200},items:[],__v:0}}}}},404:{description:"Cart not found error response",content:{"application/json":{example:{statusCode:404,message:"cart not found",error:"Not Found"}}}}},tags:["Carts"],security:[{oauth2:["carts:read","carts:write"]}],method:"get",path:"/v1/carts",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Get Cart",description:{content:"This API is used to retrieve the details of the cart.",type:"text/plain"},url:{path:["v1","carts"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The unique id of the cart.",type:"text/plain"},key:"cartId",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Carts",permalink:"/ecommerce-api-docs/category/carts"},next:{title:"Delete Cart",permalink:"/ecommerce-api-docs/delete-cart"}},h={},y=[{value:"Get Cart",id:"get-cart",level:2}],b={toc:y};function g(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-cart"},"Get Cart"),(0,s.kt)("p",null,"This API is used to retrieve the details of the cart."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"cartId",required:!0,in:"query",description:"The unique id of the cart.",schema:{}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Success response")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "statusCode": 200,\n  "data": {\n    "_id": "632488c1d491729ad937ac7d",\n    "locationId": 1364,\n    "bill": {\n      "subtotal": 200,\n      "tax": 0,\n      "taxes": [],\n      "discount": 0,\n      "discounts": [],\n      "charge": 0,\n      "charges": [],\n      "roundOff": 0,\n      "total": 200\n    },\n    "items": [],\n    "__v": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(l.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Cart not found error response")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "statusCode": 404,\n  "message": "cart not found",\n  "error": "Not Found"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);