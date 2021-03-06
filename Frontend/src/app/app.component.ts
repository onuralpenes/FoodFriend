import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FoodFriend';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|tr/) ? browserLang : 'en');
  }
  changeLang(langCode: string) {
    this.translate.use(langCode);
  }
}
