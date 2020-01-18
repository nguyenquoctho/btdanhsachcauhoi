import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TranChiTietComponent } from './tran-chi-tiet/tran-chi-tiet.component';
import { HomeLauoutComponent } from './home-lauout/home-lauout.component';
import { Routes,RouterModule } from '@angular/router';

const homeRouters:Routes=[
  {path:'',component:HomeLauoutComponent,children:[
    {path:'',component:TrangChuComponent},
    {path:'trangchu',component:TrangChuComponent},
    {path:'trangchitiet',component:TranChiTietComponent}
  ]}
]
@NgModule({
  declarations: [HeaderComponent, FooterComponent, TrangChuComponent, TranChiTietComponent,HomeLauoutComponent],
  exports: [HeaderComponent, FooterComponent, TrangChuComponent, TranChiTietComponent,],
  imports: [
    CommonModule,RouterModule.forChild(homeRouters)
  ]
})
export class HomeLayoutModule { }
