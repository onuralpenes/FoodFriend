import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AlertService } from "../helpers/alert.service";
import { User } from "../models/user/user.model";

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

    constructor(private http: HttpClient, private alertService: AlertService) { }

    register(register: User) {

        this.http
            .post(environment.BASE_URL + "/Auth2/Register", register, this.httpOptions).subscribe(data => {

                var regData: any = data;
                if (!regData.success) {
                    this.alertService.openSnackBar(regData.success,regData.message);
                    return;
                }

                this.alertService.openSnackBar(regData.success,regData.message);

            }, err=>{
                if(!err.success)
                this.alertService.openSnackBar(false,err.error.message);
            });
    }
}