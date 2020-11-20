import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  

  private uri = 'https://afrikmart.herokuapp.com/api';
  
  
   

  constructor(private httpClient: HttpClient) { }

  storeConsumer(data){
     return this.httpClient.post(`${this.uri}/consumer`, data);
  }

  storeOrder(data){
  	return this.httpClient.post(`${this.uri}/order`, data);	
  }

   
}
