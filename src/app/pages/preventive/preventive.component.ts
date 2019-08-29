import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { PreventiveModalComponent } from './preventive-modal/preventive-modal.component';

import { EquipmentService } from '@services';

export interface TableElement {
  equipament: string;
  serialNumber: string;
  sector: string;
  nextPreventive: string;
}

@Component({
  selector: 'app-preventive',
  templateUrl: './preventive.component.html',
  styleUrls: ['./preventive.component.scss']
})
export class PreventiveComponent {
  displayedColumns: string[] = [
    'equipament',
    'serialNumber',
    'sector',
    'nextPreventive'
  ];
  dataSource;

  animal: string;
  name: string;
  
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
  
  ngOnInit() {
    this.equipmentService.getPreventives(1).subscribe((res) => {
      console.log(res);
      this.dataSource = res as any;
    });
  }

  constructor(private equipmentService: EquipmentService, public dialog: MatDialog) { }
}
