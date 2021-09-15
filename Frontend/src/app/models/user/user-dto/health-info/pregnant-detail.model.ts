export interface PregnantList {
    pregnantList: PregnantDetailDto[];
}

export interface PregnantDetailDto {
    pregnantStartDate: Date,
    pregnantEndDate: Date,
}