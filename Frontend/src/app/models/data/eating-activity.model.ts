import { Nutrition } from "./nutrition.model";

export interface EatingActivity {
    eatingActivityId: number;
    userId: number;
    startEatingActivity: Date;
    endEatingActivity: Date;
    consumptionRatio: number;
    consumptionType: number;
    estimatedCalorie: number;
    nutrition: Nutrition[];
}