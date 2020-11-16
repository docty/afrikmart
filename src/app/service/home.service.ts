import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  
	private defaultURL = 'http://127.0.0.1:8000/images/';
	private uri = 'http://127.0.0.1:8000/api';

    constructor(private httpClient: HttpClient) { }


    homePage(){
    	return this.httpClient.get(`${this.uri}/shop`);
    }

    
    getURI(){
  		return this.defaultURL;
    }
}
