import { Component, OnInit } from '@angular/core';
import {CartService} from '../../service/cart.service';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  cartTotal:any = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartTotal = this.cartService.getCart().length;
      this.defaultInitialise();
      $('.cart-btn-style').on('click', function() {
            $('.sidebar-cart-active').removeClass('inside');
            $('.main-wrapper').removeClass('overlay-active');
        });

  }

   

  
  defaultInitialise(){
      var navbarTrigger = $('.cart-active'),
            endTrigger = $('.cart-close'),
            container = $('.sidebar-cart-active'),
            wrapper = $('.main-wrapper');
        
        wrapper.prepend('<div class="body-overlay"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
        
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });

        var searchToggle = $('.search-toggle');
        searchToggle.on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
           $(this).removeClass('open');
           $(this).siblings('.search-wrap-1').removeClass('open');
        }else{
           $(this).addClass('open');
           $(this).siblings('.search-wrap-1').addClass('open');
        }
    })
  }
  

}
