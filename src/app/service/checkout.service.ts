import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  uri = 'http://127.0.0.1:8000/api';
  
 

  constructor(private httpClient: HttpClient) { }

  storeConsumer(data){
     return this.httpClient.post(`${this.uri}/consumer`, data);
  }

  storeOrder(data){
  	return this.httpClient.post(`${this.uri}/order`, data);	
  }

   
}
