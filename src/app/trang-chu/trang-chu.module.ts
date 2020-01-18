import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SliderComponent } from "./slider/slider.component";
import { LoaiPhimComponent } from "./loai-phim/loai-phim.component";
import { PhimDanhChieuComponent } from "./phim-danh-chieu/phim-danh-chieu.component";
import { PhimSapChieuComponent } from "./phim-sap-chieu/phim-sap-chieu.component";
import { ItemPhimComponent } from "./item-phim/item-phim.component";
import { TinTucComponent } from "./tin-tuc/tin-tuc.component";
import { DienAnhComponent } from "./dien-anh/dien-anh.component";
import { ReviewComponent } from "./review/review.component";
import { KhuyenMaiComponent } from "./khuyen-mai/khuyen-mai.component";
import { LienHeComponent } from "./lien-he/lien-he.component";
import { FormLienHeComponent } from "./form-lien-he/form-lien-he.component";
import { ThongTinLienHeComponent } from "./thong-tin-lien-he/thong-tin-lien-he.component";
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    LoaiPhimComponent,
    PhimDanhChieuComponent,
    PhimSapChieuComponent,
    ItemPhimComponent,
    TinTucComponent,
    DienAnhComponent,
    ReviewComponent,
    KhuyenMaiComponent,
    LienHeComponent,
    FormLienHeComponent,
    ThongTinLienHeComponent,
    TrangChuComponent,
    ItemTinTucComponent
  ],
  exports: [
    HeaderComponent,
    SliderComponent,
    LoaiPhimComponent,
    PhimDanhChieuComponent,
    PhimSapChieuComponent,
    ItemPhimComponent,
    TinTucComponent,
    DienAnhComponent,
    ReviewComponent,
    KhuyenMaiComponent,
    LienHeComponent,
    FormLienHeComponent,
    ThongTinLienHeComponent,
    TrangChuComponent,
    ItemTinTucComponent
  ],
  imports: [CommonModule]
})
export class TrangChuModule {}
