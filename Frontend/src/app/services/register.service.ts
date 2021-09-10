import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { RegisterDto } from "../models/user/register.model";

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
        })
    };

    constructor(
        private http: HttpClient,
        private route: Router,
    ) { }

    register(register: RegisterDto) {
        this.http
            .post(environment.BASE_URL + "/auth/register", register, this.httpOptions);
        this.route.navigateByUrl('/dashboard');
    }
}