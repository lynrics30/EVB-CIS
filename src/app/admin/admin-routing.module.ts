import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonIndividualComponent } from '../pages/non-individual/non-individual.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementComponent } from '../pages/announcement/announcement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { IndividualComponent } from '../pages/individual/individual.component';

const routes: Routes = [
  {
        path: '',
        component: HomeComponent, children:[
          {
            path: 'dashboard',
            component:DashboardComponent
          },
          {
            path: 'announcement',
            component:AnnouncementComponent
          },
          {
            path:'non-individual',
            component:NonIndividualComponent
          },
          {
            path:'individual',
            component:IndividualComponent
          },


        {
            path:'',
            redirectTo: '/admin/dashboard',
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
