import{A as S,B as F,C as L,D as w,E as D,F as X,G as M,H as g,I as N,J as Y,K as Z,O as ee,Q as te,R as ie,S as U,V as E,W as O,Y as ne,a as k,b as z,c as A,d as J,e as C,f as h,g as B,h as H,i as G,j as K,k as T,l as Q,m as P,n as s,o as f,p as u,q as m,r as o,s as i,t as p,u as W,v as I,w as x,x as R,y as a,z as d}from"./chunk-6O7ITBGH.js";var y=(()=>{let e=class e{constructor(n){this.http=n,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{termSearch:"",countries:[]},byCountries:{termSearch:"",countries:[]},byRegion:{region:"",countries:[]}},console.log("CountriesService init"),this.loadFromLocalStorage()}searchCountryByAlphaCode(n){let r=`${this.apiUrl}/alpha/${n}`;return this.http.get(r).pipe(z(l=>l.length>=0?l[0]:null),A(()=>k(null)))}searchCapital(n){let r=`${this.apiUrl}/capital/${n}`;return this.getCountriesRequest(r).pipe(C(l=>this.cacheStore.byCapital={termSearch:n,countries:l}),C(()=>this.saveToLocalStorage()))}searchCountry(n){let r=`${this.apiUrl}/name/${n}`;return this.getCountriesRequest(r).pipe(C(l=>this.cacheStore.byCountries={termSearch:n,countries:l}),C(()=>this.saveToLocalStorage()))}searchRegion(n){let r=`${this.apiUrl}/region/${n}`;return this.getCountriesRequest(r).pipe(C(l=>this.cacheStore.byRegion={region:n,countries:l}),C(()=>this.saveToLocalStorage()))}getCountriesRequest(n){return this.http.get(n).pipe(A(()=>k([])))}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}};e.\u0275fac=function(r){return new(r||e)(Q(Z))},e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function pe(t,e){t&1&&(o(0,"div",2),a(1,` No hay paises que mostrar
`),i())}var de=t=>["/countries/by",t];function ue(t,e){if(t&1&&(o(0,"tr")(1,"td"),a(2),i(),o(3,"td"),a(4),i(),o(5,"td"),p(6,"img",5),i(),o(7,"td"),a(8),i(),o(9,"td"),a(10),i(),o(11,"td"),a(12),L(13,"number"),i(),o(14,"td")(15,"a",6),a(16,"Info"),i()()()),t&2){let c=e.$implicit,n=e.index;s(2),d(n+1),s(2),S(" ",c.flag," "),s(2),m("src",c.flags.svg,P)("alt",c.name.common),s(2),d(c.name.common),s(2),d(c.capital),s(2),d(w(13,8,c.population)),s(3),m("routerLink",F(10,de,c.cca3))}}function he(t,e){if(t&1&&(o(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),i(),o(5,"th"),a(6,"Icon"),i(),o(7,"th"),a(8,"Bandera"),i(),o(9,"th"),a(10,"Nombre"),i(),o(11,"th"),a(12,"Capital"),i(),o(13,"th"),a(14,"Poblaci\xF3n"),i(),p(15,"th"),i()(),o(16,"tbody"),u(17,ue,17,12,"tr",4),i()()),t&2){let c=x();s(17),m("ngForOf",c.countries)}}var _=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(r,l){if(r&1&&u(0,pe,2,0,"div",0)(1,he,18,1,"ng-template",null,1,D),r&2){let v=R(2);m("ngIf",l.countries.length===0)("ngIfElse",v)}},dependencies:[M,g,ie,N],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let t=e;return t})();function ge(t,e){t&1&&p(0,"shared-loading-spinner")}var re=(()=>{let e=class e{constructor(n){this.countriesService=n,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.termSearch}searchByCapital(n){this.isLoading=!0,this.countriesService.searchCapital(n).subscribe(r=>{this.countries=r,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","B\xFAsqueda por capital",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"Por Capital"),i(),p(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),I("onDebounce",function($){return l.searchByCapital($)}),i()()(),o(6,"div",0)(7,"div",1),p(8,"hr"),u(9,ge,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),i()()),r&2&&(s(5),m("initialValue",l.initialValue),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries))},dependencies:[g,E,O,_],encapsulation:2});let t=e;return t})();function ye(t,e){t&1&&p(0,"shared-loading-spinner")}var ae=(()=>{let e=class e{constructor(n){this.countriesService=n,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.termSearch}searchByCountry(n){this.isLoading=!0,this.countriesService.searchCountry(n).subscribe(r=>{this.countries=r,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","B\xFAsqueda por pa\xEDs",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"Por Pa\xEDs"),i(),p(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),I("onDebounce",function($){return l.searchByCountry($)}),i()()(),o(6,"div",0)(7,"div",1),p(8,"hr"),u(9,ye,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),i()()),r&2&&(s(5),m("initialValue",l.initialValue),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries))},dependencies:[g,E,O,_],encapsulation:2});let t=e;return t})();var ve=t=>({"btn-outline-primary":t});function Ce(t,e){if(t&1){let c=W();o(0,"button",6),I("click",function(){let l=H(c).$implicit,v=x();return G(v.searchByRegion(l))}),a(1),i()}if(t&2){let c=e.$implicit,n=x();m("ngClass",F(2,ve,n.selectedRegion===c)),s(),S(" ",c," ")}}function xe(t,e){t&1&&p(0,"shared-loading-spinner")}var se=(()=>{let e=class e{constructor(n){this.countriesService=n,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoading=!1}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(n){this.selectedRegion=n,this.isLoading=!0,this.countriesService.searchRegion(n).subscribe(r=>{this.countries=r,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"Por Continente"),i(),p(2,"hr"),o(3,"div",0)(4,"div",1),u(5,Ce,2,4,"button",2),i()(),o(6,"div",0)(7,"div",3),p(8,"hr"),u(9,xe,1,0,"shared-loading-spinner",4),p(10,"countries-table",5),i()()),r&2&&(s(5),m("ngForOf",l.regions),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries))},dependencies:[X,M,g,E,_],encapsulation:2});let t=e;return t})();function Se(t,e){t&1&&(o(0,"div",2),a(1," Espere por favor "),i())}function be(t,e){if(t&1&&(o(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4,"Pa\xEDs: "),o(5,"strong"),a(6),i()(),p(7,"hr"),i()(),o(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Bandera"),i(),p(12,"img",6),i(),o(13,"div",7)(14,"h3"),a(15,"Informaci\xF3n"),i(),o(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblaci\xF3n:"),i(),a(20),L(21,"number"),i(),o(22,"li",9)(23,"strong"),a(24,"C\xF3digo:"),i(),a(25),i()()()(),o(26,"div",10)(27,"div",7)(28,"h3"),a(29,"Traducciones"),i(),o(30,"div",11)(31,"span",12),a(32),i(),o(33,"span",12),a(34),i(),o(35,"span",12),a(36),i(),o(37,"span",12),a(38),i(),o(39,"span",12),a(40),i(),o(41,"span",12),a(42),i(),o(43,"span",12),a(44),i(),o(45,"span",12),a(46),i(),o(47,"span",12),a(48),i(),o(49,"span",12),a(50),i(),o(51,"span",12),a(52),i()()()()()),t&2){let c=x();s(6),d(c.country.name.common),s(6),m("src",c.country.flags.svg,P)("alt",c.country.name.common),s(8),S(" ",w(21,16,c.country.population)," "),s(5),S(" ",c.country.cca3," "),s(7),d(c.country.translations.ara.common),s(2),d(c.country.translations.bre.common),s(2),d(c.country.translations.ces.common),s(2),d(c.country.translations.cym.common),s(2),d(c.country.translations.deu.common),s(2),d(c.country.translations.est.common),s(2),d(c.country.translations.fin.common),s(2),d(c.country.translations.fra.common),s(2),d(c.country.translations.ita.common),s(2),d(c.country.translations.kor.common),s(2),d(c.country.translations.per.common)}}var ce=(()=>{let e=class e{constructor(n,r,l){this.activatedRoute=n,this.router=r,this.countriesService=l}ngOnInit(){this.activatedRoute.params.pipe(J(({id:n})=>this.countriesService.searchCountryByAlphaCode(n))).subscribe(n=>n?this.country=n:this.router.navigateByUrl(""))}};e.\u0275fac=function(r){return new(r||e)(f(ee),f(te),f(y))},e.\u0275cmp=h({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(r,l){if(r&1&&u(0,Se,2,0,"ng-template",null,0,D)(2,be,53,18,"div",1),r&2){let v=R(1);s(2),m("ngIf",l.country)("ngIfElse",v)}},dependencies:[g,N],encapsulation:2});let t=e;return t})();var Ie=[{path:"by-capital",component:re},{path:"by-country",component:ae},{path:"by-region",component:se},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],le=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=T({imports:[U.forChild(Ie),U]});let t=e;return t})();var We=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=T({imports:[Y,le,ne]});let t=e;return t})();export{We as CountriesModule};