import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  

  private uri = 'https://afrikmart.herokuapp.com/api';
  
  
   
  constructor(private httpClient: HttpClient) { }

  show(id){
    return this.httpClient.get(`${this.uri}/review/${id}`);
  }

  store(data){
  	return this.httpClient.post(`${this.uri}/review`, data);	
  }
}
