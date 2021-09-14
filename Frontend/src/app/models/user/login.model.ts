import { DeviceInfo } from "./deviceInfo.model";

export interface LoginDto {
    emailAddress: string,
    password: string,
    deviceInfo: DeviceInfo,
    remember: boolean
}