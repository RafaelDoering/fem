import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { PreventiveModalComponent } from './preventive-modal/preventive-modal.component';

export interface TableElement {
  equipment: string;
  serialNumber: string;
  sector: string;
  nextPreventive: Date;
}

const TABLE_DATA: TableElement[] = [
  {
    equipment: 'Esfigmomanometro Aneroide Manual',
    serialNumber: '3675328',
    sector: 'UTI Adulta',
    nextPreventive: new Date()
  }
];

@Component({
  selector: 'app-preventive',
  templateUrl: './preventive.component.html',
  styleUrls: ['./preventive.component.scss']
})
export class PreventiveComponent {
  displayedColumns: string[] = [
    'equipment',
    'serialNumber',
    'sector',
    'nextPreventive'
  ];
  dataSource = TABLE_DATA;

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(el) {
    const dialogRef = this.dialog.open(PreventiveModalComponent, {
      width: '320px',
      data: { element: el }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
