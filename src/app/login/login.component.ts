import { Component} from '@angular/core';
import {clickResponse} from "../quiz/submitModule";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements clickResponse  {

  constructor(private router: Router) { }

  username;
  password;

  submit():void
    {
        console.log("outloop");
        //Write the code to perform the validation and accordingly navigate to QuizPage or 
        //render validation error messages.

        if(this.username == "admin" && this.password == "admin"){
            console.log("inloop");
            this.router.navigate(['/app-quiz']);
        } else {
            this.router.navigate(['/app-home']);
        }
    }

    
}

namespace objectCreate
{
    export var loginObject= new LoginComponent(null);
}

function invokeSubmit()
{
    objectCreate.loginObject.submit();
}