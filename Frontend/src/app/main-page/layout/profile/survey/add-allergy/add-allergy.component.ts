import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/helpers/alert.service";
import { AllergyDetail } from "src/app/models/user/health-info/allergy-detail.model";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
    selector: 'app-add-allergy',
    templateUrl: './add-allergy.component.html',
    styleUrls: ['./add-allergy.component.css'],
})
export class AddAllergy{
    allergyForm!: FormGroup;
    constructor(private formBuilder: FormBuilder, private entityService: HttpEntityRepositoryService<AllergyDetail>, private alertService: AlertService) { 
        this.allergyForm = this.formBuilder.group({
            allergyName: new FormControl('', [Validators.required])
          });
    }

    addAllergy() { 
      if (this.allergyForm.invalid) {
        this.alertService.openSnackBar(false," ");
        return;
      }
    }
}