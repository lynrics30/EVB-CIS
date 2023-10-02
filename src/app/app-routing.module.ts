import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContentComponent } from './admin/content/content.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'user-registration',
    component: UserRegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'content',
    component:ContentComponent,
  },
  {
    path: 'home',
    component:HomeComponent
  },
  
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
