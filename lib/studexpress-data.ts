export interface TripListing {
  id: number;
  initials: string;
  provider: string;
  rating: string;
  reviews: string;
  comfort?: string;
  route: string;
  departure: string;
  seatsLeft: number;
  price: string;
  vehicle: string;
}

export interface TripFormField {
  id: string;
  label: string;
  placeholder: string;
}

export const TRIP_FORM_FIELDS: TripFormField[] = [
  {
    id: "departure-location",
    label: "Departure Location",
    placeholder: "Landmark University",
  },
  { id: "vehicle-type", label: "Vehicle type", placeholder: "Car" },
  { id: "load-allowance", label: "Load Allowance", placeholder: "1 Box and 1Bag" },
  { id: "trip-duration", label: "Trip Duration", placeholder: "8 hours" },
  {
    id: "destination",
    label: "Destination",
    placeholder: "Lugbe Park View, Abuja",
  },
  { id: "price-per-seat", label: "Price Per Seat", placeholder: "#18000" },
  { id: "total-seat", label: "Total seat", placeholder: "" },
  {
    id: "comfort-style",
    label: "Comfort Style",
    placeholder: "AC & Refresh Certified",
  },
  { id: "departure-date", label: "Departure Date", placeholder: "04-08-2026" },
];

const BASE_TRIPS: Omit<TripListing, "id">[] = [
  {
    initials: "GT",
    provider: "God’s Time Transport",
    rating: "4.8",
    reviews: "234",
    comfort: "AC & Refresh Ride",
    route: "Landmark University  - Ibadan",
    departure: "8:20 AM",
    seatsLeft: 3,
    price: "#19,800",
    vehicle: "Car",
  },
  {
    initials: "PE",
    provider: "Peace Express",
    rating: "4.7",
    reviews: "259",
    route: "Covenant University - Abuja",
    departure: "7:10 AM",
    seatsLeft: 2,
    price: "#18,200",
    vehicle: "Car",
  },
  {
    initials: "GT",
    provider: "God’s Time Transport",
    rating: "4.8",
    reviews: "234",
    comfort: "AC & Refresh Ride",
    route: "Landmark University  - Ibadan",
    departure: "8:20 AM",
    seatsLeft: 3,
    price: "#19,800",
    vehicle: "Car",
  },
  {
    initials: "GT",
    provider: "God’s Time Transport",
    rating: "4.8",
    reviews: "234",
    comfort: "AC & Refresh Ride",
    route: "Landmark University  - Ibadan",
    departure: "8:20 AM",
    seatsLeft: 3,
    price: "#19,800",
    vehicle: "Car",
  },
];

export const TRIP_BOOKING_DEFAULTS = {
  duration: "12h 54mins",
  loadAllowance: "1 Box & 1 Bag",
  serviceFee: 150,
};

export const TRIP_LISTINGS: TripListing[] = Array.from(
  { length: 20 },
  (_, index) => ({ id: index + 1, ...BASE_TRIPS[index % BASE_TRIPS.length] }),
);