import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAnsList } from 'src/app/models/AnsList';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.scss']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input() item
  @Output() AnsMultipleEmiter = new EventEmitter();
  selectedAns
  answer:IAnsList={
    QuestionId:'',
    answer:{
      content:'',
      exact:false
    }
  }
  constructor() { }

  ngOnInit() {
    
  }
  radioChangeHandler(event:any){
    
    // console.log(this.item.answers);
    //  const index = this.item.answers.f
    const ansArr = [...this.item.answers];
    // console.log(ansArr)
   const index = ansArr.findIndex(item=>item.content===event.target.value)
  //  console.log(index)
    this.answer.QuestionId = this.item._id;
    this.answer.answer.content = event.target.value;
    this.answer.answer.exact = ansArr[index].exact;
    console.log(this.answer);
    this.AnsMultipleEmiter.emit(this.answer)
  }
}
