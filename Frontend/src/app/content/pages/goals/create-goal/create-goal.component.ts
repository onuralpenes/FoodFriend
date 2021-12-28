import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { GoalType, AddGoal } from "src/app/models/data/goal.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.css']
})
export class CreateGoalComponent {

  public goalForm: FormGroup;

  goals: GoalType[] = [];

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private entityService: HttpEntityRepositoryService<GoalType>, private messageService: MessageService, private confirmationService: ConfirmationService) {
    entityService.getAll("/api/GoalType/GetAll").subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      this.goals = Data.data;
    });

    this.goalForm = this.formBuilder.group({
      'goalType': new FormControl('', [Validators.required]),
      'value': new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.confirmationService.confirm({
      message: 'Are you sure, you want to add a goal?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let goal: AddGoal = {
          goalUserId: 0,
          professionnelUserId: 0,
          goalTypeId: this.goalForm.value.goalType.goalTypeId,
          userId: this.authService.CurrentUserId,
          value: this.goalForm.value.value
        }
        this.entityService.insert("/api/Goal/Add", goal).subscribe(data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The goal was added successfully.' });
        }, err => {
          if (err)
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the addition process.' });
        })
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'The goal was not added.' });
      }
    });
  }
}