import {Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  	constructor() { }

  	ngOnInit(): void {
  	    $('.hero-slider-active-2').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          loop: true,
          dots: false,
          arrows: true,
          prevArrow: '<span class="slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
          nextArrow: '<span class="slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        });	

        $('.product-slider-active-2').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          fade: false,
          loop: true,
          dots: true,
          rows: 2,
          arrows: false,
          responsive: [
              {
                  breakpoint: 1199,
                  settings: {
                      slidesToShow: 2,
                  }
              },
              {
                  breakpoint: 991,
                  settings: {
                      slidesToShow: 2,
                  }
              },
              {
                  breakpoint: 767,
                  settings: {
                      slidesToShow: 1,
                  }
              },
              {
                  breakpoint: 575,
                  settings: {
                      slidesToShow: 1,
                  }
              }
          ]
        });

        $('.product-slider-active-3').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          fade: false,
          loop: true,
          dots: false,
          arrows: true,
          prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
          nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
          responsive: [
              {
                  breakpoint: 1199,
                  settings: {
                      slidesToShow: 4,
                  }
              },
              {
                  breakpoint: 991,
                  settings: {
                      slidesToShow: 3,
                  }
              },
              {
                  breakpoint: 767,
                  settings: {
                      slidesToShow: 2,
                  }
              },
              {
                  breakpoint: 575,
                  settings: {
                      slidesToShow: 1,
                  }
              }
          ]
        });
    }
}
