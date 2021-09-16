//Where to get the activity data found in the activity table.

import { ActivityInfoDto } from "src/app/models/data/activity/activity-info-dto.model";
import { AllergyList } from "src/app/models/user/user-info/health/allergy-detail.model";
import { IllnessList } from "src/app/models/user/user-info/health/illness-detail.model";
import { PregnantList } from "src/app/models/user/user-info/health/pregnant-detail.model";
import { DisabledList } from "src/app/models/user/user-info/physical/disabled-info.model";
import { UserInfo } from "src/app/models/user/user-info/user-info.model";

export const iList: IllnessList = { illnessList: [{ illnessType: 0, illnessName: "", illnessDetailId: 0 }] }
export const aList: AllergyList = { allergyList: [{ allergyType: 0, allergyName: " ", allergyDetailId: 0 }] }
export const pList: PregnantList = { pregnantList: [{ pregnantStartDate: new Date(), pregnantEndDate: new Date(), pregnantDetailId: 0 }] }
export const dList: DisabledList = { disabledList: [{ disabledType: "", disabledRatio: 0, disabledTypeId: 0 }] }

export const user: UserInfo = {
    userId: 0,
    firstName: "",
    lastName: "",
    password: "",
    passwordHash: "",
    passwordSalt: "",
    birthDate: new Date(),
    emailAddress: "",
    phone: "",
    physicalInfoId: 0,
    biometricId: "",
    healthInfoId: 0,

    healthInfo: {
        healthInfoId: 0,
        hasHealthProblem: false,
        hasAllergy: false,
        isPregnant: false,
        illnessDetailList: iList,
        allergyDetailList: aList,
        pregnantDetailList: pList
    },

    physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
}

export const ACTIVITY_DATA: ActivityInfoDto[] = [
  { activityType: 0, activityPeriod: 3, activityEffortSpent: 55, activityEffortUnit: 15, activityStartDate:new Date(2021,9,1), activityEndDate: new Date(2021,9,1), userId: 0, user: user },
  { activityType: 0, activityPeriod: 3, activityEffortSpent: 60, activityEffortUnit: 20, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1), userId: 0, user: user },
  { activityType: 0, activityPeriod: 3, activityEffortSpent: 65, activityEffortUnit: 25, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1), userId: 0, user: user },
  { activityType: 0, activityPeriod: 3, activityEffortSpent: 75, activityEffortUnit: 5, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1), userId: 0, user: user },
  { activityType: 0, activityPeriod: 3, activityEffortSpent: 100, activityEffortUnit: 10, activityStartDate: new Date(2021,9,1), activityEndDate: new Date(2021,9,1), userId: 0, user: user },
]
