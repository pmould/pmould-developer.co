"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.siteLogo = 'assets/img/pmould-logo.png';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $('.navbar').css('width', '100%');
        }, '1500');
    };
    HeaderComponent.prototype.scrollDown = function () {
        if ($(".gallery").length) {
            $('html, body').animate({
                scrollTop: $(".gallery").offset().top
            }, 2000);
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: "\n  <header  class=\"clearfix\">\n    <nav [@flyInOut]=\"'in'\" class=\" site-nav navbar navbar-default navbar-fixed-top\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\"> <button type=\"button\" class=\"collapsed navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-6\"\n            aria-expanded=\"false\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n              <a [routerLink]=\"['/home']\" class=\"navbar-brand\">\n                <img [src]=\"siteLogo\" class=\"img-responsive\" alt=\"\">\n              </a>\n          </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-6\">\n          <ul class=\"nav navbar-nav\">\n          <li><a [routerLink]=\"['/about-me']\">About me</a></li>\n          <li><a (click)=\"scrollDown()\" [routerLink]=\"['/home']\" fragment=\"project-list\">Portfolio</a></li>\n          <li><a [routerLink]=\"['/blog']\">Blog</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </header>\n  ",
            styleUrls: ['./header.component.css'],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateY(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateY(-100%)' }),
                        core_1.animate('.350s .75s')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('.350s .75s', core_1.style({ transform: 'translateY(100%)' }))
                    ])
                ])
            ]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
