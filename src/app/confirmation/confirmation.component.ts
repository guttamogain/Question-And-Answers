import { Component, OnInit } from '@angular/core';
import { MessageModel } from '../qna.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  message: MessageModel;
  constructor() { }

  ngOnInit() {
    this.message = {
      showMessage: false,
      type: 'error',
      text: 'success'
    };
  }
  setMessage(message: MessageModel): void {
    this.message = message;
  }
}
