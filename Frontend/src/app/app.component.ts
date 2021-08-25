import { Component, NgModule } from '@angular/core';
import { AppModule } from './app.module';

import { MatFormFieldModule} from '@angular/material/form-field';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public pageTitle = "";
  title = 'FoodFriend';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|tr/) ? browserLang : 'en');
  }
}
export class FormFieldOverviewExample {}
