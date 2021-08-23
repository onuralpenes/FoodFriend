import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
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
      'name': [null, Validators.required],
      'surname': [null, Validators.required],
      'email': [null, Validators.required],
      'phoneNo': [null, Validators.required],
      'password': [null, Validators.required],
      'passwordConf': [null, Validators.required],
      'birthdate': [null, Validators.required],
      'tos': [null, Validators.required],
      'priv': [null, Validators.required],
    });
  }

  onSubmit(post) {
    this.post = post;
  }
}

