import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/shoppingProduct';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  productList:Product[]=  [
    {
        id: 1,
        name: 'Oppo R1',
        image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
        discription: 'Sản phẩm của china',
        price: 450,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung Galaxy Note 9',
        image: 'https://hoanghamobile.com/Uploads/Originals/2018/08/10/201808100934091115_mg-6364-1.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg',
        discription: 'Sản phẩm của Hàn Quốc',
        price: 200,
        inventory: 15,
        rating: 5
    }, {
        id: 3,
        name: 'Iphone XS',
        image: 'https://boygeniusreport.files.wordpress.com/2017/11/iphone-x-photo.jpg?quality=98&strip=all&w=782',
        discription: 'Sản phẩm của US',
        price: 600,
        inventory: 20,
        rating: 4
    }
];
  cartList: CartItem[]=[];
  tongTien:number=0;
  constructor() { }

  ngOnInit() {
  }
  calaculator(productPrice,direction){
    this.tongTien+=productPrice * direction
  }
  calaculatorDelete(index){
    this.tongTien = this.tongTien-(this.cartList[index].quantity*this.cartList[index].product.price)
  }
  handleChoseProduct(product:Product){
    console.log(product);
    const index = this.cartList.findIndex(item=>{return item.product.id===product.id})
    console.log(index)
    if(index===-1){
      // this.tongTien=this.tongTien + this.cartList[index].product.price
      this.cartList.push(
        {
          product,
          quantity:1
        }
      )
    }else{
      this.cartList[index].quantity+=1;
    }
    console.log(this.cartList);
    this.calaculator(product.price,1)
  }
  handleChoosequantity(chosenum){
    console.log(chosenum.id)
    const index = this.cartList.findIndex(item=>{return item.product.id === chosenum.id})
   
   if(chosenum.type===-1){
    if(this.cartList[index].quantity===1)   {
      this.calaculator(this.cartList[index].product.price,-1)
      this.cartList.splice(index,1)
    }
    else{
      this.calaculator(this.cartList[index].product.price,-1)
      this.cartList[index].quantity--;
      
    }
   } else{
    this.cartList[index].quantity++;
    this.calaculator(this.cartList[index].product.price,+1)
   }

  }
  handleDelete(id){
    console.log(id)
    const index = this.cartList.findIndex(item=>{return item.product.id === id})
    console.log(index)
    this.calaculatorDelete(index)
    this.cartList.splice(index,1);
  }

}
