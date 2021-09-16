import { DisabledListDto } from "./disabled-info-dto.model";

export interface PhysicalInfoDto {
    height:	number;
    weight:	number;
    disabledStatus:	boolean;
    disabledInfo: DisabledListDto;
}