import { DeviceDetail } from "./device-detail.model";

export interface LoginDto {
    emailAddress: string,
    password: string,
    deviceInfo: DeviceDetail,
    remember: boolean
}