export const ApartmentStatus = {
  AVAILABLE: "available",
  RENTED: "rented",
  SOLD: "sold",
  UNAVAILABLE: "unavailable",
};

export const ApartmentDirection = {
  NORTH: 1,
  NORTHEAST: 2,
  EAST: 3,
  SOUTHEAST: 4,
  SOUTH: 5,
  SOUTHWEST: 6,
  WEST: 7,
  NORTHWEST: 8,
};

export const ApartmentRentSchema = {
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
};

export class ApartmentUnit {
  constructor(
    unitCode,
    floor,
    rooms,
    direction,
    status,
    balcony,
    furnished,
    rentPrice,
    rentSchema,
    sellPrice
  ) {
    // this.id = ""; // (autogenerated at backend)
    this.unitCode = unitCode || "";
    this.floor = floor || null;
    this.rooms = rooms || "";
    this.direction = direction || ""; // (value from ApartmentDirection)
    this.status = status || ""; // (value from ApartmentStatus)
    this.balcony = balcony || "";
    this.furnished = furnished || "";
    this.rentPrice = rentPrice || 0;
    this.rentSchema = rentSchema || ""; // (value from ApartmentRentSchema)
    this.sellPrice = sellPrice || 0;
  }
}
