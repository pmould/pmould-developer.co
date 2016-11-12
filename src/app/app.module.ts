// Fix Material Support
import { __platform_browser_private__ } from '@angular/platform-browser';
function universalMaterialSupports(eventName: string): boolean { return Boolean(this.isCustomEvent(eventName)); }
__platform_browser_private__.HammerGesturesPlugin.prototype.supports = universalMaterialSupports;
// End Fix Material Support

import { Inject, Optional, SkipSelf } from '@angular/core';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/node'; // for AoT we need to manually split universal packages


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home/home.module'
import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import {  } from './home/home.component';
import { ProjectsThumbsListComponent, ProjectsService, HomeComponent} from './home';
import { HeaderComponent } from './shared/layout/header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';

// import * as LRU from 'modern-lru';

export function getLRU(lru?: any) {
  // use LRU for node
  // return lru || new LRU(10);
  return lru || new Map();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutMeComponent
  ],
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    BrowserModule,
    HomeModule,
    FormsModule,
    HttpModule,
    Wpng2RoutingModule
  ],
  providers: [
    ProjectsService,
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isNode', useValue: isNode },
    {
      provide: 'LRU',
      useFactory: getLRU,
      deps: [
        [new Inject('LRU'), new Optional(), new SkipSelf()]
      ]
    },
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
