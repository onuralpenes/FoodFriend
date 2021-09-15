import { ActivityInfo } from "src/app/models/data/activity/activity-info.model"
import { FoodDetail } from "src/app/models/data/nutrition/food-detail.model"
import { AllergyList } from "src/app/models/user/user-info/health/allergy-detail.model"
import { IllnessList } from "src/app/models/user/user-info/health/illness-detail.model"
import { PregnantList } from "src/app/models/user/user-info/health/pregnant-detail.model"
import { DisabledList } from "src/app/models/user/user-info/physical/disabled-info.model"
import { UserInfo } from "src/app/models/user/user-info/user-info.model"

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

export const USER_DATA: UserInfo[] = [
    {
        firstName: 'Ali', lastName: 'Akman', birthDate: new Date(1995, 10, 8), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 1, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Malaika', lastName: 'Connor', birthDate: new Date(2000, 5, 14), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 2, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Anaya', lastName: 'Cleveland', birthDate: new Date(1999, 2, 25), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 3, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Jad', lastName: 'Myers', birthDate: new Date(1985, 11, 7), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 4, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Heath', lastName: 'Rankin', birthDate: new Date(1989, 2, 16), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 5, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Jovan', lastName: 'Fuentes', birthDate: new Date(1999, 12, 2), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 6, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Ammar', lastName: 'Caldwell', birthDate: new Date(1986, 7, 7), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 7, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Vera', lastName: 'Gardner', birthDate: new Date(1972, 4, 20), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 8, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Camden', lastName: 'Rosales', birthDate: new Date(1964, 9, 27), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 9, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Carly', lastName: 'Mckinney', birthDate: new Date(1974, 9, 6), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 10, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Esther', lastName: 'John', birthDate: new Date(1981, 9, 15), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 11, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Alexandria', lastName: 'Alvarez', birthDate: new Date(1982, 5, 31), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 12, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Ruairi', lastName: 'Sheppard', birthDate: new Date(1983, 5, 20), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 13, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Artur', lastName: 'CassuserIdy', birthDate: new Date(2002, 1, 30), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 14, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Felicia', lastName: 'Harvey', birthDate: new Date(1998, 7, 9), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 15, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Shaunie', lastName: 'Bonilla', birthDate: new Date(1983, 7, 21), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 16, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Bradlee', lastName: 'Ramsey', birthDate: new Date(1989, 2, 4), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 17, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Nel', lastName: 'Nunez', birthDate: new Date(1996, 5, 13), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 18, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Conrad', lastName: 'Justice', birthDate: new Date(1963, 1, 7), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 19, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Danyl', lastName: 'Mays', birthDate: new Date(1986, 7, 19), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 20, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

    {
        firstName: 'Ester', lastName: 'Expósito', birthDate: new Date(2000, 1, 26), password: "", passwordHash: "", passwordSalt: "", physicalInfoId: 0, healthInfoId: 0, biometricId: "", emailAddress: "", phone: "", userId: 21, healthInfo: {
            healthInfoId: 0, hasHealthProblem: false, hasAllergy: false, isPregnant: false, illnessDetailList: iList, allergyDetailList: aList, pregnantDetailList: pList,
        }, physicalInfo: { physicalInfoId: 0, height: 0, weight: 0, disabledStatus: false, disabledInfo: dList, }
    },

]

export const FOOD_DATA: FoodDetail[] = [
    { foodName: 'Sausages', calorie: 304, protein: 15.09, oil: 26.53, carbohydrate: 0, foodDetailId: 'meat', myProperty: 'morning ', id: 1 },
    { foodName: 'Salad', calorie: 17, protein: 1.52, oil: 0.24, carbohydrate: 3.2, foodDetailId: 'Salad', myProperty: 'dinner', id: 1 },
    { foodName: 'Fish', calorie: 84, protein: 17.76, oil: 0.92, carbohydrate: 0, foodDetailId: 'dish', myProperty: 'lunch', id: 1 },
    { foodName: 'Sandwich', calorie: 304, protein: 9.75, oil: 14.56, carbohydrate: 32.88, foodDetailId: 'Sandwich', myProperty: 'morning', id: 2 },
    { foodName: 'Beef Steak', calorie: 252, protein: 27.29, oil: 15.01, carbohydrate: 0, foodDetailId: 'meat', myProperty: 'lunch', id: 2 },
    { foodName: 'Yoghurt', calorie: 61, protein: 3.47, oil: 3.25, carbohydrate: 4.66, foodDetailId: 'yoghurt', myProperty: 'snack1', id: 2 },
    { foodName: 'Chicken Kebab', calorie: 151, protein: 9.09, oil: 3.67, carbohydrate: 19.83, foodDetailId: 'chicken', myProperty: 'dinner', id: 2 },
    { foodName: 'Beef Steak', calorie: 252, protein: 27.29, oil: 15.01, carbohydrate: 0, foodDetailId: 'meat', myProperty: 'lunch', id: 3 },
    { foodName: 'Tuna Steak', calorie: 136, protein: 31, oil: 1.1, carbohydrate: 0, foodDetailId: 'meat', myProperty: 'dinner', id: 3 },
    { foodName: 'Tuna Steak', calorie: 136, protein: 31, oil: 1.1, carbohydrate: 0, foodDetailId: 'meat', myProperty: 'dinner', id: 4 },
    { foodName: 'Hamburger', calorie: 254, protein: 11.74, oil: 12.25, carbohydrate: 24.81, foodDetailId: 'hamburger', myProperty: 'lunch', id: 4 },
    { foodName: 'Cottage cheese', calorie: 103, protein: 4.51, oil: 2.68, carbohydrate: 12.49, foodDetailId: 'cheese', myProperty: 'morning', id: 4 },
    { foodName: 'Fish', calorie: 84, protein: 17.76, oil: 0.92, carbohydrate: 0, foodDetailId: 'dish', myProperty: 'lunch', id: 5 },
    { foodName: 'Rice', calorie: 129, protein: 2.66, oil: 0.28, carbohydrate: 27.9, foodDetailId: 'Rice', myProperty: 'dinner', id: 5 },
    { foodName: 'Eggs', calorie: 147, protein: 12.58, oil: 9.94, carbohydrate: 0.77, foodDetailId: 'egg', myProperty: 'morning', id: 5 },
    { foodName: 'Rice', calorie: 129, protein: 2.66, oil: 0.28, carbohydrate: 27.9, foodDetailId: 'Rice', myProperty: 'dinner', id: 6 },
    { foodName: 'Spaghetti', calorie: 158, protein: 5.8, oil: 0.93, carbohydrate: 30.86, foodDetailId: 'pasta', myProperty: 'lunch', id: 6 },
    { foodName: 'French Fries', calorie: 267, protein: 3.88, oil: 13.64, carbohydrate: 33.6, foodDetailId: 'potato', myProperty: 'snack2', id: 6 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodDetailId: 'salad', myProperty: 'snack1', id: 6 },
    { foodName: 'Spaghetti', calorie: 158, protein: 5.8, oil: 0.93, carbohydrate: 30.86, foodDetailId: 'pasta', myProperty: 'lunch', id: 7 },
    { foodName: 'Eggs', calorie: 147, protein: 12.58, oil: 9.94, carbohydrate: 0.77, foodDetailId: 'egg', myProperty: 'morning', id: 7 },
    { foodName: 'Chicken Kebab', calorie: 151, protein: 9.09, oil: 3.67, carbohydrate: 19.83, foodDetailId: 'chicken', myProperty: 'dinner', id: 7 },
    { foodName: 'Yoghurt', calorie: 61, protein: 3.47, oil: 3.25, carbohydrate: 4.66, foodDetailId: 'yoghurt', myProperty: 'snack1', id: 7 },
    { foodName: 'French Fries', calorie: 267, protein: 3.88, oil: 13.64, carbohydrate: 33.6, foodDetailId: 'potato', myProperty: 'snack2', id: 7 },
    { foodName: 'Pizza', calorie: 276, protein: 12.33, oil: 11.74, carbohydrate: 30.33, foodDetailId: 'pizza', myProperty: 'lunch', id: 8 },
    { foodName: 'Sausages', calorie: 304, protein: 15.09, oil: 26.53, carbohydrate: 0, foodDetailId: 'meat', myProperty: 'morning ', id: 8 },
    { foodName: 'Hamburger', calorie: 254, protein: 11.74, oil: 12.25, carbohydrate: 24.81, foodDetailId: 'hamburger', myProperty: 'lunch', id: 9 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodDetailId: 'salad', myProperty: 'snack1', id: 9 },
    { foodName: 'Eggs', calorie: 147, protein: 12.58, oil: 9.94, carbohydrate: 0.77, foodDetailId: 'egg', myProperty: 'morning', id: 10 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodDetailId: 'chicken', myProperty: 'lunch', id: 10 },
    { foodName: 'Yoghurt', calorie: 61, protein: 3.47, oil: 3.25, carbohydrate: 4.66, foodDetailId: 'yoghurt', myProperty: 'snack1', id: 10 },
    { foodName: 'Sausages', calorie: 304, protein: 15.09, oil: 26.53, carbohydrate: 0, foodDetailId: 'meat', myProperty: 'morning ', id: 11 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodDetailId: 'chicken', myProperty: 'lunch', id: 11 },
    { foodName: 'Fish', calorie: 84, protein: 17.76, oil: 0.92, carbohydrate: 0, foodDetailId: 'dish', myProperty: 'dinner', id: 11 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodDetailId: 'chicken', myProperty: 'lunch', id: 12 },
    { foodName: 'Chicken Kebab', calorie: 151, protein: 9.09, oil: 3.67, carbohydrate: 19.83, foodDetailId: 'chicken', myProperty: 'dinner', id: 12 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodDetailId: 'salad', myProperty: 'morning', id: 12 },
    { foodName: 'Bacon', calorie: 541, protein: 37.04, oil: 41.78, carbohydrate: 1.43, foodDetailId: 'meat', myProperty: 'lunch', id: 13 },
    { foodName: 'Hot Dog', calorie: 247, protein: 10.6, oil: 14.84, carbohydrate: 18.4, foodDetailId: 'meat', myProperty: 'dinner', id: 13 },
    { foodName: 'Cheese', calorie: 350, protein: 22.21, oil: 26.91, carbohydrate: 4.71, foodDetailId: 'cheese', myProperty: 'morning', id: 13 },
    { foodName: 'Chicken Kebab', calorie: 151, protein: 9.09, oil: 3.67, carbohydrate: 19.83, foodDetailId: 'chicken', myProperty: 'dinner', id: 14 },
    { foodName: 'Sausages', calorie: 304, protein: 15.09, oil: 26.53, carbohydrate: 0, foodDetailId: 'meat', myProperty: 'morning ', id: 14 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodDetailId: 'salad', myProperty: 'snack1', id: 14 },
    { foodName: 'Hot Dog', calorie: 247, protein: 10.6, oil: 14.84, carbohydrate: 18.4, foodDetailId: 'meat', myProperty: 'lunch', id: 14 },
    { foodName: 'Hot Dog', calorie: 247, protein: 10.6, oil: 14.84, carbohydrate: 18.4, foodDetailId: 'meat', myProperty: 'lunch', id: 15 },
    { foodName: 'Cottage cheese', calorie: 103, protein: 4.51, oil: 2.68, carbohydrate: 12.49, foodDetailId: 'cheese', myProperty: 'morning', id: 15 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodDetailId: 'chicken', myProperty: 'dinner', id: 15 },
    { foodName: 'Cottage cheese', calorie: 103, protein: 4.51, oil: 2.68, carbohydrate: 12.49, foodDetailId: 'cheese', myProperty: 'morning', id: 16 },
    { foodName: 'Yoghurt', calorie: 61, protein: 3.47, oil: 3.25, carbohydrate: 4.66, foodDetailId: 'yoghurt', myProperty: 'snack1', id: 16 },
    { foodName: 'Bacon', calorie: 541, protein: 37.04, oil: 41.78, carbohydrate: 1.43, foodDetailId: 'meat', myProperty: 'lunch', id: 16 },
    { foodName: 'Fish', calorie: 84, protein: 17.76, oil: 0.92, carbohydrate: 0, foodDetailId: 'dish', myProperty: 'dinner', id: 16 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodDetailId: 'salad', myProperty: 'snack1', id: 17 },
    { foodName: 'Hot Dog', calorie: 247, protein: 10.6, oil: 14.84, carbohydrate: 18.4, foodDetailId: 'meat', myProperty: 'lunch', id: 17 },
    { foodName: 'French Fries', calorie: 267, protein: 3.88, oil: 13.64, carbohydrate: 33.6, foodDetailId: 'potato', myProperty: 'snack2', id: 17 },
    { foodName: 'Cheese', calorie: 350, protein: 22.21, oil: 26.91, carbohydrate: 4.71, foodDetailId: 'cheese', myProperty: 'morning', id: 17 },
    { foodName: 'Cheese', calorie: 350, protein: 22.21, oil: 26.91, carbohydrate: 4.71, foodDetailId: 'cheese', myProperty: 'morning', id: 18 },
    { foodName: 'French Fries', calorie: 267, protein: 3.88, oil: 13.64, carbohydrate: 33.6, foodDetailId: 'potato', myProperty: 'snack1', id: 18 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodDetailId: 'chicken', myProperty: 'dinner', id: 18 },
    { foodName: 'French Fries', calorie: 267, protein: 3.88, oil: 13.64, carbohydrate: 33.6, foodDetailId: 'potato', myProperty: 'snack1', id: 19 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodDetailId: 'salad', myProperty: 'snack2', id: 19 },
    { foodName: 'Sausages', calorie: 304, protein: 15.09, oil: 26.53, carbohydrate: 0, foodDetailId: 'meat', myProperty: 'morning ', id: 19 },
    { foodName: 'Bacon', calorie: 541, protein: 37.04, oil: 41.78, carbohydrate: 1.43, foodDetailId: 'meat', myProperty: 'lunch', id: 19 },
    { foodName: 'Hamburger', calorie: 254, protein: 11.74, oil: 12.25, carbohydrate: 24.81, foodDetailId: 'hamburger', myProperty: 'dinner', id: 19 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodDetailId: 'salad', myProperty: 'snack1', id: 20 },
    { foodName: 'Pizza', calorie: 276, protein: 12.33, oil: 11.74, carbohydrate: 30.33, foodDetailId: 'pizza', myProperty: 'lunch', id: 20 },
    { foodName: 'Eggs', calorie: 147, protein: 12.58, oil: 9.94, carbohydrate: 0.77, foodDetailId: 'egg', myProperty: 'morning', id: 20 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodDetailId: 'chicken', myProperty: 'dinner', id: 20 },
]

export const ACTIVITY_DATA: ActivityInfo[] = [
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 200, activityEffortUnit: 1, activityStartDate: new Date(2021, 9, 1), activityEndDate: new Date(2021, 9, 1), userId: 1, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 198, activityEffortUnit: 1, activityStartDate: new Date(2021, 10, 2), activityEndDate: new Date(2021, 10, 2), userId: 1, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 236, activityEffortUnit: 1, activityStartDate: new Date(2021, 10, 3), activityEndDate: new Date(2021, 10, 3), userId: 1, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 167, activityEffortUnit: 1, activityStartDate: new Date(2021, 10, 2), activityEndDate: new Date(2021, 10, 2), userId: 2, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 352, activityEffortUnit: 1, activityStartDate: new Date(2021, 10, 3), activityEndDate: new Date(2021, 10, 3), userId: 2, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 3, activityEffortSpent: 85, activityEffortUnit: 12, activityStartDate: new Date(2021, 10, 5), activityEndDate: new Date(2021, 10, 5), userId: 2, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 2, activityEffortSpent: 98, activityEffortUnit: 1, activityStartDate: new Date(2021, 10, 5), activityEndDate: new Date(2021, 10, 5), userId: 2, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 293, activityEffortUnit: 15, activityStartDate: new Date(2021, 1, 4), activityEndDate: new Date(2021, 1, 4), userId: 3, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 3, activityEffortSpent: 63, activityEffortUnit: 15, activityStartDate: new Date(2021, 3, 4), activityEndDate: new Date(2021, 3, 4), userId: 3, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 3, activityEffortSpent: 78, activityEffortUnit: 15, activityStartDate: new Date(2021, 3, 4), activityEndDate: new Date(2021, 3, 4), userId: 3, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 3, activityEffortSpent: 62, activityEffortUnit: 15, activityStartDate: new Date(2021, 3, 4), activityEndDate: new Date(2021, 3, 4), userId: 3, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 150, activityEffortUnit: 25, activityStartDate: new Date(2021, 10, 2), activityEndDate: new Date(2021, 10, 2), userId: 4, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 132, activityEffortUnit: 15, activityStartDate: new Date(2021, 10, 2), activityEndDate: new Date(2021, 10, 2), userId: 4, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 132, activityEffortUnit: 15, activityStartDate: new Date(2021, 10, 2), activityEndDate: new Date(2021, 10, 2), userId: 4, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 4, activityEffortSpent: 87, activityEffortUnit: 23, activityStartDate: new Date(2021, 16, 3), activityEndDate: new Date(2021, 16, 3), userId: 5, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 4, activityEffortSpent: 106, activityEffortUnit: 28, activityStartDate: new Date(2021, 16, 3), activityEndDate: new Date(2021, 16, 3), userId: 5, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 3, activityEffortSpent: 59, activityEffortUnit: 18, activityStartDate: new Date(2021, 16, 5), activityEndDate: new Date(2021, 16, 5), userId: 5, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 3, activityEffortSpent: 83, activityEffortUnit: 1, activityStartDate: new Date(2021, 16, 5), activityEndDate: new Date(2021, 16, 5), userId: 5, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 6, activityEffortSpent: 127, activityEffortUnit: 21, activityStartDate: new Date(2021, 18, 4), activityEndDate: new Date(2021, 18, 4), userId: 6, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 359, activityEffortUnit: 1, activityStartDate: new Date(2021, 18, 4), activityEndDate: new Date(2021, 18, 4), userId: 6, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 114, activityEffortUnit: 15, activityStartDate: new Date(2021, 20, 4), activityEndDate: new Date(2021, 20, 4), userId: 6, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 423, activityEffortUnit: 1, activityStartDate: new Date(2021, 20, 4), activityEndDate: new Date(2021, 20, 4), userId: 6, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 2, activityEffortSpent: 71, activityEffortUnit: 35, activityStartDate: new Date(2021, 2, 5), activityEndDate: new Date(2021, 2, 5), userId: 7, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 2, activityEffortSpent: 89, activityEffortUnit: 42, activityStartDate: new Date(2021, 2, 5), activityEndDate: new Date(2021, 2, 5), userId: 7, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 368, activityEffortUnit: 1, activityStartDate: new Date(2021, 2, 7), activityEndDate: new Date(2021, 2, 7), userId: 7, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 356, activityEffortUnit: 1, activityStartDate: new Date(2021, 6, 14), activityEndDate: new Date(2021, 6, 14), userId: 8, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 398, activityEffortUnit: 1, activityStartDate: new Date(2021, 6, 15), activityEndDate: new Date(2021, 6, 15), userId: 8, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 4, activityEffortSpent: 158, activityEffortUnit: 25, activityStartDate: new Date(2021, 8, 23), activityEndDate: new Date(2021, 8, 23), userId: 9, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 68, activityEffortUnit: 2, activityStartDate: new Date(2021, 8, 23), activityEndDate: new Date(2021, 8, 23), userId: 9, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 326, activityEffortUnit: 1, activityStartDate: new Date(2021, 8, 25), activityEndDate: new Date(2021, 8, 25), userId: 9, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 97, activityEffortUnit: 20, activityStartDate: new Date(2021, 15, 4), activityEndDate: new Date(2021, 15, 4), userId: 10, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 126, activityEffortUnit: 25, activityStartDate: new Date(2021, 15, 4), activityEndDate: new Date(2021, 15, 4), userId: 10, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 93, activityEffortUnit: 22, activityStartDate: new Date(2021, 16, 4), activityEndDate: new Date(2021, 16, 4), userId: 10, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 4, activityEffortSpent: 95, activityEffortUnit: 1, activityStartDate: new Date(2021, 16, 4), activityEndDate: new Date(2021, 16, 4), userId: 10, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 4, activityEffortSpent: 118, activityEffortUnit: 27, activityStartDate: new Date(2021, 6, 7), activityEndDate: new Date(2021, 6, 7), userId: 11, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 6, activityEffortSpent: 149, activityEffortUnit: 20, activityStartDate: new Date(2021, 6, 7), activityEndDate: new Date(2021, 6, 7), userId: 11, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 7, activityEffortSpent: 164, activityEffortUnit: 20, activityStartDate: new Date(2021, 6, 8), activityEndDate: new Date(2021, 6, 8), userId: 11, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 3, activityEffortSpent: 87, activityEffortUnit: 23, activityStartDate: new Date(2021, 5, 24), activityEndDate: new Date(2021, 5, 24), userId: 12, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 3, activityEffortSpent: 93, activityEffortUnit: 1, activityStartDate: new Date(2021, 5, 25), activityEndDate: new Date(2021, 5, 25), userId: 12, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 7, activityEffortSpent: 108, activityEffortUnit: 15, activityStartDate: new Date(2021, 5, 25), activityEndDate: new Date(2021, 5, 25), userId: 12, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 224, activityEffortUnit: 1, activityStartDate: new Date(2021, 11, 1), activityEndDate: new Date(2021, 11, 1), userId: 13, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 254, activityEffortUnit: 1, activityStartDate: new Date(2021, 11, 2), activityEndDate: new Date(2021, 11, 2), userId: 13, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 349, activityEffortUnit: 1, activityStartDate: new Date(2021, 11, 3), activityEndDate: new Date(2021, 11, 3), userId: 13, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 175, activityEffortUnit: 1, activityStartDate: new Date(2021, 8, 6), activityEndDate: new Date(2021, 8, 6), userId: 14, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 319, activityEffortUnit: 1, activityStartDate: new Date(2021, 8, 8), activityEndDate: new Date(2021, 8, 8), userId: 14, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 4, activityEffortSpent: 98, activityEffortUnit: 13, activityStartDate: new Date(2021, 8, 10), activityEndDate: new Date(2021, 8, 10), userId: 14, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 2, activityEffortSpent: 96, activityEffortUnit: 1, activityStartDate: new Date(2021, 8, 10), activityEndDate: new Date(2021, 8, 10), userId: 14, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 6, activityEffortSpent: 126, activityEffortUnit: 17, activityStartDate: new Date(2021, 5, 6), activityEndDate: new Date(2021, 5, 6), userId: 15, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 348, activityEffortUnit: 1, activityStartDate: new Date(2021, 5, 6), activityEndDate: new Date(2021, 5, 6), userId: 15, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 132, activityEffortUnit: 18, activityStartDate: new Date(2021, 5, 7), activityEndDate: new Date(2021, 5, 7), userId: 15, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 456, activityEffortUnit: 1, activityStartDate: new Date(2021, 20, 4), activityEndDate: new Date(2021, 20, 4), userId: 15, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 219, activityEffortUnit: 1, activityStartDate: new Date(2021, 11, 1), activityEndDate: new Date(2021, 11, 1), userId: 16, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 235, activityEffortUnit: 1, activityStartDate: new Date(2021, 11, 2), activityEndDate: new Date(2021, 11, 2), userId: 16, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 1, activityEffortSpent: 325, activityEffortUnit: 1, activityStartDate: new Date(2021, 11, 3), activityEndDate: new Date(2021, 11, 3), userId: 16, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 4, activityEffortSpent: 114, activityEffortUnit: 25, activityStartDate: new Date(2021, 3, 5), activityEndDate: new Date(2021, 3, 5), userId: 17, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 132, activityEffortUnit: 17, activityStartDate: new Date(2021, 3, 5), activityEndDate: new Date(2021, 3, 5), userId: 17, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 7, activityEffortSpent: 171, activityEffortUnit: 20, activityStartDate: new Date(2021, 3, 7), activityEndDate: new Date(2021, 3, 7), userId: 17, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 4, activityEffortSpent: 106, activityEffortUnit: 25, activityStartDate: new Date(2021, 4, 8), activityEndDate: new Date(2021, 4, 8), userId: 18, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 3, activityEffortSpent: 88, activityEffortUnit: 1, activityStartDate: new Date(2021, 4, 8), activityEndDate: new Date(2021, 4, 8), userId: 18, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 7, activityEffortSpent: 124, activityEffortUnit: 25, activityStartDate: new Date(2021, 4, 8), activityEndDate: new Date(2021, 4, 8), userId: 18, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 6, activityEffortSpent: 103, activityEffortUnit: 22, activityStartDate: new Date(2021, 4, 8), activityEndDate: new Date(2021, 4, 8), userId: 19, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 141, activityEffortUnit: 30, activityStartDate: new Date(2021, 4, 8), activityEndDate: new Date(2021, 4, 8), userId: 19, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 84, activityEffortUnit: 20, activityStartDate: new Date(2021, 4, 10), activityEndDate: new Date(2021, 4, 10), userId: 19, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 4, activityEffortSpent: 105, activityEffortUnit: 1, activityStartDate: new Date(2021, 4, 10), activityEndDate: new Date(2021, 4, 10), userId: 19, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 128, activityEffortUnit: 27, activityStartDate: new Date(2021, 2, 6), activityEndDate: new Date(2021, 2, 6), userId: 20, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 6, activityEffortSpent: 141, activityEffortUnit: 19, activityStartDate: new Date(2021, 2, 6), activityEndDate: new Date(2021, 2, 6), userId: 20, user: user, personalEnergyActivityId: 0 },
    { activityType: 0, activityPeriod: 5, activityEffortSpent: 145, activityEffortUnit: 18, activityStartDate: new Date(2021, 2, 6), activityEndDate: new Date(2021, 2, 6), userId: 20, user: user, personalEnergyActivityId: 0 },
]