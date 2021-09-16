export interface PregnantListDto {
    pregnantList: PregnantDetailDto[];
}

export interface PregnantDetailDto {
    pregnantStartDate: Date,
    pregnantEndDate: Date,
}