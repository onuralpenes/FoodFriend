import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/helpers/alert.service';
import { User } from 'src/app/models/user/user.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { AllergyList, DisabledList, IllnessList, PregnantList } from '../profile/profile.component';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
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
  gender = "male";
  genderless = false;
  male = false;
  female = false;

  illnessList!: IllnessList[];
  allergyList!: AllergyList[];
  pregnantList!: PregnantList[];
  disabledList!: DisabledList[];

  constructor(private route: ActivatedRoute, private alertService: AlertService, entityService: HttpEntityRepositoryService<User>) {

    this.route.paramMap.subscribe(param => {
      let id = Number(param.get('id'));

      entityService.get("/User/Get?userId=", id).subscribe(data => {

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

        entityService.get("/PhysicalInfo/Get?id=", this.physicalId).subscribe(data => {
          var DataPh: any = data;
          if (!DataPh.success) {
            this.alertService.openSnackBar(DataPh.success, DataPh.message);
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
            this.alertService.openSnackBar(DataH.success, DataH.message);
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
    })
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
