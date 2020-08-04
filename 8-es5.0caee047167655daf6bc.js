function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var t=0;t<o.length;t++){var a=o[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,o,t){return o&&_defineProperties(e.prototype,o),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{y3Fa:function(e,o,t){"use strict";t.r(o),t.d(o,"playerFactory",(function(){return w})),t.d(o,"AboutModule",(function(){return _}));var a,i=t("ofXK"),n=t("3Pt+"),r=t("PCNd"),l=t("fXoL"),s=t("tyNb"),c=t("nm5K"),d=t("9YtQ"),u=t("fECr"),b=t("DPnb"),m=t("foyK"),p=t("fp1T"),g=function(e){return{"field-has-error":e}},h=((a=function(){function e(o,t,a,i){_classCallCheck(this,e),this.formBuilder=o,this.router=t,this.API=a,this.deviceService=i,this.isShow=!0,this.carConfig={path:"assets/lottie_animation/car-animation.json",renderer:"svg",autoplay:!1,loop:!1},this.homeConfig={path:"assets/lottie_animation/home-animation.json",renderer:"svg",autoplay:!1,loop:!1}}return _createClass(e,[{key:"ngOnInit",value:function(){this.form_main=this.formBuilder.group({insurance_line:["car",[n.u.required]],zipcode:["",[n.u.required,n.u.minLength(5)]]});var e=localStorage.getItem("dataSource");null!=e&&this.form_main.get("zipcode").setValue(e)}},{key:"handleCarAnimation",value:function(e){var o=this;this.car_anim=e,this.car_anim.setSpeed(.4),this.car_anim.play(),setTimeout((function(){o.home_anim.setSpeed(.4),o.home_anim.play()}),1e3)}},{key:"handleHomeAnimation",value:function(e){console.log(e,"anim2"),this.home_anim=e}},{key:"onSubmit",value:function(e){var o=this;console.log("out",e),setTimeout((function(){console.log("in");var t=e.value.zipcode,a=JSON.parse(localStorage.getItem("zipCodeData"));null!=a&&null!=a&&a.zipcode!=e.value.zipcode&&localStorage.clear();var i=JSON.parse(localStorage.getItem("carInsurenceLocal"));if(!(null==i&&null==i||null==i.is_qoute&&null==i.is_qoute)&&localStorage.getItem("insurance_line")==e.value.insurance_line&&a.zipcode==t&&!0===i.is_qoute)return o.router.navigate(["/car/retriveQuote"]),0;/^[0-9]{5}(?:-[0-9]{4})?$/.test(t)?o.API.getzipcode(t).subscribe((function(a){if(console.log(a,"zip data"),Array.isArray(a))o.isShow=!1;else{if("undefined"!=a.shortCode&&"fail"!=a.status)if(localStorage.setItem("zipCodeData",JSON.stringify({city:a.element.city,country:a.element.country,countryCode:a.element.countryCode,formattedAddress:a.element.formattedAddress,latitude:a.element.latitude,longitude:a.element.longitude,neighbourhood:a.element.neighbourhood,provider:a.element.provider,state:a.element.state,zipcode:a.element.zipcode,shortCode:a.shortCode})),o.isShow=!0,localStorage.setItem("dataSource",t),console.log(e.value.insurance_line,"form"),localStorage.setItem("insurance_line",e.value.insurance_line),o.isShow=!0,"car"==e.value.insurance_line){e.value.userAgent=window.navigator.userAgent;var i=o.deviceService.isMobile(),n=o.deviceService.isTablet();o.deviceService.isDesktop()?e.value.deviceType="Desktop":i?e.value.deviceType="Mobile":n&&(e.value.deviceType="Tablet"),o.zipCodeData=JSON.parse(localStorage.getItem("zipCodeData")),e.value.latitude=o.zipCodeData.latitude,e.value.longitude=o.zipCodeData.longitude,e.value.formattedAddress=o.zipCodeData.formattedAddress,e.value.country=o.zipCodeData.country,e.value.city=o.zipCodeData.city,e.value.state=o.zipCodeData.state,e.value.zipcode=o.zipCodeData.zipcode,e.value.countryCode=o.zipCodeData.countryCode,e.value.neighbourhood=o.zipCodeData.neighbourhood,e.value.provider=o.zipCodeData.provider,e.value.insurence_type="car",o.router.navigate(["/car/details/start"])}else if("home"==e.value.insurance_line){localStorage.setItem("dataSource",t),localStorage.setItem("insurance_line",e.value.insurance_line),o.isShow=!0,e.value.userAgent=window.navigator.userAgent;var r=o.deviceService.isMobile(),l=o.deviceService.isTablet();if(o.deviceService.isDesktop()?e.value.deviceType="Desktop":r?e.value.deviceType="Mobile":l&&(e.value.deviceType="Tablet"),console.log(localStorage.getItem("homeInsurenceLocal"),"local"),"undefined"!=localStorage.getItem("homeInsurenceLocal")&&null!=localStorage.getItem("homeInsurenceLocal")&&""!=localStorage.getItem("homeInsurenceLocal")){var s=JSON.parse(localStorage.getItem("homeInsurenceLocal"));localStorage.setItem("homeInsurenceLocal",JSON.stringify(s)),console.log(JSON.stringify(s),"in home main")}null==localStorage.getItem("homeInsurenceLocal")&&localStorage.setItem("homeInsurenceLocal",""),console.log("in home qoute",localStorage.getItem("home_is_qoute")),"undefined"!=localStorage.getItem("home_is_qoute")&&null!=localStorage.getItem("home_is_qoute")&&"no"!=localStorage.getItem("home_is_qoute")||(localStorage.setItem("home_is_qoute","no"),o.router.navigate(["/insurance/homeowners/start"]),console.log("in home if qoute",localStorage.getItem("home_is_qoute"))),"yes"==localStorage.getItem("home_is_qoute")&&(o.router.navigate(["insurance/homewelcome"]),console.log("in home welcome",localStorage.getItem("123")))}"undefined"==a.shortCode&&(o.isShow=!1),"fail"==a.status&&(o.isShow=!1)}})):(localStorage.removeItem("dataSource"),o.isShow=!1)}),1200)}}]),e}()).\u0275fac=function(e){return new(e||a)(l.Ob(n.d),l.Ob(s.d),l.Ob(c.a),l.Ob(d.a))},a.\u0275cmp=l.Ib({type:a,selectors:[["app-about-us"]],decls:94,vars:6,consts:[["id","home_slide_1",1,"body-wrap","bgLine-1"],[1,"blogOuter_pg","NavSpace-TP"],[1,"blogPg_Head_wrap",2,"background-image","url(/assets/images/blog-header.jpg)"],[1,"mngIns","d-flex","align-items-center"],[1,"w-100"],[1,"container"],["data-aos","fade-up","data-aos-duration","900",1,"blg_pg_head","text-center"],["data-aos","fade-up","data-aos-duration","900",1,"blogSubHead_text","text-center"],["data-aos","fade-up","data-aos-duration","900","data-aos-delay","100",1,"zipBox_blog2_wrap"],[1,"zipCode_blg_wrap"],[3,"formGroup"],[1,"mngIn_wrap"],[1,"radioRow_wrap"],[1,"radio-button-row","bxRadio_blg2","d-flex","align-items-end","justify-content-center"],[1,"radio-button-group"],[1,"bxRadio"],["checked","","formControlName","insurance_line","id","insurance_auto","name","insurance_line","type","radio","value","car",1,"input-radio"],["for","insurance_auto",1,"radio-button-label"],[1,"svg-container"],[3,"options","animationCreated"],[1,"checkWrap"],[1,"custom-control-indicator","hidden-sm-down"],[1,"dot"],["width","15","height","14","viewbox","0 0 15 14","fill","none",1,"iconMark"],["d","M2 8.36364L6.23077 12L13 2"],[1,"separator-text"],["formControlName","insurance_line","id","insurance_home","name","insurance_line","type","radio","value","home",1,"input-radio"],["for","insurance_home",1,"radio-button-label"],[1,"txtHead","f-w-B","text-center"],[1,"zipcode_blg_form",3,"ngClass"],[1,"form-inline","flex-nowrap","fldWrap-inline"],[1,"form-group","fld-iconWrp","flex-fill"],["type","text","formControlName","zipcode","maxlength","5","placeholder","Zip Code",1,"form-control","w-100","fldCustom"],[1,"fld-icon"],["height","20","viewBox","0 0 15 20","width","15","xmlns","http://www.w3.org/2000/svg",1,"icon"],["d","M7.14,0c3.75,0,7.15,2.84,7.15,6.34S11.19,14,7.14,20C3.1,14,0,9.83,0,6.34S3.39,0,7.14,0Zm0,9.15A2.56,2.56,0,1,0,4.58,6.59h0A2.56,2.56,0,0,0,7.14,9.15Z","fill","#0fa151"],[1,"invalid-fld-feedback"],[1,"btn","btnBg-1","btnSubmit","rocket-button",3,"click"],[1,"default"],[1,"success"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 13 11","id","check"],["stroke","#fff","points","1 5.5 5 9.5 12 1.5"],[1,"animation"],[1,"rocket"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 36","id","rocket"],["d","M12,0 C18.6666667,8.70175439 19.7777778,19.0350877 15.3333333,31 L8.66666667,31 C4.22222222,19.0350877 5.33333333,8.70175439 12,0 Z","fill","var(--rocket)"],["d","M12,0 C5.33333333,8.70175439 4.22222222,19.0350877 8.66666667,31 C6.72222222,17.9473684 7.83333333,7.61403509 12,0 Z","fill","var(--rocket-shadow-left)"],["d","M12,0 C18.6666667,8.70175439 19.7777778,19.0350877 15.3333333,31 C17.2777778,17.9473684 16.1666667,7.61403509 12,0 Z","fill","var(--rocket-shadow-right)"],["d","M22.2399372,27.25 C21.2403105,25.558628 19.4303122,23.808628 16.21,22 L15,31 L17.6512944,31 C18.2564684,31 18.8216022,31.042427 19.1572924,31.5292747 L21.7379379,35.271956 C22.0515593,35.7267976 22.5795404,36 23.1449294,36 C23.5649145,36 23.9142153,35.7073938 23.9866527,35.3215275 L24,35.146217 L23.9987214,35.1196135 C23.7534506,31.4421183 23.1671892,28.8189138 22.2399372,27.25 Z","fill","var(--rocket-wing-right)"],["d","M1.76006278,27.25 C2.75968951,25.558628 4.56968777,23.808628 7.79,22 L9,31 L6.34870559,31 C5.74353157,31 5.17839777,31.042427 4.84270762,31.5292747 L2.2620621,35.271956 C1.94844071,35.7267976 1.42045963,36 0.855070627,36 C0.435085457,36 0.0857846604,35.7073938 0.0133472633,35.3215275 L0,35.146217 L0.00127855763,35.1196135 C0.24654935,31.4421183 0.832810758,28.8189138 1.76006278,27.25 Z","fill","var(--rocket-wing-left)"],["fill","var(--rocket-window-shadow)","cx","12","cy","12","r","3"],["fill","var(--rocket-window)","cx","12","cy","12","r","2.5"],["d","M15.6021597,5.99977504 L8.39784027,5.99977504 C8.54788101,5.6643422 8.70496315,5.3309773 8.86908669,4.99968036 L15.1309133,4.99968036 C15.2950369,5.3309773 15.452119,5.6643422 15.6021597,5.99977504 Z","fill-opacity","0.3","fill","var(--rocket-line)"],[1,"smoke"],[1,"blog_type_2_outer"],["data-aos","fade-up","data-aos-duration","900","data-aos-delay","300",1,"container"],[1,"blogContwrap","line-H-1_7","blog-Edtr","blog-Edtr-2","tableStl-1"]],template:function(e,o){1&e&&(l.Pb(0,"app-header"),l.Ub(1,"div",0),l.Ub(2,"div",1),l.Ub(3,"div",2),l.Ub(4,"div",3),l.Ub(5,"div",4),l.Ub(6,"div",5),l.Ub(7,"h1",6),l.Fc(8,"About LowCostInsurance.com"),l.Tb(),l.Ub(9,"div",7),l.Fc(10,"Insurance Comparison made simpler, quicker, faster."),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(11,"div",5),l.Ub(12,"div",8),l.Ub(13,"div",9),l.Ub(14,"form",10),l.Ub(15,"div",11),l.Ub(16,"div",12),l.Ub(17,"div",13),l.Ub(18,"div",14),l.Ub(19,"div",15),l.Pb(20,"input",16),l.Ub(21,"label",17),l.Ub(22,"div",18),l.Ub(23,"ng-lottie",19),l.cc("animationCreated",(function(e){return o.handleCarAnimation(e)})),l.Tb(),l.Tb(),l.Ub(24,"span",20),l.Ub(25,"span",21),l.Pb(26,"span",22),l.fc(),l.Ub(27,"svg",23),l.Pb(28,"path",24),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.ec(),l.Ub(29,"div",25),l.Fc(30,"OR"),l.Tb(),l.Ub(31,"div",14),l.Ub(32,"div",15),l.Pb(33,"input",26),l.Ub(34,"label",27),l.Ub(35,"div",18),l.Ub(36,"ng-lottie",19),l.cc("animationCreated",(function(e){return o.handleHomeAnimation(e)})),l.Tb(),l.Tb(),l.Ub(37,"span",20),l.Ub(38,"span",21),l.Pb(39,"span",22),l.fc(),l.Ub(40,"svg",23),l.Pb(41,"path",24),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.ec(),l.Ub(42,"div",28),l.Fc(43,"Get insurance quotes instantly."),l.Tb(),l.Ub(44,"div",29),l.Ub(45,"div",30),l.Ub(46,"div",31),l.Pb(47,"input",32),l.Ub(48,"div",33),l.fc(),l.Ub(49,"svg",34),l.Ub(50,"title"),l.Fc(51,"Location pin icon"),l.Tb(),l.Pb(52,"path",35),l.Tb(),l.Tb(),l.ec(),l.Ub(53,"div",36),l.Fc(54,"This zip code is invalid."),l.Tb(),l.Tb(),l.Ub(55,"button",37),l.cc("click",(function(){return o.onSubmit(o.form_main)})),l.Ub(56,"div",38),l.Fc(57,"Find Insurers"),l.Tb(),l.Ub(58,"div",39),l.fc(),l.Ub(59,"svg",40),l.Pb(60,"polyline",41),l.Tb(),l.ec(),l.Ub(61,"div"),l.Fc(62,"Find Insurers"),l.Tb(),l.Tb(),l.Ub(63,"div",42),l.Ub(64,"div",43),l.fc(),l.Ub(65,"svg",44),l.Pb(66,"path",45),l.Pb(67,"path",46),l.Pb(68,"path",47),l.Pb(69,"path",48),l.Pb(70,"path",49),l.Pb(71,"circle",50),l.Pb(72,"circle",51),l.Pb(73,"path",52),l.Tb(),l.Tb(),l.ec(),l.Ub(74,"div",53),l.Pb(75,"i"),l.Pb(76,"i"),l.Pb(77,"i"),l.Pb(78,"i"),l.Pb(79,"i"),l.Pb(80,"i"),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(81,"div",54),l.Ub(82,"div",55),l.Ub(83,"div",56),l.Ub(84,"p"),l.Fc(85,"Based in Brownsville, TX, Lowcostinsurance.com is dedicated to making your life easier by starting with helping you pay less for auto insurance.\nLow Cost Insurance is all about empowering people with information and changing the way how Insurance is bought. "),l.Tb(),l.Ub(86,"p"),l.Fc(87,"We demystifies the insurance buying process by making it easy to compare rates and features of all the service provider side-by-side. We can even\npinpoint your best prequalified offers in seconds and provide next steps to help you capitalize on them \u2014 all while protecting your privacy, personal\ninformation and credit score."),l.Tb(),l.Ub(88,"p"),l.Fc(89,"LCI is here to make buying insurance really effortless. How do we ensure that? Insurance, say hello to technology. By adding technology to insurance,\nwe have transformed something that\u2019s long and tedious to something that\u2019s quick and easy. And in the process, we\u2019ve managed to fit something as\nmassive as insurance in your pocket. Low Cost Insurance is digital first which means that you\u2019ll be as comfortable using it as you are using your\nown smartphone."),l.Tb(),l.Ub(90,"p"),l.Fc(91,"We make insurance effortless by making it affordable and hassle-free because when it comes to finding ways to making your life easier, we leave no\nstones unturned."),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Pb(92,"app-call-agent-common"),l.Pb(93,"app-footer"),l.Tb()),2&e&&(l.Cb(14),l.mc("formGroup",o.form_main),l.Cb(9),l.mc("options",o.carConfig),l.Cb(13),l.mc("options",o.homeConfig),l.Cb(8),l.mc("ngClass",l.qc(4,g,!o.isShow)))},directives:[u.a,n.v,n.p,n.h,n.b,n.r,n.o,n.f,b.a,i.j,n.k,m.a,p.a],styles:[""]}),a),f=t("lPHp"),v=t.n(f);function w(){return v.a}var y,C=[{path:"",component:h}],_=((y=function e(){_classCallCheck(this,e)}).\u0275mod=l.Mb({type:y}),y.\u0275inj=l.Lb({factory:function(e){return new(e||y)},imports:[[b.b.forRoot({player:w,useCache:!0}),s.g.forChild(C),i.b,r.a,n.s],s.g]}),y)}}]);