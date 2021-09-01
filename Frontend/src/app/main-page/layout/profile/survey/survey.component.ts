import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blood, BLOOD_DATA, Select, SELECT_DATA } from './data';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {


  formGroup!: FormGroup;
  post: any = '';

  bloods: Blood[] = BLOOD_DATA;
  selects: Select[] = SELECT_DATA;

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'name': [null, Validators.required],
      'surname': [null, Validators.required],
      'email': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'height': [null, Validators.required],
      'weight': [null, Validators.required],
      'birthdate': [null, Validators.required],
      'bloodGroup': [null, Validators.required],
      'smoking': [null, Validators.required],
      'alcohol': [null, Validators.required],
      'exercise': [null, Validators.required],

    });
  }

  onSubmit(post) {
    this.post = post;
  }
}
