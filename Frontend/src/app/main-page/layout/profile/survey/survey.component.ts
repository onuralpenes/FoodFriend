import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/helpers/alert.service';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  surveyForm!: FormGroup;
  post: any = '';
  illness: boolean = false;s
  allergy: boolean = false;
  disabled: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private entityService: HttpEntityRepositoryService<User>, private alertService: AlertService) { }

  ngOnInit() {
    this.surveyForm = this.formBuilder.group({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'emailAddress': new FormControl(''),
      'phoneNumber': new FormControl(''),
      'height': new FormControl(''),
      'weight': new FormControl(''),
      'birthDate': new FormControl(''),
    });
  }

  onSubmit() {
    this.entityService.get("/User/Get?userId=", this.authService.CurrentUserId).subscribe(dta => {
      var usr: any = dta;
      if (!usr.success) {
        this.alertService.openSnackBar(usr.success, usr.message);
        return;
      }
      let emailAddress;
      let birthDate;
      let firstName;
      let lastName;
      let phoneNumber;

      if (this.surveyForm.value.emailAddress == null) {
        emailAddress = usr.data.emailAddress;
      }
      else {
        emailAddress = this.surveyForm.value.emailAddress;
      }
      if (this.surveyForm.value.birthDate == null) {
        birthDate = usr.data.birthDate;
      }
      else {
        birthDate = this.surveyForm.value.birthDate;
      }
      if (this.surveyForm.value.firstName == null) {
        firstName = usr.data.firstName;
      }
      else {
        firstName = this.surveyForm.value.firstName;
      }
      if (this.surveyForm.value.lastName == null) {
        lastName = usr.data.lastName;
      }
      else {
        lastName = this.surveyForm.value.lastName;
      }
      if (this.surveyForm.value.phoneNumber == null) {
        phoneNumber = usr.data.phoneNumber;
      }
      else {
        phoneNumber = this.surveyForm.value.phoneNumber;
      }
      let updateData: any = {
        userId: this.authService.CurrentUserId,
        emailAddress: emailAddress,
        birthDate: birthDate,
        firstName: firstName,
        lastName: lastName,
        phone: phoneNumber
      }
      this.entityService.update("/User/Update", updateData).subscribe(data => {
        var Data: any = data;
        if (!Data.success) {
          this.alertService.openSnackBar(Data.success, Data.message);
          return;
        }
        this.alertService.openSnackBar(Data.success, "success");
      }, err => { this.alertService.openSnackBar(false, "unsuccess"); })
    });
  }

  addIllness() {
    this.illness = true;
  }

  addAllergy() {
    this.allergy = true;
  }

  addDisability() {
    this.disabled = true;
  }
}
