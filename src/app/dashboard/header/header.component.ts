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
      this.mobileHeaderActive();
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

  mobileHeaderActive() {
    var navbarTrigger = $('.mobile-header-button-active'),
        endTrigger = $('.sidebar-close'),
        container = $('.mobile-header-active'),
        wrapper4 = $('.main-wrapper');
    
    wrapper4.prepend('<div class="body-overlay-1"></div>');
    
    navbarTrigger.on('click', function(e) {
        e.preventDefault();
        container.addClass('sidebar-visible');
        wrapper4.addClass('overlay-active-1');
    });
    
    endTrigger.on('click', function() {
        container.removeClass('sidebar-visible');
        wrapper4.removeClass('overlay-active-1');
    });
    
    $('.body-overlay-1').on('click', function() {
        container.removeClass('sidebar-visible');
        wrapper4.removeClass('overlay-active-1');
    });

    var $offCanvasNav = $('.mobile-menu , .category-menu-dropdown'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
    
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });
};
  

}





    
