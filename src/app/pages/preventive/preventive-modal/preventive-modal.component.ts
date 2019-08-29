import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-preventive-modal',
  templateUrl: './preventive-modal.component.html',
  styleUrls: ['./preventive-modal.component.scss']
})
export class PreventiveModalComponent {
  public preventiveModalForm = new FormGroup({
    nextPreventive: new FormControl(''),
  });

  public onSubmit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
