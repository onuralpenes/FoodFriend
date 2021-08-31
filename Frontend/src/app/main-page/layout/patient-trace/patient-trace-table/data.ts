export interface User {
    name: string;
    surname: string;
    birthdate: Date;
    weight: number;
    height: number;
    bloodType: string;
    smoking: string;
    alcohol: string;
    exercise: string;
    id: number;
}
export interface Food {
    foodName: string;
    calorie: number;
    protein: number;
    oil: number;
    carbohydrate: number;
    foodCategory: string;
    meal: string;
    id: number;
}
export interface Activity {
    activityType: string;
    activityPeriod: number;
    activityEffortSpent: number;
    activityEfforUnit: number;
    activityStartDate: Date;
    activityEndDate: Date;
    id: number;
}

export const USER_DATA: User[] = [
    { name: 'Ali', surname: 'Akman', birthdate: new Date(1995, 10, 8), weight: 75, height: 175, bloodType: 'A+', smoking: 'Yes', alcohol: 'No', exercise: 'Yes', id: 1 },
    { name: 'Malaika', surname: 'Connor', birthdate: new Date(2000, 5, 14), weight: 100, height: 195, bloodType: 'A-', smoking: 'No', alcohol: 'Yes', exercise: 'No', id: 2 },
    { name: 'Anaya', surname: 'Cleveland', birthdate: new Date(1999, 2, 25), weight: 82, height: 163, bloodType: '0+', smoking: 'No', alcohol: 'No', exercise: 'No', id: 3 },
    { name: 'Jad', surname: 'Myers', birthdate: new Date(1985, 11, 7), weight: 65, height: 182, bloodType: 'AB-', smoking: 'Yes', alcohol: 'Yes', exercise: 'No', id: 4 },
    { name: 'Heath', surname: 'Rankin', birthdate: new Date(1989, 2, 16), weight: 79, height: 165, bloodType: 'B+', smoking: 'Yes', alcohol: 'No', exercise: 'Yes', id: 5 },
    { name: 'Jovan', surname: 'Fuentes', birthdate: new Date(1999, 12, 2), weight: 66, height: 185, bloodType: 'A+', smoking: 'Yes', alcohol: 'Yes', exercise: 'No', id: 6 },
    { name: 'Ammar', surname: 'Caldwell', birthdate: new Date(1986, 7, 7), weight: 89, height: 165, bloodType: '0+', smoking: 'Yes', alcohol: 'No', exercise: 'No', id: 7 },
    { name: 'Vera', surname: 'Gardner', birthdate: new Date(1972, 4, 20), weight: 96, height: 171, bloodType: 'A-', smoking: 'Yes', alcohol: 'Yes', exercise: 'No', id: 8 },
    { name: 'Camden', surname: 'Rosales', birthdate: new Date(1964, 9, 27), weight: 62, height: 158, bloodType: 'AB+', smoking: 'No', alcohol: 'Yes', exercise: 'No', id: 9 },
    { name: 'Carly', surname: 'Mckinney', birthdate: new Date(1974, 9, 6), weight: 78, height: 159, bloodType: '0-', smoking: 'Yes', alcohol: 'No', exercise: 'No', id: 10 },
    { name: 'Esther', surname: 'John', birthdate: new Date(1981, 9, 15), weight: 63, height: 182, bloodType: 'A+', smoking: 'No', alcohol: 'Yes', exercise: 'No', id: 11 },
    { name: 'Alexandria', surname: 'Alvarez', birthdate: new Date(1982, 5, 31), weight: 96, height: 161, bloodType: 'B-', smoking: 'Yes', alcohol: 'Yes', exercise: 'No', id: 12 },
    { name: 'Ruairi', surname: 'Sheppard', birthdate: new Date(1983, 5, 20), weight: 65, height: 181, bloodType: 'AB+', smoking: 'No', alcohol: 'No', exercise: 'evet', id: 12 },
    { name: 'Artur', surname: 'Cassidy', birthdate: new Date(2002, 1, 30), weight: 74, height: 174, bloodType: '0-', smoking: 'Yes', alcohol: 'No', exercise: 'Yes', id: 13 },
    { name: 'Felicia', surname: 'Harvey', birthdate: new Date(1998, 7, 9), weight: 89, height: 172, bloodType: 'AB+', smoking: 'No', alcohol: 'No', exercise: 'No', id: 14 },
    { name: 'Shaunie', surname: 'Bonilla', birthdate: new Date(1983, 7, 21), weight: 52, height: 176, bloodType: 'B+', smoking: 'Yes', alcohol: 'No', exercise: 'No', id: 15 },
    { name: 'Bradlee', surname: 'Ramsey', birthdate: new Date(1989, 2, 4), weight: 65, height: 165, bloodType: '0-', smoking: 'Yes', alcohol: 'No', exercise: 'Yes', id: 16 },
    { name: 'Nel', surname: 'Nunez', birthdate: new Date(1996, 5, 13), weight: 102, height: 164, bloodType: 'AB-', smoking: 'Yes', alcohol: 'Yes', exercise: 'No', id: 17 },
    { name: 'Conrad', surname: 'Justice', birthdate: new Date(1963, 1, 7), weight: 96, height: 177, bloodType: 'A+', smoking: 'Yes', alcohol: 'Yes', exercise: 'No', id: 18 },
    { name: 'Danyl', surname: 'Mays', birthdate: new Date(1986, 7, 19), weight: 69, height: 169, bloodType: 'A-', smoking: 'Yes', alcohol: 'No', exercise: 'Yes', id: 19 },
    { name: 'Ester', surname: 'Expósito', birthdate: new Date(2000, 1, 26), weight: 55, height: 166, bloodType: '0+', smoking: 'Yes', alcohol: 'Yes', exercise: 'Yes', id: 20 },
]

