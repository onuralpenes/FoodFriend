import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/models/user/user-info/user-info.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { SurveyComponent } from './survey/survey.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Observable<UserInfo>;

  weight = 85;
  height = 181;
  age = 21;
  birthdate = new Date(1999,6,2);
  userName = "Onuralp Enes Öz";
  email = "oz.onuralp@gmail.com";
  phone = "555-555-5555";
  dummy = "dummy";
  gender = "male";
  genderless = false;
  male = false;
  female = false;
  

  illnessInfo =
    {
      "hasIllness": true,

      "illnesses": [
        {
          "name": "Hastalık1",
          "exp": "bos"
        },
        {
          "name": "Hastalık2",
          "exp": "bos"
        }
      ]
    }

  allergy = {
    "hasAllergy":true,
    "allergies": [
      {
        "name": "Alerji1",
        "exp": "bos"
      }, {
        "name": "Alerji2",
        "exp": "bos"
      }, {
        "name": "Alerji3",
        "exp": "bos"
      }, {
        "name": "Alerji4",
        "exp": "bos"
      },
    ]
  }

  constructor(public modal: MatDialog, entityService: HttpEntityRepositoryService<UserInfo>, authService: AuthService){
    this.user = entityService.get("/User/GetUserInfo?userId=", authService.CurrentUserId);
    // this.userName = this.user.firstName + " " + this.user.lastName
    // this.email = this.user.emailAddress
    // this.phone = this.user.phone
    // this.birthdate = this.user.birthDate
    this.age = Math.floor(((Math.abs(Date.now() - this.birthdate.getTime())) / (1000 * 3600 * 24))/365.25);
    // this.height = this.user.physicalInfo.height
    // this.weight = this.user.physicalInfo.weight
  }

  editProfile(){
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
