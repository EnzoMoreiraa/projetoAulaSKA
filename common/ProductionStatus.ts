import { ProductionStatus_e, ProductionStatusColor_e } from './enums/enum';

export class ProductionStatus {
    status: ProductionStatus_e;
    color: ProductionStatusColor_e;

    constructor(status?: ProductionStatus_e, color?: ProductionStatusColor_e) {
        this.status = status ?? ProductionStatus_e.WaitingProduction; // status! funciona também
        this.color = color ?? ProductionStatusColor_e.WaitingProduction; // color! funciona também
    }
}