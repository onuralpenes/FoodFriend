import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/helpers/alert.service';
import { HealthInfo } from 'src/app/models/user/health-info.model';
import { PhysicalInfo } from 'src/app/models/user/pysical-info.model';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { SurveyComponent } from './survey/survey.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;

  weight!: number;
  height!: number;
  age: number;
  birthdate: Date = new Date();
  userName!: string;
  email!: string;
  phone!: string;
  healthId!: number;
  physicalId!: number;
  dummy = "dummy";
  gender = "male";
  genderless = false;
  male = false;
  female = false;


  illnessInfo =
    {
      "hasIllness": true,

      "illnessList": [
        {
          "illnessName": "Hastalık1",
          "illnessType": 0
        },
        {
          "illnessName": "Hastalık2",
          "illnessType": 0
        }
      ]
    }

  allergyInfo = {
    "hasAllergy": true,
    "allergyList": [
      {
        "allergyName": "Alerji1",
        "allergyType": 0
      }, {
        "allergyName": "Alerji2",
        "allergyType": 0
      }, {
        "allergyName": "Alerji3",
        "allergyType": 0
      }, {
        "allergyName": "Alerji4",
        "allergyType": 0
      },
    ]
  }

  pregnantInfo = {
    "isPregnant": false,
    "pregnantList": [
      {
        "pregnantStartDate": new Date(),
        "pregnantEndDate": new Date()
      }
    ]
  }

  disabledInfo = {
    "isDisabled": false,
    "disabledList": [
      {
        "disabledType": "Disabled1",
        "disabledRatio": 0
      }
    ]
  }

  constructor(public modal: MatDialog, authService: AuthService, private alertService: AlertService,
    entityService: HttpEntityRepositoryService<User>, entityServiceH: HttpEntityRepositoryService<HealthInfo>, entityServiceP: HttpEntityRepositoryService<PhysicalInfo>) {
    entityService.get("/User/Get?userId=", authService.CurrentUserId).subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }

      this.userName = Data.data.firstName + " " + Data.data.lastName;
      this.email = Data.data.emailAddress;
      this.phone = Data.data.phone;
      this.birthdate = Data.data.birthDate;
      this.healthId = Data.data.healthInfoId;
      this.physicalId = Data.data.physicalInfoId;

      entityServiceP.get("/PhysicalInfo/Get?id=", this.physicalId).subscribe(data => {
        var Data: any = data;
        if (!Data.success) {
          this.alertService.openSnackBar(Data.success, Data.message);
          return;
        }

        this.height = Data.data.height;
        this.weight = Data.data.weight;
        this.disabledInfo.isDisabled = Data.data.disabledStatus;
      });

      entityServiceH.get("/HealthInfo/Get?id=", this.healthId).subscribe(data => {

        var Data: any = data;
        if (!Data.success) {
          this.alertService.openSnackBar(Data.success, Data.message);
          return;
        }

        this.illnessInfo.hasIllness = Data.data.hasHealthProblem;
        this.allergyInfo.hasAllergy = Data.data.hasAllergy;
        this.pregnantInfo.isPregnant = Data.data.isPregnant;
      });

    });
    this.age = Math.floor(((Math.abs(Date.now() - this.birthdate.getTime())) / (1000 * 3600 * 24)) / 365.25);
  }

  editProfile() {
    this.modal.open(SurveyComponent);
  }

  ngOnInit(): void {

    if (this.gender == "male") {
      this.male = true;
      this.female = false;
      this.genderless = false;
    } else {
      this.male = false;
      this.female = true;
      this.genderless = false;
    }
  }

}
