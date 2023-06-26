import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
title="Welcome to EVB CIS"
  username:any
  password:any
  result:any
  users:any
  constructor(private router:Router, private api:DataService) { }
}