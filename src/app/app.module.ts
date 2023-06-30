import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { NonIndividualComponent } from './pages/non-individual/non-individual.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IndividualComponent } from './pages/individual/individual.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    NonIndividualComponent,
    DashboardComponent,
    AnnouncementComponent,
    IndividualComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,











  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
