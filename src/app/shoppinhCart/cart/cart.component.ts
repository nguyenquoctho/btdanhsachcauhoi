import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: '[app-cart]',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cartItem:CartItem;
  @Output() CartItemEmiter = new EventEmitter()
  @Output() DeleteEmiter = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  handleChooseMore(id){
    
    const Output={id,type:-1}
    this.CartItemEmiter.emit(Output)
  }
  handleChooseLess(id){
   
    const Output={id,type:+1}
    this.CartItemEmiter.emit(Output)
  }
  handleDelete(id){
    this.DeleteEmiter.emit(id)
  }
}
