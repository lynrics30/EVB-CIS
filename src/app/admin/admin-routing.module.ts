import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

const routes: Routes = [
  {
   path: '',
        component: DashboardComponent, children:[
           {
            path:'admin',
            component: UserRegistrationComponent
        },
        {
            path:'',
            redirectTo: '/admin/home',
            pathMatch: 'full'
        }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
