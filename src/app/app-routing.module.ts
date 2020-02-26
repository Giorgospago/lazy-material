import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',           loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'cv',         loadChildren: () => import('./pages/cv/cv.module').then(m => m.CvModule) },
  { path: 'skills',     loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsModule) },
  { path: 'projects',   loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'blog',       loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
  { path: 'contact',    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
