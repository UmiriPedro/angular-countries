import{A as R,B as z,C as j,D as N,E as H,F as G,J,L as K,M as Q,N as $,Q as x,S as W,a as S,b as k,c as b,d as A,e as d,f as _,g as O,h as P,i as q,j as T,k as c,l as f,m as I,n as u,o as n,p as e,q as p,r as g,s as F,t as w,u as a,v as s,w as B,x as L,y as M,z as D}from"./chunk-UBSCDRVA.js";var h=(()=>{let t=class t{constructor(o){this.http=o,this.apiUrl="https://restcountries.com/v3.1"}searchCountryByAlphaCode(o){let r=`${this.apiUrl}/alpha/${o}`;return this.http.get(r).pipe(k(m=>m.length>=0?m[0]:null),b(()=>S(null)))}searchCapital(o){let r=`${this.apiUrl}/capital/${o}`;return this.http.get(r).pipe(b(()=>S([])))}searchCountry(o){let r=`${this.apiUrl}/name/${o}`;return this.http.get(r).pipe(b(()=>S([])))}searchRegion(o){let r=`${this.apiUrl}/region/${o}`;return this.http.get(r).pipe(b(()=>S([])))}};t.\u0275fac=function(r){return new(r||t)(q(G))},t.\u0275prov=O({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function ot(i,t){i&1&&(n(0,"div",2),a(1,` No hay paises que mostrar
`),e())}var at=i=>["/countries/by",i];function lt(i,t){if(i&1&&(n(0,"tr")(1,"td"),a(2),e(),n(3,"td"),a(4),e(),n(5,"td"),p(6,"img",5),e(),n(7,"td"),a(8),e(),n(9,"td"),a(10),e(),n(11,"td"),a(12),M(13,"number"),e(),n(14,"td")(15,"a",6),a(16,"Info"),e()()()),i&2){let l=t.$implicit,o=t.index;c(2),s(o+1),c(2),B(" ",l.flag," "),c(2),u("src",l.flags.svg,T)("alt",l.name.common),c(2),s(l.name.common),c(2),s(l.capital),c(2),s(D(13,8,l.population)),c(3),u("routerLink",L(10,at,l.cca3))}}function ct(i,t){if(i&1&&(n(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),e(),n(5,"th"),a(6,"Icon"),e(),n(7,"th"),a(8,"Bandera"),e(),n(9,"th"),a(10,"Nombre"),e(),n(11,"th"),a(12,"Capital"),e(),n(13,"th"),a(14,"Poblaci\xF3n"),e(),p(15,"th"),e()(),n(16,"tbody"),I(17,lt,17,12,"tr",4),e()()),i&2){let l=F();c(17),u("ngForOf",l.countries)}}var C=(()=>{let t=class t{constructor(){this.countries=[]}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=d({type:t,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(r,m){if(r&1&&I(0,ot,2,0,"div",0)(1,ct,18,1,"ng-template",null,1,R),r&2){let v=w(2);u("ngIf",m.countries.length===0)("ngIfElse",v)}},dependencies:[z,j,Q,N],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let i=t;return i})();var Y=(()=>{let t=class t{constructor(o){this.countriesService=o,this.countries=[]}searchByCapital(o){this.countriesService.searchCapital(o).subscribe(r=>this.countries=r)}};t.\u0275fac=function(r){return new(r||t)(f(h))},t.\u0275cmp=d({type:t,selectors:[["app-by-capital-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onValue"],[3,"countries"]],template:function(r,m){r&1&&(n(0,"h2"),a(1,"Por Capital"),e(),p(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("onValue",function(E){return m.searchByCapital(E)}),e()()(),n(6,"div",0)(7,"div",1),p(8,"hr")(9,"countries-table",3),e()()),r&2&&(c(9),u("countries",m.countries))},dependencies:[x,C],encapsulation:2});let i=t;return i})();var Z=(()=>{let t=class t{constructor(o){this.countriesService=o,this.countries=[]}searchByCountry(o){this.countriesService.searchCountry(o).subscribe(r=>this.countries=r)}};t.\u0275fac=function(r){return new(r||t)(f(h))},t.\u0275cmp=d({type:t,selectors:[["app-by-country-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","B\xFAsqueda por pa\xEDs",3,"onValue"],[3,"countries"]],template:function(r,m){r&1&&(n(0,"h2"),a(1,"Por Pa\xEDs"),e(),p(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("onValue",function(E){return m.searchByCountry(E)}),e()()(),n(6,"div",0)(7,"div",1),p(8,"hr")(9,"countries-table",3),e()()),r&2&&(c(9),u("countries",m.countries))},dependencies:[x,C],encapsulation:2});let i=t;return i})();var tt=(()=>{let t=class t{constructor(o){this.countriesService=o,this.countries=[]}searchByRegion(o){this.countriesService.searchRegion(o).subscribe(r=>this.countries=r)}};t.\u0275fac=function(r){return new(r||t)(f(h))},t.\u0275cmp=d({type:t,selectors:[["app-by-region-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","B\xFAsqueda por continente",3,"onValue"],[3,"countries"]],template:function(r,m){r&1&&(n(0,"h2"),a(1,"Por Continente"),e(),p(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("onValue",function(E){return m.searchByRegion(E)}),e()()(),n(6,"div",0)(7,"div",1),p(8,"hr")(9,"countries-table",3),e()()),r&2&&(c(9),u("countries",m.countries))},dependencies:[x,C],encapsulation:2});let i=t;return i})();function st(i,t){i&1&&(n(0,"div",2),a(1," Espere por favor "),e())}function mt(i,t){if(i&1&&(n(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4,"Pa\xEDs: "),n(5,"strong"),a(6),e()(),p(7,"hr"),e()(),n(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Bandera"),e(),p(12,"img",6),e(),n(13,"div",7)(14,"h3"),a(15,"Informaci\xF3n"),e(),n(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblaci\xF3n:"),e(),a(20),M(21,"number"),e(),n(22,"li",9)(23,"strong"),a(24,"C\xF3digo:"),e(),a(25),e()()()(),n(26,"div",10)(27,"div",7)(28,"h3"),a(29,"Traducciones"),e(),n(30,"div",11)(31,"span",12),a(32),e(),n(33,"span",12),a(34),e(),n(35,"span",12),a(36),e(),n(37,"span",12),a(38),e(),n(39,"span",12),a(40),e(),n(41,"span",12),a(42),e(),n(43,"span",12),a(44),e(),n(45,"span",12),a(46),e(),n(47,"span",12),a(48),e(),n(49,"span",12),a(50),e(),n(51,"span",12),a(52),e()()()()()),i&2){let l=F();c(6),s(l.country.name.common),c(6),u("src",l.country.flags.svg,T)("alt",l.country.name.common),c(8),B(" ",D(21,16,l.country.population)," "),c(5),B(" ",l.country.cca3," "),c(7),s(l.country.translations.ara==null?null:l.country.translations.ara.common),c(2),s(l.country.translations.bre==null?null:l.country.translations.bre.common),c(2),s(l.country.translations.ces==null?null:l.country.translations.ces.common),c(2),s(l.country.translations.cym==null?null:l.country.translations.cym.common),c(2),s(l.country.translations.deu==null?null:l.country.translations.deu.common),c(2),s(l.country.translations.est==null?null:l.country.translations.est.common),c(2),s(l.country.translations.fin==null?null:l.country.translations.fin.common),c(2),s(l.country.translations.fra==null?null:l.country.translations.fra.common),c(2),s(l.country.translations.ita==null?null:l.country.translations.ita.common),c(2),s(l.country.translations.kor==null?null:l.country.translations.kor.common),c(2),s(l.country.translations.per==null?null:l.country.translations.per.common)}}var et=(()=>{let t=class t{constructor(o,r,m){this.activatedRoute=o,this.router=r,this.countriesService=m}ngOnInit(){this.activatedRoute.params.pipe(A(({id:o})=>this.countriesService.searchCountryByAlphaCode(o))).subscribe(o=>o?this.country=o:this.router.navigateByUrl(""))}};t.\u0275fac=function(r){return new(r||t)(f(J),f(K),f(h))},t.\u0275cmp=d({type:t,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(r,m){if(r&1&&I(0,st,2,0,"ng-template",null,0,R)(2,mt,53,18,"div",1),r&2){let v=w(1);c(2),u("ngIf",m.country)("ngIfElse",v)}},dependencies:[j,N],encapsulation:2});let i=t;return i})();var pt=[{path:"by-capital",component:Y},{path:"by-country",component:Z},{path:"by-region",component:tt},{path:"by/:id",component:et},{path:"**",redirectTo:"by-capital"}],nt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=_({type:t}),t.\u0275inj=P({imports:[$.forChild(pt),$]});let i=t;return i})();var Ut=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=_({type:t}),t.\u0275inj=P({imports:[H,nt,W]});let i=t;return i})();export{Ut as CountriesModule};
