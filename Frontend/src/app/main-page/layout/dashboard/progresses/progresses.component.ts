import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { PROGRESS_DATA } from './data';

@Component({
  selector: 'app-progresses',
  templateUrl: './progresses.component.html',
  styleUrls: ['./progresses.component.css']
})
export class ProgressesComponent {

  calorie = PROGRESS_DATA.calorie;
  protein = PROGRESS_DATA.protein;
  oil = PROGRESS_DATA.oil;
  carbohydrate = PROGRESS_DATA.carbohydrate

  cal_p = this.calorie / 3;
  prot_p = this.protein / 3;
  oil_p = this.oil / 3;
  carb_p = this.carbohydrate / 3;

  color: ThemePalette = 'warn';
  mode: ProgressBarMode = 'determinate';
}
