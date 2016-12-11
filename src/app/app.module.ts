import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home/home.module'
import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import {  } from './home/home.component';
import { ProjectsThumbsListComponent, ProjectsService, HomeComponent} from './home';
import  { ProjectComponent } from './home/projects/project';
import { HeaderComponent, ContactIconsListComponent } from './shared';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent, ContactService} from './contact';
import { DisqusModule } from 'angular2-disqus';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { MetaModule } from 'ng2-meta';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    HomeComponent,
    ProjectsThumbsListComponent,
    HeaderComponent,
    ProjectComponent,
    AboutMeComponent,
    ContactComponent,
    ContactIconsListComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Wpng2RoutingModule,
    MaterialModule.forRoot(),
    DisqusModule,
    HighlightJsModule,
    MetaModule.forRoot()
  ],
  providers: [ProjectsService, HighlightJsService, ContactService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
