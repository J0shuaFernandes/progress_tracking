(self["webpackChunkiitb_wpp"] = self["webpackChunkiitb_wpp"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash/dash.component */ 9869);
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report/report.component */ 8562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dash_dash_component__WEBPACK_IMPORTED_MODULE_0__.DashComponent },
    { path: 'add students', component: _dash_dash_component__WEBPACK_IMPORTED_MODULE_0__.DashComponent },
    { path: 'students', component: _dash_dash_component__WEBPACK_IMPORTED_MODULE_0__.DashComponent },
    { path: 'recordings', component: _dash_dash_component__WEBPACK_IMPORTED_MODULE_0__.DashComponent },
    { path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_1__.ReportComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/nav.component */ 5375);


class AppComponent {
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ 5375);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ 6883);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 1803);
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash/dash.component */ 9869);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/card.component */ 7243);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player/player.component */ 5872);
/* harmony import */ var ngx_audio_player__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-audio-player */ 7855);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report/report.component */ 8562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);































//Amplify Angular : https://docs.amplify.aws/ui/auth/authenticator/q/framework/angular#usage
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.LayoutModule,
            //Material Modules
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
            //Forms Modules
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            //Ngx-Audio-Player
            ngx_audio_player__WEBPACK_IMPORTED_MODULE_30__.NgxAudioPlayerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent,
        _dash_dash_component__WEBPACK_IMPORTED_MODULE_3__.DashComponent,
        _card_card_component__WEBPACK_IMPORTED_MODULE_4__.CardComponent,
        _player_player_component__WEBPACK_IMPORTED_MODULE_5__.PlayerComponent,
        _report_report_component__WEBPACK_IMPORTED_MODULE_6__.ReportComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.LayoutModule,
        //Material Modules
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        //Forms Modules
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        //Ngx-Audio-Player
        ngx_audio_player__WEBPACK_IMPORTED_MODULE_30__.NgxAudioPlayerModule] }); })();


/***/ }),

/***/ 7243:
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 2118);


const _c0 = ["*"];
class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 6, vars: 1, consts: [[1, "dashboard-card"], [2, "justify-content", "center"], [1, "dashboard-card-content"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: [".more-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 10px;\r\n }\r\n.dashboard-card[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n }\r\n.dashboard-card-content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    max-height: 100%;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n }\r\nmat-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUI7QUFDckI7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7Q0FDZDtBQUVBO0lBQ0csa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUdBO0lBQ0csa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtDQUN2QjtBQUVBO0lBQ0csYUFBYTtJQUNiLHNCQUFzQjtDQUN6QiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmNhcmQuY29tcG9uZW50LmNzcyovXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gfVxyXG4gXHJcbiAuZGFzaGJvYXJkLWNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gfVxyXG4gXHJcbiBcclxuIC5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gfVxyXG4gXHJcbiBtYXQtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIH0iXX0= */"] });


/***/ }),

/***/ 9869:
/*!****************************************!*\
  !*** ./src/app/dash/dash.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashComponent": () => (/* binding */ DashComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 6883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../student.service */ 8832);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card.component */ 7243);









