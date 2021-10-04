import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/helpers/alert.service';
import { AllergyDetail } from 'src/app/models/user/health-info/allergy-detail.model';
import { HealthInfo } from 'src/app/models/user/health-info/health-info.model';
import { IllnessDetail } from 'src/app/models/user/health-info/illness-detail.model';
import { PregnantDetail } from 'src/app/models/user/health-info/pregnant-detail.model';
import { DisabledDetail } from 'src/app/models/user/physical-info/disabled-detail.model';
import { PhysicalInfo } from 'src/app/models/user/physical-info/pysical-info.model';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { SurveyComponent } from './survey/survey.component';

export interface IllnessList {
  illnessName: string;
}

export interface AllergyList {
  allergyName: string;
}

export interface PregnantList {
  pregnantStartDate: Date;
  pregnantEndDate: Date;
}

export interface DisabledList {
  disabledDescription: string;
  disabledRatio: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;

  weight!: number;
  height!: number;
  age!: number;
  birthdate: Date = new Date();
  userName!: string;
  email!: string;
  phone!: string;
  healthId!: number;
  physicalId!: number;
  hasIllness!: boolean;
  hasAllergy!: boolean;
  isPregnant!: boolean;
  isDisabled!: boolean;
  dummy = "dummy";
  gender = "male";
  genderless = false;
  male = false;
  female = false;

  illnessList!: IllnessList[];
  allergyList!: AllergyList[];
  pregnantList!: PregnantList[];
  disabledList!: DisabledList[];

  constructor(public modal: MatDialog, authService: AuthService, private alertService: AlertService, entityService: HttpEntityRepositoryService<User>,
    entityServiceH: HttpEntityRepositoryService<HealthInfo>, entityServicePh: HttpEntityRepositoryService<PhysicalInfo>, entityServiceD: HttpEntityRepositoryService<DisabledDetail>,
    entityServiceI: HttpEntityRepositoryService<IllnessDetail>, entityServiceA: HttpEntityRepositoryService<AllergyDetail>, entityServicePr: HttpEntityRepositoryService<PregnantDetail>) {
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

      const convertAge = new Date(this.birthdate);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

      entityServicePh.get("/PhysicalInfo/Get?id=", this.physicalId).subscribe(data => {
        var DataPh: any = data;
        if (!DataPh.success) {
          this.alertService.openSnackBar(DataPh.success, DataPh.message);
          return;
        }
        this.height = DataPh.data.height;
        this.weight = DataPh.data.weight;
        this.isDisabled = DataPh.data.disabledStatus;
      });

      entityServiceH.get("/HealthInfo/Get?id=", this.healthId).subscribe(data => {

        var DataH: any = data;
        if (!DataH.success) {
          this.alertService.openSnackBar(DataH.success, DataH.message);
          return;
        }

        this.hasIllness = DataH.data.hasHealthProblem;
        this.hasAllergy = DataH.data.hasAllergy;
        this.isPregnant = Data.data.isPregnant;
      });
    });

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
