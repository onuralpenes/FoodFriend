import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  color = 'primary';
  loginForm!: FormGroup;
  submitted = false; 

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;
    let httpOptions = {
      headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
      })
  };
  console.log(JSON.stringify(this.loginForm.value))

    this.http.post("http://foodfriend.ardsistem.com.tr/Auth/Login", JSON.stringify(this.loginForm.value), httpOptions)
    .subscribe( (data)=>{
      console.log(data);
    })
    if (this.loginForm.invalid) {
      return;

    }
    alert(JSON.stringify(this.loginForm.value));
  }
}
