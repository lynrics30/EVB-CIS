import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NonIndividualComponent } from './admin/non-individual/non-individual.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'user-registration',
    component:UserRegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'sidebar',
    component:SidebarComponent
  },
  {
    path: 'non-individual',
    component:NonIndividualComponent
  },
  
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
