import { DeviceDetailDto } from "./device-detail-dto.model";

export interface RegisterDto {
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: number,
    password: string,
    birthDate: Date,
    deviceInfo: DeviceDetailDto
}