function DashComponent_mat_grid_tile_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, ctx_r0.cardLayout)) == null ? null : tmp_0_0.miniCard.cols)("rowspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r0.cardLayout)) == null ? null : tmp_1_0.miniCard.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", card_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r3.value);
} }
function DashComponent_div_6_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Chart Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r4.cardLayout)) == null ? null : tmp_0_0.chart.cols)("rowspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r4.cardLayout)) == null ? null : tmp_1_0.chart.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("title", "Card ", i_r5, "");
} }
const _c0 = function () { return [5, 6, 7, 8]; };
function DashComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DashComponent_div_6_mat_grid_tile_1_Template, 6, 7, "mat-grid-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-grid-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Table Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, ctx_r1.cardLayout)) == null ? null : tmp_1_0.table.cols)("rowspan", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, ctx_r1.cardLayout)) == null ? null : tmp_2_0.table.rows);
} }
function DashComponent_mat_grid_tile_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recording_card_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, ctx_r2.cardLayout)) == null ? null : tmp_0_0.miniCard.cols)("rowspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r2.cardLayout)) == null ? null : tmp_1_0.miniCard.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", recording_card_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](recording_card_r6.value);
} }
class DashComponent {
    /** Based on the screen size, switch from standard to one column per row */
    // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    //   map(({ matches }) => {
    //     if (matches) {
    //       return [
    //         { title: 'Card 1', cols: 1, rows: 1 },
    //         { title: 'Card 2', cols: 1, rows: 1 },
    //         { title: 'Card 3', cols: 1, rows: 1 },
    //         { title: 'Card 4', cols: 1, rows: 1 }
    //       ];
    //     }
    //     return [
    //       { title: 'Card 1', cols: 2, rows: 1 },
    //       { title: 'Card 2', cols: 1, rows: 1 },
    //       { title: 'Card 3', cols: 1, rows: 2 },
    //       { title: 'Card 4', cols: 1, rows: 1 }
    //     ];
    //   })
    // );
    constructor(breakpointObserver, studentService) {
        this.breakpointObserver = breakpointObserver;
        this.studentService = studentService;
        this._cards = [
            { name: 'Number of Students', value: "Select School" },
            { name: 'Number of Recorded Students', value: "Select School" },
            { name: 'Number of Recordings', value: "Select School" }
        ];
        this.recording_cards = [
            { name: 'Easy', value: "Select School" },
            { name: 'Medium', value: "Select School" },
            { name: 'Hard ', value: "Select School" },
        ];
        this.cardLayout = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({ matches }) => {
            if (matches) {
                return {
                    columns: 1,
                    miniCard: { cols: 1, rows: 1 },
                    chart: { cols: 1, rows: 2 },
                    table: { cols: 1, rows: 3 },
                };
            }
            return {
                columns: 3,
                miniCard: { cols: 1, rows: 1 },
                chart: { cols: 2, rows: 2 },
                table: { cols: 3, rows: 3 },
            };
        }));
    }
    ngOnInit() {
        console.log('dashboard component refreshed');
        this._cards[0].value = "Not Available";
        this._cards[1].value = "Not Available";
        this._cards[2].value = "Not Available";
        this.recording_cards[0].value = "Not Available";
        this.recording_cards[1].value = "Not Available";
        this.recording_cards[2].value = "Not Available";
    }
}
DashComponent.ɵfac = function DashComponent_Factory(t) { return new (t || DashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_student_service__WEBPACK_IMPORTED_MODULE_0__.StudentService)); };
DashComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashComponent, selectors: [["app-dash"]], decls: 13, vars: 9, consts: [[1, "grid-container"], [1, "mat-h1"], ["rowHeight", "200px", 3, "cols"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], ["class", "hidden", 4, "ngIf"], [2, "text-align", "center"], ["rowHeight", "100px", 3, "cols"], [3, "colspan", "rowspan"], [3, "title"], [2, "font-size", "large"], [1, "hidden"], ["title", "Card 9"]], template: function DashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DashComponent_mat_grid_tile_5_Template, 6, 8, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DashComponent_div_6_Template, 8, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Recordings Breakup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-grid-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DashComponent_mat_grid_tile_12_Template, 6, 8, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0;
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cols", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, ctx.cardLayout)) == null ? null : tmp_0_0.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx._cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cols", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 7, ctx.cardLayout)) == null ? null : tmp_3_0.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recording_cards);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridTile, _card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: [".grid-container[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.app-scale[_ngcontent-%COMP%]{\r\n  width : 92%;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6ImRhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXBwLXNjYWxle1xyXG4gIHdpZHRoIDogOTIlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 5375:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ 6883);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player/player.component */ 5872);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 2220);
















function NavComponent_mat_nav_list_9_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/" + item_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, item_r7), " ");
} }
function NavComponent_mat_nav_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavComponent_mat_nav_list_9_a_1_Template, 3, 4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "amplify-sign-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.menuItems);
} }
function NavComponent_mat_nav_list_10_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/admin/" + item_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, item_r9), " ");
} }
function NavComponent_mat_nav_list_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavComponent_mat_nav_list_10_a_1_Template, 3, 4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "amplify-sign-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.menuItems);
} }
function NavComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavComponent_mat_form_field_17_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const school_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", school_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", school_r13.name, " ");
} }
function NavComponent_mat_form_field_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select School");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NavComponent_mat_form_field_17_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.selectedSchool = $event; })("selectionChange", function NavComponent_mat_form_field_17_Template_mat_select_selectionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.refreshId($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavComponent_mat_form_field_17_mat_option_4_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.selectedSchool);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.facilitatorSchool);
} }
function NavComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.orgName);
} }
class NavComponent {
    constructor(breakpointObserver, router) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        //this
        this.anyrole = false;
        this.menuItems = ['dashboard', 'students', 'add students', 'recordings', 'report'];
        // menuItems = ['dashboard', 'students', 'stories', 'facilitators','recordings']
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Handset)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)());
        this.isHandSetPlayerStyle = {
            left: "0",
            width: "100%"
        };
        this.isNotHandSetPlayerStyle = {
            left: "15.75%",
            width: "84.24%"
        };
        this.showlable = false;
        this.router.onSameUrlNavigation = 'reload';
    }
    ngOnInit() {
        this.currentFacilitatorName = "Joshua Fernandes";
        this.orgName = "IIT Bombay";
    }
    refreshId(schoolId) {
        console.log(`will pass : ${schoolId}`);
        console.log(`url pass : ${this.router.url}`);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 25, vars: 29, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], [4, "ngIf"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["class", "example-spacer", "appearance", "fill", 4, "ngIf"], ["class", "example-spacer", 4, "ngIf"], ["fixedInViewport", ""], ["mat-list-item", "", "routerLinkActive", "router-link-active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLinkActive", "router-link-active", 3, "routerLink"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], ["appearance", "fill", 1, "example-spacer"], ["name", "schoolId", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "example-spacer"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavComponent_mat_nav_list_9_Template, 3, 1, "mat-nav-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavComponent_mat_nav_list_10_Template, 3, 1, "mat-nav-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NavComponent_button_13_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "IITB-WPP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NavComponent_mat_form_field_17_Template, 5, 2, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NavComponent_span_18_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-player", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 15, ctx.isHandset$) ? "200px" : "15.75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 19, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 21, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 17, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.anyrole);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.anyrole);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 23, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.orgName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orgName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hi ", ctx.currentFacilitatorName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 25, ctx.isHandset$) ? "0" : "15.75%")("width", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 27, ctx.isHandset$) ? "100%" : "84.24%");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _player_player_component__WEBPACK_IMPORTED_MODULE_0__.PlayerComponent, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatNavList, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe], styles: [".sidenav-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  width: 15.75%;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.router-link-active[_ngcontent-%COMP%]{\r\n  background-color: #aaa7b4;\r\n}\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-sidenav-content[_ngcontent-%COMP%]{\r\n  margin-bottom: 112px;\r\n}\r\n\r\napp-player[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  bottom : 0;\r\n  left : 15.75%;\r\n  width : 84.24%;\r\n  z-index : 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTt5RUFDeUUiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAxNS43NSU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucm91dGVyLWxpbmstYWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE3YjQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gIG1hcmdpbi1ib3R0b206IDExMnB4O1xyXG59XHJcblxyXG5hcHAtcGxheWVye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b20gOiAwO1xyXG4gIGxlZnQgOiAxNS43NSU7XHJcbiAgd2lkdGggOiA4NC4yNCU7XHJcbiAgei1pbmRleCA6IDE7XHJcbn1cclxuXHJcbi8qIGZvciBtb3JlIGluZm8gb24gYWRkaW5nIGR5bmFtaWMgc3R5bGVzIGluIEFuZ3VsYXIsIHJlZmVyIDpcclxuaHR0cHM6Ly9jb2RpcHBhLmNvbS9ob3ctdG8tYXBwbHktZHluYW1pYy1zdHlsZS10by1lbGVtZW50cy1pbi1hbmd1bGFyLyAgKi8iXX0= */"] });


