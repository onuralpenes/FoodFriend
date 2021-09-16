import { FoodDetail } from "./food-detail.model";

export interface NutritionInfo {
    nutritionInfoId: number;
    foodDetailId: number;
    meal: Date;
    foodCategory: number;
    consumptionRatio: number;
    consumptionType: number;
    estimatedCalorie: number;
    foodDetail: FoodDetail;
}