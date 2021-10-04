import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/helpers/alert.service";
import { IllnessDetail } from "src/app/models/user/health-info/illness-detail.model";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
    selector: 'app-add-illness',
    templateUrl: './add-illness.component.html',
    styleUrls: ['./add-illness.component.css'],
})
export class AddIllness {
    illnessForm!: FormGroup;
    constructor(private formBuilder: FormBuilder, private entityService: HttpEntityRepositoryService<IllnessDetail>, private alertService: AlertService) { 
        this.illnessForm = this.formBuilder.group({
            illnessName: new FormControl('', [Validators.required])
          });
    }

    addIllness() { 
      if (this.illnessForm.invalid) {
        this.alertService.openSnackBar(false," ");
        return;
      }
    }
}