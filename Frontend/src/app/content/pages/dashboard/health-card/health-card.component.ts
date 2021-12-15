import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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

  constructor( authService: AuthService, private router: Router,  entityService: HttpEntityRepositoryService<User>, private messageService: MessageService) { 
    entityService.get("/User/Get?userId=", authService.CurrentUserId).subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      const convertAge = new Date(Data.data.birthDate);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      entityService.get("/PhysicalInfo/Get?id=", Data.data.physicalInfoId).subscribe(data => {
        var DataPh: any = data;
        if (!DataPh.success) {
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
