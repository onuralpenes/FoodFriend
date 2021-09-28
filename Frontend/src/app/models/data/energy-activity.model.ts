import { Nutrition } from "./nutrition.model";

export interface PersonalEnergyActivity {
    personalEnergyActivityId: number;
    userId: number;
    activityType: number;
    activityPeriod: number;
    activityEffortSpent: number;
    activityEffortUnit: number;
    activityStartDate: Date;
    activityEndDate: Date;
    nutrition: Nutrition[];
}