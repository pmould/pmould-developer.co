import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { ProjectComponent } from './home/projects/project';
import { AboutMeComponent } from './about-me';
import { ContactComponent } from './contact';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: {
      meta: {
        title: 'Home | PMOULD Developer Co',
      }
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      meta: {
        title: 'Home | PMOULD Developer Co',
      }
    }
  },
  {
    path: 'project/:slug',
    component: ProjectComponent,
    pathMatch: 'full',
    data: {
      meta: {
        title: 'Projects | PMOULD Developer Co',
      }
    }
  },
  {
    path: 'blog',
    component: PostListComponent,
    pathMatch: 'full',
    data: {
      meta: {
        title: 'Blog | PMOULD Developer Co',
      }
    }
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: {
      meta: {
        title: 'About | PMOULD Developer Co',
      }
    }
  },
  {
    path: 'blog/:slug',
    component: PostSingleComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      meta: {
        title: 'Contact | PMOULD Developer Co',
      }
    }
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }
