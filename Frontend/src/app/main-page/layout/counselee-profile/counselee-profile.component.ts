import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counselee-profile',
  templateUrl: './counselee-profile.component.html',
  styleUrls: ['./counselee-profile.component.css']
})
export class CounseleeProfileComponent implements OnInit {
  userName = "Yiğit Fatih Kılıç"; //tıklanılan kullanıcın adı olacak
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
  constructor() {

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
