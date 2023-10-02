import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonIndividualComponent } from '../pages/non-individual/non-individual.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AnnouncementComponent } from '../pages/announcement/announcement.component';
import { ContentComponent } from './content/content.component';
import { IndividualComponent } from '../pages/individual/individual.component';
import { OverallComponent } from '../pages/overall/overall.component';
import { C1601Component } from '../pages/c1601/c1601.component';
import { BranchesComponent } from '../pages/branches/branches.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { TinIssuanceUpdateComponent } from '../pages/tin-issuance-update/tin-issuance-update.component';
import { authGuard } from '../auth.guard';
import { roleGuard } from '../role.guard';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    canActivate: [authGuard, roleGuard],
    data: {
      role: 'admin'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'announcement',
        component: AnnouncementComponent,
      },
      {
        path: 'non-individual',
        component: NonIndividualComponent,
      },
      {
        path: 'individual',
        component: IndividualComponent,
      },
      {
        path: 'overall',
        component: OverallComponent,
      },
      {
        path: 'c1601',
        component: C1601Component,
      },
      {
        path: 'branches',
        component: BranchesComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'app-tin',
        component: TinIssuanceUpdateComponent,
      },

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
