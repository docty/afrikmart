import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StyleService} from '../../service/style.service';

declare var $: any;

declare var $: any;
@Component({
  selector: 'app-styleshow',
  templateUrl: './styleshow.component.html',
  styleUrls: ['./styleshow.component.css']
})
export class StyleshowComponent implements OnInit {

  id: string;
  private sub: any;
  dataValue: any;
  imageCategory: any;

  constructor(private route: ActivatedRoute, private styleService: StyleService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.details;
    });
    
    this.styleService.show(this.id).subscribe(
      (data: any) => {
        this.dataValue = data;
        this.imageCategory = data.image.split('<>');
         }
    );
    
    
  	
  }

  ngAfterViewInit(): void{
      this.jqueryInitialise();
  }

 
  jqueryInitialise(){
        $('.pro-dec-big-img-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
            fade: false,
            asNavFor: '.product-dec-slider-small , .product-dec-slider-small-2',
        });

        $('.product-dec-slider-small-2').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical: true,
            asNavFor: '.pro-dec-big-img-slider',
            dots: false,
            focusOnSelect: true,
            fade: false,
            prevArrow: '<span class="pro-dec-prev"><i class="icon-arrow-up"></i></span>',
            nextArrow: '<span class="pro-dec-next"><i class="icon-arrow-down"></i></span>',
            responsive: [{
                    breakpoint: 1365,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

        $('.related-product-active').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: false,
            loop: true,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
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