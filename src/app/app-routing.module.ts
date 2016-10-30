import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { ProjectComponent } from './home/projects/project';
import { AboutMeComponent } from './about-me';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'project/:slug',
    component: ProjectComponent,
    pathMatch: 'full'
  },
  {
    path: 'blog',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: ':slug',
    component: PostSingleComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }
