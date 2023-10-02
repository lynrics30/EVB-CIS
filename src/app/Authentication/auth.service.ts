import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any [] = [
    {
      id: 1,
      name: 'Administrator',
      username: 'admin',
      password: 'admin'
    },
    {
      id: 2,
      name: 'Marketing',
      username: 'marketing',
      password: 'marketing'
    },
    {
      id: 3,
      name: 'Finance',
      username: 'finance',
      password: 'finance'
    }
  ];
  token: any;
  constructor() { }

  login(username: string, password: string){
    let user = this.users.find((u)=>u.username===username && u.password===password)
    if(user){
      this.token = user
      localStorage.setItem('token', JSON.stringify(this.token))
    }

    return user
  }
}
