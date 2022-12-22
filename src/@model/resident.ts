export interface Resident {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  maritalStatus: "single" | "taken" | "married" | "divorced" | "jones";
  dependents: string;
  birthDate: string;
}
