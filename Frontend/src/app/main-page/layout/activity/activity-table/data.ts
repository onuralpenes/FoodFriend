//Where to get the activity data found in the activity table.

import { Activity } from "src/app/models/table/activity.model";

export const ACTIVITY_DATA: Activity[] = [
  { activityType: 'Push-up', activityPeriod: 3, activityEffortSpent: 55, activityeffortUnit: 15, activityStartDate:new Date(2021,9,1), activityEndDate: new Date(2021,9,1) },
  { activityType: 'Crunch', activityPeriod: 3, activityEffortSpent: 60, activityeffortUnit: 20, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1) },
  { activityType: 'Squat', activityPeriod: 3, activityEffortSpent: 65, activityeffortUnit: 25, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1) },
  { activityType: 'Lift weights', activityPeriod: 3, activityEffortSpent: 75, activityeffortUnit: 5, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1) },
  { activityType: 'Plank ', activityPeriod: 3, activityEffortSpent: 100, activityeffortUnit: 10, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1) },
]
