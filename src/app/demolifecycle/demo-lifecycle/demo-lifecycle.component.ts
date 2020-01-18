import { Component, OnInit, AfterViewInit, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle',
  templateUrl: './demo-lifecycle.component.html',
  styleUrls: ['./demo-lifecycle.component.scss']
})
export class DemoLifecycleComponent implements OnInit,AfterViewInit,
OnDestroy ,DoCheck{
  name:string="hieu";
  constructor() { 
    console.log("constructor")
  }

  ngOnInit() {//didmount ben react
    console.log("ngoninit0")
    setInterval(()=>{
      this.name+="n";
    })
  }
  ngAfterViewInit(){
    console.log("AfterViewInit")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
  ngDoCheck(){
    console.log("stChange")//ben con co ngonChange: su thay doi cua @input 
  }
}
