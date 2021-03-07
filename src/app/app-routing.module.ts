import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableFormComponent} from './table-form/table-form.component';
import {TableListComponent} from './table-list/table-list.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/listtables',pathMatch:'full'
  },
  {
    path:'listtables',component:TableListComponent
  },
  {
    path:'tableform',component:TableFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[TableFormComponent,TableListComponent];
