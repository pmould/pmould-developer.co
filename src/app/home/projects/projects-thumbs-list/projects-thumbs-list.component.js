"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ProjectsThumbsListComponent = (function () {
    function ProjectsThumbsListComponent(projectsService) {
        this.projectsService = projectsService;
    }
    ProjectsThumbsListComponent.prototype.ngOnInit = function () {
        this.projects = this.projectsService.getProjects();
    };
    ProjectsThumbsListComponent.prototype.ngAfterViewChecked = function () {
        $(".project-image:last").on("load", function () {
            var hash = window.location.hash;
            if (hash) {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000);
            }
        });
    };
    ProjectsThumbsListComponent = __decorate([
        core_1.Component({
            selector: 'projects-list',
            templateUrl: './projects-thumbs-list.component.html',
            styleUrls: ['./projects-thumbs-list.component.css']
        })
    ], ProjectsThumbsListComponent);
    return ProjectsThumbsListComponent;
}());
exports.ProjectsThumbsListComponent = ProjectsThumbsListComponent;
