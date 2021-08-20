import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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




@Component({
  selector: 'app-survey-modal',
  templateUrl: './survey-modal.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyModal {
  constructor(public modal: MatDialog) { }

  openModal() {
    const modalRef = this.modal.open(SurveyComponent);

    modalRef.afterClosed().subscribe(result => {
      console.log(`Modal result: ${result}`);
    });
  }
}