import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/models/user/user-info/user-info.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { QuickBranchService } from 'src/app/services/quick-branch.service';
import { SurveyComponent } from './survey/survey.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Observable<UserInfo>;

  weight = 85
  height = 181
  age = 21
  userName = "Onuralp Enes Öz";
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
  //public LOGO = require("../../../modules/images/yesil.jpg");
  constructor(public modal: MatDialog, private entityService: HttpEntityRepositoryService<UserInfo>, private quickBranchService: QuickBranchService){
    this.user = entityService.get("/User/GetUserInfo", quickBranchService.getId());
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
