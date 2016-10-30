import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectsService } from '../projects.service';
import {  Project } from '../../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  private project: Project;
  constructor(
    public projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let slug = params['slug']; // (+) converts string 'slug' to a number
      this.projectsService.getProject(slug).subscribe(project => 
      this.project = project[0]
      );
    });
  }
}
