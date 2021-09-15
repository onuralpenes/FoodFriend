export interface IllnessList {
    illnessList: IllnessDetailDto[];
}

export interface IllnessDetailDto {
    illnessType: number;
    illnessName: string;
}