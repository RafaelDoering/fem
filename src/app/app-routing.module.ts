import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterEquipmentComponent } from './pages/equipment/register-equipment/register-equipment.component';
import { ListEquipmentsComponent } from './pages/equipment/list-equipments/list-equipments.component';
import { PreventiveComponent } from './pages/preventive/preventive.component';
import { DefectsComponent } from './pages/defects/defects.component';
import { ServiceOrderComponent } from './pages/service-order/service-order.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'equipment/register', component: RegisterEquipmentComponent },
  { path: 'equipment/list', component: ListEquipmentsComponent },
  { path: 'preventive', component: PreventiveComponent },
  { path: 'defects', component: DefectsComponent },
  { path: 'service-order', component: ServiceOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
