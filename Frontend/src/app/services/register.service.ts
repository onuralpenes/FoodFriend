import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { environment } from "src/environments/environment";
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

    constructor(private http: HttpClient, private messageService: MessageService) { }

    register(register: User) {
        let request = {
            firstName: register.firstName,
            lastName: register.lastName,
            birthDate: register.birthDate,
            emailAddress: register.emailAddress,
            phone: register.phone,
            password: register.password
        }

        this.http
            .post(environment.BASE_URL + "/Auth2/Register", request, this.httpOptions).subscribe(data => {
                var regData: any = data;
                if (!regData.success) {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: regData.message });
                    return;
                }

                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registration successful.' });

            }, err => {
                if (!err.success)
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error });
            });
    }
}