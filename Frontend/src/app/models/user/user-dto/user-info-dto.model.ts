import { HealthInfoDto } from "./health-info/health-info-dto.model";
import { PhysicalInfoDto } from "./physical-info/physical-info-dto.model";

export interface UserInfoDto {
    firstName: string;
    lastName: string;
    password: string;
    birthDate: Date;
    emailAddress: string;
    phone: string;
    
    healthInfoInfoDto: HealthInfoDto;
    physicalInfo: PhysicalInfoDto;

}