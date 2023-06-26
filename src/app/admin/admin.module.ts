import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { AdminRoutingModule } from './admin-routing.module';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [UserRegistrationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
