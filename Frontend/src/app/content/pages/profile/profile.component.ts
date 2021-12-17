import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

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
  public editProfileTemp: boolean = false;
  dummy = "dummy";
  gender = "male";
  genderless = false;
  male = false;
  female = false;

  illnessList!: IllnessList[];
  allergyList!: AllergyList[];
  pregnantList!: PregnantList[];
  disabledList!: DisabledList[];

  constructor(authService: AuthService, private messageService: MessageService, entityService: HttpEntityRepositoryService<User>) {

    entityService.get("/User/Get?userId=", authService.CurrentUserId).subscribe(data => {
      console.log(data)
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
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

      entityService.get("/PhysicalInfo/Get?id=", this.physicalId).subscribe(data => {
        var DataPh: any = data;
        if (!DataPh.success) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: DataPh.message });
          return;
        }
        this.height = DataPh.data.height;
        this.weight = DataPh.data.weight;
        this.isDisabled = DataPh.data.disabledStatus;
        this.disabledList = DataPh.data.disabledDetails;
      });

      entityService.get("/HealthInfo/Get?id=", this.healthId).subscribe(data => {

        var DataH: any = data;
        if (!DataH.success) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: DataH.message });
          return;
        }

        this.hasIllness = DataH.data.hasHealthProblem;
        this.hasAllergy = DataH.data.hasAllergy;
        this.isPregnant = DataH.data.isPregnant;
        this.illnessList = DataH.data.illnessDetails;
        this.allergyList = DataH.data.allergyDetails;
        this.pregnantList = DataH.data.pregnantDetails;
      });
    });
  }

  editProfile() {
    this.editProfileTemp = true;
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
