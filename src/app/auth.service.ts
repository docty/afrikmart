import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})



export class AuthService {
  uri = 'http://127.0.0.1:8000/api';
  token;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(data){
     return this.httpClient.post(`${this.uri}/login`, data);
  }

  register(data){
    return this.httpClient.post(`${this.uri}/register`, data);
  }

}
