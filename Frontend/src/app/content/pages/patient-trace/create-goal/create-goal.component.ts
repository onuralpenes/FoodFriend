import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.css'],
})
export class CreateGoalComponent {

  public goalForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  onSubmit(){

  }
}