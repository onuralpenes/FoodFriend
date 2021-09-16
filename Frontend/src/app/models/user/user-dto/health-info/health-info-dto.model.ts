import { AllergyListDto } from "./allergy-detail-dto.model";
import { IllnessListDto } from "./illness-detail-dto.model";
import { PregnantListDto } from "./pregnant-detail-dto.model";

export interface HealthInfoDto {
    hasHealthProblem: boolean;
    hasAllergy: boolean;
    isPregnant: boolean;
    illnessDetailList: IllnessListDto;
    allergyDetailList: AllergyListDto;
    pregnantDetailList: PregnantListDto;
}