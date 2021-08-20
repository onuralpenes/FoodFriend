import { Component, Directive, ElementRef, OnInit } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder) { } 
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'height': [null, Validators.required],
      'weight': [null, Validators.required],
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

@Directive({
  selector: 'input[type=number]'
})

export class TestDirective {
  constructor(private elementRef: ElementRef) {

  }
  ngOnInit() {
    console.log('type=number', this.elementRef.nativeElement);
  }
}