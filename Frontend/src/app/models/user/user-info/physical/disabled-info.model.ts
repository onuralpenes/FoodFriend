export interface DisabledList {
    disabledList: DisabledDetail[];
}

export interface DisabledDetail {
    disabledTypeId: number;
    disabledType: string;
    disabledRatio: number;
}