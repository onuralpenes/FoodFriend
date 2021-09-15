import { DeviceInfo } from "./deviceInfo.model";

export interface RegisterDto {
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: number,
    password: string,
    birthDate: Date,
    deviceInfo: DeviceInfo
}