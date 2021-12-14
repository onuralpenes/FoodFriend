import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { IllnessDetail } from "src/app/models/user/health-info/illness-detail.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-add-illness',
  templateUrl: './add-illness.component.html',
  styleUrls: ['./add-illness.component.css'],
  providers: [MessageService]
})
export class AddIllness {
  illnessForm!: FormGroup;
  illnesses: IllnessDetail[] = [];
  constructor(private formBuilder: FormBuilder, private entityService: HttpEntityRepositoryService<IllnessDetail>, private authService: AuthService, private messageService: MessageService) {
    entityService.getAll("​/IllnessDetail/GetAll").subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }

      this.illnesses = Data.data;
    });
    this.illnessForm = this.formBuilder.group({
      illnessName: new FormControl('', [Validators.required])
    });
  }

  addIllness() {
    if (this.illnessForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Form is invalid.' });
      return;
    }

    this.entityService.get("/User/Get?userId=", this.authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      const illPost: IllnessDetail = {
        illnessDetailId: 0,
        healthInfoId: Data.data.healthInfoId,
        illnessName: this.illnessForm.value.illnessName
      }
      this.entityService.insert("/IllnessDetail/Add", illPost).subscribe(data => {
        var post: any = data;
        if (!post.success) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: post.message });
          return;
        }

      });
    });
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Illness added." });;
  }
}
