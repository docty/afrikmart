import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MaterialService} from '../../service/material.service';
import {CartService} from '../../service/cart.service';
import {ReviewService} from '../../service/review.service';
import Swal from '../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $: any;
@Component({
  selector: 'app-materialshow',
  templateUrl: './materialshow.component.html',
  styleUrls: ['./materialshow.component.css']
})
export class MaterialshowComponent implements OnInit, AfterViewInit {

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
  constructor(private route: ActivatedRoute, private materialService: MaterialService, 
      private cartService: CartService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.uri = this.materialService.getURI();
    this.sub = this.route.params.subscribe(params => {
      this.id = params.details;
    });
    
    this.materialService.show(this.id).subscribe(
      (data: any) => {
            this.dataValue = data;
            this.imageCategory = data.image.split('<>');
            this.tag = data.tag.split(' ');
            this.reviewService.show(data.productId).subscribe(
              (results)=>{
                this.reviewData = results;
              });
        }
    );
    this.rateStars();
    
  }

  addToCart(values){
    let quantity =  $('.cart-plus-minus-box').val();
    var results =  Object.assign({},  values, {'quantity' : quantity});
    this.cartService.storeCart(results);
     
    Swal.fire({text:'Material added to cart', confirmButtonColor:"#5b73e8"})
  }

  ngAfterViewInit(): void{
      this.jqueryInitialise();
  }

  rateStars(){
     this.rateStar.length = Math.floor((Math.random()*5)+1);
     this.rateStarGray.length = 5 - this.rateStar.length;
    }


    onSubmitReview(){
        this.review.productId = this.dataValue.productId;
        this.reviewService.store(this.review).subscribe(
          (result) => {
              Swal.fire({text:'Comment has been submitted', confirmButtonColor:"#5b73e8"})  
        });
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

        var CartPlusMinus = $('.cart-plus-minus');
        CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
        CartPlusMinus.append('<div class="inc qtybutton">+</div>');
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
            $button.parent().find("input").val(newVal);
        });
    }

}