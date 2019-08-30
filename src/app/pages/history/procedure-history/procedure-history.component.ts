import { Component, OnInit } from '@angular/core';

import { EquipmentService } from '@services';

export interface TableElement {
  equipament: string;
  defect: string;
  sector: string;
  serialNumber: string;
}

@Component({
  selector: 'app-procedure-history',
  templateUrl: './procedure-history.component.html',
  styleUrls: ['./procedure-history.component.scss']
})
export class ProcedureHistoryComponent implements OnInit {
  displayedColumns: string[] = ['equipament', 'defect', 'sector', 'serialNumber'];
  dataSource;

  ngOnInit() {
    this.equipmentService.getHistoryDefects().subscribe((res) => {
      this.dataSource = res as any;
    });
  }

  constructor(private equipmentService: EquipmentService) { }
}
