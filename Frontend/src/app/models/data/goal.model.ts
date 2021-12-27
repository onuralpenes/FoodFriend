export interface AddGoal {
    goalUserId: number;
    goalTypeId: number;
    userId: number;
    value: number;
}

export interface GetGoal {
    goalUserId: number;
    goalTypeId: number;
    userId: number;
    value: number;
    name: string;
    measurement: string;
}

export interface GoalType {
    goalTypeId: number;
    name: string;
    measurement: string;
}