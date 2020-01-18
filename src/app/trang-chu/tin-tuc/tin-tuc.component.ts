import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {
  loaiTinTuc:string='DienAnh';
  btnDienAnh:boolean=true;
  btnReview:boolean;
  btnKhuyenMai:boolean;
  constructor() { }
  ChonLoaiTin(val){

    this.loaiTinTuc=val
    switch(val){
      case'DienAnh':{
        
        this.btnDienAnh=true;
        this.btnReview=false;
        this.btnKhuyenMai=false;
        console.log(this.btnDienAnh,this.btnKhuyenMai,this.btnReview,this.loaiTinTuc=val)
        return this.btnDienAnh
      }
      case'Review':{
        this.btnDienAnh=false;
        this.btnReview=true;
        this.btnKhuyenMai=false;
        console.log(this.btnDienAnh,this.btnKhuyenMai,this.btnReview,this.loaiTinTuc=val)
        return this.btnReview
      }
      case 'KhuyenMai':{
        this.btnDienAnh=false;
        this.btnReview=false;
        this.btnKhuyenMai=true;
        console.log(this.btnDienAnh,this.btnKhuyenMai,this.btnReview,this.loaiTinTuc=val)
        return this.btnKhuyenMai
      }
      
    }
  }
  ngOnInit() {
  }

}
