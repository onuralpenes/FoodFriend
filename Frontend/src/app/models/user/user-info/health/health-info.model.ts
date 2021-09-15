import { AllergyList } from "./allergy-detail.model";
import { IllnessList } from "./illness-detail.model";
import { PregnantList } from "./pregnant-detail.model";

export interface HealthInfoDto {
    healthInfoId: number;
    hasHealthProblem: boolean;
    hasAllergy: boolean;
    isPregnant: boolean;
    illnessDetailList: IllnessList;
    allergyDetailList: AllergyList;
    pregnantDetailList: PregnantList;
}