import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QnaService } from '../qna-service/qna.service';
import { User } from '../qna.model';
import { QnaUtil } from '../qna.util';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  loginForm: FormGroup;
  user: User;
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private qnaService: QnaService,
    private qnaUtil: QnaUtil) {
    this.loginForm = this.getLoginFormDetails();
  }

  get f(): Object {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.user = Object.assign({}, this.loginForm.value);
      this.qnaService.loginUser(this.user).subscribe(response => {
        let res = JSON.parse(response._body);
        if (this.isUserValid(res.token)) {
          this.navigateToDashBoard();
        }
      }, error => {
        alert('Log In Failed. Please try again...!');
      });
    }
  }

  private getLoginFormDetails(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // this.getFormControl(Validators.required, Validators.email),
      password: this.getFormControl(Validators.required)
    });
  }

  private getFormControl(...ValidatorFn: ValidatorFn[]): FormControl {
    return new FormControl('', Validators.compose(ValidatorFn));
  }

  private navigateToDashBoard(): void {
    alert('Login Success');
    this.router.navigateByUrl('dashboard/' + this.qnaUtil.getUserId());
  }

  private isUserValid(token): boolean {
    this.qnaUtil.setToken(token);
    return !this.qnaUtil.isTokenExpired();
  }




















  // isEmailValid: boolean = true;
  // isEmailMissing: boolean = false;
  // isPasswordMissing: boolean = false;
  // user: User = {};
  // userId: number;
  // emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // constructor(private router: Router,
  //   private qnaService: QnaService,
  //   private qnaUtil: QnaUtil) { }

  // ngOnInit() { }

  // validate(email: string, password: string): void {
  //   if (this.validateEmail(email) && this.validatePassword(password)) {
  //     this.user = {
  //       email: email,
  //       password: password
  //     };
  //     this.qnaService.loginUser(this.user).subscribe(response => {
  //       let res = JSON.parse(response._body);
  //       if (this.isUserValid(res.token)) {
  //         this.navigateToDashBoard();
  //       }
  //     });
  //   }
  // }

  // private validateEmail(email: string): boolean {
  //   if (email) {
  //     this.isEmailMissing = false;
  //     if (!email.match(this.emailRegex)) {
  //       this.isEmailValid = false;
  //     } else {
  //       this.isEmailValid = true;
  //     }
  //   } else {
  //     this.isEmailMissing = true;
  //   }
  //   return !this.isEmailMissing && this.isEmailValid;
  // }

  // private validatePassword(password: string): boolean {
  //   if (password) {
  //     this.isPasswordMissing = false;
  //   } else {
  //     this.isPasswordMissing = true;
  //   }
  //   return !this.isPasswordMissing;
  // }

  // private navigateToDashBoard(): void {
  //   this.router.navigateByUrl('dashboard/' + this.qnaUtil.getUserId());
  // }

  // private isUserValid(token): boolean {
  //   this.qnaUtil.setToken(token);
  //   return !this.qnaUtil.isTokenExpired();
  // }
}
