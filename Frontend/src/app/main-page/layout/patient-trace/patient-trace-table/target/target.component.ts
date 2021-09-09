import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Transfer2 } from "../patient-trace-table.component";
import { PatientTargetCard } from "../target-card/target-card.component";

@Component({
    selector: 'app-target',
    templateUrl: './target.html',
    styleUrls: ['../target-card/target-card.css'],
  })
  export class PatientTarget {
  
    public targetForm: FormGroup;
    startingWeight !: number;
    targetWeight !: number;
    startingDate !: Date;
    endDate!: Date;
  
    constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer2, public modal: MatDialog, private formBuilder: FormBuilder) {
      this.targetForm = this.formBuilder.group({
        'startingDate': new FormControl(''),
        'endDate': new FormControl(''),
        'startingWeight': new FormControl(''),
        'targetWeight': new FormControl('', [Validators.required])
      });
    }
  
  
    openLose(name: string, target: boolean) {
      this.startingWeight = this.targetForm.get('startingWeight')?.value;
      this.targetWeight = this.targetForm.get('targetWeight')?.value;
      this.startingDate = this.targetForm.get('startingDate')?.value;
      this.endDate = this.targetForm.get('endDate')?.value;
  
      this.modal.open(PatientTargetCard, {
        data: {
          name: name,
          target: target,
          startingDate: this.startingDate,
          endDate: this.endDate,
          startingWeight: this.startingWeight,
          targetWeight: this.targetWeight,
          currentWeight: this.data.currentWeight
        }
      });
    }
  
    openGain(name: string, target: boolean) {
      this.startingWeight = this.targetForm.get('startingWeight')?.value;
      this.targetWeight = this.targetForm.get('targetWeight')?.value;
      this.startingDate = this.targetForm.get('startingDate')?.value;
      this.endDate = this.targetForm.get('endDate')?.value;
  
      this.modal.open(PatientTargetCard, {
        data: {
          name: name,
          target: target,
          startingDate: this.startingDate,
          endDate: this.endDate,
          startingWeight: this.startingWeight,
          targetWeight: this.targetWeight,
          currentWeight: this.data.currentWeight
        }
  
      });
    }
  
  }