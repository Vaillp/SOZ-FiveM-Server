import { CylinderZone } from '../polyzone/cylinder.zone';
import { Vector4 } from '../polyzone/vector';

export type Radar = {
    props: Vector4;
    zone: CylinderZone;
    isOnline: boolean;
    speed: number;
    entity?: number;
    disableTime?: number;
};
