import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { AllergyDetail } from "src/app/models/user/health-info/allergy-detail.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-add-allergy',
  templateUrl: './add-allergy.component.html',
  styleUrls: ['./add-allergy.component.css'],
  providers: [MessageService]
})
export class AddAllergy {
  allergyForm!: FormGroup;
  allergies: AllergyDetail[] = [];
  constructor(private formBuilder: FormBuilder, private messageService: MessageService,
    private entityService: HttpEntityRepositoryService<AllergyDetail>, private authService: AuthService) {
    entityService.getAll("/AllergyDetail/GetAll").subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }

      this.allergies = Data.data;
    });
    this.allergyForm = this.formBuilder.group({
      allergyName: new FormControl('', [Validators.required])
    });
  }

  addAllergy() {
    if (this.allergyForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Form is invalid.' });
      return;
    }

    this.entityService.get("/User/Get?userId=", this.authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      const allPost: AllergyDetail = {
        allergyDetailId: 0,
        healthInfoId: Data.data.healthInfoId,
        allergyName: this.allergyForm.value.allergyName
      }
      this.entityService.insert("/AllergyDetail/Add", allPost).subscribe(data => {
        var post: any = data;
        if (!post.success) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: post.message });
          return;
        }

      });
    });
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Allergy added." });;
  }
}