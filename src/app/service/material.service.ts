import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

    private uri = 'https://afrikmart.herokuapp.com/api';
    private defaultURL = 'https://afrikmart.herokuapp.com/images/';

  

  constructor(private httpClient: HttpClient) { }

  index(id){
     return this.httpClient.get(`${this.uri}/material?id=${id}`,);
  }

  show(id){
    return this.httpClient.get(`${this.uri}/material/${id}`);
  }

  getURI(){
  	return this.defaultURL;
  }
}
