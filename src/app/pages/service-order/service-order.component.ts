import { Component } from '@angular/core';

export interface TableElement {
  equipment: string;
  serialNumber: string;
  sector: string;
  os: string;
  dateOS: Date;
}

const TABLE_DATA: TableElement[] = [
  {
    equipment: 'Esfigmomanometro Aneroide Manual',
    serialNumber: '3675328',
    sector: 'UTI Adulta',
    os: 'Treinamento',
    dateOS: new Date()
  },
];

@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.scss']
})
export class ServiceOrderComponent {
  displayedColumns: string[] = ['equipment', 'serialNumber', 'sector', 'os', 'dateOS'];
  dataSource = TABLE_DATA;
}
