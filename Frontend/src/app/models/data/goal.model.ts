export interface Goal {
    goalId: number;
    userId: number;
    professionnelId: number;
    dailyCaloriIntake: number;
    dailyCarbohydrateIntake: number;
    dailyProteinIntake: number;
    dailyOilIntake: number;
    dailyTargetStep: number;
    targetWeight: number;
    dailyCaloriExpenditure: number;
    targetDate: Date;
}