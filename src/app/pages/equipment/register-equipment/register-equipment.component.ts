import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { EquipmentService } from '@services';

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
    sector: new FormControl('')
  });

  public onSubmit() {
    const form = this.registerEquipmentForm.value;

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
        new Date(),
        form.patternEquipment,
        form.sector,
        1
      )
      .subscribe(res => {
        console.log(res);
      });
  }

  constructor(private equipmentService: EquipmentService) {}
}
