export interface DisabledList {
    disabledList: DisabledDetailDto[];
}

export interface DisabledDetailDto {
    disabledType: string;
    disabledRatio: number;
}