import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  public getEquipment(id: number) {
    return this.httpClient.post(`${environment.backendURL}equipament/find`, {
      id: id
    });
  }

  public getDefects(id: number) {
    return this.httpClient.post(
      `${environment.backendURL}equipament/findAllDefects`,
      { id: id }
    );
  }

  public getPreventives(id: number) {
    return this.httpClient.post(
      `${environment.backendURL}equipament/findPreventivas`,
      { id: id }
    );
  }

  public postEquipment(
    name: string,
    anvisaNumber: string,
    criticality: string,
    functio: string,
    model: string,
    producer: string,
    importance: string,
    serialNumber: string,
    nextPreventive: Date,
    patternEquipment: string,
    sector: string,
    hospitalId: number
  ) {
    return this.httpClient.post(`${environment.backendURL}equipament/new`, {
      name,
      anvisaNumber,
      criticality,
      function: functio,
      model,
      producer,
      importance,
      serialNumber,
      nextPreventive,
      patternEquipament: patternEquipment,
      sector,
      hospitalId
    });
  }

  constructor(private httpClient: HttpClient) {}
}
