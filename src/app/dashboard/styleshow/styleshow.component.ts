import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StyleService} from '../../service/style.service';
import {CartService} from '../../service/cart.service';
import {ReviewService} from '../../service/review.service';
import Swal from '../../../assets/libs/sweetalert2/sweetalert2.min';
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
  reviewData: any;
  imageCategory: any;
  tag: any;
  uri= '';
  rateStar = [];
  rateStarGray = [];

  review = {
      name: '',
      email: '',
      comment: '',
      productId: ''
  }

  constructor(private route: ActivatedRoute, private styleService: StyleService,
      private cartService: CartService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.uri = this.styleService.getURI();
    this.sub = this.route.params.subscribe(params => {
      this.id = params.details;
    });
    
    this.styleService.show(this.id).subscribe(
      (data: any) => {
        this.dataValue = data;
        this.imageCategory = data.image.split('<>');
        this.tag = data.tag.split(' ');
            this.showReview();
         }
    );
    this.rateStars();
     
  }

   

  showReview(){
    this.reviewService.show(this.dataValue.productId).subscribe(
      (results)=>{
        this.reviewData = results;
      });
  }

  addToCart(values){
    var results =  Object.assign({},  values, {'quantity' : 1, 'location': 'styles'});
    this.cartService.storeCart(results);
     
    Swal.fire({text:'Material added to cart', confirmButtonColor:"#5b73e8"})
  }

  rateStars(){
     this.rateStar.length = Math.floor((Math.random()*5)+1);
     this.rateStarGray.length = 5 - this.rateStar.length;
    }


    onSubmitReview(){
        this.review.productId = this.dataValue.productId;
        this.reviewService.store(this.review).subscribe(
          (result) => {
              Swal.fire({text:'Comment has been submitted', confirmButtonColor:"#5b73e8"});
              this.review.comment = '';  this.review.email = '';  this.review.name = ''; this.review.productId = '';    
              this.showReview();
        });
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