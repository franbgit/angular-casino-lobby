(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"ct+p":function(e,t,r){"use strict";r.r(t),r.d(t,"HomeModule",function(){return z});var s=r("ofXK"),a=r("3Pt+"),c=r("tyNb"),i=r("fXoL"),n=r("z6cu"),o=r("jtHE"),h=r("oB13");function b(e,t,r,s){r&&"function"!=typeof r&&(s=r);const a="function"==typeof r?r:void 0,c=new o.a(e,t,s);return e=>Object(h.a)(()=>c,a)(e)}var u=r("x+ZX"),g=r("7o/Q");function p(e=-1){return t=>t.lift(new l(e,t))}class l{constructor(e,t){this.count=e,this.source=t}call(e,t){return t.subscribe(new d(e,this.count,this.source))}}class d extends g.a{constructor(e,t,r){super(e),this.count=t,this.source=r}error(e){if(!this.isStopped){const{source:t,count:r}=this;if(0===r)return super.error(e);r>-1&&(this.count=r-1),t.subscribe(this._unsubscribeAndRecycle())}}}var m=r("JIr8"),f=r("tk/3");let w=(()=>{class e{constructor(e,t){this.apiUrl=e,this.http=t,this.apiCache={categories:null,games:{}}}getCategories(){return this.apiCache.categories||(this.apiCache.categories=this.http.get(this.apiUrl+"/game-categories?brand=cherrycasino.desktop&locale=en").pipe(b(1),Object(u.a)(),p(1),Object(m.a)(this.handleError))),this.apiCache.categories}getGames(e){return this.apiCache.games[e]||(this.apiCache.games[e]=this.http.get(`${this.apiUrl}/game-categories/${e}?brand=cherrycasino.desktop&locale=en`).pipe(b(1),Object(u.a)(),p(1),Object(m.a)(this.handleError))),this.apiCache.games[e]}clearCache(){this.apiCache={categories:null,games:{}}}handleError(e){const t=e.error instanceof ErrorEvent?"Error: "+e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`;return console.log(t),window.alert("An error has occurred, please try again later"),Object(n.a)(t)}}return e.\u0275fac=function(t){return new(t||e)(i.Qb("API_URL"),i.Qb(f.a))},e.\u0275prov=i.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=r("wZkO"),y=r("0+/s"),C=r("4Kj8");function j(e,t){if(1&e&&(i.Mb(0,"mat-tab",3),i.Kb(1,"app-single-category",4),i.Lb()),2&e){const e=t.$implicit;i.bc("label",e.name),i.zb(1),i.bc("games",e._embedded.games)}}function O(e,t){if(1&e&&(i.Mb(0,"div"),i.Mb(1,"mat-tab-group"),i.mc(2,j,2,2,"mat-tab",2),i.Lb(),i.Lb()),2&e){const e=i.Wb();i.zb(2),i.bc("ngForOf",e.categoryData)}}function k(e,t){1&e&&(i.Mb(0,"div"),i.Kb(1,"app-spinner"),i.Lb())}const E=[{path:"",component:(()=>{class e{constructor(e){this.gamesService=e,this.categoryData=[],this.stage="loading"}ngOnInit(){this.gamesService.getCategories().subscribe(e=>{this.categoryData=e._embedded.game_categories,this.stage="show"})}}return e.\u0275fac=function(t){return new(t||e)(i.Jb(w))},e.\u0275cmp=i.Db({type:e,selectors:[["app-home"]],decls:3,vars:3,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"games"]],template:function(e,t){1&e&&(i.Mb(0,"div",0),i.mc(1,O,3,1,"div",1),i.mc(2,k,2,0,"div",1),i.Lb()),2&e&&(i.bc("ngSwitch",t.stage),i.zb(1),i.bc("ngSwitchCase","show"),i.zb(1),i.bc("ngSwitchCase","loading"))},directives:[s.j,s.k,v.b,s.h,v.a,y.a,C.a],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(t){return new(t||e)},imports:[[c.c.forChild(E)],c.c]}),e})();var L=r("PCNd"),M=r("hctd");let z=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(t){return new(t||e)},imports:[[s.b,a.b,S,L.a,M.a]]}),e})()}}]);