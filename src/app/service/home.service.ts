import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  
	private defaultURL = 'https://afrikmart.herokuapp.com/images/';
	private uri = 'https://afrikmart.herokuapp.com/api';

  

    constructor(private httpClient: HttpClient) { }


    homePage(){
    	return this.httpClient.get(`${this.uri}/shop`);
    }

    
    getURI(){
  		return this.defaultURL;
    }
}
