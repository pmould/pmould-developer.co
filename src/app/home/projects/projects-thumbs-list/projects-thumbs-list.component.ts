import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ProjectsService } from '../projects.service';
import {  Project } from '../../../shared';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'projects-list',
  templateUrl: './projects-thumbs-list.component.html',
  styleUrls: ['./projects-thumbs-list.component.css']
})
export class ProjectsThumbsListComponent implements OnInit, AfterViewChecked {

  private projects: Observable<Project[]>;
  constructor(public projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

  ngAfterViewChecked() {
    $(".project-image:last").on("load", function() {
      let hash = window.location.hash;
      if (hash) {
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000);
      }      
    });
  }
}
