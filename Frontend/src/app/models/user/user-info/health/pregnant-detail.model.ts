export interface PregnantList {
    pregnantList: PregnantDetail[];
}

export interface PregnantDetail {
    pregnantDetailId: number,
    pregnantStartDate: Date,
    pregnantEndDate: Date,
}