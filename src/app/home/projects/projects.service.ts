import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Project, Category, _wpHost } from '../../shared';
@Injectable()
export class ProjectsService {

  private _wpBase = _wpHost + "/wp-json/wp/v2/";

  constructor(private http: Http) { }

  getProjects(): Observable<Project[]> {

      return this.http
        .get(this._wpBase + 'projects')
        .map((res: Response) => res.json());

  }

  getProject(slug): Observable<Project> {

      return this.http
        .get(this._wpBase + `projects?filter[name]=${slug}`)
        .map((res: Response) => res.json());

  }

  getProjectCategories(project: Project): Observable<Category[]> {
    let categoryTerm = project._links['wp:terms'].filter( (r) => {
      (r.taxonomy == 'category') ? true : false;
    })[0];
    return this.http
      .get(categoryTerm.href)
      .map((res: Response) => res.json());
  }
}
