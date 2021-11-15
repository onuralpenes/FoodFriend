import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from 'src/app/helpers/alert.service';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { AddAllergy } from './add-allergy/add-allergy.component';
import { AddDisability } from './add-disable/add-disability.component';
import { AddIllness } from './add-illness/add-illness.component';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  surveyForm!: FormGroup;
  post: any = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private modal: MatDialog, private entityService: HttpEntityRepositoryService<User>, private alertService: AlertService) { }

  ngOnInit() {
    this.surveyForm = this.formBuilder.group({
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'emailAddress': new FormControl('', [Validators.required]),
      'phoneNumber': new FormControl('', [Validators.required]),
      'height': new FormControl('', [Validators.required]),
      'weight': new FormControl('', [Validators.required]),
      'birthDate': new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    let updateData: any = {
      userId: this.authService.CurrentUserId,
      emailAddress: this.surveyForm.value.emailAddress,
      birthDate: this.surveyForm.value.birthDate,
      firstName: this.surveyForm.value.firstName,
      lastName: this.surveyForm.value.lastName,
      phone: this.surveyForm.value.phoneNumber
    }
    this.entityService.update("/User/Update", updateData).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
    });
  }

  addIllness() {
    this.modal.open(AddIllness);
  }

  addAllergy() {
    this.modal.open(AddAllergy);
  }

  addDisability() {
    this.modal.open(AddDisability);
  }
}
