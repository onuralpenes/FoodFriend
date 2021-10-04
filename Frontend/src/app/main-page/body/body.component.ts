import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AlertService } from 'src/app/helpers/alert.service';
import { User } from 'src/app/models/user/user.model';
import { PrivateLayoutComponent } from 'src/app/modules/private/private-layout.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output() pin: EventEmitter<any> = new EventEmitter();
  @Output() pName: EventEmitter<any> = new EventEmitter();
  @Input() opened;
  @Input() pinButton = false;

  name!: string;
  surname !: string;
  constructor(private priv: PrivateLayoutComponent, authService: AuthService, private alertService: AlertService, entityService: HttpEntityRepositoryService<User>) { 
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
  
  pinSidebar() {
    this.pinButton = !this.pinButton;
    this.pin.emit(this.pinButton);
  }

  changeLang(langCode: string) {
    this.priv.changeLang(langCode);
  }

}
