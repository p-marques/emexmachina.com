import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';
import { RoutingModule } from './shared/routing.module';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { AboutComponent } from './about/about.component';
import { LogoComponent } from './logo/logo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectRunnerGameComponent } from './games/project-runner/project-runner.component';



@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    AboutComponent,
    LogoComponent,
    NotFoundComponent,
    ProjectRunnerGameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
