import { Component } from '@angular/core';

export interface TableElement {
  equipment: string;
  serialNumber: number;
  sector: string;
  serviceOrder: string;
  solicitation: string;
  solicitationDate: Date;
}

const TABLE_DATA: TableElement[] = [
  {
    equipment: 'Equipamento',
    serialNumber: 1,
    sector: 'Setor',
    serviceOrder: 'Ordem de Serviço',
    solicitation: 'Solicitante',
    solicitationDate: new Date()
  },
];

@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.scss']
})
export class ServiceOrderComponent {
  displayedColumns: string[] = ['equipment', 'serialNumber', 'sector', 'serviceOrder', 'solicitation', 'solicitationDate'];
  dataSource = TABLE_DATA;
}
