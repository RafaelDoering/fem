import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  public getEquipment() {
    return this.httpClient.post(`${environment.backendURL}equipament/find`, {
      id: this.authService.user.hospitalId
    });
  }

  public getDefects() {
    return this.httpClient.post(
      `${environment.backendURL}equipament/findAllDefects`,
      { id: this.authService.user.hospitalId }
    );
  }

  public getServiceOrders() {
    return this.httpClient.post(
      `${environment.backendURL}equipament/findOS`,
      { id: this.authService.user.hospitalId }
    );
  }

  public getHistoryDefects() {
    return this.httpClient.post(
      `${environment.backendURL}equipament/findHistDef`,
      { id: this.authService.user.hospitalId }
    );
  }

  public getHistoryProcedure() {
    return this.httpClient.post(
      `${environment.backendURL}equipament/findHistProc`,
      { id: this.authService.user.hospitalId }
    );
  }

  public getPreventives() {
    return this.httpClient.post(
      `${environment.backendURL}equipament/findPreventivas`,
      { id: this.authService.user.hospitalId }
    );
  }

  public nextPreventive(
    serialNumber: string,
    nextPreventive: string
  ) {
    return this.httpClient.post(
      `${environment.backendURL}equipament/update`,
      { 
        serialNumber,
        nextPreventive,
        id: this.authService.user.hospitalId
      }
    );
  }

  public saveDef(
    serialNumber: string,
    defect: string
  ) {
    return this.httpClient.post(
      `${environment.backendURL}equipament/saveHistDef`,
      { 
        serialNumber,
        defect,
        id: this.authService.user.hospitalId
      }
    );
  }

  public saveProc(
    serialNumber: string,
    nameOs: string
  ) {
    return this.httpClient.post(
      `${environment.backendURL}equipament/saveHistProc`,
      { 
        serialNumber,
        nameOs,
        id: this.authService.user.hospitalId
      }
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
    nextPreventive: string,
    patternEquipment: string,
    sector: string,
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
    });
  }

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}
}
