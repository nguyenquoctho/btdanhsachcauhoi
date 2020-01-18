import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { E3IndexComponent } from './component/e3-index/e3-index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridtemplateComponent } from './gridtemplate/gridtemplate.component';
import {HomeLayoutModule} from './home-layout/home-layout.module';
import { Routes,RouterModule } from '@angular/router';
import {AdminLayoutModule} from './admin-layout/admin-layout.module';
import { DemoDirectiveComponent } from './DemoDirective/demo-directive/demo-directive.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatInputModule} from '@angular/material/input';
import { StudentItemComponent } from './DemoDataCrossCoponent/student-item/student-item.component';
import {MovieListComponent} from './MovieManagerment/movie-list/movie-list.component';
import {MovieItemComponent} from './MovieManagerment/movie-item/movie-item.component'
import { CartComponent } from './shoppinhCart/cart/cart.component';
import { ProductComponent } from './shoppinhCart/product/product.component'; // <-- import the module
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MovieModalComponent } from './MovieManagerment/movie-modal/movie-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TrangChuModule} from './trang-chu/trang-chu.module';
import { ListQuestionComponent } from './questionExercise/list-question/list-question.component';
import { QuestionItemComponent } from './questionExercise/question-item/question-item.component';
import { MultipleChoiceQuestionComponent } from './questionExercise/multiple-choice-question/multiple-choice-question.component'
const appRoutes:Routes = [
 { path:"",loadChildren: ()=>HomeLayoutModule},
 { path:"home", loadChildren:()=>HomeLayoutModule},
 { path:"admin", loadChildren: ()=>AdminLayoutModule},
 
]

@NgModule({
  declarations: [
    AppComponent,
    E3IndexComponent,
    DemoDirectiveComponent,
    MovieListComponent,
    StudentItemComponent,
    MovieItemComponent,
    CartComponent,
    ProductComponent,
    MovieModalComponent,
    ListQuestionComponent,
    QuestionItemComponent,
    MultipleChoiceQuestionComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatFormFieldModule,
    TrangChuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
