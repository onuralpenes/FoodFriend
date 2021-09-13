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
    ) { }

    register(register: RegisterDto) {
        this.http
            .post(environment.BASE_URL + "/auth/register", register, this.httpOptions).subscribe(data => {

                var regData: any = data;
                if (!regData.success) {
                    alert(regData.message);
                    return;
                }

                alert(regData.message);

            }, err=>{
                if(err)
                    alert(err.error)
            });
    }
}