//Where to get the activity data found in the activity table.

export interface Activity {
  activityType: string;
  activityPeriod: number;
  activityEffortSpent: number;
  activityEfforUnit: number;
  activityStartDate: Date;
  activityEndDate: Date;
}

export const ACTIVITY_DATA: Activity[] = [
  { activityType: 'Push-up', activityPeriod: 3, activityEffortSpent: 55, activityEfforUnit: 15, activityStartDate:new Date(2021,9,1), activityEndDate: new Date(2021,9,1) },
  { activityType: 'Crunch', activityPeriod: 3, activityEffortSpent: 60, activityEfforUnit: 20, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1) },
  { activityType: 'Squat', activityPeriod: 3, activityEffortSpent: 65, activityEfforUnit: 25, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1) },
  { activityType: 'Lift weights', activityPeriod: 3, activityEffortSpent: 75, activityEfforUnit: 5, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1) },
  { activityType: 'Plank ', activityPeriod: 3, activityEffortSpent: 100, activityEfforUnit: 10, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1) },
]
