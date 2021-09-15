export interface AllergyListDto {
    allergyList: AllergyDetailDto[];
}

export interface AllergyDetailDto {
    allergyType: number;
    allergyName: string;
}