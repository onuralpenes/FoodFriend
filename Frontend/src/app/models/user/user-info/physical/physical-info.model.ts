import { DisabledList } from "./disabled-info.model";

export interface PhysicalInfo {
    physicalInfoId:	number;
    height:	number;
    weight:	number;
    disabledStatus:	boolean;
    disabledInfo: DisabledList;
}