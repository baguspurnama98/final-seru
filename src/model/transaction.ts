import { Resident } from "./resident";
import { Unit } from "./units";

export interface Transaction {
  id: string;
  transactionDate: Date;
  rentStartDate?: Date;
  rentEndDate?: Date;
  billingDate?: Date;
  period?: string;
  price: number|string;
  profit: number;
  residentId?: string | null;
  resident?: Resident | null;
  unitId?: string;
  unit?: Unit | null;
  schema?: string;
}
