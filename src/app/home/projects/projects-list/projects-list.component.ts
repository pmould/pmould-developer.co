import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import {  Project } from '../../../shared';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  private projects: Observable<Project[]>;
  constructor(public projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

}
