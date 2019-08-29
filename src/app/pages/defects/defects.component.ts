import { Component, OnInit } from '@angular/core';

import { EquipmentService } from '@services';

export interface TableElement {
  equipament: string;
  serialNumber: string;
  sector: string;
  defect: string;
  dateDefect: Date;
}

@Component({
  selector: 'app-defects',
  templateUrl: './defects.component.html',
  styleUrls: ['./defects.component.scss']
})
export class DefectsComponent implements OnInit {
  displayedColumns: string[] = ['equipament', 'serialNumber', 'sector', 'defect', 'dateDefect'];
  dataSource;

  ngOnInit() {
    this.equipmentService.getDefects(1).subscribe((res) => {
      this.dataSource = res as any;
    });
  }

  constructor(private equipmentService: EquipmentService) { }
}
