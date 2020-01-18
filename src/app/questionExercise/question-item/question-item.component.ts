import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAnsList } from 'src/app/models/AnsList';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {

  @Input() item;
  answer:IAnsList={
    QuestionId:'',
    answer:{
      content:'',
      exact:false
    }
  }
  @Output() AnsEmiter = new EventEmitter;
  constructor() { }

  ngOnInit() {
 
  }
  handleAns(value){
    
    if(this.item.answers[0].content===value){
     console.log('dung r')
 
     this.answer.QuestionId=this.item._id;
     this.answer.answer.content=value;
     this.answer.answer.exact=true;
     this.AnsEmiter.emit(this.answer)
    }
    else{
      console.log('sai r')
      
     this.answer.QuestionId=this.item._id;
     this.answer.answer.content=value;
     this.answer.answer.exact=false;
     this.AnsEmiter.emit(this.answer)
    }
   
  }
}
