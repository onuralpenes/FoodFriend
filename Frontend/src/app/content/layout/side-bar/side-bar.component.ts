import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AlertService } from 'src/app/helpers/alert.service';
import { User } from 'src/app/models/user/user.model';
import { PrivateLayoutComponent } from 'src/app/modules/private/private-layout.component';
import { AuthService } from 'src/app/services/auth.service';
import { UserRolesService } from 'src/app/services/can-active.guard';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Input() opened;
  role !: string [];
  name!: string;
  surname !: string;
  includesAdmin : boolean = false;
  includesPatient : boolean = false;
  includesProf : boolean = false;
  constructor(private privateLayout: PrivateLayoutComponent,private userRolesService: UserRolesService, authService: AuthService, private alertService: AlertService, entityService: HttpEntityRepositoryService<User>) {
    this.role = this.userRolesService.getRoles();
    for(let i = 0; i<this.role.length;i++){
      if(this.role[i] == "Patient"){
        this.includesPatient = true;
      }
      if(this.role[i] == "Professionnel"){
        this.includesProf = true;
      }
      if(this.role[i] == "Admin"){
        this.includesAdmin = true;
      }
    }
    entityService.get("/User/Get?userId=", authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }

      this.name = Data.data.firstName;
      this.surname = Data.data.lastName;
    });
  }

  changeLang(langCode: string) {
    this.privateLayout.changeLang(langCode);
  }

}
