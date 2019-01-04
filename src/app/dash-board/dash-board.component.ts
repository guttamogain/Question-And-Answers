import { Component, OnInit } from '@angular/core';
import { TopicDetails } from '../qna.model';
import { Router, ActivatedRoute } from '@angular/router';
import { QnaService } from '../qna-service/qna.service';
import { QnaUtil } from '../qna.util';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  qna: TopicDetails[];
  userId: number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private qnaService: QnaService,
    private qnaUtil: QnaUtil) { }

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.qna = this.qnaUtil.getTopics();
  }

  viewTopicDetails(topic: TopicDetails): void {
    topic.userId = this.userId;
    this.qnaService.postTopic(topic).subscribe(response => {
      this.router.navigateByUrl('topicdetails/' + this.userId + '/' + topic.topicNumber);
    });
  }

  onLogOut(): void {
    this.router.navigateByUrl('login');
  }
}
