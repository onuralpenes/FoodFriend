import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/helpers/alert.service';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-health-card',
  templateUrl: './health-card.component.html',
  styleUrls: ['./health-card.component.css']
})
export class HealthCardComponent {
  weight = 85
  height = 181
  age = 21

  constructor(private authService: AuthService, private router: Router, private entityService: HttpEntityRepositoryService<User>, private alertService: AlertService) { 
    entityService.get("/User/Get?userId=", authService.CurrentUserId).subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      const convertAge = new Date(Data.data.birthDate);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      entityService.get("/PhysicalInfo/Get?id=", Data.data.physicalInfoId).subscribe(data => {
        var DataPh: any = data;
        if (!DataPh.success) {
          this.alertService.openSnackBar(DataPh.success, DataPh.message);
          return;
        }
        this.height = DataPh.data.height;
        this.weight = DataPh.data.weight;
      });
    });
  }
  
  profile(){
    this.router.navigateByUrl('/profile');
  }
}
