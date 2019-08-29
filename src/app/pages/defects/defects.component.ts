import { Component } from '@angular/core';

export interface TableElement {
  equipment: string;
  serialNumber: string;
  sector: string;
  defect: string;
  dateDefect: Date;
}

const TABLE_DATA: TableElement[] = [
  {
    equipment: 'Esfigmomanometro Aneroide Manual',
    serialNumber: '3675328',
    sector: 'UTI Adulta',
    defect: 'Falha Intrésica',
    dateDefect: new Date()
  },
];

@Component({
  selector: 'app-defects',
  templateUrl: './defects.component.html',
  styleUrls: ['./defects.component.scss']
})
export class DefectsComponent {
  displayedColumns: string[] = ['equipment', 'serialNumber', 'sector', 'defect', 'dateDefect'];
  dataSource = TABLE_DATA;
}
