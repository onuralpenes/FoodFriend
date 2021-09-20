import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-private-layout',
    templateUrl: './private-layout.component.html',
})

export class PrivateLayoutComponent {

    constructor(loginService: AuthService, private route: Router, private translate: TranslateService) {
        if (!loginService.isLoggedIn) {
            this.route.navigateByUrl('/login');
        }
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|tr/) ? browserLang : 'en');
    }
    sideBar = true;
    pinned = false;
    toggle() {
        if (this.pinned) {
            this.sideBar = this.sideBar;
        } else {
            this.sideBar = !this.sideBar;
        }
    }
    pin() {
        this.pinned = !this.pinned;
    }
    changeLang(langCode: string) {
        this.translate.use(langCode);
      }
}
