import { NgModule, } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';
import {UserComponent} from './user/user.component'
import {RepoComponent} from './repo/repo.component'


const routes: Routes = [
{path:'user',component:UserComponent},
{path:'repo',component:RepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
