import { AllergyDetail } from "./allergy-detail.model";
import { IllnessDetail } from "./illness-detail.model"
import { PregnantDetail } from "./pregnant-detail.model";

export interface HealthInfo {
    healthInfoId: number;
    hasHealthProblem: boolean;
    hasAllergy: boolean;
    isPregnant: boolean;
    illnessDetails: IllnessDetail[];
    allergyDetails: AllergyDetail[];
    pregnantDetails: PregnantDetail[];
}