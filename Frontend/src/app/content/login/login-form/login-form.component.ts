import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  color = 'primary';
  loginForm!: FormGroup;
  forgetMail!: FormGroup;
  submitted = false;
  hidePassword = true;
  forgetPasswordTemp = false;
  approved = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private messageService: MessageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(8)]),
      remember: new FormControl(false),
    });

    this.forgetMail = this.formBuilder.group({
      emailAddress: new FormControl(this.loginForm.value.emailAddress, [Validators.required, Validators.email]),
    });
  }

  get f() { return this.loginForm.controls; }

  forgetPassword() {
    this.forgetPasswordTemp = !this.forgetPasswordTemp;
    this.approved = false;
  }

  onForget(type: string) {
    if (type == "forget") {
      if(this.forgetMail.invalid){
        return;
      }
      const email = this.forgetMail.value.emailAddress;
      //we have to send this email to backend

      this.approved = true;
    }
  }

  onSubmit(type: string) {
    if (type == "submit") {
      this.submitted = true;

      if (this.loginForm.invalid) {
        this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'Invalid login attempt.' });
        return;
      }

      this.authService.login(this.loginForm.value);
    }
  }
}
