import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  color = 'primary';
  formGroup!: FormGroup;
  post: any = '';


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'remember': [null],
    });
  }

  onSubmit(post) {
    this.post = post;
  }

}
