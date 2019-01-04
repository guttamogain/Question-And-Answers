import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comments, TopicDetails } from '../qna.model';
import { QnaService } from '../qna-service/qna.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  qId: number;
  tId: number;
  userId: number;
  comment: string;
  comments: Comments[] = [];
  topicModel: TopicDetails = {};
  constructor(private route: ActivatedRoute,
    private router: Router,
    private qnaService: QnaService) { }

  ngOnInit() {
    this.qId = Number(this.route.snapshot.paramMap.get('qId'));
    this.tId = Number(this.route.snapshot.paramMap.get('tId'));
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.topicModel.topicId = this.tId;
    this.topicModel.questions = [{
      questionId: this.qId
    }];
    this.qnaService.getComments(this.topicModel).subscribe(response => {
      let comments: Comments[] = JSON.parse(response._body);
      this.comments = comments.reverse();
    }, error => {
      console.log('error', error);
    });
  }

  onCommentButtonClick(comment): void {
    this.comment = comment;
    this.topicModel = {
      "questions": [{
        "questionId": this.qId,
        "comments": [{
          "comment": comment
        }]
      }],
      "topicNumber": this.tId,
      "userId": this.userId
    };
    this.qnaService.postComment(this.topicModel).subscribe(response => {
      alert('Comment Posted');
      this.ngOnInit();
    });
  }

  deleteComment(comment: Comments): void {
    this.qnaService.deleteComment(comment.commentId).subscribe(response => {
      alert('Comment Deleted');
      this.ngOnInit();
    });
  }

  isCommentsAvailable(): boolean {
    return this.comments && this.comments.length != 0;
  }

  navigateToQuestions(): void {
    this.router.navigateByUrl('topicdetails/' + this.userId + '/' + this.tId);
  }

  onLogOut(): void {
    this.router.navigateByUrl('login');
  }
}
