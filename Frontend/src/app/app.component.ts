import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
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
