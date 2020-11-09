import { Component, OnInit } from '@angular/core';
import {CartService} from '../../service/cart.service';
declare var $: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  dataValue: Array<Object>;
  subTotal = 0;
  uri= '';
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.uri = this.cartService.getURI();
    this.dataValue = this.cartService.getCart();

    this.dataValue.forEach((data:any) => {
      this.subTotal = this.subTotal +  parseFloat(data.price);
    }) 
    setTimeout(()=> {
      var CartPlusMinus = $('.cart-plus-minus');
      CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
      CartPlusMinus.append('<div class="inc qtybutton">+</div>');
      var sample = this.cartService;
      $(".qtybutton").on("click", function() {
          var $button = $(this);
          var oldValue = $button.parent().find("input").val();
          if ($button.text() === "+") {
              var newVal = parseFloat(oldValue) + 1;
          } else {
              // Don't allow decrementing below zero
              if (oldValue > 0) {
                  var newVal = parseFloat(oldValue) - 1;
              } else {
                  newVal = 1;
              }
          }
          var total = parseFloat($button.parent().parent().parent().find(".product-price-cart").text().split(' ')[1]) * newVal;
          $button.parent().parent().parent().find(".product-subtotal").text('GHC '+total);
          $button.parent().find("input").val(newVal);
          var productIndex = $button.parent().parent().parent().find("#product-index").text();
         sample.updateItemQuantity(productIndex, newVal);
          
          var subup = 0;
          $('.product-subtotal').each((e)=>{
              $(this).css('color', 'yellow');
          });
          this.subTotal = subup;
      });
    },1000);

    $('.close_item').on("click", function(e) {
          e.preventDefault();
          alert('oiuyt');

          // var $closeBtn = $(this);
          // alert($closeBtn.parent().parent().find('.product-name').text());
    });
    
  }

  clearCart(){
    this.cartService.clearCart();
  }

  


}
