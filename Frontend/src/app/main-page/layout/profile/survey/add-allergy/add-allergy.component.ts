import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/helpers/alert.service";
import { AllergyDetail } from "src/app/models/user/health-info/allergy-detail.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-add-allergy',
  templateUrl: './add-allergy.component.html',
  styleUrls: ['./add-allergy.component.css'],
})
export class AddAllergy {
  allergyForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private alertService: AlertService,
    private entityService: HttpEntityRepositoryService<AllergyDetail>, private authService: AuthService) {
    this.allergyForm = this.formBuilder.group({
      allergyName: new FormControl('', [Validators.required])
    });
  }

  addAllergy() {
    if (this.allergyForm.invalid) {
      this.alertService.openSnackBar(false, " ");
      return;
    }

    this.entityService.get("/User/Get?userId=", this.authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      const allPost: AllergyDetail = {
        allergyDetailId: 0,
        healthInfoId: Data.data.healthInfoId,
        allergyName: this.allergyForm.value.allergyName
      }
      this.entityService.insert("/AllergyDetail/Add", allPost).subscribe(data => {
        var post: any = data;
        console.log(post);
        if (!post.success) {
          this.alertService.openSnackBar(post.success, post.message);
          return;
        }

      });
    });
    this.alertService.openSnackBar(true, "Added");
  }
}