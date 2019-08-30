import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { PreventiveComponent } from './pages/preventive/preventive.component';
import { DefectsComponent } from './pages/defects/defects.component';
import { ServiceOrderComponent } from './pages/service-order/service-order.component';
import { RegisterEquipmentComponent } from './pages/equipment/register-equipment/register-equipment.component';
import { ListEquipmentsComponent } from './pages/equipment/list-equipments/list-equipments.component';
import { PreventiveModalComponent } from './pages/preventive/preventive-modal/preventive-modal.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { DefectsHistoryComponent } from './pages/history/defects-history/defects-history.component';
import { ProcedureHistoryComponent } from './pages/history/procedure-history/procedure-history.component';
import { ModalErrorComponent } from './pages/login/modal-error/modal-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PreventiveComponent,
    DefectsComponent,
    ServiceOrderComponent,
    RegisterEquipmentComponent,
    ListEquipmentsComponent,
    PreventiveModalComponent,
    DefectsHistoryComponent,
    ProcedureHistoryComponent,
    ModalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent],
  entryComponents: [PreventiveModalComponent, ModalErrorComponent]
})
export class AppModule {}
