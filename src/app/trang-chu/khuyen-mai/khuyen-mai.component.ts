import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khuyen-mai',
  templateUrl: './khuyen-mai.component.html',
  styleUrls: ['./khuyen-mai.component.scss']
})
export class KhuyenMaiComponent implements OnInit {
  DanhSachKhuyenMai = [
    {TieuDeSuKien:"Khuyến Mãi 1",HinhAnh:'https://media.vietteltelecom.vn/upload/ckfinder/images/3112.png'},
    {TieuDeSuKien:"Khuyến Mãi2",HinhAnh:'https://topshare.s3.amazonaws.com/production/posts/pictures/000/000/145/original/kichi-kichi-khuyen-mai.jpg?1502809882'},
    {TieuDeSuKien:"Khuyến Mãi 3",HinhAnh:'http://giaydantuong365.com/uploads/user/2/khuyenmaigiay/khuyen-maigiay-dan-tuong-dep-gia-re-cuc-soc.jpg'},
    ]
  constructor() { }

  ngOnInit() {
  }

}
