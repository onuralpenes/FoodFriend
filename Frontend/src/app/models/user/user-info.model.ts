import { HealthInfoDto } from "./health-info/health-info.model";
import { PhysicalInfoDto } from "./physical-info/physical-info.model";

export interface UserInfoDto {
    id: number;

    firstName: string;
    lastName: string;
    password: string;
    birthDate: Date;
    emailAddress: string;
    phone: string;
    
    healthInfoInfoDto: HealthInfoDto;
    physicalInfo: PhysicalInfoDto;

}