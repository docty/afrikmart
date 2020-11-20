import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  

  private defaultURL = 'https://afrikmart.herokuapp.com/images/';

  
  cartData = [];

  storeCart(item){
  	this.cartData.push(item);
  }

  getCart(){
  	return this.cartData;
  }

  clearCart(){
  	this.cartData.length = 0;
  }

  updateItemQuantity(index, value){
    this.cartData[index]['quantity'] = value;
    return this.cartData[index]['quantity'];
  }

  removeCart(item){
  	this.cartData;
  }

  getURI(){
    return this.defaultURL;
  }
}
