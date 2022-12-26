import { Resident } from "./resident";

export interface Unit {
  unitCode: string;
  floor: number;
  rooms: string;
  direction: string;
  status: "available" | "rented" | "sold" | "unavailable";
  balcony: string;
  furnished: string;
  rentPrice: number;
  rentSchema: string;
  sellPrice: number;
  residentId?: string | null;
  id: string;
  resident?: Resident | null;
}
