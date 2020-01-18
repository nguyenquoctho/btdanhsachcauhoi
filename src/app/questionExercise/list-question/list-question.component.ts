import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.scss']
})
export class ListQuestionComponent implements OnInit {
  
   QuestionList = [
    {
      questionType: 1,
      _id: 1,
      content: "ÄĂ¡p Ă¡n nĂ o sau Ä‘Ă¢y lĂ  Ä‘Ăºng ?",
      answers: [
        {
          _id: "11",
          exact: false,
          content: "ÄĂ¡p Ă¡n 1 cho cĂ¢u 1",
          STT: null
        },
        {
          _id: "12",
          exact: false,
          content: "ÄĂ¡p Ă¡n 2 cho cĂ¢u 1",
          STT: null
        },
        {
          _id: "13",
          exact: false,
          content: "ÄĂ¡p Ă¡n 3 cho cĂ¢u 1",
          STT: null
        },
        {
          _id: "14",
          exact: true,
          content: "ÄĂ¡p Ă¡n 4 cho cĂ¢u 1",
          STT: null
        }
      ]
    },
    {
      questionType: 1,
      _id: 2,
      content: "ÄĂ¡p Ă¡n nĂ o sau Ä‘Ă¢y lĂ  Ä‘Ăºng ?",
      answers: [
        {
          _id: "21",
          exact: false,
          content: "ÄĂ¡p Ă¡n 1 cho cĂ¢u 2",
          STT: null
        },
        {
          _id: "22",
          exact: false,
          content: "ÄĂ¡p Ă¡n 2 cho cĂ¢u 2",
          STT: null
        },
        {
          _id: "23",
          exact: false,
          content: "ÄĂ¡p Ă¡n 3 cho cĂ¢u 2",
          STT: null
        },
        {
          _id: "24",
          exact: true,
          content: "ÄĂ¡p Ă¡n 4 cho cĂ¢u 2",
          STT: null
        }
      ]
    },
    {
      questionType: 1,
      _id: 3,
      content: "ÄĂ¡p Ă¡n nĂ o sau Ä‘Ă¢y lĂ  Ä‘Ăºng ?",
      answers: [
        {
          _id: "31",
          exact: false,
          content: "ÄĂ¡p Ă¡n 1 cho cĂ¢u 3",
          STT: null
        },
        {
          _id: "32",
          exact: false,
          content: "ÄĂ¡p Ă¡n 2 cho cĂ¢u 3",
          STT: null
        },
        {
          _id: "33",
          exact: false,
          content: "ÄĂ¡p Ă¡n 3 cho cĂ¢u 3",
          STT: null
        },
        {
          _id: "34",
          exact: true,
          content: "ÄĂ¡p Ă¡n 4 cho cĂ¢u 3",
          STT: null
        }
      ]
    },
    {
      questionType: 1,
      _id: 4,
      content: "ÄĂ¡p Ă¡n nĂ o sau Ä‘Ă¢y lĂ  Ä‘Ăºng ?",
      answers: [
        {
          _id: "5",
          exact: false,
          content: "ÄĂ¡p Ă¡n 1 cho cĂ¢u 4",
          STT: null
        },
        {
          _id: "9",
          exact: false,
          content: "ÄĂ¡p Ă¡n 2 cho cĂ¢u 4",
          STT: null
        },
        {
          _id: "13",
          exact: false,
          content: "ÄĂ¡p Ă¡n 3 cho cĂ¢u 4",
          STT: null
        },
        {
          _id: "17",
          exact: true,
          content: "ÄĂ¡p Ă¡n 4 cho cĂ¢u 4",
          STT: null
        }
      ]
    },
    {
      questionType: 2,
      _id: 5,
      content: "HĂ£y nháº­p vĂ o Ä‘Ă¡p Ă¡n Ä‘Ăºng",
      answers: [
        {
          _id: "5",
          exact: null,
          content: "ÄĂ¡p Ă¡n 5",
          STT: null
        }
      ]
    },
    {
      questionType: 2,
      _id: 6,
      content: "HĂ£y nháº­p vĂ o Ä‘Ă¡p Ă¡n Ä‘Ăºng",
      answers: [
        {
          _id: "6",
          exact: null,
          content: "ÄĂ¡p Ă¡n 6",
          STT: null
        }
      ]
    },
    {
      questionType: 2,
      _id: 7,
      content: "HĂ£y nháº­p vĂ o Ä‘Ă¡p Ă¡n Ä‘Ăºng",
      answers: [
        {
          _id: "7",
          exact: null,
          content: "ÄĂ¡p Ă¡n 7",
          STT: null
        }
      ]
    },
    {
      questionType: 2,
      _id: 8,
      content: "HĂ£y nháº­p vĂ o Ä‘Ă¡p Ă¡n Ä‘Ăºng",
      answers: [
        {
          _id: "8",
          exact: null,
          content: "ÄĂ¡p Ă¡n 8",
          STT: null
        }
      ]
    }
  ];
  QuestionMultipleChoice = this.QuestionList.filter(item=>item.questionType===1)
  QuestionItem = this.QuestionList.filter(item=>item.questionType===2)
  AnswerList = [];
  tinhDiem:number=0
  hienThiKetQua:boolean=false;

  constructor() { }

  ngOnInit() {
    
  }
  handleSendAnser(value){
    console.log(value);
    if(this.AnswerList!==null){
      const index = this.AnswerList.findIndex(item=> item.QuestionId===value.QuestionId)
      if(index===-1){
        this.AnswerList.push(value)
      }
     else{
       this.AnswerList.splice(index,1)
       this.AnswerList.push(value)
     }
    }else{
      this.AnswerList.push(value)
    }
    
    console.log(this.AnswerList)
  }
 
  handleSubmit(){
   for(let i = 0;i<(this.AnswerList).length;i++){
     console.log(this.AnswerList[i].answer.exact)
     if(this.AnswerList[i].answer.exact===true){
       this.tinhDiem+=1
     }
   }
   this.hienThiKetQua=true
   alert('ban dat '+this.tinhDiem+" diem")
    console.log(this.tinhDiem)
  }
}
