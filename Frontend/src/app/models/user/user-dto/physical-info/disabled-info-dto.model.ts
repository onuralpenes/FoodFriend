export interface DisabledListDto {
    disabledList: DisabledDetailDto[];
}

export interface DisabledDetailDto {
    disabledType: string;
    disabledRatio: number;
}