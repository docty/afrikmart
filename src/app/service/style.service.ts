import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  

  private uri = 'http://127.0.0.1:8000/api';
  private defaultURL = 'http://127.0.0.1:8000/images';
    

  constructor(private httpClient: HttpClient) { }

  index(id){
    return this.httpClient.get(`${this.uri}/style?id=${id}`,);
  }

  show(id){
    return this.httpClient.get(`${this.uri}/style/${id}`);
  }

  getURI(){
  	return this.defaultURL;
  }
}
