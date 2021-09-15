export interface AllergyList {
    allergyList: AllergyDetail[];
}

export interface AllergyDetail {
    allergyDetailId: number;
    allergyType: number;
    allergyName: string;
}