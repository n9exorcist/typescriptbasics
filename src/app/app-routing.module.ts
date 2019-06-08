import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

const routes: Routes = [
  {path:'app-home', component: HomeComponent },
  {path:'app-login', component: LoginComponent },
  {path:'app-quiz', component: QuizComponent },
  {path: 'app-suggestion', component: SuggestionComponent},
  {path: '', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