export const FOOD_DATA: Food[] = [
    { foodName: 'Sausages', calorie: 304, protein: 15.09, oil: 26.53, carbohydrate: 0, foodCategory: 'meat', meal: 'morning ', id: 1 },
    { foodName: 'Salad', calorie: 17, protein: 1.52, oil: 0.24, carbohydrate: 3.2, foodCategory: 'Salad', meal: 'dinner', id: 1 },
    { foodName: 'Fish', calorie: 84, protein: 17.76, oil: 0.92, carbohydrate: 0, foodCategory: 'dish', meal: 'lunch', id: 1 },
    { foodName: 'Sandwich', calorie: 304, protein: 9.75, oil: 14.56, carbohydrate: 32.88, foodCategory: 'Sandwich', meal: 'morning', id: 2 },
    { foodName: 'Beef Steak', calorie: 252, protein: 27.29, oil: 15.01, carbohydrate: 0, foodCategory: 'meat', meal: 'lunch', id: 2 },
    { foodName: 'Yoghurt', calorie: 61, protein: 3.47, oil: 3.25, carbohydrate: 4.66, foodCategory: 'yoghurt', meal: 'snack1', id: 2 },
    { foodName: 'Chicken Kebab', calorie: 151, protein: 9.09, oil: 3.67, carbohydrate: 19.83, foodCategory: 'chicken', meal: 'dinner', id: 2 },
    { foodName: 'Beef Steak', calorie: 252, protein: 27.29, oil: 15.01, carbohydrate: 0, foodCategory: 'meat', meal: 'lunch', id: 3 },
    { foodName: 'Tuna Steak', calorie: 136, protein: 31, oil: 1.1, carbohydrate: 0, foodCategory: 'meat', meal: 'dinner', id: 3 },
    { foodName: 'Tuna Steak', calorie: 136, protein: 31, oil: 1.1, carbohydrate: 0, foodCategory: 'meat', meal: 'dinner', id: 4 },
    { foodName: 'Hamburger', calorie: 254, protein: 11.74, oil: 12.25, carbohydrate: 24.81, foodCategory: 'hamburger', meal: 'lunch', id: 4 },
    { foodName: 'Cottage cheese', calorie: 103, protein: 4.51, oil: 2.68, carbohydrate: 12.49, foodCategory: 'cheese', meal: 'morning', id: 4 },
    { foodName: 'Fish', calorie: 84, protein: 17.76, oil: 0.92, carbohydrate: 0, foodCategory: 'dish', meal: 'lunch', id: 5 },
    { foodName: 'Rice', calorie: 129, protein: 2.66, oil: 0.28, carbohydrate: 27.9, foodCategory: 'Rice', meal: 'dinner', id: 5 },
    { foodName: 'Eggs', calorie: 147, protein: 12.58, oil: 9.94, carbohydrate: 0.77, foodCategory: 'egg', meal: 'morning', id: 5 },
    { foodName: 'Rice', calorie: 129, protein: 2.66, oil: 0.28, carbohydrate: 27.9, foodCategory: 'Rice', meal: 'dinner', id: 6 },
    { foodName: 'Spaghetti', calorie: 158, protein: 5.8, oil: 0.93, carbohydrate: 30.86, foodCategory: 'pasta', meal: 'lunch', id: 6 },
    { foodName: 'French Fries', calorie: 267, protein: 3.88, oil: 13.64, carbohydrate: 33.6, foodCategory: 'potato', meal: 'snack2', id: 6 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodCategory: 'salad', meal: 'snack1', id: 6 },
    { foodName: 'Spaghetti', calorie: 158, protein: 5.8, oil: 0.93, carbohydrate: 30.86, foodCategory: 'pasta', meal: 'lunch', id: 7 },
    { foodName: 'Eggs', calorie: 147, protein: 12.58, oil: 9.94, carbohydrate: 0.77, foodCategory: 'egg', meal: 'morning', id: 7 },
    { foodName: 'Chicken Kebab', calorie: 151, protein: 9.09, oil: 3.67, carbohydrate: 19.83, foodCategory: 'chicken', meal: 'dinner', id: 7 },
    { foodName: 'Yoghurt', calorie: 61, protein: 3.47, oil: 3.25, carbohydrate: 4.66, foodCategory: 'yoghurt', meal: 'snack1', id: 7 },
    { foodName: 'French Fries', calorie: 267, protein: 3.88, oil: 13.64, carbohydrate: 33.6, foodCategory: 'potato', meal: 'snack2', id: 7 },
    { foodName: 'Pizza', calorie: 276, protein: 12.33, oil: 11.74, carbohydrate: 30.33, foodCategory: 'pizza', meal: 'lunch', id: 8 },
    { foodName: 'Sausages', calorie: 304, protein: 15.09, oil: 26.53, carbohydrate: 0, foodCategory: 'meat', meal: 'morning ', id: 8 },
    { foodName: 'Hamburger', calorie: 254, protein: 11.74, oil: 12.25, carbohydrate: 24.81, foodCategory: 'hamburger', meal: 'lunch', id: 9 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodCategory: 'salad', meal: 'snack1', id: 9 },
    { foodName: 'Eggs', calorie: 147, protein: 12.58, oil: 9.94, carbohydrate: 0.77, foodCategory: 'egg', meal: 'morning', id: 10 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodCategory: 'chicken', meal: 'lunch', id: 10 },
    { foodName: 'Yoghurt', calorie: 61, protein: 3.47, oil: 3.25, carbohydrate: 4.66, foodCategory: 'yoghurt', meal: 'snack1', id: 10 },
    { foodName: 'Sausages', calorie: 304, protein: 15.09, oil: 26.53, carbohydrate: 0, foodCategory: 'meat', meal: 'morning ', id: 11 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodCategory: 'chicken', meal: 'lunch', id: 11 },
    { foodName: 'Fish', calorie: 84, protein: 17.76, oil: 0.92, carbohydrate: 0, foodCategory: 'dish', meal: 'dinner', id: 11 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodCategory: 'chicken', meal: 'lunch', id: 12 },
    { foodName: 'Chicken Kebab', calorie: 151, protein: 9.09, oil: 3.67, carbohydrate: 19.83, foodCategory: 'chicken', meal: 'dinner', id: 12 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodCategory: 'salad', meal: 'morning', id: 12 },
    { foodName: 'Bacon', calorie: 541, protein: 37.04, oil: 41.78, carbohydrate: 1.43, foodCategory: 'meat', meal: 'lunch', id: 13 },
    { foodName: 'Hot Dog', calorie: 247, protein: 10.6, oil: 14.84, carbohydrate: 18.4, foodCategory: 'meat', meal: 'dinner', id: 13 },
    { foodName: 'Cheese', calorie: 350, protein: 22.21, oil: 26.91, carbohydrate: 4.71, foodCategory: 'cheese', meal: 'morning', id: 13 },
    { foodName: 'Chicken Kebab', calorie: 151, protein: 9.09, oil: 3.67, carbohydrate: 19.83, foodCategory: 'chicken', meal: 'dinner', id: 14 },
    { foodName: 'Sausages', calorie: 304, protein: 15.09, oil: 26.53, carbohydrate: 0, foodCategory: 'meat', meal: 'morning ', id: 14 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodCategory: 'salad', meal: 'snack1', id: 14 },
    { foodName: 'Hot Dog', calorie: 247, protein: 10.6, oil: 14.84, carbohydrate: 18.4, foodCategory: 'meat', meal: 'lunch', id: 14 },
    { foodName: 'Hot Dog', calorie: 247, protein: 10.6, oil: 14.84, carbohydrate: 18.4, foodCategory: 'meat', meal: 'lunch', id: 15 },
    { foodName: 'Cottage cheese', calorie: 103, protein: 4.51, oil: 2.68, carbohydrate: 12.49, foodCategory: 'cheese', meal: 'morning', id: 15 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodCategory: 'chicken', meal: 'dinner', id: 15 },
    { foodName: 'Cottage cheese', calorie: 103, protein: 4.51, oil: 2.68, carbohydrate: 12.49, foodCategory: 'cheese', meal: 'morning', id: 16 },
    { foodName: 'Yoghurt', calorie: 61, protein: 3.47, oil: 3.25, carbohydrate: 4.66, foodCategory: 'yoghurt', meal: 'snack1', id: 16 },
    { foodName: 'Bacon', calorie: 541, protein: 37.04, oil: 41.78, carbohydrate: 1.43, foodCategory: 'meat', meal: 'lunch', id: 16 },
    { foodName: 'Fish', calorie: 84, protein: 17.76, oil: 0.92, carbohydrate: 0, foodCategory: 'dish', meal: 'dinner', id: 16 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodCategory: 'salad', meal: 'snack1', id: 17 },
    { foodName: 'Hot Dog', calorie: 247, protein: 10.6, oil: 14.84, carbohydrate: 18.4, foodCategory: 'meat', meal: 'lunch', id: 17 },
    { foodName: 'French Fries', calorie: 267, protein: 3.88, oil: 13.64, carbohydrate: 33.6, foodCategory: 'potato', meal: 'snack2', id: 17 },
    { foodName: 'Cheese', calorie: 350, protein: 22.21, oil: 26.91, carbohydrate: 4.71, foodCategory: 'cheese', meal: 'morning', id: 17 },
    { foodName: 'Cheese', calorie: 350, protein: 22.21, oil: 26.91, carbohydrate: 4.71, foodCategory: 'cheese', meal: 'morning', id: 18 },
    { foodName: 'French Fries', calorie: 267, protein: 3.88, oil: 13.64, carbohydrate: 33.6, foodCategory: 'potato', meal: 'snack1', id: 18 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodCategory: 'chicken', meal: 'dinner', id: 18 },
    { foodName: 'French Fries', calorie: 267, protein: 3.88, oil: 13.64, carbohydrate: 33.6, foodCategory: 'potato', meal: 'snack1', id: 19 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodCategory: 'salad', meal: 'snack2', id: 19 },
    { foodName: 'Sausages', calorie: 304, protein: 15.09, oil: 26.53, carbohydrate: 0, foodCategory: 'meat', meal: 'morning ', id: 19 },
    { foodName: 'Bacon', calorie: 541, protein: 37.04, oil: 41.78, carbohydrate: 1.43, foodCategory: 'meat', meal: 'lunch', id: 19 },
    { foodName: 'Hamburger', calorie: 254, protein: 11.74, oil: 12.25, carbohydrate: 24.81, foodCategory: 'hamburger', meal: 'dinner', id: 19 },
    { foodName: 'Caesar Salad', calorie: 170, protein: 5.03, oil: 14.17, carbohydrate: 6.52, foodCategory: 'salad', meal: 'snack1', id: 20 },
    { foodName: 'Pizza', calorie: 276, protein: 12.33, oil: 11.74, carbohydrate: 30.33, foodCategory: 'pizza', meal: 'lunch', id: 20 },
    { foodName: 'Eggs', calorie: 147, protein: 12.58, oil: 9.94, carbohydrate: 0.77, foodCategory: 'egg', meal: 'morning', id: 20 },
    { foodName: 'Roast chicken', calorie: 216, protein: 17.14, oil: 15.85, carbohydrate: 0, foodCategory: 'chicken', meal: 'dinner', id: 20 },
]

