import { Component } from '@angular/core';
import {clickResponse} from "../quiz/submitModule";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})



export class QuizComponent implements clickResponse {

  constructor() { }

  ngOnInit() {
  }
  q1 = [];
  score:number=0;
  count;

    submit() :void
    {
    //Write the code to calculate the score based on the selected radio button.
    for(var i=0; i < this.q1[0].length; i++) {
    console.log("q1", this.q1[0].value);
    }
    
    this.count = this.q1.length;
    console.log("count", this.count);
    this.score = this.count * 10;
    console.log("score", this.score);
    
    let res=`<span class="alert alert-success">Your score is ${this.score} !   <a class="btn btn-success" href="/app-suggestion">Click here to Proceed</a> </span>`;

    localStorage.performanceDetails=performance[this.score];
    console.log("local", localStorage.performanceDetails);
 
    document.getElementById("result").innerHTML=res;
  

    }
}
enum performance{"Verybad"=10,"Needs Improvement"=20,"Good"=30,"Very Good"=40,"Excellent"=50}
function invokeSubmit()
{
    let pageObject=new QuizComponent();
    pageObject.submit();
}
