//Where to get the activity data found in the activity table.

import { PersonalEnergyActivity } from "src/app/models/data/energy-activity.model";

export const ACTIVITY_DATA: PersonalEnergyActivity[] = [
  { activityType: 0, activityPeriod: 3, activityEffortSpent: 55, activityEffortUnit: 15, activityStartDate:new Date(2021,9,1), activityEndDate: new Date(2021,9,1), userId: 0, personalEnergyActivityId: 0},
  { activityType: 0, activityPeriod: 3, activityEffortSpent: 60, activityEffortUnit: 20, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1), userId: 0, personalEnergyActivityId: 0},
  { activityType: 0, activityPeriod: 3, activityEffortSpent: 65, activityEffortUnit: 25, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1), userId: 0, personalEnergyActivityId: 0},
  { activityType: 0, activityPeriod: 3, activityEffortSpent: 75, activityEffortUnit: 5, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1), userId: 0, personalEnergyActivityId: 0},
  { activityType: 0, activityPeriod: 3, activityEffortSpent: 100, activityEffortUnit: 10, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1), userId: 0, personalEnergyActivityId: 0},
]
