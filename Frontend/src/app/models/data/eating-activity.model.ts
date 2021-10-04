import { Nutrition } from "./nutrition.model";

export interface EatingActivity {
    eatingActivityId: number;
    userId: number;
    startEatingActivity: Date;
    endEatingActivity: Date;
    consumptionType: number;
    estimatedCalorie: number;
    nutrition: Nutrition[];
}