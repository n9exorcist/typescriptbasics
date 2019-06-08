import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.final();
  }


  suggestionList:string[]=[];
  identification:any="Anonymous";

  final()
{
    let result=`Your performance is <span class="text-danger">
    ${localStorage.getItem('performanceDetails')}
	
	</span>, based on your scores. 
    Please do fill up the details mentioned below.`;
    localStorage.getItem('performanceDetails');
    console.log(localStorage.getItem('performanceDetails'));
    document.getElementById("performance").innerHTML=result;

}

 addSuggestion()
{
    console.log("suggestion");
    this.done(1);
   //Write the code to get the suggestion details entered in the fields of the SuggestionPage
   //and make use of the done function given below to render the appropriate informations on the screen.
}

done(...feedback:any[])
{
 
    let finalStatement=`<pre class="alert alert-success"><strong>Employee Name or Id:</strong> <span class="text-danger">${feedback[0]}</span>
<strong>Suggestions:</strong><span class="text-danger"> ${feedback[1]?feedback[1]:"None"}</span>
                        <strong>Thank You for using the app!</strong></pre`;
    document.getElementById("final").innerHTML=finalStatement;

}


}



