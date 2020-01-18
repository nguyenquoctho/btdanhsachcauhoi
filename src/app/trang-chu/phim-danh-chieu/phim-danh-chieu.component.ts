import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any
@Component({
  selector: 'app-phim-danh-chieu',
  templateUrl: './phim-danh-chieu.component.html',
  styleUrls: ['./phim-danh-chieu.component.scss']
})
export class PhimDanhChieuComponent implements OnInit,AfterViewInit {
  DanhSachPhimDangChieu =[
    {TenPhim:"The Walking Dead",HinhAnh:"../../../assets/img/sinh-nhat-chet-choc-happy-death-day-c16-15089876590397.jpg"},
    {TenPhim:"Ferdinand",HinhAnh:'../../../assets/img/'},
    {TenPhim:"Ngắm Pháo Hoa",HinhAnh:'../../../assets/img/phao-hoa-nen-ngam-tuduoi-hay-ben-canh-15088436147700.jpg'},
    {TenPhim:"Nhóc Ma Siêu Quậy",HinhAnh:'../../../assets/img/nhoc-ma-sieu-quaythe-little-vampire-3d-15090331183157.jpg'},
    {TenPhim:"Trải nghiệm điểm chết",HinhAnh:'../../../assets/img/trai-nghiemdiem-chet-flatliners-15093522963475.jpg'},
    ]
  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })
  }
}
