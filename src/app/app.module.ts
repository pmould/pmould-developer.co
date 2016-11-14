import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
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
import { ContactComponent } from './contact/contact.component';
import { DisqusModule } from 'angular2-disqus';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

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
    HttpModule,
    Wpng2RoutingModule,
    MaterialModule.forRoot(),
    DisqusModule,
    HighlightJsModule
  ],
  providers: [ProjectsService, HighlightJsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