/***/ }),

/***/ 5872:
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerComponent": () => (/* binding */ PlayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../student.service */ 8832);


class PlayerComponent {
    constructor(studentService) {
        this.studentService = studentService;
        this.msaapDisplayTitle = true;
        this.msaapDisplayPlayList = false;
        this.msaapPageSizeOptions = [2, 4, 6];
        this.msaapDisplayVolumeControls = true;
        this.msaapDisplayArtist = false;
        this.msaapDisplayDuration = false;
        this.msaapDisablePositionSlider = false;
        this.autoplayfalse = true;
        // msaapPlaylist: Track[] = [
        //   {
        //     title: 'Audio One Title',
        //     link: 'Link to Audio One URL',
        //     artist: 'Audio One Artist',
        //     duration: +'60'
        //   },
        //   {
        //     title: 'Audio Two Title',
        //     link: 'Link to Audio Two URL',
        //     artist: 'Audio Two Artist',
        //     duration: +'60'
        //   },
        //   {
        //     title: 'Audio Three Title',
        //     link: 'Link to Audio Three URL',
        //     artist: 'Audio Three Artist',
        //     duration: +'20'
        //   },
        // ];
        this.msaapPlaylist = [
            {
                title: 'The Talkative Tortoise',
                link: 'https://dl.dropboxusercontent.com/s/27p99ikm3covkys/m010_1.mp3?dl=0',
                artist: 'Audio One Artist',
                duration: +'26'
            },
            // {
            //   title: 'Audio Two Title - Same Audio',
            //   link: 'https://dl.dropboxusercontent.com/s/27p99ikm3covkys/m010_1.mp3?dl=0',
            //   artist: 'Audio Two Artist',
            //   duration: +'26'
            // },
            // {
            //   title: 'Audio Three Title - Same Audio',
            //   link: 'https://dl.dropboxusercontent.com/s/27p99ikm3covkys/m010_1.mp3?dl=0',
            //   artist: 'Audio Three Artist',
            //   duration: +'26'
            // }
        ];
    }
    ngOnInit() {
        // this.studentService.trackToPlay$.subscribe(take =>
        //   this.msaapPlaylist = [{
        //     title: take.txt,
        //     link: take.url,
        //   }]
        // )
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_student_service__WEBPACK_IMPORTED_MODULE_0__.StudentService)); };
PlayerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], decls: 0, vars: 0, template: function PlayerComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8562:
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportComponent": () => (/* binding */ ReportComponent)
/* harmony export */ });
/* harmony import */ var alasql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alasql */ 872);
/* harmony import */ var alasql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alasql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ 8031);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);








function ReportComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const school_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", school_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", school_r3, " ");
} }
function ReportComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grade_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", grade_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", grade_r4, " ");
} }
function ReportComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", name_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", name_r5, " ");
} }
alasql__WEBPACK_IMPORTED_MODULE_0__.utils.isBrowserify = false;
alasql__WEBPACK_IMPORTED_MODULE_0__.utils.global.XLSX = xlsx__WEBPACK_IMPORTED_MODULE_1__;
const ala = (alasql__WEBPACK_IMPORTED_MODULE_0___default());
class ReportComponent {
    //alasql('insert into info values (?,?,?)', [names[0], age[0], grades[0]]);
    constructor(http) {
        this.http = http;
        this.url = 'https://vcou22guei.execute-api.ap-south-1.amazonaws.com/alpha/report';
        this.toppingList = ['8', '10', '12'];
        /*schools = ['Canossa High School',"St. Arnold's High School", 'St. Dominic Savio High School', "St. Xavier's High School"];
        grades = ['8', '10', '12'];
        names = ['Joshua', 'Joshua', 'Joshua'];*/
        this.details = [];
        this.grades = [];
        this.schools = [];
        this.names = [];
        this.count = 0;
        ala('create table details(school, grade, date, grade_wcpm, student_name, student_wcpm)');
        this.http.get(this.url).toPromise().then(data => {
            //console.log(data);
            for (let school of Object.values(data)) {
                for (let sch of school) {
                    //this.schools.push(sch.school_names);
                    this.school_name = sch.school_name;
                    //console.log(sch.school_name);
                    for (let gl of sch.gradeList) {
                        this.grade = gl.grade; //console.log(gl.grade);
                        //console.log(this.grade);
                        for (let dt of gl.data) {
                            this.date = dt.date;
                            //console.log(dt.date, dt.avgwcpm);
                            for (let stu of dt.studentList) {
                                //console.log(sch.school_name, gl.grade, dt.date, dt.avgwcpm, 
                                //stu.name, stu.score)
                                ala('insert into details values (?,?,?,?,?,?)', [sch.school_name, gl.grade, dt.date,
                                    dt.avgwcpm, stu.name, stu.score]);
                                this.count = this.count + 1;
                            }
                        }
                    }
                }
            }
            function queryDB(query) {
                let res = [];
                query = ala(query);
                for (let q in query) {
                    res.push(Object.values(query[q])[0]);
                }
                return res;
            }
            function queryDBSet(query) {
                let res = [];
                let set = [];
                res = queryDB(query);
                for (let r of res) {
                    if (set.indexOf(r) == -1) {
                        set.push(r);
                    }
                }
                return set;
            }
            this.grades = queryDBSet('Select grade from details');
            this.schools = queryDBSet('select school from details');
            this.names = queryDBSet('select student_name from details');
            //this.names.pop();
            // end API fetch
        });
        // end constructor
    }
    ngOnInit() { }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], decls: 21, vars: 3, consts: [["appearance", "fill"], ["multiple", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ReportComponent_mat_option_6_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ReportComponent_mat_option_13_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ReportComponent_mat_option_20_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.schools);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.grades);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.names);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8832:
