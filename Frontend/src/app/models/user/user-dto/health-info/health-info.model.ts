import { AllergyList } from "./allergy-detail.model";
import { IllnessList } from "./illnes-detail.model";
import { PregnantList } from "./pregnant-detail.model";

export interface HealthInfoDto {
    hasHealthProblem: boolean;
    hasAllergy: boolean;
    isPregnant: boolean;
    illnessDetailList: IllnessList;
    allergyDetailList: AllergyList;
    pregnantDetailList: PregnantList;
}