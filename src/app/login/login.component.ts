import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit{

  username:any
  password:any
  showPassword = false


 constructor(private router:Router, private api:DataService) { }
  ngOnInit(): void {
  }
  
  pass() {
  this.showPassword = !this.showPassword;
}

  submit(){
    if(this.username=="admin" && this.password=="admin"){
    this.router.navigate(['/admin'])
  }
  else{
    alert("Wrong Username or Password!")
  }
  
}
}
