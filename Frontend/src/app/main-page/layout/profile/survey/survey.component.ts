import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Blood, BLOOD_DATA, Select, SELECT_DATA } from './data';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {


  surveyForm!: FormGroup;
  post: any = '';

  bloods: Blood[] = BLOOD_DATA;
  selects: Select[] = SELECT_DATA;

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() { 
    this.surveyForm = this.formBuilder.group({
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'emailAddress': new FormControl('', [Validators.required]),
      'phoneNumber': new FormControl('', [Validators.required]),
      'height': new FormControl('', [Validators.required]),
      'weight': new FormControl('', [Validators.required]),
      'birthDate': new FormControl('', [Validators.required]),
      'bloodGroup': new FormControl('', [Validators.required]),
      'smoking': new FormControl('', [Validators.required]),
      'alcohol': new FormControl('', [Validators.required]),
      'exercise': new FormControl('', [Validators.required]),

    });
  }
  
  onSubmit(post) {
    this.post = post;
  }
}
