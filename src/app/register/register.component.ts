import { Component, OnInit, ViewChild } from '@angular/core';
import { QnaService } from '../qna-service/qna.service';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { MessageModel, User } from '../qna.model';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  user: User;
  formSubmitted: boolean = false;
  alphaRegex: RegExp = /^[a-zA-Z]+$/;
  confirmPassword: string = '';
  customPasswordValidationFunction: () => ValidatorFn;

  constructor(private formBuilder: FormBuilder,
    private service: QnaService,
    private router: Router) {
    this.registerForm = this.getRegisterFormDetails();
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      let a = this.service.registerUser(this.user).subscribe(response => {
        if (response.status === 201) {
          this.navigateToLogin();
        }
      }, error => {
        alert('Register Failed... Please try again...!');
      });
    }
  }

  onConfirmPasswordChange(): void {
    this.f.password.setValue(this.f.password.value);
  }

  private navigateToLogin(): void {
    alert('Register Success');
    this.router.navigateByUrl('login');
  }

  private getRegisterFormDetails(): FormGroup {
    return this.formBuilder.group({
      firstName: this.getFormControl(Validators.required, this.alphaOnlyValidateFunction()),
      lastName: this.getFormControl(Validators.required, this.alphaOnlyValidateFunction()),
      email: this.getFormControl(Validators.required, Validators.email),
      password: this.getFormControl(Validators.required, this.getCustomPasswordValidation())
    });
  }

  private getCustomPasswordValidation(): ValidatorFn {
    this.customPasswordValidationFunction = (): ValidatorFn => {
      return (control: AbstractControl): ValidationErrors | null => {
        let inValid = control.value !== this.confirmPassword;
        return inValid ? { 'password': inValid } : null;
      };
    };
    return this.customPasswordValidationFunction();
  }

  private alphaOnlyValidateFunction(): ValidatorFn {
    return Validators.pattern(this.alphaRegex);
  }

  private getFormControl(...ValidatorFn: ValidatorFn[]): FormControl {
    return new FormControl('', Validators.compose(ValidatorFn));
  }




  // @ViewChild(ConfirmationComponent) confirmation: ConfirmationComponent;
  // isEmailValid: boolean = true;
  // isEmailMissing: boolean = false;
  // isPasswordMissing: boolean = false;
  // isFirstNameMissing: boolean = false;
  // isLastNameMissing: boolean = false;
  // isConfirmPasswordMissing: boolean = false;
  // user: User = {};
  // userId: number = 1001;
  // emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // constructor(private service: QnaService, private router: Router) { }

  // ngOnInit() {
  // }

  // register(firstName, lastName, email, password, confirmPassword): void {
  //   if (this.isAllFieldsFilled(firstName, lastName, email, password, confirmPassword)) {
  //     this.user = {
  //       password: password,
  //       firstName: firstName,
  //       lastName: lastName,
  //       email: email
  //     };
  //     let a = this.service.registerUser(this.user).subscribe(response => {
  //       if (response.status === 201) {
  //         this.router.navigateByUrl('login');
  //       }
  //     }, error => {
  //       this.processError(error);
  //     });
  //   }
  // }

  // private isAllFieldsFilled(firstName, lastName, email, password, confirmPassword): boolean {
  //   this.isFirstNameMissing = firstName ? false : true;
  //   this.isLastNameMissing = lastName ? false : true;
  //   this.isEmailMissing = email ? false : true;
  //   this.isPasswordMissing = password ? false : true;
  //   this.isConfirmPasswordMissing = confirmPassword ? false : true;
  //   return !this.isFirstNameMissing
  //     && !this.isLastNameMissing
  //     && !this.isEmailMissing
  //     && !this.isPasswordMissing
  //     && !this.isConfirmPasswordMissing;
  // }

  // private processError(error): void {
  //   let errorMessage: MessageModel = {
  //     showMessage: true,
  //     type: 'error',
  //     text: error._body
  //   };
  //   this.confirmation.setMessage(errorMessage);
  // }
}
