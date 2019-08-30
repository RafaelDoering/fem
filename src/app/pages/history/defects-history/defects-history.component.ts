import { Component, OnInit } from '@angular/core';

import { EquipmentService } from '@services';

export interface TableElement {
  equipament: string;
  defect: string;
  sector: string;
  serialNumber: string;
}

@Component({
  selector: 'app-defects-history',
  templateUrl: './defects-history.component.html',
  styleUrls: ['./defects-history.component.scss']
})
export class DefectsHistoryComponent implements OnInit {
  displayedColumns: string[] = ['equipament', 'defect', 'sector', 'serialNumber'];
  dataSource;

  ngOnInit() {
    this.equipmentService.getHistoryDefects().subscribe((res) => {
      this.dataSource = res as any;
    });
  }

  constructor(private equipmentService: EquipmentService) { }
}
