import { Component, OnInit} from '@angular/core';
import {StyleService} from '../../service/style.service';
import {CartService} from '../../service/cart.service';

declare var $: any;
@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

   dataValue: any;
  constructor(private styleService: StyleService, private cartService: CartService) { }

  ngOnInit(): void {
      this.styleService.index().subscribe(
          data => {this.dataValue = data; console.log(data);}
      );
    this.jqueryInitialise();
  }


  addToCart(values){
    this.cartService.storeCart(values);
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