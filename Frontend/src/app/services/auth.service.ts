import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertService } from '../helpers/alert.service';
import { Login } from '../models/user/login.model';
import { UserRolesService } from './can-active.guard';

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
    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(private http: HttpClient, private route: Router, private alertService: AlertService, private userRolesService: UserRolesService) { }

    login(login: Login) {
        this.http
            .post(environment.BASE_URL + "/Auth2/Login", login, this.httpOptions)
            .subscribe(data => {
                var tokenData: any = data;
                if (!tokenData.success) {
                    this.alertService.openSnackBar(tokenData.success, tokenData.message);
                    return;
                }
                this.saveId(tokenData.data.userId);
                this.saveToken(tokenData.data.accessToken);
                let roles: string[] = [];
                for (let i = 0; i < this.CurrentRoles.roles.length; i++) {
                    roles.push(this.CurrentRoles.roles[i].name)
                }
                this.userRolesService.setRoles(roles);
                console.log(this.userRolesService.getRoles());
                this.alertService.openSnackBar(tokenData.success, tokenData.message);

                if (login.remember) {
                    localStorage.setItem('Email', login.emailAddress);
                    localStorage.setItem('Password', login.password);
                }
                else {
                    localStorage.setItem('Email', "");
                    localStorage.setItem('Password', "");
                }

                this.route.navigateByUrl('/dashboard');

            }, err => {
                if (err)
                    this.alertService.openSnackBar(false, err.error);
            });
    }

    saveToken(token: string) {
        localStorage.setItem(environment.TOKEN_KEY, token);
    }

    saveId(id: number) {
        let idString: string = id.toString();
        localStorage.setItem(environment.USER_ID, idString);
    }

    getToken() {
        return localStorage.getItem(environment.TOKEN_KEY);
    }

    logout() {
        localStorage.removeItem(environment.TOKEN_KEY);
        this.route.navigateByUrl('/login');
    }

    get isLoggedIn(): boolean {
        let authToken = localStorage.getItem(environment.TOKEN_KEY);
        return (authToken !== null) ? true : false;
    }

    public get CurrentUserId(): number {
        const id = localStorage.getItem(environment.USER_ID);
        if (id != null) {
            return +id;
        }
        else {
            return 0;
        }
    }

    public get CurrentRoles() {
        const token = localStorage.getItem(environment.TOKEN_KEY) || '{}';
        return this.jwtHelper.decodeToken(token)
    }
}
