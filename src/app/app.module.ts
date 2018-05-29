import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { WritingComponent } from './writing/writing.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'writings', component: WritingComponent },
  { path: 'projects', component: ProjectsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    WritingComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
