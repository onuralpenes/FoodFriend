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
  constructor(private privateLayout: PrivateLayoutComponent,private userRolesService: UserRolesService, authService: AuthService, private alertService: AlertService, entityService: HttpEntityRepositoryService<User>) {
    this.role = this.userRolesService.getRoles();
    console.log(this.role);
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
