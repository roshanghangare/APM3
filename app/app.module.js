"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./products/product-list.component");
var product_detail_component_1 = require("./products/product-detail.component");
var product_filter_pipe_1 = require("./products/product-filter.pipe");
var http_1 = require("@angular/http");
var star_component_1 = require("./shared/star.component");
var router_1 = require("@angular/router");
var welcome_component_1 = require("./home/welcome.component");
var product_guard_service_1 = require("./products/product-guard.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
            router_1.RouterModule.forRoot([{ path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent, canActivate: [product_guard_service_1.ProductGuardService] },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'StarComponent', component: star_component_1.StarComponent },
                { path: '', component: welcome_component_1.WelcomeComponent },
                { path: '**', component: welcome_component_1.WelcomeComponent }
            ])
        ],
        declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent,
            product_filter_pipe_1.ProductFilterPipeClass, star_component_1.StarComponent, welcome_component_1.WelcomeComponent,
            product_detail_component_1.ProductDetailComponent],
        providers: [product_guard_service_1.ProductGuardService],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map