import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/helpers/alert.service';
import { PhysicalInfo } from 'src/app/models/user/physical-info/pysical-info.model';
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
  illness: boolean = false;
  allergy: boolean = false;
  disabled: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private entityService: HttpEntityRepositoryService<User>, private entityService2: HttpEntityRepositoryService<PhysicalInfo>, private alertService: AlertService) { }

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
      if (this.surveyForm.value.emailAddress != "") {
        usr.data.emailAddress = this.surveyForm.value.emailAddress;
      }
      if (this.surveyForm.value.birthDate != "") {
        usr.data.birthDate = this.surveyForm.value.birthDate;
      }
      if (this.surveyForm.value.firstName != "") {
        usr.data.firstName = this.surveyForm.value.firstName;
      }
      if (this.surveyForm.value.lastName != "") {
        usr.data.lastName = this.surveyForm.value.lastName;
      }
      if (this.surveyForm.value.phoneNumber != "") {
        usr.data.phone = this.surveyForm.value.phoneNumber;
      }

      this.entityService.update("/User/Update", usr.data).subscribe(data => {
        var Data: any = data;
        if (!Data.success) {
          this.alertService.openSnackBar(Data.success, Data.message);
          return;
        }
        this.alertService.openSnackBar(Data.success, "success");
      }, err => { this.alertService.openSnackBar(false, "unsuccess"); })



      this.entityService2.get("/PhysicalInfo/Get?id=", usr.data.physicalInfoId).subscribe(phy => {
        var usrPhy: any = phy;
        if (this.surveyForm.value.height != "") {
          usrPhy.data.height = this.surveyForm.value.height;
        }
        if (this.surveyForm.value.weight != "") {
          usrPhy.data.weight = this.surveyForm.value.weight;
        }
        this.entityService.update("/PhysicalInfo/Update", usrPhy.data).subscribe(data => {
          var Data: any = data;
          if (!Data.success) {
            this.alertService.openSnackBar(Data.success, Data.message);
            return;
          }
          this.alertService.openSnackBar(Data.success, "success");
        }, err => { this.alertService.openSnackBar(false, "unsuccess"); })
      })
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
