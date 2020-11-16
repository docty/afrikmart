import {Component, OnInit, AfterViewInit } from '@angular/core';
import {HomeService} from '../../service/home.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit{

  	url : any;

    heroSlider: any;

    shortBanner: any;

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

    constructor(private homeService: HomeService) { }

  	ngOnInit(): void {
      this.url = this.homeService.getURI();
       this.homeService.homePage().subscribe(
         (data:any) => {
           this.heroSlider = data.slider;
           this.shortBanner = data.banner;
           setTimeout(()=>{this.defaultInitialise();},1); 
        });

    }
 
     ngAfterViewInit(){
       
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
