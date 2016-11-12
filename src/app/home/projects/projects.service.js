"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var shared_1 = require('../../shared');
var ProjectsService = (function () {
    function ProjectsService(http) {
        this.http = http;
        this._wpBase = shared_1._wpHost + "/wp-json/wp/v2/";
    }
    ProjectsService.prototype.getProjects = function () {
        return this.http
            .get(this._wpBase + 'projects')
            .map(function (res) { return res.json(); });
    };
    ProjectsService.prototype.getProject = function (slug) {
        return this.http
            .get(this._wpBase + ("projects?filter[name]=" + slug))
            .map(function (res) { return res.json(); });
    };
    ProjectsService.prototype.getProjectCategories = function (project) {
        var categoryTerm = project._links['wp:terms'].filter(function (r) {
            (r.taxonomy == 'category') ? true : false;
        })[0];
        return this.http
            .get(categoryTerm.href)
            .map(function (res) { return res.json(); });
    };
    ProjectsService = __decorate([
        core_1.Injectable()
    ], ProjectsService);
    return ProjectsService;
}());
exports.ProjectsService = ProjectsService;
