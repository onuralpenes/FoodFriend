import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
// import { JwtHelperService } from "@auth0/angular-jwt";
// import { LoginDto } from '../models/auth/login-dto';
// import { UserDto } from '../models/user/user-dto';
// import { Mesajlar } from '../constants/mesajlar';
// import { MenuService } from './menu.service';
// import { QuickBranchService } from './quick-branch.service';
// import { Observable } from 'rxjs/internal/Observable';
// import { IslemSonuc } from '../models/core/IslemSonuc';

import { LoginModel } from '../models/user/login.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {



    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
        })
    };
    //   jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(
        private http: HttpClient,
        private route: Router,
        // private message: NzMessageService,
        // private menuService: MenuService,
        // private quickBranchService: QuickBranchService,
    ) { }

    //   getUserInfoHttp() {
    //     return this.http.get<IslemSonuc>(environment.BASE_URL + '/api/auth/GetUserInfo', this.httpOptions);
    //   }

    login(login: LoginModel) {
        this.http
            .post(environment.BASE_URL + "/auth/login", login, this.httpOptions)
            .subscribe(data => {

                var tokenData: any = data;
                if (!tokenData.success) {
                    //   this.message.error(tokenData.message, { nzDuration: 8000 });
                    alert("Error");
                    return;
                }

                this.saveToken(tokenData.data.token);
                alert("Success");
                // this.message.success(Mesajlar.KULLANICI_GIRISI_BASARILI + this.CurrentUser.given_name, { nzDuration: 8000 });

                // this.menuService.getMenu();

                // this.quickBranchService.setQuickBranch(this.CurrentUser);

                this.route.navigateByUrl('/dashboard');

                // if (login.doRemember) {
                //   localStorage.setItem('Username', login.Username);
                //   localStorage.setItem('Password', login.Password);
                // }
                // else {
                //   localStorage.setItem('Username', "");
                //   localStorage.setItem('Password', "");
                // }

                localStorage.setItem('Username', "");
                localStorage.setItem('Password', "");
            });
    }
    userTransition(login: LoginModel) {
        this.http
            .post(environment.BASE_URL + "/auth/login", login, this.httpOptions)
            .subscribe(data => {

                var tokenData: any = data;
                if (!tokenData.success) {
                    //   this.message.error(tokenData.message, { nzDuration: 8000 });
                    alert("Error");
                    return;
                }

                // this.saveToken(tokenData.data.token);
                // this.message.success(Mesajlar.KULLANICI_GIRISI_BASARILI + this.CurrentUser.given_name, { nzDuration: 8000 });
                alert("Success");

                this.route.navigateByUrl('/dashboard');

                // if (login.doRemember) {
                //   localStorage.setItem('Username', login.Username);
                //   localStorage.setItem('Password', login.Password);
                // }
                // else {
                //   localStorage.setItem('Username', "");
                //   localStorage.setItem('Password', "");
                // }
                localStorage.setItem('Username', "");
                localStorage.setItem('Password', "");
            });
    }

    saveToken(token: string) {
        localStorage.setItem(environment.TOKEN_KEY, token);
    }

    getToken() {
        return localStorage.getItem(environment.TOKEN_KEY);
    }

    logout() {
        localStorage.removeItem(environment.TOKEN_KEY);
        //     localStorage.removeItem(environment.MENU_KEY);
        //     localStorage.removeItem(environment.BRANCH_LIST_KEY);
        this.route.navigateByUrl('/login');
    }

      get isLoggedIn(): boolean {
        let authToken = localStorage.getItem(environment.TOKEN_KEY);
        return (authToken !== null) ? true : false;
      }

    //   public get CurrentUser(): UserDto {
    //     return this.jwtHelper.decodeToken(
    //       localStorage.getItem(environment.TOKEN_KEY)
    //     ) as UserDto;

    //   }
    //   public get CurrentRoles() {
    //     return this.jwtHelper.decodeToken(
    //       localStorage.getItem(environment.TOKEN_KEY)
    //     )
    //   }



}
