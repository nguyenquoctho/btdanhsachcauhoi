import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {
  @Input() studentItem:{id:string,name:string,age:number};
  @Output() studentEmiter = new EventEmitter();
  // @Input() trangthai:boolean
  @Input() seatItem: { SoGhe:number,
    TenGhe:string,
    Gia:number,
    TrangThai:boolean}
    isChosen:boolean;
  constructor() { }

  ngOnInit() {

  }
  handleChooseStudent(item){

    // if(item.TrangThai===false){
    //   item.TrangThai=true
    // }
    // else{
    //   item.TrangThai=false
    // }
    this.studentEmiter.emit(item)
    
    // console.log(item)
  }
  handleChosenSeat(seatitem){
    if(!this.seatItem.TrangThai){
      this.studentEmiter.emit(seatitem);
    this.isChosen=!this.isChosen
    }
  }
}
