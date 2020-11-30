import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {MaterialService} from '../../service/material.service';
import {CartService} from '../../service/cart.service';
import Swal from '../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $: any;

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  dataValue: any;
  uri= '';
  private sub: any;
  
  constructor(private router: Router, private materialService: MaterialService, private cartService: CartService) { }

  ngOnInit(): void {
    this.sub = this.router.url.split('/').pop();
    this.uri = this.materialService.getURI();
    
  	this.materialService.index(this.sub).subscribe(
  		data => {this.dataValue = data;}
  	);
    this.jqueryInitialise();
  }

  addToCart(values){
    var results =  Object.assign({},  values, {'quantity' : 1, 'location': 'materials'});
    this.cartService.storeCart(results);
    Swal.fire({text:'Material added to cart', confirmButtonColor:"#5b73e8"})
  }

  jqueryInitialise(){
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            sideeda: 16,
            max: 1000,
            values: [10, 1000],
            slide: function(event, ui) {
                amountprice.val("GHC " + ui.values[0] + " - GHC " + ui.values[1]);
            }
        });
        amountprice.val("GHC " + sliderrange.slider("values", 0) +
            " - GHC " + sliderrange.slider("values", 1));
    });
  }

} 
