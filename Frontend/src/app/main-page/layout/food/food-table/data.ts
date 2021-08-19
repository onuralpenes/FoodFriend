//Where to get the nutritional data from the nutrient table.

export interface Food {
    foodName: string;
    calorie: number;
    protein: number;
    oil: number;
    carbohydrate: number;
    foodCategory: string;
    meal: string;
}

export const FOOD_DATA: Food[] = [
    { meal: 'morning', foodCategory: 'yoghurt', foodName: 'Frozen yogurt', calorie: 159, oil: 6, carbohydrate: 24, protein: 4 },
    { meal: 'dinner', foodCategory: 'bread', foodName: 'Ice cream sandwich', calorie: 237, oil: 9, carbohydrate: 37, protein: 4 },
    { meal: 'lunch', foodCategory: 'meal', foodName: 'Eclair', calorie: 262, oil: 16, carbohydrate: 24, protein: 6 },
    { meal: 'snack1', foodCategory: 'cake', foodName: 'Cupcake', calorie: 305, oil: 4, carbohydrate: 67, protein: 4 },
    { meal: 'snack2', foodCategory: 'vegetable', foodName: 'Gingerbread', calorie: 356, oil: 16, carbohydrate: 49, protein: 4 },
]
