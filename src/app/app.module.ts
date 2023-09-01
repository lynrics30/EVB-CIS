import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NonIndividualComponent } from './pages/non-individual/non-individual.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IndividualComponent } from './pages/individual/individual.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OverallComponent } from './pages/overall/overall.component';
import { C1601Component } from './pages/c1601/c1601.component';
import { BranchesComponent } from './pages/branches/branches.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddrecordComponent } from './modal/addrecord/addrecord.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TinIssuanceUpdateComponent } from './pages/tin-issuance-update/tin-issuance-update.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    NonIndividualComponent,
    DashboardComponent,
    AnnouncementComponent,
    IndividualComponent,
    OverallComponent,
    C1601Component,
    BranchesComponent,
    AddrecordComponent,
    ProfileComponent,
    SettingsComponent,
    PagenotfoundComponent,
    TinIssuanceUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,  
    MatToolbarModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatPaginatorModule, 
    ReactiveFormsModule,
    MatCardModule, MatDatepickerModule, MatNativeDateModule,
    DataTablesModule,
    MatInputModule,
    MatTableModule,
    MatSortModule










  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
