(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0+/s":function(e,t,n){"use strict";n.d(t,"a",function(){return g});var s=n("fXoL"),a=n("ofXK"),i=n("Wp6s");let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-game"]],inputs:{game:"game"},decls:7,vars:5,consts:[[1,"ellipsis",3,"title"],[1,"crop-image"],["alt","image",1,"scale",3,"src"]],template:function(e,t){1&e&&(s.Mb(0,"mat-card"),s.Mb(1,"mat-card-header"),s.Mb(2,"mat-card-title",0),s.nc(3),s.Xb(4,"uppercase"),s.Lb(),s.Lb(),s.Mb(5,"div",1),s.Kb(6,"img",2),s.Lb(),s.Lb()),2&e&&(s.zb(2),s.bc("title",t.game.name),s.zb(1),s.oc(s.Yb(4,3,t.game.name)),s.zb(3),s.bc("src",t.game.thumbnail,s.hc))},directives:[i.a,i.b,i.d],pipes:[a.n],styles:["mat-card[_ngcontent-%COMP%]{border:2px solid}mat-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.05)}.ellipsis[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:118px}.scale[_ngcontent-%COMP%]{transition:all .3s ease-in-out}"]}),e})();var c=n("bTqV");function o(e,t){1&e&&s.Kb(0,"app-game",5),2&e&&s.bc("game",t.$implicit)}function m(e,t){if(1&e){const e=s.Nb();s.Mb(0,"div",6),s.Mb(1,"button",7),s.Tb("click",function(){return s.gc(e),s.Wb().showMore()}),s.nc(2," Load More Games "),s.Lb(),s.Lb()}}let g=(()=>{class e{constructor(){this.filteredGameList=[],this.status="show",this.maxGames=10,this.isThereMore=!0}ngOnInit(){}ngOnChanges(){this.maxGames=10,this.isThereMore=this.maxGames<this.games.length}showMore(){this.maxGames+=10,this.isThereMore=this.maxGames<this.games.length}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-single-category"]],inputs:{games:"games"},features:[s.xb],decls:5,vars:2,consts:[[1,"row"],[1,"col-xs-12"],["id","games-list",1,"games-grid"],[3,"game",4,"ngFor","ngForOf"],["class","buttonContainer",4,"ngIf"],[3,"game"],[1,"buttonContainer"],["mat-raised-button","","color","primary","id","showMore_button",3,"click"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Mb(2,"div",2),s.mc(3,o,1,1,"app-game",3),s.Lb(),s.mc(4,m,3,0,"div",4),s.Lb(),s.Lb()),2&e&&(s.zb(3),s.bc("ngForOf",t.games.slice(0,t.maxGames)),s.zb(1),s.bc("ngIf",t.isThereMore))},directives:[a.h,a.i,r,c.b],styles:["app-game[_ngcontent-%COMP%]{margin:10px}.buttonContainer[_ngcontent-%COMP%]{text-align:center}.games-grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}"]}),e})()},"4Kj8":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var s=n("fXoL"),a=n("Xa2L");let i=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-spinner"]],decls:1,vars:0,template:function(e,t){1&e&&s.Kb(0,"mat-spinner")},directives:[a.b],styles:["mat-spinner[_ngcontent-%COMP%]{margin-right:auto;margin-left:auto}"]}),e})()}}]);