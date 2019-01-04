import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { appRoutes } from './qna.route';
import { QnaService } from './qna-service/qna.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { QnaUtil } from './qna.util';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    DashBoardComponent,
    TopicDetailsComponent,
    QuestionDetailsComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RouterModule,QnaService,QnaUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
