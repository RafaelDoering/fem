import { Component, OnInit } from '@angular/core';

import { EquipmentService } from '@services';

export interface TableElement {
  equipament: string;
  serialNumber: string;
  sector: string;
  defect: string;
  dateDefect: string;
}

@Component({
  selector: 'app-defects',
  templateUrl: './defects.component.html',
  styleUrls: ['./defects.component.scss']
})
export class DefectsComponent implements OnInit {
  displayedColumns: string[] = ['equipament', 'serialNumber', 'sector', 'defect', 'dateDefect'];
  dataSource;

  save(el) {
    console.log(el);
    this.equipmentService.saveDef(el.serialNumber, el.defect).subscribe((res) => {
      this.equipmentService.getDefects().subscribe((res) => {
        this.dataSource = [];
        for(const item of res as any) {
          if (item.serialNumber !== el.serialNumber) {
            this.dataSource.push(item);
          }
        }
      });
    });
  }

  ngOnInit() {
    this.equipmentService.getDefects().subscribe((res) => {
      this.dataSource = res as any;
    });
  }

  constructor(private equipmentService: EquipmentService) { }
}
