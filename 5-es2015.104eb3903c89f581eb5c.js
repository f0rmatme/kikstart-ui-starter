(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"U4+L":function(t,e,T){"use strict";T.r(e);var o=T("tyNb"),O=T("dDmP"),n=T("lJxs"),N=T("vkgz"),r=T("eIep"),s=T("fXoL"),i=T("LRne"),c=T("sCQS");let C=(()=>{class t{constructor(){this.documents={},this.documents=this.readDocuments(c)}readDocuments(t){return t.reduce((t,e)=>Object.assign(Object.assign({},t),{[e.id]:e}),{})}getPosts(){return Object(i.a)(Object.keys(this.documents).map(t=>this.documents[t]))}getPost(t){return Object(i.a)(this.documents[t]?{data:this.documents[t]}:{errors:[{message:"Not found"}]})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=T("ofXK");const E=function(t){return{path:t,label:"Read More",iconAfter:"ml-2 fa fa-angle-double-right"}};function a(t,e){if(1&t&&(s.Vb(0,"div",1),s.Vb(1,"ui-card"),s.Vb(2,"ui-card-body"),s.Vb(3,"h4"),s.Vb(4,"small",2),s.Fc(5),s.Tb(),s.Tb(),s.Vb(6,"h2",3),s.Vb(7,"a",4),s.Fc(8),s.Tb(),s.Tb(),s.Pb(9,"div",5),s.Vb(10,"div",6),s.Pb(11,"ui-link",7),s.Tb(),s.Tb(),s.Tb(),s.Tb()),2&t){const t=e.$implicit;s.zb(5),s.Gc(t.created),s.zb(2),s.lc("routerLink",t.id),s.zb(1),s.Gc(t.title),s.zb(1),s.lc("innerHTML",t.snippet,s.wc),s.zb(2),s.lc("link",s.nc(5,E,t.id))}}let d=(()=>{class t{constructor(){this.posts=[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-post-list"]],inputs:{posts:"posts"},decls:1,vars:1,consts:[["class","mb-5",4,"ngFor","ngForOf"],[1,"mb-5"],[1,"text-muted"],[1,"card-title","my-4"],[3,"routerLink"],[3,"innerHTML"],[1,"my-3"],[3,"link"]],template:function(t,e){1&t&&s.Dc(0,a,12,7,"div",0),2&t&&s.lc("ngForOf",e.posts)},directives:[b.l,O.d,O.c,o.e,O.j],encapsulation:2}),t})(),p=(()=>{class t{constructor(t,e,T){this.route=t,this.service=e,this.ui=T}ngOnInit(){this.ui.setMetaData({title:"Blog"}),this.posts$=this.route.url.pipe(Object(n.a)(t=>t.map(t=>t.path).join("/")),Object(N.a)(t=>this.url=t),Object(r.a)(t=>this.service.getPosts()))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(o.a),s.Ob(C),s.Ob(O.l))},t.\u0275cmp=s.Ib({type:t,selectors:[["ng-component"]],decls:5,vars:3,consts:[["title","Blog","description","This is what a blog would look like..."],[1,"row"],[1,"col-12","col-md-8","offset-md-2"],[3,"posts"]],template:function(t,e){1&t&&(s.Pb(0,"ui-hero",0),s.Vb(1,"div",1),s.Vb(2,"div",2),s.Pb(3,"app-post-list",3),s.gc(4,"async"),s.Tb(),s.Tb()),2&t&&(s.zb(3),s.lc("posts",s.hc(4,1,e.posts$)))},directives:[O.h,d],pipes:[b.b],encapsulation:2}),t})(),l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-post-detail"]],inputs:{post:"post"},decls:6,vars:3,consts:[[3,"title","description"],[1,"row"],[1,"col-12","col-md-8","offset-md-2"],[3,"innerHTML"]],template:function(t,e){1&t&&(s.Pb(0,"ui-hero",0),s.Vb(1,"div",1),s.Vb(2,"div",2),s.Vb(3,"ui-card"),s.Vb(4,"ui-card-body"),s.Pb(5,"div",3),s.Tb(),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.lc("title",e.post.title)("description",e.post.created),s.zb(5),s.lc("innerHTML",e.post.content,s.wc))},directives:[O.h,O.d,O.c],encapsulation:2}),t})();function u(t,e){if(1&t&&s.Pb(0,"ui-debug",4),2&t){const t=s.fc().errors;s.lc("data",t)}}function U(t,e){if(1&t&&s.Pb(0,"app-post-detail",5),2&t){const t=s.fc().data;s.lc("post",t)}}function D(t,e){if(1&t&&(s.Dc(0,u,1,1,"ui-debug",2),s.Dc(1,U,1,1,"app-post-detail",3)),2&t){const t=e.data,T=e.errors;s.lc("ngIf",T&&T.length),s.zb(1),s.lc("ngIf",t)}}let M=(()=>{class t{constructor(t,e){this.route=t,this.service=e}ngOnInit(){this.data$=this.route.url.pipe(Object(n.a)(t=>t.map(t=>t.path).join("/")),Object(N.a)(t=>this.url=t),Object(r.a)(t=>this.service.getPost(t)))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(o.a),s.Ob(C))},t.\u0275cmp=s.Ib({type:t,selectors:[["ng-component"]],decls:4,vars:4,consts:[[3,"data","outlet"],["outlet",""],["label","Errors",3,"data",4,"ngIf"],[3,"post",4,"ngIf"],["label","Errors",3,"data"],[3,"post"]],template:function(t,e){if(1&t&&(s.Pb(0,"ui-data",0),s.gc(1,"async"),s.Dc(2,D,2,2,"ng-template",null,1,s.Ec)),2&t){const t=s.tc(3);s.lc("data",s.hc(1,2,e.data$))("outlet",t)}},directives:[O.f,b.m,O.g,l],pipes:[b.b],encapsulation:2}),t})();T.d(e,"BlogModule",(function(){return R}));const F=[{path:"",component:p},{path:"**",component:M}];let R=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[O.k,o.f.forChild(F)]]}),t})()},sCQS:function(t){t.exports=JSON.parse('[{"id":"index","title":"Welcome to Kikstart","snippet":"CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content!....","content":"CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>CONTENT FOR DOCUMENT: Welcome to Kikstart - This is the content! <br/>","created":"yesterday","updated":"yesterday"},{"id":"about","title":"About","snippet":"CONTENT FOR DOCUMENT: About....","content":"CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>CONTENT FOR DOCUMENT: About <br/>","created":"yesterday","updated":"yesterday"},{"id":"getting-started","title":"Getting Started","snippet":"CONTENT FOR DOCUMENT: Getting Started....","content":"CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>CONTENT FOR DOCUMENT: Getting Started <br/>","created":"yesterday","updated":"yesterday"},{"id":"ui-components","title":"UI Components","snippet":"CONTENT FOR DOCUMENT: UI Components....","content":"CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>CONTENT FOR DOCUMENT: UI Components <br/>","created":"yesterday","updated":"yesterday"}]')}}]);