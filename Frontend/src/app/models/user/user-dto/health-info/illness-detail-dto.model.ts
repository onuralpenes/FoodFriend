export interface IllnessListDto {
    illnessList: IllnessDetailDto[];
}

export interface IllnessDetailDto {
    illnessType: number;
    illnessName: string;
}