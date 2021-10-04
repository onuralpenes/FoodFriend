import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/helpers/alert.service";
import { IllnessDetail } from "src/app/models/user/health-info/illness-detail.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-add-illness',
  templateUrl: './add-illness.component.html',
  styleUrls: ['./add-illness.component.css'],
})
export class AddIllness {
  illnessForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private alertService: AlertService,
    private entityService: HttpEntityRepositoryService<IllnessDetail>, private authService: AuthService) {
    this.illnessForm = this.formBuilder.group({
      illnessName: new FormControl('', [Validators.required])
    });
  }

  addIllness() {
    if (this.illnessForm.invalid) {
      this.alertService.openSnackBar(false, " ");
      return;
    }

    this.entityService.get("/User/Get?userId=", this.authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      const illPost: IllnessDetail = {
        illnessDetailId: 0,
        healthInfoId: Data.data.healthInfoId,
        illnessName: this.illnessForm.value.illnessName
      }
      this.entityService.insert("/IllnessDetail/Add", illPost).subscribe(data => {
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