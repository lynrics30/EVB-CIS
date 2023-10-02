import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getdummydata() {
    return this.httpClient.get('https://dummyjson.com/users');
  }

  getdummyuser() {
    return this.httpClient.get('https://randomuser.me/api/?results=100');
  }

  getAll() {
    return this.httpClient.get('http://127.0.0.1:8000/api/user');
  }

  addUser(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/user', data);
  }

  login(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/user', data);
  }
}
