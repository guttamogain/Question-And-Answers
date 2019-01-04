import { Component, OnInit } from '@angular/core';
import { QuestionDetails, TopicDetails } from '../qna.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QnaService } from '../qna-service/qna.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  userId: number;
  tId: number;
  topicModel: TopicDetails = {};
  questions: QuestionDetails[] = [];
  questionText: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private qnaService: QnaService) { }

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.tId = Number(this.route.snapshot.paramMap.get('tId'));
    this.topicModel.topicId = this.tId;
    this.topicModel.userId = this.userId;
    this.qnaService.getQuestions(this.topicModel).subscribe(response => {
      let questions: QuestionDetails[] = JSON.parse(response._body);
      this.questions = questions.reverse();
    });
  }

  viewComments(question: QuestionDetails): void {
    this.router.navigateByUrl('questiondetails/' + this.userId + '/' + this.tId + '/' + question.questionId);
  }

  onAddQuestionClicked(question: string): void {
    this.questionText = question;
    this.topicModel = {
      "questions": [{
        "question": question
      }],
      "topicNumber": this.tId,
      "userId": this.userId
    };
    this.qnaService.postQuestion(this.topicModel).subscribe(response => {
      alert('Question Posted');
      this.ngOnInit();
    }, error => {
      console.log("erorr====>>>>>>", error);
    });
  }

  delete(question: QuestionDetails): void {
    this.qnaService.deleteQuestion(question.questionId).subscribe(response => {
      alert('Question Deleted');
      this.ngOnInit();
    });
  }

  isQuestionsAvailable(): boolean {
    return this.questions && this.questions.length != 0;
  }

  navigateToTopics(): void {
    this.router.navigateByUrl('dashboard/' + this.userId);
  }

  onLogOut(): void {
    this.router.navigateByUrl('login');
  }
}
