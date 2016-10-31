import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectsService } from '../projects.service';
import {  Project } from '../../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('flyInOutBottom', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(250%)'}),
        animate('.350s .25s')
      ]),
      transition('* => void', [
        animate('.350s .25s', style({transform: 'translateY(100%)'}))
      ])
    ]),
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-250%)'}),
        animate('.350s .25s')
      ]),
      transition('* => void', [
        animate('.350s .25s', style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
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
