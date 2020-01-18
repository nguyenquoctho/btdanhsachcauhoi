import { Component, OnInit } from '@angular/core';
import { Iproduct, Product } from 'src/app/models/product';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {
  isShowTitle: boolean = false;
  month: number = 1;
  name: string;
  p: number = 1;
  monthArray: string[] = [
    "thang 1", "thang 2", "thang 3", "thang 4"
  ]
  tdWidth: number = 300
  ProdLidt: Iproduct[] = [
    { MaSP: 1, TenSP: "Sony XZ", Gia: 1000 },
    { MaSP: 2, TenSP: "Sony XZ2", Gia: 1000 },
    { MaSP: 3, TenSP: "HTC U Ultra", Gia: 1000 },
    { MaSP: 4, TenSP: "HTC U12 Plus", Gia: 1000 },
    { MaSP: 5, TenSP: "Iphone XS MAX", Gia: 1000 },
    { MaSP: 6, TenSP: "Iphone XR", Gia: 1000 },
    { MaSP: 7, TenSP: "Xiaomi Mi Note 3", Gia: 9900 },
    { MaSP: 8, TenSP: "Xiaomi Mi 8", Gia: 1000 },
    { MaSP: 9, TenSP: "Galaxy Note 9", Gia: 1000 },
    { MaSP: 10, TenSP: "Galaxy S9 Plus", Gia: 1000 },
    { MaSP: 11, TenSP: "Nokia X9", Gia: 1000 },];
  constructor() { }

  ngOnInit() {
    const username = localStorage.getItem('user');
    if (username) {
      this.name = username;
      this.isShowTitle = true
    }
  }
  handleChangeMonth(e) {
    this.month = e.target.value
  }
  handleSubmit(name, pass) {
    console.log(name, pass)
    if (name === 'cybersoft' && pass === 'cybersoft') {
      this.isShowTitle = true;
      localStorage.setItem('user', JSON.stringify(name))
    } else {
      this.isShowTitle = false;
    }
  }

  themSP(ma, ten, gia) {
    const masp = parseInt(ma, 10)
    const giasp = parseInt(gia, 10)
    const index = this.ProdLidt.findIndex(item => { return item.MaSP === masp })
    if (index === -1) {
      const product = new Product(masp, ten, giasp)
      this.ProdLidt.push(product)
    } else {
      alert('ma sp da ton tai')
    }
  }
  xoaPD(item) {
    const index = this.ProdLidt.findIndex(sp => { return sp.MaSP === item.MaSP })
    this.ProdLidt.splice(index, 1)
  }
  handleChangePage(e){
    this.p=e
  }
}
