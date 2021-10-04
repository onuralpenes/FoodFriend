import { DisabledDetail } from "./disabled-detail.model";

export interface PhysicalInfo {
    physicalInfoId: number;
    userId: number;
    height: number;
    weight: number;
    disabledStatus: boolean;
    disabilityDescription: string;
    disabledDetails: DisabledDetail[];
}