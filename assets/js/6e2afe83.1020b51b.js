"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[744],{66168:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var r=a(87462),s=(a(67294),a(3905)),o=a(26389),d=a(94891),i=a(74933),n=a(47507),p=a(24310),l=a(63303),u=(a(75035),a(85162));const m={id:"update-order",title:"Update Order",description:"This API helps you to update an existing order.",sidebar_label:"Update Order",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateOrder",description:"This API helps you to update an existing order.",parameters:[{name:"orderId",required:!0,in:"path",description:"The unique id of the order.",schema:{type:"string"}}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{orderStatus:{type:"string",description:"Status of the Order.",enum:["pending","complete"]},payments:{type:"array",items:{type:"object",properties:{paymentMethodId:{type:"number",description:"Unique identifier of the Payment method used."},status:{type:"string",description:"Status of the order.",enum:["pending","complete","refunded"]}},required:["paymentMethodId","status"]}}},required:["orderStatus","payments"]}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,message:"Success"}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,message:"Bad Request"}}}}},tags:["Orders"],security:[{oauth2:["orders:read","orders:write"]}],method:"patch",path:"/v1/orders/{orderId}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},jsonRequestBodyExample:{orderStatus:"pending",payments:[{paymentMethodId:0,status:"pending"}]},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Order",description:{content:"This API helps you to update an existing order.",type:"text/plain"},url:{path:["v1","orders",":orderId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The unique id of the order.",type:"text/plain"},type:"any",value:"",key:"orderId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"patch api-method",info_path:"pos-bytz-e-commerce-api"},c=void 0,y={unversionedId:"update-order",id:"update-order",title:"Update Order",description:"This API helps you to update an existing order.",source:"@site/docs/update-order.api.mdx",sourceDirName:".",slug:"/update-order",permalink:"/ecommerce-api-docs/update-order",draft:!1,tags:[],version:"current",frontMatter:{id:"update-order",title:"Update Order",description:"This API helps you to update an existing order.",sidebar_label:"Update Order",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateOrder",description:"This API helps you to update an existing order.",parameters:[{name:"orderId",required:!0,in:"path",description:"The unique id of the order.",schema:{type:"string"}}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{orderStatus:{type:"string",description:"Status of the Order.",enum:["pending","complete"]},payments:{type:"array",items:{type:"object",properties:{paymentMethodId:{type:"number",description:"Unique identifier of the Payment method used."},status:{type:"string",description:"Status of the order.",enum:["pending","complete","refunded"]}},required:["paymentMethodId","status"]}}},required:["orderStatus","payments"]}}}},responses:{200:{description:"Success response",content:{"application/json":{example:{statusCode:200,message:"Success"}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,message:"Bad Request"}}}}},tags:["Orders"],security:[{oauth2:["orders:read","orders:write"]}],method:"patch",path:"/v1/orders/{orderId}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},jsonRequestBodyExample:{orderStatus:"pending",payments:[{paymentMethodId:0,status:"pending"}]},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Update Order",description:{content:"This API helps you to update an existing order.",type:"text/plain"},url:{path:["v1","orders",":orderId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The unique id of the order.",type:"text/plain"},type:"any",value:"",key:"orderId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"patch api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Create Order",permalink:"/ecommerce-api-docs/create-order"},next:{title:"Carts",permalink:"/ecommerce-api-docs/category/carts"}},h={},g=[{value:"Update Order",id:"update-order",level:2}],b={toc:g};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"update-order"},"Update Order"),(0,s.kt)("p",null,"This API helps you to update an existing order."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(i.Z,{className:"paramsItem",param:{name:"orderId",required:!0,in:"path",description:"The unique id of the order.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(d.Z,{mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"orderStatus",required:!0,schemaDescription:"Status of the Order.",schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `complete`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"payments"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"paymentMethodId",required:!0,schemaDescription:"Unique identifier of the Payment method used.",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"status",required:!0,schemaDescription:"Status of the order.",schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `complete`, `refunded`]",defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Success response")),(0,s.kt)("div",null,(0,s.kt)(d.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "statusCode": 200,\n  "message": "Success"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(u.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation error response")),(0,s.kt)("div",null,(0,s.kt)(d.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "statusCode": 400,\n  "message": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);