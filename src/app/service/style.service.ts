import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  

  private uri = 'http://127.0.0.1:8000/api';
   
    

  constructor(private httpClient: HttpClient) { }

  index(){
     return this.httpClient.get(`${this.uri}/style`);
  }

  show(id){
    return this.httpClient.get(`${this.uri}/style/${id}`);
  }
}
