import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginDto } from '../models/user/login.model';
import { MenuService } from './menu.service';
import { Result } from '../models/core/result.model';
import { AlertService } from '../helpers/alert.service';
import { DeviceDetectorService } from 'ngx-device-detector';

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

    constructor(private http: HttpClient, private route: Router, private alertService: AlertService, private menuService: MenuService, private deviceService: DeviceDetectorService) { }

    getUserInfoHttp() {
        return this.http.get<Result>(environment.BASE_URL + '/api/auth/GetUserInfo', this.httpOptions);
    }

    login(login: LoginDto) {

        const device = this.deviceService.getDeviceInfo();

        let devInfo = {
            deviceKey: device.userAgent,
            deviceName: device.device,
            deviceModel: device.deviceType,
            osVersion: device.os_version,
            osType: device.os,
            deviceId: 0
        }
        login.deviceInfo = devInfo;

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

                this.menuService.getMenu();

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
    userTransition(login: LoginDto) {
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
        localStorage.removeItem(environment.MENU_KEY);
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
