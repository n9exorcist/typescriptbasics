import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
  }

  private manager: string = "Clark Kent";
  
  intro() {
    const founders: Array<string> = [" Bruce Wayne ", " Barry Allen ", " Diana Prince "];
    let founderNames: string = "";
    let fun = (): any => {
      
      
      // Write the code to get founders array and return in a founderNames variable
        founders.forEach(element => {
        founderNames = element; 
        console.log("element[0]", element);
      });
      return founderNames;
    }

    let content = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Infotech Quiz Portal or  better known as IQP is a fully operational web application for people, who are looking for a way to test their knowledge on different programming languages. It is over a decade old and the core members are
    ${fun()}. The Admin of this awesome endeavor is ${founders[0]} and the web manager is ${this.manager}.`;
  
    document.getElementById("intro").innerHTML = content;

  };

  //introFun will be called from HTML-page onload
introFun() {
  //Write the code to instantiate the class and invoke the intro function
  var obj = new HomeComponent();
  obj.intro();
  console.log("obj", obj);
}
 

}

