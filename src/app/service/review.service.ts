import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  

  // uri = 'http://127.0.0.1:8000/api';
  
  uri = 'https://afrikmart.herokuapp.com/api';
   
  constructor(private httpClient: HttpClient) { }

  show(id){
    return this.httpClient.get(`${this.uri}/review/${id}`);
  }

  store(data){
  	return this.httpClient.post(`${this.uri}/review`, data);	
  }
}
