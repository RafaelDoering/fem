import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { PreventiveComponent } from './pages/preventive/preventive.component';
import { DefectsComponent } from './pages/defects/defects.component';
import { ServiceOrderComponent } from './pages/service-order/service-order.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'preventive', component: PreventiveComponent },
  { path: 'defects', component: DefectsComponent },
  { path: 'service-order', component: ServiceOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
