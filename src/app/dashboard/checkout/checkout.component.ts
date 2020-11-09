import { Component, OnInit } from '@angular/core';
import {CartService} from '../../service/cart.service';
import {CheckoutService} from '../../service/checkout.service';

declare var $: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  dataValue: any;
  order =  [];
  data: any = {
      firstName: '',
      lastName: '',
      houseNumber: '',
      gpAddress: '',
      city: '',
      landmark: '',
      pickup: '',
      phoneNumber: '',
      email: '',
      country: 'Ghana',
      message: ''
  }
  constructor(private cartService: CartService, private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.dataValue = this.cartService.getCart();
    console.log(this.dataValue);
  	$('.checkout-click1').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
    });
    
    
    /*--- checkout toggle function ----*/
    $('.checkout-click3').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
    });

    /*-------------------------
    checkout one click toggle function
    --------------------------*/
    var checked = $( '.sin-payment input:checked' )
    if(checked){
        $(checked).siblings( '.payment-box' ).slideDown(900);
    };
   $( '.sin-payment input' ).on('change', function() {
        $( '.payment-box' ).slideUp(900);
        $(this).siblings( '.payment-box' ).slideToggle(900);
    });

   
  }


  onPlaceOrder(){
    this.checkoutService.storeConsumer(this.data).subscribe(
      (result) => {
           this.order[0] = this.data;
          this.order[1] = this.dataValue;
          
          this.checkoutService.storeOrder(this.order).subscribe(
            (item) => {
              alert('Your Order has been placed \n We will communicate via mobile number provided \n Thank you');
            });
      });
     
  }

}
