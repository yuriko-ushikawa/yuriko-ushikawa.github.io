(this.webpackJsonpbadanie=this.webpackJsonpbadanie||[]).push([[0],{105:function(e,t,n){},123:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_Questions_Question__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(127),_actions_answers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(22),_actions_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(124),_Thanks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(125),_instructions__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(55),react_player__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(65),react_player__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_9__),_audio_city_mp3__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(66),_audio_nature_mp3__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(67),_audio_station_mp3__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(68),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__),PollContainer=function PollContainer(soundType){var city=_audio_city_mp3__WEBPACK_IMPORTED_MODULE_10__.a,nature=_audio_nature_mp3__WEBPACK_IMPORTED_MODULE_11__.a,station=_audio_station_mp3__WEBPACK_IMPORTED_MODULE_12__.a,dispatch=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.b)(),questions=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.c)((function(e){return e.questions})),utils=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.c)((function(e){return e.utils})),answers=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.c)((function(e){return e.answers})),_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)({isFinished:!1,activeQuestion:questions[0],answers:[]}),_useState2=Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),state=_useState2[0],setState=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)({isReady:!1}),_useState4=Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),controls=_useState4[0],setControls=_useState4[1];Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){return dispatch(Object(_actions_utils__WEBPACK_IMPORTED_MODULE_6__.a)())}),[state]);var pushSingleAnswer=function(e){utils.counter<questions.length?(setState((function(e){return Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},e),{},{activeQuestion:questions[utils.counter],counter:utils.counter})})),setControls(Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},controls),{},{isReady:!1}))):setState(Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{isFinished:!0}))},showQuestion=function(e,t){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",{children:[state.activeQuestion.type===e&&!controls.isReady&&!state.isFinished&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p",{children:t}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input",{type:"button",value:"Dalej",onClick:function(){return setControls(Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},controls),{},{isReady:!0}))}})]}),state.activeQuestion.type===e&&controls.isReady&&!state.isFinished&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Questions_Question__WEBPACK_IMPORTED_MODULE_4__.a,Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_dev_web_dev_kogni_poll_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state),{},{pushSingleAnswer:pushSingleAnswer}))})]})};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_player__WEBPACK_IMPORTED_MODULE_9___default.a,{url:eval(answers.soundType),playing:!0,loop:!0,volume:1,controls:!1,width:0,height:0}),showQuestion("rotacja",_instructions__WEBPACK_IMPORTED_MODULE_8__.c),showQuestion("przypominanie",_instructions__WEBPACK_IMPORTED_MODULE_8__.b),showQuestion("odpamietywanie",_instructions__WEBPACK_IMPORTED_MODULE_8__.a),state.isFinished&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Thanks__WEBPACK_IMPORTED_MODULE_7__.a,{})]})};__webpack_exports__.a=PollContainer},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(3),a=function(){return{type:c.g}}},125:function(e,t,n){"use strict";var c=n(0),a=n(4),r=n(22),i=n(1);t.a=function(e){var t=Object(a.b)(),n=Object(a.c)((function(e){return e.answers})),s=Object(a.c)((function(e){return e.utils}));return Object(c.useEffect)((function(){t(Object(r.d)(n))}),[n]),Object(i.jsxs)("div",{children:[s.answersIsLoading&&Object(i.jsx)("h2",{children:"Poczekaj, zapisujemy Twoje opowiedzi..."}),!s.answersIsLoading&&Object(i.jsx)("h1",{children:"Dzi\u0119kujemy za udzia\u0142 w badaniu!"})]})}},127:function(e,t,n){"use strict";var c=n(2),a=n(0),r=n(33),i=n(5),s=n(22),o=n(4),_=n(1),u=function(e){var t=Object(o.b)(),n=Object(a.useState)({_id:e.activeQuestion._id,isCorrect:!1}),u=Object(i.a)(n,2),l=u[0],d=u[1],j=function(t){var n=t.target.value;e.activeQuestion.choices.find((function(e){return e._id===n})).isTrue?d(Object(c.a)(Object(c.a)({},l),{},{_id:e.activeQuestion._id,isCorrect:!0})):d(Object(c.a)(Object(c.a)({},l),{},{_id:e.activeQuestion._id,isCorrect:!1}))};return Object(_.jsx)("div",{children:Object(_.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e.pushSingleAnswer(l),t(Object(s.b)(l))},children:[Object(_.jsx)("p",{children:e.activeQuestion.text}),e.activeQuestion.choices.map((function(e,t){return console.log(e._id),function(e,t,n){return Object(_.jsx)(r.a,{label:e,handleCheckboxChange:n,val:t},t)}(e.text,e._id,j)})),Object(_.jsx)("input",{type:"submit",value:"Dalej"})]})})},l=(n(105),function(e){var t=Object(a.useState)(!0),n=Object(i.a)(t,2),r=n[0],s=n[1];return Object(_.jsxs)("div",{className:"viewport",children:[void setTimeout((function(){s(!1)}),7e3),r&&Object(_.jsx)("img",{className:"questionImage",src:e.activeQuestion.image}),!r&&Object(_.jsx)(u,Object(c.a)({},e))]})}),d=function(e){var t=Object(a.useState)(e.activeQuestion.words[0]),n=Object(i.a)(t,2),r=n[0],s=n[1],o=Object(a.useState)(1),l=Object(i.a)(o,2),d=l[0],j=l[1];Object(a.useEffect)((function(){setTimeout((function(){j(d+1),d<e.activeQuestion.words.length?s(e.activeQuestion.words[d]):s(null)}),1e3)}),[r]);return Object(_.jsx)("div",{children:function(t){return t?Object(_.jsx)("h1",{children:t}):Object(_.jsx)(u,Object(c.a)({},e))}(r)})},j=function(e){return Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{src:e.activeQuestion.image,className:"questionImage"}),Object(_.jsx)(u,Object(c.a)({},e))]})};t.a=function(e){var t;return Object(_.jsx)("div",{children:(t=e.activeQuestion.type,"odpamietywanie"===t?Object(_.jsx)(d,Object(c.a)({},e)):"przypominanie"===t?Object(_.jsx)(l,Object(c.a)({},e)):Object(_.jsx)(j,Object(c.a)({},e)))})}},138:function(e,t,n){},139:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return O}));var c=n(19),a=n.n(c),r=n(35),i=n(3),s=n(20),o=n.n(s),_="https://kogniresearch.herokuapp.com/answers",u=function(e){return o.a.post(_,e)},l=function(){return o.a.get("".concat(_,"/latest"))},d=function(e){return{type:i.t,payload:e}},j=function(e){return{type:i.e,payload:e}},b=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var c,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:i.i}),t.next=4,u(e);case 4:c=t.sent,r=c.data,n({type:i.b}),n({type:i.d,payload:r}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:i.a,error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.i}),e.next=4,l();case 4:n=e.sent,c=n.data,t({type:i.b}),t({type:i.h,payload:c}),r=function(e){switch(e){case"station":return"nature";case"nature":return"city";case"city":default:return"station"}},t({type:i.s,payload:r(c.soundType)}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:i.a,error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}},266:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(50),r=n.n(a),i=n(4),s=n(25),o=n(111),_=n(112),u=n(10),l=n(3),d=n(2),j=JSON.parse(localStorage.getItem("user")),b=j?{isLoggedIn:!0,user:j}:{isLoggedIn:!1,user:null},O={},p={gender:null,age:"",answers:[],soundType:"station"},h={questionsIsLoading:!0,answersIsLoading:!0,error:null,counter:0},m={gender:null,age:"",answers:[],soundType:""},f=Object(s.combineReducers)({questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.n:case l.n:return t.payload;case l.p:return[].concat(Object(u.a)(e),[t.payload]);case l.q:return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case l.l:return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!0,user:c.user});case l.k:case l.m:return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case l.r:return{message:c};case l.f:return{message:""};default:return e}},answers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.t:return Object(d.a)(Object(d.a)({},e),{},{gender:t.payload.gender,age:t.payload.age});case l.c:return Object(d.a)(Object(d.a)({},e),{},{answers:t.payload});case l.e:return Object(d.a)(Object(d.a)({},e),{},{answers:[].concat(Object(u.a)(e.answers),[t.payload])});case l.d:return e;case l.s:return Object(d.a)(Object(d.a)({},e),{},{soundType:t.payload});case l.h:default:return e}},answer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.h:return t.payload;default:return e}},utils:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.j:return Object(d.a)(Object(d.a)({},e),{},{questionsIsLoading:!0});case l.o:return Object(d.a)(Object(d.a)({},e),{},{questionsIsLoading:!1});case l.i:return Object(d.a)(Object(d.a)({},e),{},{answersIsLoading:!0});case l.b:return Object(d.a)(Object(d.a)({},e),{},{answersIsLoading:!1});case l.a:return Object(d.a)(Object(d.a)({},e),{},{error:t.error});case l.g:return Object(d.a)(Object(d.a)({},e),{},{counter:e.counter+1});default:return e}}}),x=[_.a],v=Object(s.createStore)(f,Object(o.composeWithDevTools)(s.applyMiddleware.apply(void 0,x))),E=(n(138),n(5)),y=n(8),g=(n(74),n(139),n(116)),w=n.n(g),D=n(70),P=n.n(D),k=n(117),M=n.n(k),T=n(20),C=n.n(T),I=function(e,t){return C.a.post("https://kogniresearch.herokuapp.com/api/auth/signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},A=function(){localStorage.removeItem("user")},S=function(){return function(e){A(),e({type:l.m})}},L=n(1),z=function(e){if(!e)return Object(L.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},R=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(c.useState)(""),r=Object(E.a)(a,2),s=r[0],o=r[1],_=Object(c.useState)(""),u=Object(E.a)(_,2),d=u[0],j=u[1],b=Object(c.useState)(!1),O=Object(E.a)(b,2),p=O[0],h=O[1],m=Object(i.c)((function(e){return e.auth})).isLoggedIn,f=Object(i.c)((function(e){return e.message})).message,x=Object(i.b)();return m?Object(L.jsx)(y.a,{to:"/admin"}):Object(L.jsx)("div",{className:"col-md-12",children:Object(L.jsxs)("div",{className:"card card-container",children:[Object(L.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(L.jsxs)(w.a,{onSubmit:function(c){c.preventDefault(),h(!0),t.current.validateAll(),0===n.current.context._errors.length?x(function(e,t){return function(n){return I(e,t).then((function(e){return n({type:l.l,payload:{user:e}}),Promise.resolve()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return n({type:l.k}),n({type:l.r,payload:t}),Promise.reject()}))}}(s,d)).then((function(){e.history.push("/admin"),window.location.reload()})).catch((function(){h(!1)})):h(!1)},ref:t,children:[Object(L.jsxs)("div",{className:"form-group",children:[Object(L.jsx)("label",{htmlFor:"username",children:"Username"}),Object(L.jsx)(P.a,{type:"text",className:"form-control",name:"username",value:s,onChange:function(e){var t=e.target.value;o(t)},validations:[z]})]}),Object(L.jsxs)("div",{className:"form-group",children:[Object(L.jsx)("label",{htmlFor:"password",children:"Password"}),Object(L.jsx)(P.a,{type:"password",className:"form-control",name:"password",value:d,onChange:function(e){var t=e.target.value;j(t)},validations:[z]})]}),Object(L.jsx)("div",{className:"form-group",children:Object(L.jsxs)("button",{className:"btn btn-primary btn-block",disabled:p,children:[p&&Object(L.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(L.jsx)("span",{children:"Login"})]})}),f&&Object(L.jsx)("div",{className:"form-group",children:Object(L.jsx)("div",{className:"alert alert-danger",role:"alert",children:f})}),Object(L.jsx)(M.a,{style:{display:"none"},ref:n})]})]})})},U=n(33),N=n(22),W=n(37),B=n(56),K=(n(266),function(e){var t=Object(c.useState)({gender:"",age:""}),n=Object(E.a)(t,2),a=(n[0],n[1],Object(i.c)((function(e){return e.utils}))),r=Object(i.b)(),s=B.b().shape({age:B.a().required().typeError("Uzupe\u0142nij wiek!"),gender:B.c().required().typeError("Wybierz p\u0142e\u0107!")});return a.questionsIsLoading||a.answersIsLoading?Object(L.jsx)("h1",{children:"Poczekaj, \u0142adujemy test...."}):Object(L.jsxs)("div",{children:[Object(L.jsx)("h3",{children:"Badanie Sou_cogtest"}),Object(L.jsx)("p",{children:"Witamy w te\u015bcie Sou_cogtest. Jeste\u015bmy studentkami drugiego roku Kognitywistyki na Uniwersytecie Adama Mickiewicza w Poznaniu. Zapraszamy do wzi\u0119cia udzia\u0142u w badaniu zwi\u0105zanym z ludzk\u0105 percepcj\u0105, kt\xf3re prowadzimy w ramach projektu."}),Object(L.jsx)("p",{children:"Badanie jest anonimowe i skierowane do os\xf3b pe\u0142noletnich, wzi\u0119cie udzia\u0142u jest automatycznym potwierdzeniem tego faktu. Zebrane odpowiedzi zostan\u0105 wykorzystane w celu zbiorowej analizy. Badanie powinno zaj\u0105\u0107 oko\u0142o 15 minut. Konieczne jest posiadanie dzia\u0142aj\u0105cego sprz\u0119tu audio (s\u0142uchawki lub g\u0142o\u015bniki), poniewa\u017c w badaniu pojawi\u0105 si\u0119 d\u017awi\u0119ki.  W ka\u017cdej chwili mo\u017cna wycofa\u0107 si\u0119 z badania, zamykaj\u0105c okno przegl\u0105darki. "}),Object(L.jsx)("p",{children:"Koordynatorem projektu jest dr. \u0141ukasz Przybylski, a autorkami badania Weronika Andrzejczak, Agata Daniszewska, Alicja Deszkiewicz, Marta S\u0142upi\u0144ska i Maria Wachulak."}),Object(L.jsx)("h5",{children:"Instrukcja do badania:"}),Object(L.jsx)("h6",{children:"Przed przyst\u0105pieniem do badania, usi\u0105d\u017a w cichym i spokojnym miejscu. W trakcie odpowiadania na pytania mog\u0105 zosta\u0107 odtworzne d\u017awi\u0119ki. Przed ka\u017cdym zadaniem zostanie wy\u015bwietlona kr\xf3tka instrukcja"}),Object(L.jsx)(W.c,{initialValues:{age:"",gender:""},validationSchema:s,onSubmit:function(e){r(Object(N.c)(e))},children:function(e){e.values;var t=e.errors,n=e.touched;e.isValidating;return Object(L.jsxs)(W.b,{children:[Object(L.jsx)("div",{className:"gender-box",children:Object(L.jsxs)("label",{children:[Object(L.jsx)(W.a,{name:"age"}),Object(L.jsx)("p",{children:"podaj sw\xf3j wiek"})]})}),t.age&&n.age&&Object(L.jsx)("div",{children:t.age}),Object(L.jsx)("div",{role:"group",className:"gender-box","aria-labelledby":"my-radio-group",children:Object(L.jsxs)("label",{children:[Object(L.jsxs)("label",{children:[Object(L.jsx)(W.a,{type:"radio",name:"gender",value:"kobieta"}),"kobieta"]}),Object(L.jsxs)("label",{children:[Object(L.jsx)(W.a,{type:"radio",name:"gender",value:"m\u0119\u017cczyzna"}),"m\u0119\u017cczyzna"]}),Object(L.jsx)("p",{children:"wybierz p\u0142e\u0107"})]})}),t.gender&&n.gender&&Object(L.jsx)("div",{children:t.gender}),Object(L.jsx)("button",{type:"submit",children:"Zaczynamy!"})]})}})]})}),q=n(123),Q=(n(65),n(66),n(67),n(68),function(){Object(i.b)();var e=Object(i.c)((function(e){return e.answers}));Object(i.c)((function(e){return e.utils}));return Object(L.jsx)("div",{children:null==e.gender&&""==e.age?Object(L.jsx)(K,{}):Object(L.jsx)(q.a,{})})}),F=function(){var e=Object(i.c)((function(e){return e.auth})).user;return e?Object(L.jsxs)("div",{className:"container",children:[Object(L.jsx)("header",{className:"jumbotron",children:Object(L.jsxs)("h3",{children:[Object(L.jsx)("strong",{children:e.username})," Profile"]})}),Object(L.jsxs)("p",{children:[Object(L.jsx)("strong",{children:"Token:"})," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)]}),Object(L.jsxs)("p",{children:[Object(L.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(L.jsxs)("p",{children:[Object(L.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(L.jsx)("strong",{children:"Authorities:"}),Object(L.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(L.jsx)("li",{children:e},t)}))})]}):Object(L.jsx)(y.a,{to:"/login"})},G=n(126),Z=n.n(G),J="odpamietywanie",H=function(e){var t=function(e,t){return Object(L.jsx)(U.a,{label:e,handleCheckboxChange:t,val:e})};return Object(L.jsxs)("div",{children:[Object(L.jsx)("h5",{children:"Choose a question type"}),Object(L.jsxs)("form",{children:[t("przypominanie",e.handleTypeChoice),t(J,e.handleTypeChoice),t("rotacja",e.handleTypeChoice)]})]})},V=n(19),Y=n.n(V),X=n(35),$="https://kogniresearch.herokuapp.com/questions",ee=function(){return C.a.get($)},te=function(e){return C.a.post($,e)},ne=function(e){C.a.delete("".concat($,"/").concat(e))},ce=function(){var e=Object(i.b)(),t=Object(c.useState)({text:"",image:"",choices:[],type:"",words:[]}),n=Object(E.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(E.a)(s,2),_=o[0],j=o[1],b=Object(c.useState)(""),O=Object(E.a)(b,2),p=O[0],h=O[1],m=Object(c.useState)(""),f=Object(E.a)(m,2),x=f[0],v=f[1];return Object(L.jsxs)("div",{children:[Object(L.jsx)(H,{handleTypeChoice:function(e){j(e.target.value),r(Object(d.a)(Object(d.a)({},a),{},{type:e.target.value}))}}),!(""===_)&&Object(L.jsxs)("form",{onSubmit:function(t){var n;t.preventDefault(),e((n=a,function(){var e=Object(X.a)(Y.a.mark((function e(t){var c,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:l.j}),e.next=4,te(n);case 4:c=e.sent,a=c.data,t({type:l.o}),t({type:l.p,payload:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:l.a,error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),r(Object(d.a)(Object(d.a)({},a),{},{text:"",image:"",choices:[],words:[]}))},children:[Object(L.jsxs)("h4",{children:["Create a question of the type ",_]}),Object(L.jsxs)("label",{children:["Ask a question",Object(L.jsx)("textarea",{value:a.text,onChange:function(e){return r(Object(d.a)(Object(d.a)({},a),{},{text:e.target.value}))}})]}),!(_===J)&&Object(L.jsxs)("label",{children:["Upload an image",Object(L.jsx)(Z.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return r(Object(d.a)(Object(d.a)({},a),{},{image:t}))}})]}),_===J&&Object(L.jsxs)("label",{children:["List the wordz",Object(L.jsx)("input",{placeholder:"dodaj slowo",type:"text",value:p,onChange:function(e){return h(e.target.value)}}),Object(L.jsx)("button",{onClick:function(e){return e.preventDefault(),""===p||a.words.indexOf(p)>-1?0:(r(Object(d.a)(Object(d.a)({},a),{},{words:[].concat(Object(u.a)(a.words),[p])})),h(""),1)},children:"Add"}),Object(L.jsx)("ul",{children:a.words.map((function(e,t){return Object(L.jsxs)("li",{children:[a.words[t],Object(L.jsx)("button",{type:"button",onClick:function(){return function(e){var t=Object(u.a)(a.words);t.splice(e,1),r(Object(d.a)(Object(d.a)({},a),{},{words:t}))}(t)},children:"Delete"})]},a.words[t])}))})]}),Object(L.jsxs)("label",{children:["Setup possible answers:",Object(L.jsx)("input",{placeholder:"dodaj odpowiedz",type:"text",value:x,onChange:function(e){return v(e.target.value)}}),Object(L.jsx)("button",{onClick:function(e){e.preventDefault();return""===x||a.choices.findIndex((function(e){return e.text===x}))>-1?0:(r(Object(d.a)(Object(d.a)({},a),{},{choices:[].concat(Object(u.a)(a.choices),[{text:x,isTrue:!1}])})),v(""),1)},children:"Add"}),Object(L.jsx)("ul",{children:a.choices.map((function(e,t){return Object(L.jsxs)("li",{children:[a.choices[t].text,Object(L.jsxs)("label",{children:["Prawdziwa?",Object(L.jsx)("input",{type:"radio",onChange:function(){return function(e){var t,n=a.choices;for(t=0;t<n.length;t++)n[t].isTrue=!1;n[e].isTrue=!0,r(Object(d.a)(Object(d.a)({},a),{},{choices:n}))}(t)},name:"isTrue",value:"isTrue"})]}),Object(L.jsx)("button",{type:"button",onClick:function(){return function(e){var t=Object(u.a)(a.choices);t.splice(e,1),r(Object(d.a)(Object(d.a)({},a),{},{choices:t}))}(t)},children:"Delete"})]},a.choices[t].text)}))})]}),Object(L.jsx)("input",{type:"submit"})]})]})},ae=(n(285),n(32));n(288);var re=function(e){var t=e.question,n=Object(i.b)();return Object(L.jsx)("div",{className:"border",children:Object(L.jsxs)("div",{className:"row",children:[Object(L.jsxs)("div",{className:"col-10",children:[Object(L.jsxs)("div",{className:"row",children:[Object(L.jsx)("div",{className:"col",children:"Typ pytania"}),Object(L.jsx)("div",{className:"col",children:t.type})]}),Object(L.jsxs)("div",{className:"row",children:[Object(L.jsx)("div",{className:"col",children:"Tre\u015b\u0107"}),Object(L.jsx)("div",{className:"col",children:t.text})]}),!("odpamietywanie"===t.type)&&Object(L.jsxs)("div",{className:"row",children:[Object(L.jsx)("div",{className:"col",children:"Obrazek"}),Object(L.jsx)("div",{className:"col",children:Object(L.jsx)(ae.a,{to:"/question_images/".concat(t._id),children:Object(L.jsx)("img",{className:"questionImage",src:t.image})})}),Object(L.jsx)("div",{})]}),"odpamietywanie"===t.type&&Object(L.jsxs)("div",{className:"row",children:[Object(L.jsx)("div",{className:"col",children:"S\u0142owa"}),Object(L.jsx)("div",{className:"col",children:Object(L.jsx)("ul",{children:t.words.map((function(e){return Object(L.jsx)("li",{children:e.toString()})}))})})]}),Object(L.jsxs)("div",{className:"row",children:[Object(L.jsx)("div",{className:"col",children:"Odpowiedzi"}),Object(L.jsx)("div",{className:"col",children:Object(L.jsx)("ul",{children:t.choices.map((function(e){return e.isTrue?Object(L.jsx)("li",{color:"green",children:e.text},t.choices._id):Object(L.jsx)("li",{color:"black",children:e.text},t.choices._id)}))})})]})]}),Object(L.jsx)("div",{className:"col-2",children:Object(L.jsx)("button",{onClick:function(){return n((e=t._id,function(){var t=Object(X.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:l.j}),t.next=4,ne(e);case 4:n({type:l.o}),n({type:l.q,payload:e}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:l.a,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:"Delete"})})]})})},ie=function(){var e=Object(i.c)((function(e){return e.questions})),t=Object(i.c)((function(e){return e.utils}));return Object(L.jsx)("div",{children:t.error?console.log(e.error):e.map((function(e){return Object(L.jsx)(re,{question:e},e._id)}))})},se=function(e){var t=Object(i.c)((function(e){return e.utils})),n=Object(i.b)(),a=Object(c.useState)(!1),r=Object(E.a)(a,2),s=(r[0],r[1]),o=Object(i.c)((function(e){return e.auth})).user;return Object(c.useEffect)((function(){o&&s(o)}),[o]),Object(L.jsx)("div",{className:"container",children:Object(L.jsx)("header",{className:"jumbotron",children:o?Object(L.jsxs)("div",{children:[Object(L.jsx)("button",{href:"/login",onClick:function(){return n(S()),Object(L.jsx)(y.a,{to:"/login"})},children:"Wyloguj si\u0119"}),t.questionsIsLoading?Object(L.jsx)("div",{children:Object(L.jsx)("h1",{children:"Loading questions"})}):Object(L.jsxs)("div",{children:[Object(L.jsx)("h3",{children:" Current questions"}),Object(L.jsx)(ie,{}),Object(L.jsx)("h3",{children:"Insert questions"}),Object(L.jsx)(ce,{})]})]}):Object(L.jsx)("div",{className:"navbar-nav ml-auto",children:Object(L.jsx)("li",{className:"nav-item",children:Object(L.jsx)(ae.a,{to:"/login",className:"nav-link",children:Object(L.jsx)("button",{children:"Zaloguj si\u0119"})})})})})})},oe=n(13),_e=Object(oe.a)(),ue=(n(289),function(){var e=Object(c.useState)(!1),t=Object(E.a)(e,2),n=(t[0],t[1]),a=Object(i.c)((function(e){return e.auth})).user,r=Object(i.b)();Object(c.useEffect)((function(){_e.listen((function(e){r({type:l.f})}))}),[r]),Object(c.useEffect)((function(){r(Object(N.a)())}),[]),Object(c.useEffect)((function(){r(function(){var e=Object(X.a)(Y.a.mark((function e(t){var n,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:l.j}),e.next=4,ee();case 4:n=e.sent,c=n.data,t({type:l.n,payload:c}),t({type:l.o}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:l.a,error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[r]),Object(c.useEffect)((function(){a&&n(a)}),[a]);return Object(L.jsx)(y.c,{history:_e,basename:"",children:Object(L.jsx)("div",{className:"background",children:Object(L.jsx)("div",{className:"main-container",children:Object(L.jsx)("div",{className:"container mt-3",children:Object(L.jsxs)(y.d,{children:[Object(L.jsx)(y.b,{exact:!0,path:["/home","/"],component:Q}),Object(L.jsx)(y.b,{exact:!0,path:"/login",component:R}),Object(L.jsx)(y.b,{exact:!0,path:"/profile",component:F}),Object(L.jsx)(y.b,{path:"/admin",component:se})]})})})})})});r.a.render(Object(L.jsx)(i.a,{store:v,children:Object(L.jsx)(ue,{})}),document.getElementById("root"))},3:function(e,t,n){"use strict";n.d(t,"l",(function(){return c})),n.d(t,"k",(function(){return a})),n.d(t,"m",(function(){return r})),n.d(t,"r",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"n",(function(){return o})),n.d(t,"p",(function(){return _})),n.d(t,"q",(function(){return u})),n.d(t,"t",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"h",(function(){return O})),n.d(t,"s",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return f})),n.d(t,"b",(function(){return x})),n.d(t,"o",(function(){return v})),n.d(t,"g",(function(){return E}));var c="LOGIN_SUCCESS",a="LOGIN_FAIL",r="LOGOUT",i="SET_MESSAGE",s="CLEAR_MESSAGE",o="QUESTIONS_FETCHED",_="QUESTION_CREATED",u="QUESTION_DELETED",l="USER_DATA_ADDED",d="ANSWERS_PUSHED",j="ANSWER_PUSHED",b="ANSWER_CREATED",O="LATEST_ANSWER_FETCHED",p="SOUND_TYPE_ADDED",h="ACTION_FAILED",m="LOADING_ANSWERS",f="LOADING_QUESTIONS",x="ANSWERS_LOADED",v="QUESTIONS_LOADED",E="INCREMENT_COUNTER"},33:function(e,t,n){"use strict";var c=n(5),a=n(0),r=n(1);t.a=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2);n[0],n[1];return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"checkbox",children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",value:e.val,onChange:e.handleCheckboxChange,name:"chooseType"}),e.label]})})})}},55:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var c="Na du\u017cym obrazku po lewej stronie zobaczysz bry\u0142\u0119 geometryczn\u0105. Twoim zadaniem jest zaznaczy\u0107 kt\xf3ra z pokazanych po prawej stronie bry\u0142 jest taka sama. ",a="Zobaczysz list\u0119 s\u0142\xf3w wy\u015bwietlanych s\u0142owo po s\u0142owie. Twoim zadaniem jest odpowiedzie\u0107 na pytanie dotycz\u0105ce listy s\u0142\xf3w.",r="Zobaczysz obraz, kt\xf3ry po chwili zniknie. Twoim zadaniem jest opowiedzie\u0107 na pytanie dotycz\u0105ce obrazu."},66:function(e,t,n){"use strict";t.a=n.p+"static/media/city.b09e67ef.mp3"},67:function(e,t,n){"use strict";t.a=n.p+"static/media/nature.c413a125.mp3"},68:function(e,t,n){"use strict";t.a=n.p+"static/media/station.3e69db40.mp3"}},[[290,1,2]]]);
//# sourceMappingURL=main.71fe3d49.chunk.js.map