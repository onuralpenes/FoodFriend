import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { DisabledDetail } from "src/app/models/user/physical-info/disabled-detail.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-add-disability',
  templateUrl: './add-disability.component.html',
  styleUrls: ['./add-disability.component.css']
})
export class AddDisability {
  disabilityForm!: FormGroup;
  disabilities: DisabledDetail[] = [];
  phId!: number;
  constructor(private formBuilder: FormBuilder, private messageService: MessageService,
    private entityService: HttpEntityRepositoryService<DisabledDetail>, private authService: AuthService) {

    entityService.getAll("/DisabledDetail/GetAll").subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }

      this.disabilities = Data.data;
    });
    this.disabilityForm = this.formBuilder.group({
      disabledDescription: new FormControl('', [Validators.required]),
      disabledRatio: new FormControl('', [Validators.required])
    });
  }

  addDisability() {
    if (this.disabilityForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Form is invalid.' });
      return;
    }

    this.entityService.get("/User/Get?userId=", this.authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      const disPost: DisabledDetail = {
        physicalInfoId: Data.data.physicalInfoId,
        disabledDescription: this.disabilityForm.value.disabledDescription.disabledDescription,
        disabledRatio: this.disabilityForm.value.disabledRatio,
        disabledDetailId: 0
      }
      this.entityService.insert("/DisabledDetail/Add", disPost).subscribe(data => {
        var post: any = data;
        if (!post.success) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: post.message });
          return;
        }

      });
    });
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Disability added." });;
  }
}