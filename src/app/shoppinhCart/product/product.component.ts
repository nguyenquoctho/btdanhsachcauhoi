import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/shoppingProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})  
export class ProductComponent implements OnInit {
@Input() product:Product
@Output() productEmiter = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  handleChosenProduct(product){
    this.productEmiter.emit(product);
  }
}
