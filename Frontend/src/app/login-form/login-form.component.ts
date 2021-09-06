import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../modules/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  color = 'primary';
  loginForm!: FormGroup;
  submitted = false; 


  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }
  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      // remember: new FormControl(''),
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;

    }

   this.authService.login(this.loginForm.value);

    alert(JSON.stringify(this.loginForm.value));
  }
}
