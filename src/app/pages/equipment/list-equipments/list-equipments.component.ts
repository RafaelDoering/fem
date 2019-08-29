import { Component } from '@angular/core';

import { EquipmentService } from '@services';

export interface TableElement {
  id: number;
  name: string;
  producer: string;
  model: string;
  anvisaNumber: string;
  function: string;
  serialNumber: string;
  importance: string;
  criticality: string;
  nextPreventive: string;
}

@Component({
  selector: 'app-list-equipments',
  templateUrl: './list-equipments.component.html',
  styleUrls: ['./list-equipments.component.scss']
})
export class ListEquipmentsComponent {
  displayedColumns: string[] = [
    'name',
    'producer',
    'model',
    'anvisaNumber',
    'function',
    'serialNumber',
    'importance',
    'criticality',
    'nextPreventive'
  ];
  dataSource;

  ngOnInit() {
    this.equipmentService.getEquipment(1).subscribe((res) => {
      this.dataSource = res as any;
    });
  }

  constructor(private equipmentService: EquipmentService) { }
}