/*!************************************!*\
  !*** ./src/app/student.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentService": () => (/* binding */ StudentService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class StudentService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.currentFacilitatorId = '';
        this.currentFacilitatorName = '';
        this.cognitoUsername = '';
    }
}
StudentService.ɵfac = function StudentService_Factory(t) { return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
StudentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentService, factory: StudentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 2275,
	"./af.js": 2275,
	"./ar": 857,
	"./ar-dz": 1218,
	"./ar-dz.js": 1218,
	"./ar-kw": 4754,
	"./ar-kw.js": 4754,
	"./ar-ly": 6680,
	"./ar-ly.js": 6680,
	"./ar-ma": 2178,
	"./ar-ma.js": 2178,
	"./ar-sa": 6522,
	"./ar-sa.js": 6522,
	"./ar-tn": 5682,
	"./ar-tn.js": 5682,
	"./ar.js": 857,
	"./az": 164,
	"./az.js": 164,
	"./be": 9774,
	"./be.js": 9774,
	"./bg": 947,
	"./bg.js": 947,
	"./bm": 1832,
	"./bm.js": 1832,
	"./bn": 9650,
	"./bn-bd": 4477,
	"./bn-bd.js": 4477,
	"./bn.js": 9650,
	"./bo": 6005,
	"./bo.js": 6005,
	"./br": 8492,
	"./br.js": 8492,
	"./bs": 534,
	"./bs.js": 534,
	"./ca": 2061,
	"./ca.js": 2061,
	"./cs": 4737,
	"./cs.js": 4737,
	"./cv": 1167,
	"./cv.js": 1167,
	"./cy": 7996,
	"./cy.js": 7996,
	"./da": 9528,
	"./da.js": 9528,
	"./de": 5915,
	"./de-at": 9430,
	"./de-at.js": 9430,
	"./de-ch": 7978,
	"./de-ch.js": 7978,
	"./de.js": 5915,
	"./dv": 3426,
	"./dv.js": 3426,
	"./el": 6616,
	"./el.js": 6616,
	"./en-au": 3816,
	"./en-au.js": 3816,
	"./en-ca": 2162,
	"./en-ca.js": 2162,
	"./en-gb": 3305,
	"./en-gb.js": 3305,
	"./en-ie": 1954,
	"./en-ie.js": 1954,
	"./en-il": 3060,
	"./en-il.js": 3060,
	"./en-in": 9923,
	"./en-in.js": 9923,
	"./en-nz": 3540,
	"./en-nz.js": 3540,
	"./en-sg": 6505,
	"./en-sg.js": 6505,
	"./eo": 1907,
	"./eo.js": 1907,
	"./es": 6640,
	"./es-do": 1246,
	"./es-do.js": 1246,
	"./es-mx": 6131,
	"./es-mx.js": 6131,
	"./es-us": 6430,
	"./es-us.js": 6430,
	"./es.js": 6640,
	"./et": 2551,
	"./et.js": 2551,
	"./eu": 2711,
	"./eu.js": 2711,
	"./fa": 2109,
	"./fa.js": 2109,
	"./fi": 3390,
	"./fi.js": 3390,
	"./fil": 7860,
	"./fil.js": 7860,
	"./fo": 8216,
	"./fo.js": 8216,
	"./fr": 9291,
	"./fr-ca": 8527,
	"./fr-ca.js": 8527,
	"./fr-ch": 8407,
	"./fr-ch.js": 8407,
	"./fr.js": 9291,
	"./fy": 7054,
	"./fy.js": 7054,
	"./ga": 9540,
	"./ga.js": 9540,
	"./gd": 3917,
	"./gd.js": 3917,
	"./gl": 4198,
	"./gl.js": 4198,
	"./gom-deva": 6245,
	"./gom-deva.js": 6245,
	"./gom-latn": 8868,
	"./gom-latn.js": 8868,
	"./gu": 9652,
	"./gu.js": 9652,
	"./he": 9019,
	"./he.js": 9019,
	"./hi": 2040,
	"./hi.js": 2040,
	"./hr": 3402,
	"./hr.js": 3402,
	"./hu": 9322,
	"./hu.js": 9322,
	"./hy-am": 7609,
	"./hy-am.js": 7609,
	"./id": 7942,
	"./id.js": 7942,
	"./is": 8275,
	"./is.js": 8275,
	"./it": 3053,
	"./it-ch": 4378,
	"./it-ch.js": 4378,
	"./it.js": 3053,
	"./ja": 6176,
	"./ja.js": 6176,
	"./jv": 679,
	"./jv.js": 679,
	"./ka": 2726,
	"./ka.js": 2726,
	"./kk": 2953,
	"./kk.js": 2953,
	"./km": 6957,
	"./km.js": 6957,
	"./kn": 9181,
	"./kn.js": 9181,
	"./ko": 7148,
	"./ko.js": 7148,
	"./ku": 7752,
	"./ku.js": 7752,
	"./ky": 5675,
	"./ky.js": 5675,
	"./lb": 1263,
	"./lb.js": 1263,
	"./lo": 5746,
	"./lo.js": 5746,
	"./lt": 9655,
	"./lt.js": 9655,
	"./lv": 8753,
	"./lv.js": 8753,
	"./me": 4054,
	"./me.js": 4054,
	"./mi": 1573,
	"./mi.js": 1573,
	"./mk": 202,
	"./mk.js": 202,
	"./ml": 8523,
	"./ml.js": 8523,
	"./mn": 9794,
	"./mn.js": 9794,
	"./mr": 6681,
	"./mr.js": 6681,
	"./ms": 6975,
	"./ms-my": 9859,
	"./ms-my.js": 9859,
	"./ms.js": 6975,
	"./mt": 3691,
	"./mt.js": 3691,
	"./my": 5152,
	"./my.js": 5152,
	"./nb": 7607,
	"./nb.js": 7607,
	"./ne": 1526,
	"./ne.js": 1526,
	"./nl": 6368,
	"./nl-be": 3496,
	"./nl-be.js": 3496,
	"./nl.js": 6368,
	"./nn": 8420,
	"./nn.js": 8420,
	"./oc-lnc": 1906,
	"./oc-lnc.js": 1906,
	"./pa-in": 4504,
	"./pa-in.js": 4504,
	"./pl": 4721,
	"./pl.js": 4721,
	"./pt": 4645,
	"./pt-br": 4548,
	"./pt-br.js": 4548,
	"./pt.js": 4645,
	"./ro": 1977,
	"./ro.js": 1977,
	"./ru": 6042,
	"./ru.js": 6042,
	"./sd": 8849,
	"./sd.js": 8849,
	"./se": 7739,
	"./se.js": 7739,
	"./si": 5546,
	"./si.js": 5546,
	"./sk": 2449,
	"./sk.js": 2449,
	"./sl": 3086,
	"./sl.js": 3086,
	"./sq": 3139,
	"./sq.js": 3139,
	"./sr": 607,
	"./sr-cyrl": 63,
	"./sr-cyrl.js": 63,
	"./sr.js": 607,
	"./ss": 131,
	"./ss.js": 131,
	"./sv": 1665,
	"./sv.js": 1665,
	"./sw": 5642,
	"./sw.js": 5642,
	"./ta": 3622,
	"./ta.js": 3622,
	"./te": 4825,
	"./te.js": 4825,
	"./tet": 8336,
	"./tet.js": 8336,
	"./tg": 9238,
	"./tg.js": 9238,
	"./th": 9463,
	"./th.js": 9463,
	"./tk": 9986,
	"./tk.js": 9986,
	"./tl-ph": 9672,
	"./tl-ph.js": 9672,
	"./tlh": 43,
	"./tlh.js": 43,
	"./tr": 1212,
	"./tr.js": 1212,
	"./tzl": 110,
	"./tzl.js": 110,
	"./tzm": 482,
	"./tzm-latn": 8309,
	"./tzm-latn.js": 8309,
	"./tzm.js": 482,
	"./ug-cn": 2495,
	"./ug-cn.js": 2495,
	"./uk": 4157,
	"./uk.js": 4157,
	"./ur": 5826,
	"./ur.js": 5826,
	"./uz": 4141,
	"./uz-latn": 3662,
	"./uz-latn.js": 3662,
	"./uz.js": 4141,
	"./vi": 2607,
	"./vi.js": 2607,
	"./x-pseudo": 6460,
	"./x-pseudo.js": 6460,
	"./yo": 2948,
	"./yo.js": 2948,
	"./zh-cn": 2658,
	"./zh-cn.js": 2658,
	"./zh-hk": 9352,
	"./zh-hk.js": 9352,
	"./zh-mo": 8274,
	"./zh-mo.js": 8274,
	"./zh-tw": 8451,
	"./zh-tw.js": 8451
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ 5382:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2095:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1219:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map