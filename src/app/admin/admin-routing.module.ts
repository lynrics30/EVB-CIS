import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonIndividualComponent } from '../pages/client-registration/non-individual/non-individual.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AnnouncementComponent } from '../pages/announcement/announcement.component';
import { ContentComponent } from './content/content.component';
import { OverallComponent } from '../pages/list-of-client/overall/overall.component';
import { C1601Component } from '../pages/tax-activities/c1601/c1601.component';
import { BranchesComponent } from '../pages/branches/branches.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { TinIssuanceUpdateComponent } from '../pages/for-processes/tin-issuance-update/tin-issuance-update.component';
import { IndividualComponent } from '../pages/client-registration/individual/individual.component';
import { BinanComponent } from '../pages/list-of-client/binan/binan.component';
import { CaintaComponent } from '../pages/list-of-client/cainta/cainta.component';
import { Q2551Component } from '../pages/tax-activities/q2551/q2551.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      //Dashboard---------------------------------------------
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      //------------------------------------------------------>

      //Announcement-------------------------------------------
      {
        path: 'announcement',
        component: AnnouncementComponent,
      },
      //------------------------------------------------------>

      //Client Registration------------------------------------
      {
        path: 'non-individual',
        component: NonIndividualComponent,
      },
      {
        path: 'individual',
        component: IndividualComponent,
      },
      //------------------------------------------------------>

      //List of Client-----------------------------------------
      {
        path: 'overall',
        component: OverallComponent,
      },
      {
        path: 'binan',
        component: BinanComponent,
      },
      {
        path: 'cainta',
        component: CaintaComponent,
      },
      //------------------------------------------------------>

      //Tax Activities-----------------------------------------
      {
        path: 'c1601',
        component: C1601Component,
      },
      {
        path: 'q2551',
        component: Q2551Component,
      },
      //------------------------------------------------------>

      //For Process--------------------------------------------
      {
        path: 'app-tin',
        component: TinIssuanceUpdateComponent,
      },
      //------------------------------------------------------>

      //Settings-----------------------------------------------
      {
        path: 'branches',
        component: BranchesComponent,
      },
      //------------------------------------------------------>
      
      //Navbar-------------------------------------------------
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      //------------------------------------------------------>

      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
