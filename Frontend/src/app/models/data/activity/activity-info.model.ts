import { UserInfo } from "../../user/user-info/user-info.model";

export interface ActivityInfo {
    personalEnergyActivityId: number;
    userId: number;
    activityType: number;
    activityPeriod: number;
    activityEffortSpent: number;
    activityEffortUnit: number;
    activityStartDate: Date;
    activityEndDate: Date;
    user: UserInfo;
}