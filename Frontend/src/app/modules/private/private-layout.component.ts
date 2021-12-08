import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-private-layout',
    templateUrl: './private-layout.component.html',
})

export class PrivateLayoutComponent {

    constructor(private translate: TranslateService) {
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|tr/) ? browserLang : 'en');
    }
    sideBar = true;

    toggle() {
        this.sideBar = !this.sideBar;
    }

    changeLang(langCode: string) {
        this.translate.use(langCode);
    }
}
