import { Resident } from "./resident";

export interface Unit {
  unitCode: string;
  floor: number;
  rooms: string;
  direction: string;
  status: "available" | "rented" | "sold" | "unavailable";
  balcony: boolean;
  furnished: boolean;
  rentPrice: number;
  rentSchema: string;
  sellPrice: number;
  residentId: string;
  id: string;
  resident: Resident | null;
}
