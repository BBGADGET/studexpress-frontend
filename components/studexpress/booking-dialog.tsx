"use client";

import { useState } from "react";
import { IconX } from "@tabler/icons-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  TRIP_BOOKING_DEFAULTS,
  type TripListing,
} from "@/lib/studexpress-data";

interface BookingDialogProps {
  trip: TripListing | null;
  onOpenChange: (open: boolean) => void;
  onBooked: (tripId: number) => void;
}

function formatNaira(amount: number) {
  return `#${amount.toLocaleString("en-US")}`;
}

function parsePrice(price: string) {
  return Number(price.replace(/[^\d]/g, ""));
}

const inputClass =
  "h-10 rounded-lg border-[#e4e4e2] bg-white px-3 text-sm text-[#1a1a1a] placeholder:text-[#8a8a8a]";

export function BookingDialog({
  trip,
  onOpenChange,
  onBooked,
}: BookingDialogProps) {
  return (
    <Dialog open={trip !== null} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[440px] gap-0 overflow-y-auto rounded-2xl border-0 bg-white p-6 sm:max-w-[440px]"
      >
        {trip ? <BookingForm trip={trip} onBooked={onBooked} /> : null}
      </DialogContent>
    </Dialog>
  );
}

function BookingForm({
  trip,
  onBooked,
}: {
  trip: TripListing;
  onBooked: (tripId: number) => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const ticketPrice = parsePrice(trip.price);
  const serviceFee = TRIP_BOOKING_DEFAULTS.serviceFee;
  const total = ticketPrice + serviceFee;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Front-end only for now: payment will be connected to the backend later.
    setSubmitted(true);
    onBooked(trip.id);
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-6 w-2 rounded-full bg-primary" />
          <DialogTitle className="font-display text-lg font-semibold text-[#1a1a1a]">
            Book Your Seat
          </DialogTitle>
        </div>
        <DialogClose
          aria-label="Close"
          className="flex size-7 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-primary"
        >
          <IconX size={14} aria-hidden="true" />
        </DialogClose>
      </div>
      <DialogDescription className="sr-only">
        Enter passenger details and pay to book this trip.
      </DialogDescription>

      <section
        aria-label="Trip summary"
        className="mt-5 rounded-xl bg-[#eaf4fe] p-4 font-bold text-primary"
      >
        <h3 className="text-[15px] font-bold text-primary">Trip Summary</h3>
        <div className="mt-2 space-y-1 text-[13px] font-bold text-primary">
          <p>{trip.route}</p>
          <p>
            Today, {trip.departure} , {TRIP_BOOKING_DEFAULTS.duration}
          </p>
          <p>Load Allowance: {TRIP_BOOKING_DEFAULTS.loadAllowance}</p>
        </div>
        <div className="mt-3 flex items-end justify-between gap-3">
          <p className="text-base font-bold text-primary">{trip.price}</p>
          <button
            type="button"
            className="text-[11px] font-bold text-destructive underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-primary"
          >
            Cancellation Policy
          </button>
        </div>
      </section>

      <form className="mt-5 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="passenger-name" className="text-[13px] font-bold text-[#1a1a1a]">
            Passenger Details
          </Label>
          <Input
            id="passenger-name"
            name="passengerName"
            required
            maxLength={120}
            placeholder="Teminy Adetola"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-[13px] font-bold text-[#1a1a1a]">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone-number" className="text-[13px] font-bold text-[#1a1a1a]">
            Phone Number
          </Label>
          <Input
            id="phone-number"
            name="phone"
            type="tel"
            required
            maxLength={20}
            placeholder="+234 703 443 4326"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="emergency-contact" className="text-[13px] font-bold text-[#1a1a1a]">
            Emergency Contact
          </Label>
          <Input
            id="emergency-contact"
            name="emergencyContact"
            type="tel"
            required
            maxLength={20}
            placeholder="+234 703 312 223P"
            className={inputClass}
          />
        </div>

        <section
          aria-label="Price breakdown"
          className="mt-1 rounded-xl bg-[#eaf4fe] p-4 text-[13px] text-[#1a1a1a]"
        >
          <div className="flex justify-between">
            <span>Ticket Price</span>
            <span className="font-bold">{formatNaira(ticketPrice)}</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span>Service Fee</span>
            <span className="font-bold">{formatNaira(serviceFee)}</span>
          </div>
          <div className="mt-3 flex justify-between border-t border-[#c9dcef] pt-3">
            <span>Total:</span>
            <span className="font-bold text-primary">{formatNaira(total)}</span>
          </div>
        </section>

        {submitted ? (
          <>
            <p role="status" className="text-[13px] text-primary">
              Details received. Payment is not connected yet, so nothing has
              been charged.
            </p>
            <DialogClose asChild>
              <button
                type="button"
                className="h-11 w-full rounded-lg bg-primary text-base text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Close
              </button>
            </DialogClose>
          </>
        ) : (
          <button
            type="submit"
            className="h-11 w-full rounded-lg bg-primary text-base text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Pay
          </button>
        )}
      </form>
    </>
  );
}