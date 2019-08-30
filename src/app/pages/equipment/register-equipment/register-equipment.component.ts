import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { EquipmentService } from '@services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-equipment',
  templateUrl: './register-equipment.component.html',
  styleUrls: ['./register-equipment.component.scss']
})
export class RegisterEquipmentComponent {
  public registerEquipmentForm = new FormGroup({
    name: new FormControl(''),
    anvisaNumber: new FormControl(''),
    criticality: new FormControl(''),
    function: new FormControl(''),
    model: new FormControl(''),
    producer: new FormControl(''),
    importance: new FormControl(''),
    serialNumber: new FormControl(''),
    patternEquipment: new FormControl(''),
    sector: new FormControl(''),
    nextPreventive: new FormControl('')
  });

  public onSubmit() {
    const form = this.registerEquipmentForm.value;
    const preventiveDate = new Date(form.nextPreventive);
    const date = `${preventiveDate.getDate().toString()}-${(preventiveDate.getMonth()+1).toString()}-${preventiveDate.getFullYear().toString()}`

    this.equipmentService
      .postEquipment(
        form.name,
        form.anvisaNumber,
        form.criticality,
        form.function,
        form.model,
        form.producer,
        form.importance,
        form.serialNumber,
        date,
        form.patternEquipment,
        form.sector
      )
      .subscribe(res => {
        this.router.navigateByUrl('/equipment/list')
      });
  }

  constructor(
    private equipmentService: EquipmentService,
    private router: Router
  ) {}
}
