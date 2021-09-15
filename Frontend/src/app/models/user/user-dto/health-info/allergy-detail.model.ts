export interface AllergyList {
    allergyList: AllergyDetailDto[];
}

export interface AllergyDetailDto {
    allergyType: number;
    allergyName: string;
}