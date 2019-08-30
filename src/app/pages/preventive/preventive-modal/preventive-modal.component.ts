import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EquipmentService } from '@services';

@Component({
  selector: 'app-preventive-modal',
  templateUrl: './preventive-modal.component.html',
  styleUrls: ['./preventive-modal.component.scss']
})
export class PreventiveModalComponent {
  public preventiveModalForm = new FormGroup({
    nextPreventive: new FormControl(''),
  });

  public onSubmit() {
    const preventiveDate = new Date(this.preventiveModalForm.value.nextPreventive);
    const date = `${preventiveDate.getDate().toString()}-${(preventiveDate.getMonth()+1).toString()}-${preventiveDate.getFullYear().toString()}`

    this.equipmentService.nextPreventive(this.data.element.serialNumber, date).subscribe((res) => {
      this.onNoClick();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private equipmentService: EquipmentService
  ) {}
}
