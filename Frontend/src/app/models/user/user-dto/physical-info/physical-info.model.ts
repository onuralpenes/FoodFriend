import { DisabledList } from "./disabled-info.model";

export interface PhysicalInfoDto {
    height:	number;
    weight:	number;
    disabledStatus:	boolean;
    disabledInfo: DisabledList;
}