export interface Transaction {
  id: string;
  unitId: string;
  residentId: string;
  transactionDate: Date;
  rentStartDate?: Date;
  rentEndDate?: Date;
  billingDate?: Date;
  period?: number;
  price: number;
  profit: number;
}
