import { Component, OnInit, Output,EventEmitter } from '@angular/core';

//declare var require: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() setPageName: EventEmitter<any> = new EventEmitter()
  weight = 85
  height = 181
  age = 21
  userName = "Onuralp Enes Öz"; //tıklanılan kullanıcın adı olacak
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
  constructor() { }
  gg(){
    console.log("selam")
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
    this.setPageName.emit("Profile");
  }

}
