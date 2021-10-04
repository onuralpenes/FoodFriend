import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/helpers/alert.service";
import { DisabledDetail } from "src/app/models/user/physical-info/disabled-detail.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-add-disability',
  templateUrl: './add-disability.component.html',
  styleUrls: ['./add-disability.component.css'],
})
export class AddDisability {
  disabilityForm!: FormGroup;
  newDisability!: DisabledDetail;
  constructor(private formBuilder: FormBuilder, private alertService: AlertService,
    private entityService: HttpEntityRepositoryService<DisabledDetail>, private authService: AuthService) {
    this.disabilityForm = this.formBuilder.group({
      disabledDescription: new FormControl('', [Validators.required]),
      disabledRatio: new FormControl('', [Validators.required])
    });
  }

  addDisability() {
    if (this.disabilityForm.invalid) {
      this.alertService.openSnackBar(false, " ");
      return;
    }
    
    this.newDisability.disabledDescription = this.disabilityForm.value.disabledDescription;
    this.newDisability.disabledRatio = this.disabilityForm.value.disabledRatio;

    this.entityService.get("/User/Get?userId=", this.authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      this.newDisability.physicalInfoId = Data.data.physicalInfoId;
    });
  }
}