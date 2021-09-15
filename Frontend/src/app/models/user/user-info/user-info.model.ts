import { PhysicalInfo } from "./physical/physical-info.model";

export interface UserInfo {
    userId: number;

    firstName: string;
    lastName: string;
    password: string;
    passwordHash: string,
    passwordSalt: string,
    birthDate: Date;
    emailAddress: string;
    phone: string;
    physicalInfoId: number;
    biometricId: string;
    healthInfoId: number

    // healthInfo: HealthInfo;
    physicalInfo: PhysicalInfo;

}