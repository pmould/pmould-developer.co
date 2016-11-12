"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AboutMeComponent = (function () {
    function AboutMeComponent() {
        this.aboutMeImg = 'assets/img/about-me-img.jpg';
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        core_1.Component({
            selector: 'app-about-me',
            template: "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-4\">\n      <img [@flyInOut]=\"'in'\" class=\"about-me-img img-responsive\" [src]=\"aboutMeImg\" alt=\"\">\n    </div>\n    <div [@flyInOutRight]=\"'in'\" class=\"col-xs-12 col-sm-8 about-me-txt\">\n      <h1>About Me</h1>\n      <hr>\n      <p>\n        Paul Mould is an innovative leader in the I.T consulting industry building software in an agile environment for both start-ups and enterprise organizations. Most notably he has worked with the healthcare start-up, EasyRx and the multinational enterprise car rental company, Enterprise Rent-A-Car. He holds a computer Science degree and a minor in Business Administration from Mercer University in Macon, GA. He has a passion for using innovative ideas and creativity to solve complex problems for today\u2019s organizations and brands. He is also a Pan-African at heart who advocates for positive change on the continent as seen by his role as President of the African Student Association whiles attending Mercer.\n      </p>\n    </div> \n  </div>\n</div>\n",
            styleUrls: ['./about-me.component.css'],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(-150%)' }),
                        core_1.animate('.350s 1s')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('.350s 1s', core_1.style({ transform: 'translateX(100%)' }))
                    ])
                ]),
                core_1.trigger('flyInOutRight', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(125%)' }),
                        core_1.animate('.350s 1.25s')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('.350s 1.25s', core_1.style({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        })
    ], AboutMeComponent);
    return AboutMeComponent;
}());
exports.AboutMeComponent = AboutMeComponent;
