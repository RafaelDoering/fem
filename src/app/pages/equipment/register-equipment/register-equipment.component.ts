import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  });

  public onSubmit() {
  }
}