export const ACTIVITY_DATA: Activity[] = [
    { activityType: 'Swimming', activityPeriod: 1, activityEffortSpent: 200, activityEfforUnit: 1, activityStartDate: new Date(2021, 9, 1), activityEndDate: new Date(2021, 9, 1), id: 1 },
    { activityType: 'Dancing', activityPeriod: 1, activityEffortSpent: 198, activityEfforUnit: 1, activityStartDate: new Date(2021, 10, 2), activityEndDate: new Date(2021, 10, 2), id: 1 },
    { activityType: 'Socker', activityPeriod: 1, activityEffortSpent: 236, activityEfforUnit: 1, activityStartDate: new Date(2021, 10, 3), activityEndDate: new Date(2021, 10, 3), id: 1 },
    { activityType: 'Dancing', activityPeriod: 1, activityEffortSpent: 167, activityEfforUnit: 1, activityStartDate: new Date(2021, 10, 2), activityEndDate: new Date(2021, 10, 2), id: 2 },
    { activityType: 'socker', activityPeriod: 1, activityEffortSpent: 352, activityEfforUnit: 1, activityStartDate: new Date(2021, 10, 3), activityEndDate: new Date(2021, 10, 3), id: 2 },
    { activityType: 'Lift weights', activityPeriod: 3, activityEffortSpent: 85, activityEfforUnit: 12, activityStartDate: new Date(2021, 10, 5), activityEndDate: new Date(2021, 10, 5), id: 2 },
    { activityType: 'Plank', activityPeriod: 2, activityEffortSpent: 98, activityEfforUnit: 1, activityStartDate: new Date(2021, 10, 5), activityEndDate: new Date(2021, 10, 5), id: 2 },
    { activityType: 'basketball', activityPeriod: 1, activityEffortSpent: 293, activityEfforUnit:15, activityStartDate: new Date(2021, 1, 4), activityEndDate: new Date(2021, 1, 4), id: 3 },
    { activityType: ' Push-up', activityPeriod: 3, activityEffortSpent: 63, activityEfforUnit: 15, activityStartDate: new Date(2021, 3, 4), activityEndDate: new Date(2021, 3, 4), id: 3 },
    { activityType: ' Crunch ', activityPeriod: 3, activityEffortSpent: 78, activityEfforUnit: 15, activityStartDate: new Date(2021, 3, 4), activityEndDate: new Date(2021, 3, 4), id: 3 },
    { activityType: 'Squat', activityPeriod: 3, activityEffortSpent: 62, activityEfforUnit: 15, activityStartDate: new Date(2021, 3, 4), activityEndDate: new Date(2021, 3, 4), id: 3 },
    { activityType: ' Push-up', activityPeriod: 5, activityEffortSpent: 150, activityEfforUnit: 25, activityStartDate: new Date(2021, 10, 2), activityEndDate: new Date(2021, 10, 2), id: 4 },
    { activityType: 'Lift weights', activityPeriod: 5, activityEffortSpent: 132, activityEfforUnit: 15, activityStartDate: new Date(2021, 10, 2), activityEndDate: new Date(2021, 10, 2), id: 4 },
    { activityType: 'Squat Twist-Jumps', activityPeriod: 5, activityEffortSpent: 132, activityEfforUnit: 15, activityStartDate: new Date(2021, 10, 2), activityEndDate: new Date(2021, 10, 2), id: 4 },
    { activityType: ' Crunch ', activityPeriod: 4, activityEffortSpent: 87, activityEfforUnit: 23, activityStartDate: new Date(2021, 16, 3), activityEndDate: new Date(2021, 16, 3), id: 5 },
    { activityType: 'Squat', activityPeriod: 4, activityEffortSpent: 106, activityEfforUnit: 28, activityStartDate: new Date(2021, 16, 3), activityEndDate: new Date(2021, 16, 3), id: 5 },
    { activityType: 'Lift weights', activityPeriod: 3, activityEffortSpent: 59, activityEfforUnit: 18, activityStartDate: new Date(2021, 16, 5), activityEndDate: new Date(2021, 16, 5), id: 5 },
    { activityType: 'Plank', activityPeriod: 3, activityEffortSpent: 83, activityEfforUnit: 1, activityStartDate: new Date(2021, 16, 5), activityEndDate: new Date(2021, 16, 5), id: 5 },
    { activityType: 'Squat', activityPeriod: 6, activityEffortSpent: 127, activityEfforUnit: 21, activityStartDate: new Date(2021, 18, 4), activityEndDate: new Date(2021, 18, 4), id: 6 },
    { activityType: 'Running', activityPeriod: 1, activityEffortSpent: 359, activityEfforUnit: 1, activityStartDate: new Date(2021, 18, 4), activityEndDate: new Date(2021, 18, 4), id: 6 },
    { activityType: 'Lift weights', activityPeriod: 5, activityEffortSpent: 114, activityEfforUnit: 15, activityStartDate: new Date(2021, 20, 4), activityEndDate: new Date(2021, 20, 4), id: 6 },
    { activityType: 'cycling', activityPeriod: 1, activityEffortSpent: 423, activityEfforUnit:1, activityStartDate: new Date(2021, 20, 4), activityEndDate: new Date(2021, 20, 4), id: 6 },
    { activityType: ' Squat Twist-Jumps', activityPeriod: 2, activityEffortSpent: 71, activityEfforUnit: 35, activityStartDate: new Date(2021, 2, 5), activityEndDate: new Date(2021, 2, 5), id: 7 },
    { activityType: ' Mountain Climbers', activityPeriod: 2, activityEffortSpent: 89, activityEfforUnit: 42, activityStartDate: new Date(2021, 2, 5), activityEndDate: new Date(2021, 2, 5), id: 7 },
    { activityType: 'Running', activityPeriod: 1, activityEffortSpent: 368, activityEfforUnit: 1, activityStartDate: new Date(2021, 2, 7), activityEndDate: new Date(2021, 2, 7), id: 7 },
    { activityType: 'Running', activityPeriod: 1, activityEffortSpent: 356, activityEfforUnit: 1, activityStartDate: new Date(2021, 6, 14), activityEndDate: new Date(2021, 6, 14), id: 8 },
    { activityType: 'cycling', activityPeriod: 1, activityEffortSpent: 398, activityEfforUnit: 1, activityStartDate: new Date(2021, 6, 15), activityEndDate: new Date(2021, 6, 15), id: 8 },
    { activityType: ' Mountain Climbers', activityPeriod: 4, activityEffortSpent: 158, activityEfforUnit: 25, activityStartDate: new Date(2021, 8, 23), activityEndDate: new Date(2021, 8, 23), id: 9 },
    { activityType: 'Plank', activityPeriod: 1, activityEffortSpent: 68, activityEfforUnit: 2, activityStartDate: new Date(2021, 8, 23), activityEndDate: new Date(2021, 8, 23), id: 9 },
    { activityType: 'Running', activityPeriod: 1, activityEffortSpent: 326, activityEfforUnit: 1, activityStartDate: new Date(2021, 8, 25), activityEndDate: new Date(2021, 8, 25), id: 9 },
    { activityType: ' Crunch ', activityPeriod: 5, activityEffortSpent: 97, activityEfforUnit: 20, activityStartDate: new Date(2021, 15, 4), activityEndDate: new Date(2021, 15, 4), id: 10 },
    { activityType: 'Squat', activityPeriod: 5, activityEffortSpent: 126, activityEfforUnit: 25, activityStartDate: new Date(2021, 15, 4), activityEndDate: new Date(2021, 15, 4), id: 10 },
    { activityType: 'Lift weights', activityPeriod: 5, activityEffortSpent: 93, activityEfforUnit: 22, activityStartDate: new Date(2021, 16, 4), activityEndDate: new Date(2021, 16, 4), id: 10 },
    { activityType: 'Plank', activityPeriod: 4, activityEffortSpent: 95, activityEfforUnit: 1, activityStartDate: new Date(2021, 16, 4), activityEndDate: new Date(2021, 16, 4), id: 10 },
    { activityType: ' Push-up', activityPeriod: 4, activityEffortSpent: 118, activityEfforUnit: 27, activityStartDate: new Date(2021, 6, 7), activityEndDate: new Date(2021, 6, 7), id: 11 },
    { activityType: 'Lift weights', activityPeriod: 6, activityEffortSpent: 149, activityEfforUnit: 20, activityStartDate: new Date(2021, 6, 7), activityEndDate: new Date(2021, 6, 7), id: 11 },
    { activityType: 'Squat Twist-Jumps', activityPeriod: 7, activityEffortSpent: 164, activityEfforUnit: 20, activityStartDate: new Date(2021, 6, 8), activityEndDate: new Date(2021, 6, 8), id: 11 },
    { activityType: ' Mountain Climbers', activityPeriod: 3, activityEffortSpent: 87, activityEfforUnit: 23, activityStartDate: new Date(2021, 5, 24), activityEndDate: new Date(2021, 5, 24), id: 12 },
    { activityType: 'Plank', activityPeriod: 3, activityEffortSpent: 93, activityEfforUnit: 1, activityStartDate: new Date(2021, 5, 25), activityEndDate: new Date(2021, 5, 25), id: 12 },
    { activityType: ' Crunch ', activityPeriod: 7, activityEffortSpent: 108, activityEfforUnit: 15, activityStartDate: new Date(2021, 5, 25), activityEndDate: new Date(2021, 5, 25), id: 12 },
    { activityType: 'Swimming', activityPeriod: 1, activityEffortSpent: 224, activityEfforUnit: 1, activityStartDate: new Date(2021, 11, 1), activityEndDate: new Date(2021, 11, 1), id: 13 },
    { activityType: 'Dancing', activityPeriod: 1, activityEffortSpent: 254, activityEfforUnit: 1, activityStartDate: new Date(2021, 11, 2), activityEndDate: new Date(2021, 11, 2), id: 13 },
    { activityType: 'Socker', activityPeriod: 1, activityEffortSpent: 349, activityEfforUnit: 1, activityStartDate: new Date(2021, 11, 3), activityEndDate: new Date(2021, 11, 3), id: 13 },
    { activityType: 'Dancing', activityPeriod: 1, activityEffortSpent: 175, activityEfforUnit: 1, activityStartDate: new Date(2021, 8, 6), activityEndDate: new Date(2021, 8, 6), id: 14 },
    { activityType: 'socker', activityPeriod: 1, activityEffortSpent: 319, activityEfforUnit: 1, activityStartDate: new Date(2021, 8, 8), activityEndDate: new Date(2021, 8, 8), id: 14 },
    { activityType: 'Lift weights', activityPeriod: 4, activityEffortSpent: 98, activityEfforUnit: 13, activityStartDate: new Date(2021, 8, 10), activityEndDate: new Date(2021, 8, 10), id: 14 },
    { activityType: 'Plank', activityPeriod: 2, activityEffortSpent: 96, activityEfforUnit: 1, activityStartDate: new Date(2021, 8, 10), activityEndDate: new Date(2021, 8, 10), id: 14 },
    { activityType: 'Squat', activityPeriod: 6, activityEffortSpent: 126, activityEfforUnit: 17, activityStartDate: new Date(2021, 5, 6), activityEndDate: new Date(2021, 5, 6), id: 15 },
    { activityType: 'Running', activityPeriod: 1, activityEffortSpent: 348, activityEfforUnit: 1, activityStartDate: new Date(2021, 5, 6), activityEndDate: new Date(2021, 5, 6), id: 15 },
    { activityType: 'Lift weights', activityPeriod: 5, activityEffortSpent: 132, activityEfforUnit: 18, activityStartDate: new Date(2021, 5, 7), activityEndDate: new Date(2021, 5, 7), id: 15 },
    { activityType: 'cycling', activityPeriod: 1, activityEffortSpent: 456, activityEfforUnit:1, activityStartDate: new Date(2021, 20, 4), activityEndDate: new Date(2021, 20, 4), id: 15 },
    { activityType: 'Swimming', activityPeriod: 1, activityEffortSpent: 219, activityEfforUnit: 1, activityStartDate: new Date(2021, 11, 1), activityEndDate: new Date(2021, 11, 1), id: 16 },
    { activityType: 'Dancing', activityPeriod: 1, activityEffortSpent: 235, activityEfforUnit: 1, activityStartDate: new Date(2021, 11, 2), activityEndDate: new Date(2021, 11, 2), id: 16 },
    { activityType: 'Socker', activityPeriod: 1, activityEffortSpent: 325, activityEfforUnit: 1, activityStartDate: new Date(2021, 11, 3), activityEndDate: new Date(2021, 11, 3), id: 16 },
    { activityType: ' Push-up', activityPeriod: 4, activityEffortSpent: 114, activityEfforUnit: 25, activityStartDate: new Date(2021, 3, 5), activityEndDate: new Date(2021, 3, 5), id: 17 },
    { activityType: 'Lift weights', activityPeriod: 5, activityEffortSpent: 132, activityEfforUnit: 17, activityStartDate: new Date(2021, 3, 5), activityEndDate: new Date(2021, 3, 5), id: 17 },
    { activityType: 'Squat Twist-Jumps', activityPeriod: 7, activityEffortSpent: 171, activityEfforUnit: 20, activityStartDate: new Date(2021, 3, 7), activityEndDate: new Date(2021, 3, 7), id: 17 },
    { activityType: ' Mountain Climbers', activityPeriod: 4, activityEffortSpent: 106, activityEfforUnit: 25, activityStartDate: new Date(2021, 4, 8), activityEndDate: new Date(2021, 4, 8), id: 18 },
    { activityType: 'Plank', activityPeriod: 3, activityEffortSpent: 88, activityEfforUnit: 1, activityStartDate: new Date(2021, 4, 8), activityEndDate: new Date(2021, 4, 8), id: 18 },
    { activityType: ' Crunch ', activityPeriod: 7, activityEffortSpent: 124, activityEfforUnit: 25, activityStartDate: new Date(2021, 4, 8), activityEndDate: new Date(2021, 4, 8), id: 18 },
    { activityType: ' Crunch ', activityPeriod: 6, activityEffortSpent: 103, activityEfforUnit: 22, activityStartDate: new Date(2021, 4, 8), activityEndDate: new Date(2021, 4, 8), id: 19 },
    { activityType: 'Squat', activityPeriod: 5, activityEffortSpent: 141, activityEfforUnit: 30, activityStartDate: new Date(2021, 4, 8), activityEndDate: new Date(2021, 4, 8), id: 19 },
    { activityType: 'Lift weights', activityPeriod: 5, activityEffortSpent: 84, activityEfforUnit: 20, activityStartDate: new Date(2021, 4, 10), activityEndDate: new Date(2021, 4, 10), id: 19 },
    { activityType: 'Plank', activityPeriod: 4, activityEffortSpent: 105, activityEfforUnit: 1, activityStartDate: new Date(2021, 4, 10), activityEndDate: new Date(2021, 4, 10), id: 19 },
    { activityType: ' Push-up', activityPeriod: 5, activityEffortSpent: 128, activityEfforUnit: 27, activityStartDate: new Date(2021, 2, 6), activityEndDate: new Date(2021, 2, 6), id: 20 },
    { activityType: 'Lift weights', activityPeriod: 6, activityEffortSpent: 141, activityEfforUnit: 19, activityStartDate: new Date(2021, 2, 6), activityEndDate: new Date(2021, 2, 6), id: 20 },
    { activityType: 'Squat Twist-Jumps', activityPeriod: 5, activityEffortSpent: 145, activityEfforUnit: 18, activityStartDate: new Date(2021, 2, 6), activityEndDate: new Date(2021, 2, 6), id: 20 },
]