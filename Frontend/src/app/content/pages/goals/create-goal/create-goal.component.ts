import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { Goal } from "src/app/models/data/goal.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.css'],
  providers: [ConfirmationService]
})
export class CreateGoalComponent {

  public goalForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private entityService: HttpEntityRepositoryService<Goal>, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.goalForm = this.formBuilder.group({
      'dailyCaloriIntake': new FormControl(''),
      'dailyCarbohydrateIntake': new FormControl(''),
      'dailyProteinIntake': new FormControl(''),
      'dailyOilIntake': new FormControl(''),
      'dailyTargetStep': new FormControl(''),
      'targetWeight': new FormControl(''),
      'dailyCaloriExpenditure': new FormControl(''),
      'targetDate': new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.confirmationService.confirm({
      message: 'Are you sure, you want to add a goal?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let goal: Goal = {
          goalId: 0,
          userId: this.authService.CurrentUserId,
          professionnelId: 0,
          dailyCaloriIntake: this.goalForm.value.dailyCaloriIntake,
          dailyCarbohydrateIntake: this.goalForm.value.dailyCarbohydrateIntake,
          dailyProteinIntake: this.goalForm.value.dailyProteinIntake,
          dailyOilIntake: this.goalForm.value.dailyOilIntake,
          dailyTargetStep: this.goalForm.value.dailyTargetStep,
          targetWeight: this.goalForm.value.targetWeight,
          dailyCaloriExpenditure: this.goalForm.value.dailyCaloriExpenditure,
          targetDate: this.goalForm.value.targetDate
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