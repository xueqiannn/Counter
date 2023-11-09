import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  number:number = 0
  currentClass = {
    "background-color": "red"
  }

  get isShowIncreaseButton(){
    return this.number<=10;
  }

  get isShowDecreseButton(){
    return this.number>0;
  }

  get textBackgroundColor(){
    if(this.number>10){
      return 'red'
    }else if(this.number<0){
      return 'green'
    }else{
      return ''
    }
  }
  onIncrease(){
    this.number++
  }

  onDecrease(){
    this.number--
  }

}
