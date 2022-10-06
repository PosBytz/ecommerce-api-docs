"use strict";(self.webpackChunkecommerce_api_docs=self.webpackChunkecommerce_api_docs||[]).push([[2454],{25824:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>y});var r=o(87462),a=(o(67294),o(3905)),s=o(26389),n=o(94891),i=o(74933),l=o(47507),c=(o(24310),o(63303)),u=(o(75035),o(85162));const d={id:"countries-controller-get-states",title:"CountriesController_getStates",description:"CountriesController_getStates",sidebar_label:"CountriesController_getStates",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"CountriesController_getStates",parameters:[{name:"search",required:!1,in:"query",schema:{type:"string"}},{name:"countryCode",required:!0,in:"path",example:"IN",schema:{}}],responses:{200:{description:"Success response",content:{"application/json":{example:'{"statusCode":200,"data":[{"name":"Tamil Nadu","isoCode":"TN","countryCode":"IN","latitude":"11.12712250","longitude":"78.65689420"}]}'}}}},tags:["Countries"],security:[{oauth2:["countries:read"]}],description:"CountriesController_getStates",method:"get",path:"/v1/countries/{countryCode}/states",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/authorize",tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["countries:read","merchants:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","order:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",version:"1.0",contact:{}},postman:{name:"Countries Controller get States",description:{type:"text/plain"},url:{path:["v1","countries",":countryCode","states"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"search",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"countryCode"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/pos-bytz-e-commerce-api"},m=void 0,p={unversionedId:"countries-controller-get-states",id:"countries-controller-get-states",title:"CountriesController_getStates",description:"CountriesController_getStates",source:"@site/docs/countries-controller-get-states.api.mdx",sourceDirName:".",slug:"/countries-controller-get-states",permalink:"/ecommerce-api-docs/docs/countries-controller-get-states",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/countries-controller-get-states.api.mdx",tags:[],version:"current",frontMatter:{id:"countries-controller-get-states",title:"CountriesController_getStates",description:"CountriesController_getStates",sidebar_label:"CountriesController_getStates",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"CountriesController_getStates",parameters:[{name:"search",required:!1,in:"query",schema:{type:"string"}},{name:"countryCode",required:!0,in:"path",example:"IN",schema:{}}],responses:{200:{description:"Success response",content:{"application/json":{example:'{"statusCode":200,"data":[{"name":"Tamil Nadu","isoCode":"TN","countryCode":"IN","latitude":"11.12712250","longitude":"78.65689420"}]}'}}}},tags:["Countries"],security:[{oauth2:["countries:read"]}],description:"CountriesController_getStates",method:"get",path:"/v1/countries/{countryCode}/states",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{authorizationCode:{authorizationUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/authorize",tokenUrl:"https://gateway-api.smartbytz.com/ecommerce/oauth2/token",scopes:["countries:read","merchants:read","categories:read","items:read","users:read","users:write","carts:read","carts:write","order:read","orders:write","search:read"]}}}},info:{title:"PosBytz E-Commerce API",description:"The PosBytz E-Commerce API description",version:"1.0",contact:{}},postman:{name:"Countries Controller get States",description:{type:"text/plain"},url:{path:["v1","countries",":countryCode","states"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"search",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"countryCode"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs/pos-bytz-e-commerce-api"},sidebar:"ecommerceSidebar",previous:{title:"CountriesController_getCountry",permalink:"/ecommerce-api-docs/docs/countries-controller-get-country"},next:{title:"CountriesController_getState",permalink:"/ecommerce-api-docs/docs/countries-controller-get-state"}},h={},y=[{value:"CountriesController_getStates",id:"countriescontroller_getstates",level:2}],C={toc:y};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},C,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"countriescontroller_getstates"},"CountriesController_getStates"),(0,a.kt)("p",null,"CountriesController_getStates"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(i.Z,{className:"paramsItem",param:{name:"countryCode",required:!0,in:"path",example:"IN",schema:{}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(i.Z,{className:"paramsItem",param:{name:"search",required:!1,in:"query",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Success response")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,a.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,a.kt)(u.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{"statusCode":200,"data":[{"name":"Tamil Nadu","isoCode":"TN","countryCode":"IN","latitude":"11.12712250","longitude":"78.65689420"}]}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);