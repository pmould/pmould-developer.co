"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Fix Material Support
var platform_browser_1 = require('@angular/platform-browser');
function universalMaterialSupports(eventName) { return Boolean(this.isCustomEvent(eventName)); }
platform_browser_1.__platform_browser_private__.HammerGesturesPlugin.prototype.supports = universalMaterialSupports;
// End Fix Material Support
var core_1 = require('@angular/core');
var node_1 = require('angular2-universal/node'); // for AoT we need to manually split universal packages
var platform_browser_2 = require('@angular/platform-browser');
var core_2 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var home_module_1 = require('./home/home.module');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var home_1 = require('./home');
var header_component_1 = require('./shared/layout/header/header.component');
var about_me_component_1 = require('./about-me/about-me.component');
// import * as LRU from 'modern-lru';
function getLRU(lru) {
    // use LRU for node
    // return lru || new LRU(10);
    return lru || new Map();
}
exports.getLRU = getLRU;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_2.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_1.HomeComponent,
                header_component_1.HeaderComponent,
                about_me_component_1.AboutMeComponent
            ],
            imports: [
                node_1.UniversalModule,
                platform_browser_2.BrowserModule,
                home_module_1.HomeModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.Wpng2RoutingModule
            ],
            providers: [
                home_1.ProjectsService,
                { provide: 'isBrowser', useValue: node_1.isBrowser },
                { provide: 'isNode', useValue: node_1.isNode },
                {
                    provide: 'LRU',
                    useFactory: getLRU,
                    deps: [
                        [new core_1.Inject('LRU'), new core_1.Optional(), new core_1.SkipSelf()]
                    ]
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
