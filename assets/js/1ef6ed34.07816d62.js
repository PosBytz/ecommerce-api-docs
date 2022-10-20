"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[912],{46197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var s=a(87462),r=(a(67294),a(3905)),n=a(26389),i=a(94891),o=(a(74933),a(47507)),d=a(24310),c=a(63303),l=(a(75035),a(85162));const p={id:"create-address",title:"Create Address",description:"This API is used to  create a new address for an user.",sidebar_label:"Create Address",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"createAddress",description:"This API is used to  create a new address for an user.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{annotation:{type:"string",description:"Type of address such as home or work."},line:{type:"string",description:"The line of the address. Typically the street address, number of the apartment, suite. "},area:{type:"string",description:"The name of the area in the city."},city:{type:"string",description:"The name of the city or district."},state:{type:"string",description:"The region of the address, such as the province or state."},country:{type:"string",description:"The name of the country."},zip:{type:"string",description:"The zip or postal code of the address."},landmark:{type:"string",description:"The nearest landmark to recognize the address."},coordinates:{description:"The two numbers are a location&apos;s latitude number and its longitude number.",type:"array",items:{type:"number"}},default:{type:"boolean",default:!1,description:"The default address to use."}},required:["annotation","line","area","city","state","country","zip","landmark","coordinates"]}}}},responses:{201:{description:"Success response",content:{"application/json":{example:{statusCode:201,data:{annotation:"Home",line:"Plot No 52, Balakrishna Nagar, 1st Street, Thiruninravur",area:"Thiruninravur",city:"Chennai",state:"Tamil Nadu",country:"India",zip:"602024",landmark:"Near Kamban Park",coordinates:[0,0],default:!1,_id:"632c5839b5f554ad3047e13a"}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{annotation:["annotation must be a string"],line:["line must be a string"],area:["area must be a string"],city:["city must be a string"],state:["state must be a string"],country:["country must be a string"],zip:["zip must be a string"],landmark:["landmark must be a string"],coordinates:["coordinates should not be empty"]},message:"Bad Request"}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"post",path:"/v1/users/address",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},jsonRequestBodyExample:{annotation:"string",line:"string",area:"string",city:"string",state:"string",country:"string",zip:"string",landmark:"string",coordinates:[0],default:!1},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Create Address",description:{content:"This API is used to  create a new address for an user.",type:"text/plain"},url:{path:["v1","users","address"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"pos-bytz-e-commerce-api"},u=void 0,m={unversionedId:"create-address",id:"create-address",title:"Create Address",description:"This API is used to  create a new address for an user.",source:"@site/docs/create-address.api.mdx",sourceDirName:".",slug:"/create-address",permalink:"/ecommerce-api-docs/create-address",draft:!1,tags:[],version:"current",frontMatter:{id:"create-address",title:"Create Address",description:"This API is used to  create a new address for an user.",sidebar_label:"Create Address",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"createAddress",description:"This API is used to  create a new address for an user.",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{annotation:{type:"string",description:"Type of address such as home or work."},line:{type:"string",description:"The line of the address. Typically the street address, number of the apartment, suite. "},area:{type:"string",description:"The name of the area in the city."},city:{type:"string",description:"The name of the city or district."},state:{type:"string",description:"The region of the address, such as the province or state."},country:{type:"string",description:"The name of the country."},zip:{type:"string",description:"The zip or postal code of the address."},landmark:{type:"string",description:"The nearest landmark to recognize the address."},coordinates:{description:"The two numbers are a location&apos;s latitude number and its longitude number.",type:"array",items:{type:"number"}},default:{type:"boolean",default:!1,description:"The default address to use."}},required:["annotation","line","area","city","state","country","zip","landmark","coordinates"]}}}},responses:{201:{description:"Success response",content:{"application/json":{example:{statusCode:201,data:{annotation:"Home",line:"Plot No 52, Balakrishna Nagar, 1st Street, Thiruninravur",area:"Thiruninravur",city:"Chennai",state:"Tamil Nadu",country:"India",zip:"602024",landmark:"Near Kamban Park",coordinates:[0,0],default:!1,_id:"632c5839b5f554ad3047e13a"}}}}},400:{description:"Validation error response",content:{"application/json":{example:{statusCode:400,errors:{annotation:["annotation must be a string"],line:["line must be a string"],area:["area must be a string"],city:["city must be a string"],state:["state must be a string"],country:["country must be a string"],zip:["zip must be a string"],landmark:["landmark must be a string"],coordinates:["coordinates should not be empty"]},message:"Bad Request"}}}}},tags:["Users"],security:[{oauth2:["users:read","users:write"]}],method:"post",path:"/v1/users/address",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{clientCredentials:{tokenUrl:"https://gateway-api.posbytz.com/ecommerce/oauth2/token",scopes:["store:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","orders:read","orders:write","search:read"]}}}},jsonRequestBodyExample:{annotation:"string",line:"string",area:"string",city:"string",state:"string",country:"string",zip:"string",landmark:"string",coordinates:[0],default:!1},info:{title:"PosBytz E-Commerce API",description:"Whether you&apos;re building a custom-branded storefront or looking for ways to extend Posbytz, the following guide will help you achieve your goals.",version:"1.0",contact:{}},postman:{name:"Create Address",description:{content:"This API is used to  create a new address for an user.",type:"text/plain"},url:{path:["v1","users","address"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"Users",permalink:"/ecommerce-api-docs/category/users"},next:{title:"Get Address",permalink:"/ecommerce-api-docs/get-addresses"}},h={},y=[{value:"Create Address",id:"create-address",level:2}],g={toc:y};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-address"},"Create Address"),(0,r.kt)("p",null,"This API is used to  create a new address for an user."),(0,r.kt)(i.Z,{mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"annotation",required:!0,schemaDescription:"Type of address such as home or work.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"line",required:!0,schemaDescription:"The line of the address. Typically the street address, number of the apartment, suite. ",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"area",required:!0,schemaDescription:"The name of the area in the city.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"city",required:!0,schemaDescription:"The name of the city or district.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"state",required:!0,schemaDescription:"The region of the address, such as the province or state.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"country",required:!0,schemaDescription:"The name of the country.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"zip",required:!0,schemaDescription:"The zip or postal code of the address.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"landmark",required:!0,schemaDescription:"The nearest landmark to recognize the address.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"coordinates",required:!0,schemaDescription:"The two numbers are a location&apos;s latitude number and its longitude number.",schemaName:"number[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"default",required:!1,schemaDescription:"The default address to use.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(l.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Success response")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "statusCode": 201,\n  "data": {\n    "annotation": "Home",\n    "line": "Plot No 52, Balakrishna Nagar, 1st Street, Thiruninravur",\n    "area": "Thiruninravur",\n    "city": "Chennai",\n    "state": "Tamil Nadu",\n    "country": "India",\n    "zip": "602024",\n    "landmark": "Near Kamban Park",\n    "coordinates": [\n      0,\n      0\n    ],\n    "default": false,\n    "_id": "632c5839b5f554ad3047e13a"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation error response")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "statusCode": 400,\n  "errors": {\n    "annotation": [\n      "annotation must be a string"\n    ],\n    "line": [\n      "line must be a string"\n    ],\n    "area": [\n      "area must be a string"\n    ],\n    "city": [\n      "city must be a string"\n    ],\n    "state": [\n      "state must be a string"\n    ],\n    "country": [\n      "country must be a string"\n    ],\n    "zip": [\n      "zip must be a string"\n    ],\n    "landmark": [\n      "landmark must be a string"\n    ],\n    "coordinates": [\n      "coordinates should not be empty"\n    ]\n  },\n  "message": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);