import { Component } from '@angular/core';

import { EquipmentService } from '@services';

export interface TableElement {
  equipment: string;
  serialNumber: string;
  sector: string;
  nextPreventive: string;
}

@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.scss']
})
export class ServiceOrderComponent {
  displayedColumns: string[] = ['equipament', 'serialNumber', 'sector', 'nextPreventive'];
  dataSource;

  save(el) {
    this.equipmentService.saveProc(el.serialNumber, el.equipament).subscribe((res) => {
      this.equipmentService.getPreventives().subscribe((res) => {
        this.dataSource = [];
        for(const item of res as any) {
          if (item.serialNumber !== el.serialNumber) {
            this.dataSource.push(item);
          }
        }
      });
    });
  }

  ngOnInit() {
    this.equipmentService.getPreventives().subscribe((res) => {
      this.dataSource = res as any;
    });
  }

  constructor(private equipmentService: EquipmentService) { }
}
