import { Component, Input } from '@angular/core';
import { ProductionStatus } from '../../../../common/ProductionStatus';
import { ProductionStatus_e, ProductionStatusColor_e } from '../../../../common/enums/enum';

@Component({
  selector: 'app-production-control',
  imports: [],
  templateUrl: './production-control.html',
  styleUrl: './production-control.scss'
})
export class ProductionControl {
  @Input() title: string = 'Indefinido';

  @Input() icon: string | undefined;
  @Input() productionOrderQuantity: number | undefined;
  @Input() productionStatus: ProductionStatus | any;
  @Input() productionOrderKey: string | any;

  value: number = 0;
  valuePercentage: number = 0;
  ProductionStatus_e: typeof ProductionStatus_e = ProductionStatus_e;
  ProductionStatusColor_e: typeof ProductionStatusColor_e = ProductionStatusColor_e;
}