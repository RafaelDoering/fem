import { AuthService } from './auth.service';
import { EquipmentService } from './equipment.service';

export * from './auth.service';
export * from './equipment.service';

export const services = [AuthService, EquipmentService];
