import { Component, Inject } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProgressBarMode } from "@angular/material/progress-bar";
import { Transfer2 } from "../patient-trace-table.component";

@Component({
  selector: 'app-target-card',
  templateUrl: './target-card.html',
  styleUrls: ['./target-card.css'],
})
export class PatientTargetCard {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer2) {
    if (!data.target) {
      this.target = "Lose Weight";
    }
    else {
      this.target = "Gain Weight";
    }
    if (data.startingDate == null) {
      this.startingDate = new Date();
    }
    else {
      this.startingDate = data.startingDate;
    }
    if (data.endDate == null) {
      this.endDate = "unspecified";
    }
    else {
      var month = data.endDate.getUTCMonth() + 1;
      var day = data.endDate.getUTCDate();
      var year = data.endDate.getUTCFullYear();
      this.endDate = day + "/" + month + "/" + year;
    }
    if (data.startingWeight == null) {
      this.startingWeight = 100;
    }
    else {
      this.startingWeight = data.startingWeight;
    }
    this.targetWeight = this.data.targetWeight;
    this.currentWeight = this.data.currentWeight;
    this.weight_percent = 100 * (this.startingWeight - this.currentWeight) / (this.startingWeight - this.targetWeight);
    if (data.endDate == null) {
      this.dateProg = 0;
    }
    else {
      var currentProgress = this.currentDate.getTime() - this.startingDate.getTime();
      var endProgress = data.endDate.getTime() - this.startingDate.getTime();
      this.dateProg = 100 * currentProgress / endProgress;
    }
  }

  target!: string;
  startingDate !: Date;
  startingWeight !: number;
  endDate: any;
  targetWeight !: number;
  currentDate: Date = new Date();
  currentWeight !: number;
  weight_percent !: number;
  dateProg !: number;

  color: ThemePalette = 'warn';
  mode: ProgressBarMode = 'determinate';

}
