import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Result } from '../models/core/result.model';
import { AlertService } from '../helpers/alert.service';
import { Login } from '../models/user/login.model';

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

    constructor(private http: HttpClient, private route: Router, private alertService: AlertService) { }

    getUserInfoHttp() {
        return this.http.get<Result>(environment.BASE_URL + '/GetUserInfo', this.httpOptions);
    }

    login(login: Login) {
        this.http
            .post(environment.BASE_URL + "/auth/login", login, this.httpOptions)
            .subscribe(data => {
                var tokenData: any = data;
                if (!tokenData.success) {
                    this.alertService.openSnackBar(tokenData.success,tokenData.message);
                    return;
                }
                
                this.saveToken(tokenData.data.accessToken.token);
                this.alertService.openSnackBar(tokenData.success,tokenData.message);

                if (login.remember) {
                    localStorage.setItem('Username', login.emailAddress);
                    localStorage.setItem('Password', login.password);
                }
                else {
                    localStorage.setItem('Username', "");
                    localStorage.setItem('Password', "");
                }

                this.route.navigateByUrl('/dashboard');

            }, err => {
                if (err)
                    this.alertService.openSnackBar(false,err.error);
            });
    }
    userTransition(login: Login) {
        this.http
            .post(environment.BASE_URL + "/auth/login", login, this.httpOptions)
            .subscribe(data => {

                var tokenData: any = data;
                if (!tokenData.success) {
                    this.alertService.openSnackBar(tokenData.success,tokenData.message);
                    return;
                }
                this.saveToken(tokenData.data.token);
                this.alertService.openSnackBar(tokenData.success,tokenData.message);

                this.route.navigateByUrl('/dashboard');

                if (login.remember) {
                    localStorage.setItem('Email Address', login.emailAddress);
                    localStorage.setItem('Password', login.password);
                }
                else {
                    localStorage.setItem('Email Address', "");
                    localStorage.setItem('Password', "");
                }
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
        this.route.navigateByUrl('/login');
    }

    get isLoggedIn(): boolean {
        let authToken = localStorage.getItem(environment.TOKEN_KEY);
        return (authToken !== null) ? true : false;
    }

    public get CurrentUserId(): number {
        const token = localStorage.getItem(environment.TOKEN_KEY) || '{}';
        return this.jwtHelper.decodeToken(token).nameid;
    }

    public get CurrentRoles() {
        const token = localStorage.getItem(environment.TOKEN_KEY) || '{}';
        return this.jwtHelper.decodeToken(token)
    }
}
