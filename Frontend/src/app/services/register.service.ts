import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";
import { environment } from "src/environments/environment";
import { AlertService } from "../helpers/alert.service";
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

    constructor(private http: HttpClient, private alertService: AlertService, private deviceService: DeviceDetectorService) { }

    register(register: RegisterDto) {

        const device = this.deviceService.getDeviceInfo();

        let devInfo = {
            deviceKey: device.userAgent,
            deviceName: device.device,
            deviceModel: device.deviceType,
            osVersion: device.os_version,
            osType: device.os
        }
        register.deviceInfo = devInfo;

        this.http
            .post(environment.BASE_URL + "/auth/register", register, this.httpOptions).subscribe(data => {

                var regData: any = data;
                if (!regData.success) {
                    this.alertService.openSnackBar(regData.success,regData.message);
                    return;
                }

                this.alertService.openSnackBar(regData.success,regData.message);

            }, err=>{
                if(err)
                this.alertService.openSnackBar(false,err.error);
            });
    }
}