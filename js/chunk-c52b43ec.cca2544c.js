(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c52b43ec"],{"045b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticStyle:{width:"100%","background-color":"#f5f8fb","border-radius":"10px"}},[a("NavMain"),a("v-content",{staticStyle:{clear:"both",padding:"2%",margin:"1% 1%",width:"96%","background-color":"#fff"}},[a("section",{staticClass:"breadCrumbsBox"},[a("v-breadcrumbs",{attrs:{items:t.breadCrumbsData,large:""}})],1),a("section",{staticClass:"clearfix"}),a("br"),a("section",{staticClass:"container container--fluid"},[a("section",{staticClass:"row"},[a("div",{staticClass:"col col-12"},[a("div",{staticClass:"d-flex grow flex-wrap"},[a("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 success pa-7",staticStyle:{"max-height":"90px",width:"auto"}},[a("i",{staticClass:"v-icon notranslate fas fa-box-open theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"ml-4"},[a("div",{staticClass:"card-title font-weight-light"},[t._v("State Election")])])]),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"green",dark:""}},[a("v-card-text",[t._v(" Sending Request Please Stand By "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),a("sweetalert-icon",{directives:[{name:"show",rawName:"v-show",value:t.showSuccessIcon,expression:"showSuccessIcon"}],attrs:{icon:"success"}}),a("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.showSuccessIcon,expression:"showSuccessIcon"}],attrs:{dense:"",text:"",type:"success"}},[t._v(" "+t._s(t.responseMessage)+" "),a("strong",[t._v("Success")])]),a("sweetalert-icon",{directives:[{name:"show",rawName:"v-show",value:t.showErrorIcon,expression:"showErrorIcon"}],attrs:{icon:"error"}}),a("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.showErrorIcon,expression:"showErrorIcon"}],attrs:{dense:"",text:"",type:"error"}},[t._v(" Error with voting (Unable to send voting request) ")])],1),t._l(t.elections,(function(e){return a("div",{key:e.candidatesId,staticClass:"col-sm-12 col-md-4 col"},[a("div",{staticClass:"col-sm-12 col-md-12 col",style:{color:"#03a9fc",fontWeight:"900",fontSize:"1.2em",textTransform:"capitalize",float:"left"}},[a("div",{staticClass:"v-card--material pa-3 v-card v-sheet theme--light v-card--material--hover-reveal"},[a("div",{staticClass:"d-flex grow flex-wrap"},[a("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 transparent",staticStyle:{width:"100%"}},[a("div",{staticClass:"v-responsive v-image"},[a("div",{staticClass:"v-responsive__sizer",staticStyle:{"padding-bottom":"66.1667%"}}),a("div",{staticClass:"v-image__image v-image__image--cover",style:{zIndex:99,marginTop:t.hoverTraining+"px",backgroundImage:"url("+t.getPartyLogo(e)+")",backgroundPosition:"center center",backgroundSize:"contain"}}),a("div",{staticClass:"v-responsive__content",staticStyle:{width:"1200px"}})])]),a("div",{staticClass:"text-center py-0 mt-n12 col col-12"},[a("span",{staticClass:"v-tooltip v-tooltip--bottom"},[a("div",{staticClass:"v-tooltip__content",staticStyle:{left:"0px",opacity:"0",top:"12px","z-index":"0",display:"none"}})]),a("span",{staticClass:"v-tooltip v-tooltip--bottom"})])]),a("br"),a("div",{staticClass:"v-card__title justify-center font-weight-light",class:{hovering:t.isHovering}},[t._v(t._s(t._f("capitalize")(e.partyName)))]),a("div",{staticClass:"v-card__text body-1 text-center mb-3 font-weight-light grey--text"},[t._v(" "+t._s(e.candidates)+" "),a("hr",{staticClass:"mt-2 v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}}),a("input",{staticStyle:{"text-align":"center"},attrs:{type:"number",placeholder:"Enter OTP"}}),a("br")]),a("hr",{staticClass:"mt-2 v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}}),a("div",{staticClass:"v-card__actions pb-0"},[a("v-btn",{attrs:{type:"button",color:"success"},on:{click:function(a){return t.vote(e)}}},[a("i",{staticClass:"fas fa-box-open"}),t._v("Voter For Candidate ")]),a("div",{staticClass:"display-1 font-weight-light grey--text"}),a("div",{staticClass:"spacer"}),a("span",{staticClass:"caption grey--text font-weight-light"},[a("i",{staticClass:"v-icon notranslate mdi mdi-map-marker theme--light",staticStyle:{"font-size":"16px"},attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(e.partyName)+" ")])],1)])])])}))],2)])]),a("Footer")],1)},i=[],r=(a("99af"),a("fb6a"),a("d3b7"),a("25f0"),a("bc3a")),o=a.n(r),n=a("4380"),c=a("4360"),l=a("c571"),d=a("01e3"),u={name:"ElectionState",mixins:[n["a"]],components:{NavMain:l["a"],Footer:d["a"]},created:function(){var t=this,e={responseCode:"00",responseMessage:"SUCCESSFUL",data:[{electionId:1,electionName:"Federal",candidates:"olumide olowo",candidatesId:1,partyName:"Peoples Democratic Party (Nigeria)"},{electionId:2,electionName:"Federal",candidates:"Tolulope jamesl",candidatesId:2,partyName:"All Progressives Congress (APC)"},{electionId:3,electionName:"Federal",candidates:"Adekunle Uboh",candidatesId:3,partyName:"ZLP"}]};t.elections=e.data,o.a.get(this.endpoint).then((function(e){e.data.responseCode===c["a"].state.successCode&&(t.elections=e.data.data)})).catch((function(t){console.error(t)}))},data:function(){return{responseMessage:"",showSuccessIcon:!1,showErrorIcon:!1,dialog:!1,notifications:!1,sound:!0,widgets:!1,loadingPage:!0,isLogin:c["a"].state.isLogin,hoverTrainImageHoverValueMin:0,hoverTrainImageHoverValueMax:-75,hoverTraining:0,isHovering:!0,elections:null,serverUrl:c["a"].state.urlStore.serverUrl,endpoint:c["a"].state.urlStore.baseUrl+c["a"].state.urlStore.getStateElections,endpointVoting:c["a"].state.urlStore.baseUrl+c["a"].state.urlStore.vote,breadCrumbsData:[]}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},methods:{vote:function(t){var e=this,a=confirm("Are you sure you want to vote for ".concat(t.candidates," under ").concat(t.partyName));if(a){this.dialog=!0,e.showSuccessIcon=!1,e.showErrorIcon=!1;var s={id:localStorage.getItem(c["a"].state.setTokenLocalStorageKey),electionParticipantsId:t.candidatesId,isVoted:!0,otp:localStorage.getItem(c["a"].state.setOTPLocalStorageKey)};this.voteUrlCall(e,s)}},voteUrlCall:function(t,e){o.a.post(this.endpointVoting,e).then((function(e){var a=this;t.dialog=!1,e.data.responseCode===c["a"].state.successCode?(t.responseMessage=e.data.responseMessage,t.showSuccessIcon=!0,t.showErrorIcon=!1,setTimeout((function(){a.$v.$reset()}),c["a"].state.alertLongTimeout)):(t.showErrorIcon=!0,t.showSuccessIcon=!1)})).catch((function(e){console.error(e),t.dialog=!1,t.showErrorIcon=!0,t.showSuccessIcon=!1}))},editProfile:function(){},combineCurrencyAndPrice:function(t,e){return t+e},getPartyLogo:function(t){if(null!=t){if("Peoples Democratic Party (Nigeria)"===t.partyName)return c["a"].state.pdpLogoUrl;if("All Progressives Congress (APC)"===t.partyName)return c["a"].state.apcLogoUrl;if("ZLP"===t.partyName)return c["a"].state.zlpLogoUrl}}}},v=u,h=a("2877"),g=a("6544"),m=a.n(g),p=a("0798"),f=a("2bc5"),b=a("8336"),w=a("b0af"),C=a("99d9"),y=a("a75b"),S=a("169a"),x=a("8e36"),_=Object(h["a"])(v,s,i,!1,null,"d6abc0c2",null);e["default"]=_.exports;m()(_,{VAlert:p["a"],VBreadcrumbs:f["a"],VBtn:b["a"],VCard:w["a"],VCardText:C["b"],VContent:y["a"],VDialog:S["a"],VProgressLinear:x["a"]})},"2bc5":function(t,e,a){"use strict";a("a15b");var s=a("5530"),i=(a("abd3"),a("ade3")),r=a("1c87"),o=a("58df"),n=Object(o["a"])(r["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(i["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return t("li",[t(a,Object(s["a"])({},i,{attrs:Object(s["a"])({},i.attrs,{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),c=a("80d2"),l=Object(c["i"])("v-breadcrumbs__divider","li"),d=a("7560");e["a"]=Object(o["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(s["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(l,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],s=0;s<this.items.length;s++){var i=this.items[s];a.push(i.text),e?t.push(this.$scopedSlots.item({item:i})):t.push(this.$createElement(n,{key:a.join("."),props:i},[i.text])),s<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},4380:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var s=a("4360"),i={data:function(){return{userData:null}},computed:{},watch:{},methods:{logout:function(){localStorage.setItem(s["a"].state.setIsLoginLocalStorageKey,!1),localStorage.setItem(s["a"].state.setTokenLocalStorageKey,""),localStorage.setItem(s["a"].state.setEmailLocalStorageKey,""),this.$router.push("Login")}}}},abd3:function(t,e,a){}}]);
//# sourceMappingURL=chunk-c52b43ec.cca2544c.js.map