export interface PersonalEnergyActivity {
    personalEnergyActivityId: number;
    userId: number;
    activityType: string;
    activityPeriod: number;
    activityEffortSpent: number;
    activityEffortUnit: number;
    activityStartDate: Date;
    activityEndDate: Date;
}