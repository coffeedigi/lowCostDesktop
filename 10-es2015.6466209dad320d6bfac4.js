(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9SzC":function(e,o,t){"use strict";t.r(o),t.d(o,"playerFactory",(function(){return f})),t.d(o,"HomeInsuranceMainModule",(function(){return w}));var i=t("ofXK"),a=t("3Pt+"),n=t("PCNd"),r=t("tyNb"),s=t("DPnb"),l=t("lPHp"),c=t.n(l),d=t("fXoL"),b=t("nm5K"),u=t("9YtQ"),m=t("fECr"),h=t("foyK"),g=t("fp1T");const p=function(e){return{"field-has-error":e}};function f(){return c.a}const v=[{path:"",component:(()=>{class e{constructor(e,o,t,i){this.formBuilder=e,this.router=o,this.API=t,this.deviceService=i,this.isShow=!0,this.homeConfig={path:"assets/lottie_animation/home-animation.json",renderer:"svg",autoplay:!1,loop:!1}}ngOnInit(){this.form_main=this.formBuilder.group({insurance_line:["home",[a.u.required]],zipcode:["",[a.u.required,a.u.minLength(5)]]});var e=localStorage.getItem("dataSource");null!=e&&this.form_main.get("zipcode").setValue(e)}handleHomeAnimation(e){this.home_anim=e,this.home_anim.setSpeed(.4),this.home_anim.play()}onSubmit(e){console.log("out",e),setTimeout(()=>{console.log("in");var o=e.value.zipcode,t=JSON.parse(localStorage.getItem("zipCodeData"));null!=t&&null!=t&&t.zipcode!=e.value.zipcode&&localStorage.clear(),/^[0-9]{5}(?:-[0-9]{4})?$/.test(o)?this.API.getzipcode(o).subscribe(t=>{if(console.log(t,"zip data"),Array.isArray(t))this.isShow=!1;else{if("undefined"!=t.shortCode&&"fail"!=t.status&&(localStorage.setItem("zipCodeData",JSON.stringify({city:t.element.city,country:t.element.country,countryCode:t.element.countryCode,formattedAddress:t.element.formattedAddress,latitude:t.element.latitude,longitude:t.element.longitude,neighbourhood:t.element.neighbourhood,provider:t.element.provider,state:t.element.state,zipcode:t.element.zipcode,shortCode:t.shortCode})),this.isShow=!0,localStorage.setItem("dataSource",o),console.log(e.value.insurance_line,"form"),localStorage.setItem("insurance_line",e.value.insurance_line),this.isShow=!0,"home"==e.value.insurance_line)){localStorage.setItem("dataSource",o),localStorage.setItem("insurance_line",e.value.insurance_line),this.isShow=!0,e.value.userAgent=window.navigator.userAgent;const t=this.deviceService.isMobile(),a=this.deviceService.isTablet();if(this.deviceService.isDesktop()?e.value.deviceType="Desktop":t?e.value.deviceType="Mobile":a&&(e.value.deviceType="Tablet"),console.log(localStorage.getItem("homeInsurenceLocal"),"local"),"undefined"!=localStorage.getItem("homeInsurenceLocal")&&null!=localStorage.getItem("homeInsurenceLocal")&&""!=localStorage.getItem("homeInsurenceLocal")){var i=JSON.parse(localStorage.getItem("homeInsurenceLocal"));localStorage.setItem("homeInsurenceLocal",JSON.stringify(i)),console.log(JSON.stringify(i),"in home main")}null==localStorage.getItem("homeInsurenceLocal")&&localStorage.setItem("homeInsurenceLocal",""),console.log("in home qoute",localStorage.getItem("home_is_qoute")),"undefined"!=localStorage.getItem("home_is_qoute")&&null!=localStorage.getItem("home_is_qoute")&&"no"!=localStorage.getItem("home_is_qoute")||(localStorage.setItem("home_is_qoute","no"),this.router.navigate(["/insurance/homeowners/start"]),console.log("in home if qoute",localStorage.getItem("home_is_qoute"))),"yes"==localStorage.getItem("home_is_qoute")&&(this.router.navigate(["insurance/homewelcome"]),console.log("in home welcome",localStorage.getItem("123")))}"undefined"==t.shortCode&&(this.isShow=!1),"fail"==t.status&&(this.isShow=!1)}}):(localStorage.removeItem("dataSource"),this.isShow=!1)},1200)}}return e.\u0275fac=function(o){return new(o||e)(d.Ob(a.d),d.Ob(r.d),d.Ob(b.a),d.Ob(u.a))},e.\u0275cmp=d.Ib({type:e,selectors:[["app-home-insurance-mainpage"]],decls:79,vars:5,consts:[["id","home_slide_1",1,"body-wrap","bgLine-1"],[1,"blogOuter_pg","NavSpace-TP"],[1,"blogPg_Head_wrap",2,"background-image","url(/assets/images/blog-header.jpg)"],[1,"mngIns","d-flex","align-items-center"],[1,"w-100"],[1,"container"],["data-aos","fade-up","data-aos-duration","900",1,"blg_pg_head","text-center"],["data-aos","fade-up","data-aos-duration","900",1,"blogSubHead_text","text-center"],["data-aos","fade-up","data-aos-duration","900","data-aos-delay","100",1,"zipBox_blog2_wrap"],[1,"zipCode_blg_wrap"],[3,"formGroup"],[1,"mngIn_wrap"],[1,"radioRow_wrap"],[1,"radio-button-row","bxRadio_blg2","d-flex","align-items-end","justify-content-center"],[1,"radio-button-group"],[1,"bxRadio"],["formControlName","insurance_line","id","insurance_home","name","insurance_line","type","radio","value","home",1,"input-radio"],["for","insurance_home",1,"radio-button-label"],[1,"svg-container"],[3,"options","animationCreated"],[1,"checkWrap"],[1,"custom-control-indicator","hidden-sm-down"],[1,"dot"],["width","15","height","14","viewbox","0 0 15 14","fill","none",1,"iconMark"],["d","M2 8.36364L6.23077 12L13 2"],[1,"txtHead","f-w-B","text-center"],[1,"zipcode_blg_form",3,"ngClass"],[1,"form-inline","flex-nowrap","fldWrap-inline"],[1,"form-group","fld-iconWrp","flex-fill"],["type","text","formControlName","zipcode","maxlength","5","placeholder","Zip Code",1,"form-control","w-100","fldCustom"],[1,"fld-icon"],["height","20","viewBox","0 0 15 20","width","15","xmlns","http://www.w3.org/2000/svg",1,"icon"],["d","M7.14,0c3.75,0,7.15,2.84,7.15,6.34S11.19,14,7.14,20C3.1,14,0,9.83,0,6.34S3.39,0,7.14,0Zm0,9.15A2.56,2.56,0,1,0,4.58,6.59h0A2.56,2.56,0,0,0,7.14,9.15Z","fill","#0fa151"],[1,"invalid-fld-feedback"],[1,"btn","btnBg-1","btnSubmit","rocket-button",3,"click"],[1,"default"],[1,"success"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 13 11","id","check"],["stroke","#fff","points","1 5.5 5 9.5 12 1.5"],[1,"animation"],[1,"rocket"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 36","id","rocket"],["d","M12,0 C18.6666667,8.70175439 19.7777778,19.0350877 15.3333333,31 L8.66666667,31 C4.22222222,19.0350877 5.33333333,8.70175439 12,0 Z","fill","var(--rocket)"],["d","M12,0 C5.33333333,8.70175439 4.22222222,19.0350877 8.66666667,31 C6.72222222,17.9473684 7.83333333,7.61403509 12,0 Z","fill","var(--rocket-shadow-left)"],["d","M12,0 C18.6666667,8.70175439 19.7777778,19.0350877 15.3333333,31 C17.2777778,17.9473684 16.1666667,7.61403509 12,0 Z","fill","var(--rocket-shadow-right)"],["d","M22.2399372,27.25 C21.2403105,25.558628 19.4303122,23.808628 16.21,22 L15,31 L17.6512944,31 C18.2564684,31 18.8216022,31.042427 19.1572924,31.5292747 L21.7379379,35.271956 C22.0515593,35.7267976 22.5795404,36 23.1449294,36 C23.5649145,36 23.9142153,35.7073938 23.9866527,35.3215275 L24,35.146217 L23.9987214,35.1196135 C23.7534506,31.4421183 23.1671892,28.8189138 22.2399372,27.25 Z","fill","var(--rocket-wing-right)"],["d","M1.76006278,27.25 C2.75968951,25.558628 4.56968777,23.808628 7.79,22 L9,31 L6.34870559,31 C5.74353157,31 5.17839777,31.042427 4.84270762,31.5292747 L2.2620621,35.271956 C1.94844071,35.7267976 1.42045963,36 0.855070627,36 C0.435085457,36 0.0857846604,35.7073938 0.0133472633,35.3215275 L0,35.146217 L0.00127855763,35.1196135 C0.24654935,31.4421183 0.832810758,28.8189138 1.76006278,27.25 Z","fill","var(--rocket-wing-left)"],["fill","var(--rocket-window-shadow)","cx","12","cy","12","r","3"],["fill","var(--rocket-window)","cx","12","cy","12","r","2.5"],["d","M15.6021597,5.99977504 L8.39784027,5.99977504 C8.54788101,5.6643422 8.70496315,5.3309773 8.86908669,4.99968036 L15.1309133,4.99968036 C15.2950369,5.3309773 15.452119,5.6643422 15.6021597,5.99977504 Z","fill-opacity","0.3","fill","var(--rocket-line)"],[1,"smoke"],[1,"blog_type_2_outer"],["data-aos","fade-up","data-aos-duration","900","data-aos-delay","300",1,"container"],[1,"blogContwrap","line-H-1_7","blog-Edtr","blog-Edtr-2","tableStl-1"]],template:function(e,o){1&e&&(d.Pb(0,"app-header"),d.Ub(1,"div",0),d.Ub(2,"div",1),d.Ub(3,"div",2),d.Ub(4,"div",3),d.Ub(5,"div",4),d.Ub(6,"div",5),d.Ub(7,"h1",6),d.Fc(8,"Home Insurance"),d.Tb(),d.Ub(9,"div",7),d.Fc(10,"Compare Homeowners Insurance Quotes and Protect your biggest investment"),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(11,"div",5),d.Ub(12,"div",8),d.Ub(13,"div",9),d.Ub(14,"form",10),d.Ub(15,"div",11),d.Ub(16,"div",12),d.Ub(17,"div",13),d.Ub(18,"div",14),d.Ub(19,"div",15),d.Pb(20,"input",16),d.Ub(21,"label",17),d.Ub(22,"div",18),d.Ub(23,"ng-lottie",19),d.cc("animationCreated",(function(e){return o.handleHomeAnimation(e)})),d.Tb(),d.Tb(),d.Ub(24,"span",20),d.Ub(25,"span",21),d.Pb(26,"span",22),d.fc(),d.Ub(27,"svg",23),d.Pb(28,"path",24),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.ec(),d.Ub(29,"div",25),d.Fc(30,"Get insurance quotes instantly."),d.Tb(),d.Ub(31,"div",26),d.Ub(32,"div",27),d.Ub(33,"div",28),d.Pb(34,"input",29),d.Ub(35,"div",30),d.fc(),d.Ub(36,"svg",31),d.Ub(37,"title"),d.Fc(38,"Location pin icon"),d.Tb(),d.Pb(39,"path",32),d.Tb(),d.Tb(),d.ec(),d.Ub(40,"div",33),d.Fc(41,"This zip code is invalid."),d.Tb(),d.Tb(),d.Ub(42,"button",34),d.cc("click",(function(){return o.onSubmit(o.form_main)})),d.Ub(43,"div",35),d.Fc(44,"Find Insurers"),d.Tb(),d.Ub(45,"div",36),d.fc(),d.Ub(46,"svg",37),d.Pb(47,"polyline",38),d.Tb(),d.ec(),d.Ub(48,"div"),d.Fc(49,"Find Insurers"),d.Tb(),d.Tb(),d.Ub(50,"div",39),d.Ub(51,"div",40),d.fc(),d.Ub(52,"svg",41),d.Pb(53,"path",42),d.Pb(54,"path",43),d.Pb(55,"path",44),d.Pb(56,"path",45),d.Pb(57,"path",46),d.Pb(58,"circle",47),d.Pb(59,"circle",48),d.Pb(60,"path",49),d.Tb(),d.Tb(),d.ec(),d.Ub(61,"div",50),d.Pb(62,"i"),d.Pb(63,"i"),d.Pb(64,"i"),d.Pb(65,"i"),d.Pb(66,"i"),d.Pb(67,"i"),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(68,"div",51),d.Ub(69,"div",52),d.Ub(70,"div",53),d.Ub(71,"p"),d.Fc(72,"Owning a home means the reward of having a roof over your head you can call your own, but it also comes with risks like fire and theft, to name a few.\nOne way to ensure that you\u2019re protected against some of the most common risks is to get homeowners insurance. All insurance isn\u2019t the same, however. How can you know what you\u2019re buying? Here are answers to the top questions consumers have about home insurance."),d.Tb(),d.Ub(73,"p"),d.Fc(74,"Finding the right home insurance is important for both your wallet and your peace of mind. We make it easy to compare quotes from providers you can\ntrust. It\u2019s quick and easy to connect with our trusted partners and protect your home and belongings."),d.Tb(),d.Ub(75,"p"),d.Fc(76,"Find the best homeowners insurance rate and Protect your biggest investment with our fast and free quotes."),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Pb(77,"app-call-agent-common"),d.Pb(78,"app-footer"),d.Tb()),2&e&&(d.Cb(14),d.mc("formGroup",o.form_main),d.Cb(9),d.mc("options",o.homeConfig),d.Cb(8),d.mc("ngClass",d.qc(3,p,!o.isShow)))},directives:[m.a,a.v,a.p,a.h,a.b,a.r,a.o,a.f,s.a,i.j,a.k,h.a,g.a],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=d.Mb({type:e}),e.\u0275inj=d.Lb({factory:function(o){return new(o||e)},imports:[[s.b.forRoot({player:f,useCache:!0}),r.g.forChild(v),i.b,n.a,a.s],r.g]}),e})()}}]);