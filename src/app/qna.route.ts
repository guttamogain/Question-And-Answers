import { Routes } from "@angular/router";
import { LogInComponent } from "./log-in/log-in.component";
import { DashBoardComponent } from "./dash-board/dash-board.component";
import { QuestionDetailsComponent } from "./question-details/question-details.component";
import { RegisterComponent } from "./register/register.component";
import { TopicDetailsComponent } from "./topic-details/topic-details.component";

export const appRoutes: Routes = [
    {path:'login', component:LogInComponent},
    {path:'dashboard/:userId', component:DashBoardComponent},
    {path:'questiondetails/:userId/:tId/:qId', component:QuestionDetailsComponent},
    {path:'register', component:RegisterComponent},
    {path:'topicdetails/:userId/:tId', component:TopicDetailsComponent}
];