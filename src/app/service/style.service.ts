import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  

  private uri = 'https://afrikmart.herokuapp.com/api';
   
    

  constructor(private httpClient: HttpClient) { }

  index(){
     return this.httpClient.get(`${this.uri}/style`);
  }

  show(id){
    return this.httpClient.get(`${this.uri}/style/${id}`);
  }
}
