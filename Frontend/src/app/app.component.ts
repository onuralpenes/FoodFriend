import { Component, NgModule } from '@angular/core';
import { AppModule } from './app.module';

import { MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})

export class AppComponent {
  public pageTitle = "";
  title = 'FoodFriend';
}
export class FormFieldOverviewExample {}
