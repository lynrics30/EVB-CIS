import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NonIndividualComponent } from './non-individual/non-individual.component';

const routes: Routes = [
  {
        path: '',
        component: HomeComponent, children:[
          {
            path:'dashboard',
            component: DashboardComponent
          },
          {
            path:'sidebar',
            component: SidebarComponent
          },
          {
            path:'non-individual',
            component: NonIndividualComponent
          },
        {
            path:'',
            redirectTo: '/home',
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
