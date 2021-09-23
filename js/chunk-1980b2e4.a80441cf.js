(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1980b2e4"],{"4af9":function(e,s,a){"use strict";var t=a("f2cc"),o=a.n(t);o.a},"7e81":function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("v-row",{attrs:{justify:"center"}},[a("section",{staticClass:"dt-login--container"},[a("section",{staticClass:"dt-login__content-wrapper"},[a("section",{staticClass:"dt-login__bg-section"},[a("section",{staticClass:"dt-login__bg-content"},[a("a",{staticStyle:{float:"right","margin-right":"-30px","margin-top":"-40px",color:"#fff"},attrs:{href:"#/Signup"}},[a("i",{staticClass:"fa fa-arrow-right"})]),a("h1",{staticClass:"dt-login__title",staticStyle:{"margin-left":"-15%","font-weight":"900"}},[e._v(e._s(e.appName))]),a("p",{staticClass:"f-16"},[e._v("Login with your "+e._s(e.appName)+" Account.")])]),a("section",{staticClass:"dt-login__logo"},[a("a",{staticClass:"dt-brand__logo-link",staticStyle:{"background-color":"#333",padding:"8%","border-radius":"5%","margin-left":"-13%",opacity:"0.9"},attrs:{href:"#"}},[a("img",{staticClass:"img img-responsive dt-brand__logo-img",staticStyle:{width:"180px","border-radius":"10px","box-shadow":"3px 3px 3px #333333"},attrs:{src:"/assets/images/corporate-setup-logo.png",alt:e.appName}})])])]),a("section",{staticClass:"dt-login__content"},[a("section",{staticClass:"dt-login__content-inner"},[a("form",[a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialogCallResponse,callback:function(s){e.dialogCallResponse=s},expression:"dialogCallResponse"}},[a("v-card",[a("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.showErrorIcon,expression:"showErrorIcon"}],attrs:{dense:"",text:"",type:"error"}},[e._v(" Email and password combination incorrect ")]),a("sweetalert-icon",{directives:[{name:"show",rawName:"v-show",value:e.showErrorIcon,expression:"showErrorIcon"}],attrs:{icon:"error"}}),a("v-card-actions",{directives:[{name:"show",rawName:"v-show",value:e.showErrorIcon,expression:"showErrorIcon"}]},[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(s){e.dialogCallResponse=!1}}},[e._v("Close")])],1)],1),a("v-card",[a("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.showSuccessIcon,expression:"showSuccessIcon"}],attrs:{dense:"",text:"",type:"success"}},[a("strong",[e._v("Email Confirmed")]),e._v(". Login to proceed. ")]),a("sweetalert-icon",{directives:[{name:"show",rawName:"v-show",value:e.showSuccessIcon,expression:"showSuccessIcon"}],attrs:{icon:"success"}}),a("v-card-actions",{directives:[{name:"show",rawName:"v-show",value:e.showSuccessIcon,expression:"showSuccessIcon"}]},[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(s){e.dialogCallResponse=!1}}},[e._v("Close")])],1)],1)],1)],1),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.dialog,callback:function(s){e.dialog=s},expression:"dialog"}},[a("v-card",{attrs:{color:"green",dark:""}},[a("v-card-text",[e._v(" Sending Request Please Stand By "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),a("v-text-field",{attrs:{"error-messages":e.emailErrors,counter:100,label:"Email",required:""},on:{input:function(s){return e.$v.email.$touch()},blur:function(s){return e.$v.email.$touch()}},model:{value:e.email,callback:function(s){e.email=s},expression:"email"}}),a("v-text-field",{attrs:{"error-messages":e.passwordErrors,"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",label:"Password",hint:"your password",counter:50},on:{input:function(s){return e.$v.password.$touch()},blur:function(s){return e.$v.password.$touch()},"click:append":function(s){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),a("v-btn",{staticClass:"mr-4",on:{click:e.submit}},[e._v("Login")]),a("v-btn",{on:{click:e.clear}},[e._v("clear")])],1)])])])])])},o=[],r=a("4360"),i=a("bc3a"),n=a.n(i),c=a("1dce"),l=a("b5ae"),d={name:"ConfirmEmail",created:function(){var e=this.$route.params.companyName,s=this.$route.params.key,a=this.endpoint+e+"/"+s,t=this;t.showSuccessIcon=!0,n.a.get(a).then((function(e){e.data.status&&(t.dialogCallResponse=!0,t.showSuccessIcon=!0,t.dataRecords=e.data.data,t.recordsToDisplay=t.dataRecords)})).catch((function(e){console.error(e)}))},mixins:[c["validationMixin"]],validations:{email:{required:l["required"],maxLength:Object(l["maxLength"])(100),email:l["email"]},password:{required:l["required"],maxLength:Object(l["maxLength"])(50)}},data:function(){return{appName:r["a"].state.appName,showPassword:!1,showErrorIcon:!1,showSuccessIcon:!1,dialog:!1,dialogCallResponse:!1,endpoint:r["a"].state.urlStore.baseUrlAuth+r["a"].state.urlStore.confirmEmailUrl,endpointLogin:r["a"].state.urlStore.baseUrlAuth+r["a"].state.urlStore.adLoginUrl,email:"",password:"",objectToSend:{email:null,password:null}}},computed:{emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.maxLength&&e.push("Email must be no more than 100 characters long"),!this.$v.email.email&&e.push("Must be valid e-mail"),!this.$v.email.required&&e.push("E-mail is required"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.maxLength&&e.push("Password must be no more than 50 characters long"),!this.$v.password.required&&e.push("Password is required."),e):e}},methods:{submit:function(){if(this.$v.$touch(),!this.$v.$invalid){this.dialog=!0;var e=this;this.objectToSend.email=this.email,this.objectToSend.password=this.password;var s=this.objectToSend;this.loginUrlCall(e,s)}},clear:function(){this.$v.$reset(),this.$router.go()},loginUrlCall:function(e,s){n.a.post(this.endpointLogin,s).then((function(s){200===s.status?(e.dialog=!1,localStorage.setItem(r["a"].state.setIsLoginLocalStorageKey,!0),localStorage.setItem(r["a"].state.setTokenLocalStorageKey,s.data.token),localStorage.setItem(r["a"].state.setEmailLocalStorageKey,e.email),window.open(r["a"].state.urlStore.siteUrl+"#/Dashboard")):(e.showErrorIcon=!0,e.showSuccessIcon=!1,e.dialog=!1,e.dialogCallResponse=!0)})).catch((function(s){console.error(s),e.showErrorIcon=!0,e.showSuccessIcon=!1,e.dialog=!1,e.dialogCallResponse=!0}))}}},u=d,h=(a("4af9"),a("2877")),p=a("6544"),m=a.n(p),w=a("0798"),g=a("8336"),v=a("b0af"),f=a("99d9"),b=a("169a"),x=a("8e36"),S=a("0fd9"),C=a("2fa4"),_=a("8654"),$=Object(h["a"])(u,t,o,!1,null,"4fe72bc8",null);s["default"]=$.exports;m()($,{VAlert:w["a"],VBtn:g["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VDialog:b["a"],VProgressLinear:x["a"],VRow:S["a"],VSpacer:C["a"],VTextField:_["a"]})},f2cc:function(e,s,a){}}]);
//# sourceMappingURL=chunk-1980b2e4.a80441cf.js.map