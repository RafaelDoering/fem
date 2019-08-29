import { Component } from '@angular/core';

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
  nextPreventive: Date;
}

const TABLE_DATA: TableElement[] = [
  {
    id: 3,
    name: 'Esfigmomanometro Aneroide Manual',
    producer: 'PREMIUM',
    model: 'Manual',
    anvisaNumber: '80275310022',
    function: 'Diagnóstico',
    serialNumber: '3675328',
    importance: 'C',
    criticality: 'Baixa',
    nextPreventive: new Date()
  }
];

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
  dataSource = TABLE_DATA;
}
