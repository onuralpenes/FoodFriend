export interface EatingActivity {
    eatingActivityId: number;
    userId: number;
    startEatingActivity: Date;
    endEatingActivity: Date;
    consumptionRatio: number;
    consumptionType: number;
    estimatedCalorie: number;
}