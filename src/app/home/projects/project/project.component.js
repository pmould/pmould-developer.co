"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ProjectComponent = (function () {
    function ProjectComponent(projectsService, route, router) {
        this.projectsService = projectsService;
        this.route = route;
        this.router = router;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var slug = params['slug']; // (+) converts string 'slug' to a number
            _this.projectsService.getProject(slug).subscribe(function (project) {
                return _this.project = project[0];
            });
        });
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'app-project',
            templateUrl: './project.component.html',
            styleUrls: ['./project.component.css'],
            animations: [
                core_1.trigger('flyInOutBottom', [
                    core_1.state('in', core_1.style({ transform: 'translateY(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateY(250%)' }),
                        core_1.animate('.350s .25s')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('.350s .25s', core_1.style({ transform: 'translateY(100%)' }))
                    ])
                ]),
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateY(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateY(-250%)' }),
                        core_1.animate('.350s .25s')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('.350s .25s', core_1.style({ transform: 'translateY(100%)' }))
                    ])
                ])
            ]
        })
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
