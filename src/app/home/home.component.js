"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: "\t<app-header></app-header>\n\t<section class=\"intro\">\n\t\t<div class=\"header-image\"></div>\n\t\t<div [@flyInOut]=\"'in'\" class=\"position\">\n\t\t\t<img src=\"/assets/img/pmould-caricature.png\" alt=\"\">\n\t\t\t<h2>Paul A. Mould</h2>\n\t\t\t<h1>Front-End Developer</h1>\n\t\t</div>\n\t\t\t\n\t</section>",
            styleUrls: ['./home.component.css'],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ width: 515, transform: 'translateX(0)', opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ width: 0, transform: 'translateX(50px)', opacity: 0 }),
                        core_1.group([
                            core_1.animate('0.5s .75s ease', core_1.style({
                                transform: 'translateX(0)',
                                width: 515
                            })),
                            core_1.animate('0.5s ease', core_1.style({
                                opacity: 1
                            }))
                        ])
                    ]),
                    core_1.transition('* => void', [
                        core_1.group([
                            core_1.animate('0.5s ease', core_1.style({
                                transform: 'translateX(50px)',
                                width: 0
                            })),
                            core_1.animate('0.5s .75s ease', core_1.style({
                                opacity: 0
                            }))
                        ])
                    ])
                ])
            ]
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
