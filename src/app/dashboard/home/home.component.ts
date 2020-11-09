import {Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit{

  	heroSlider: any = [
      {
        intro: 'Proud African Clothe',
        title: 'Wear it Simple & Nice', 
        message: 'Browse through our collection to get your best designs for that event', 
        src: 'banner1',
        avatar: 'assets/images/slider/image_3.jpg'
      },
      {
        intro: 'Wear your day',
        title: 'African made Clothes', 
        message: 'Great colors bring motivation', 
        src: 'banner2',
        avatar: 'assets/images/slider/image_2.jpg'
      }
    ];

    ShortBanner: any = [
      {
        title: 'Office Wear', 
        price: 'GHC 250', 
        src: 'office',
        avatar: 'assets/images/banner/banner-3.jpg'
      },
      {
        title: 'Church Wear', 
        price: 'GHC 270', 
        src: 'church',
        avatar: 'assets/images/banner/banner-4.jpg'
      },
      {
        title: 'Wedding Wear', 
        price: 'GHC 170', 
        src: 'wedding',
        avatar: 'assets/images/banner/banner-5.jpg'
      }
    ];

    blog: any = [
      {
        date: 'June 20, 2020', 
        title: 'How to reduce cost on clothes', 
        src: 'office',
        avatar: 'assets/images/blog/blog-1.jpg'
      },
      {
        date: 'July 20, 2020', 
        title: 'Which clothes match your event', 
        src: 'church',
        avatar: 'assets/images/blog/blog-2.jpg'
      },
      {
        date: 'August 20, 2020', 
        title: 'Buy the looks and smiles', 
        src: 'wedding',
        avatar: 'assets/images/blog/blog-3.jpg'
      }
    ];

    constructor() { }

  	ngOnInit(): void {
        console.log(this.heroSlider);
  	    
    }

     ngAfterViewInit(){
       this.defaultInitialise();
     }

    defaultInitialise(){
        $('.hero-slider-active-1').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          loop: true,
          dots: true,
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
