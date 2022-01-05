export interface AddGoal {
    goalUserId: number;
    goalTypeId: number;
    userId: number;
    professionnelUserId: number;
    value: number;
}

export interface GetGoal {
    goalUserId: number;
    goalTypeId: number;
    userId: number;
    professionnelUserId: number;
    value: number;
    name: string;
    measurement: string;
}

export interface GoalType {
    goalTypeId: number;
    name: string;
    measurement: string;
}

export interface DailyGoal {
    goalId: number;
    userId: number;
    professionnelUserId: number;
    dailyCaloriIntake: number;
    dailyCarbohydrateIntake: number;
    dailyProteinIntake: number;
    dailyOilIntake: number;
    dailyTargetStep: number;
    targetWeight: number;
    dailyCaloriExpenditure: number;
    targetDate: Date;
}