"use client";

import { IconCar, IconSnowflake, IconStar } from "@tabler/icons-react";

import type { TripListing } from "@/lib/studexpress-data";

interface TripCardProps {
  trip: TripListing;
  isBooked: boolean;
  onBook: (id: number) => void;
}

export function TripCard({ trip, isBooked, onBook }: TripCardProps) {
  return (
    <article className="flex w-full max-w-[383px] flex-col rounded-2xl border border-[#e4e4e2] bg-white py-[22px] pl-10 pr-8 shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-[35px]">
        <div
          aria-hidden="true"
          className="flex size-20 shrink-0 items-center justify-center rounded-md bg-[#4da6ff] font-display text-[28px] font-bold text-white"
        >
          {trip.initials}
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="font-display text-lg font-medium text-foreground">
            {trip.provider}
          </h3>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <IconStar aria-hidden="true" size={14} className="text-[#f5a524]" />
            {trip.rating} ({trip.reviews} reviews)
          </p>
          {trip.comfort ? (
            <p className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <IconSnowflake
                aria-hidden="true"
                size={14}
                className="text-[#2f8fe0]"
              />
              {trip.comfort}
            </p>
          ) : null}
        </div>
      </div>

      <h4 className="mt-5 text-[18px] font-medium text-foreground">
        {trip.route}
      </h4>

      <div className="mt-3 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <p className="text-[15px] text-muted-foreground">
            Departure: {trip.departure}
          </p>
          <p className="text-[15px] text-destructive">
            {trip.seatsLeft} Seats Left
          </p>
          <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#c9e6fb] px-2.5 py-1 text-[11px] text-foreground">
            <IconCar aria-hidden="true" size={14} />
            {trip.vehicle}
          </span>
        </div>

        <div className="flex flex-col items-end gap-2">
          <p className="text-[22px] text-primary">{trip.price}</p>
          <button
            type="button"
            disabled={isBooked}
            onClick={() => onBook(trip.id)}
            className="h-9 min-w-[85px] whitespace-nowrap rounded-[4px] bg-primary px-3 text-[13px] text-primary-foreground transition-opacity md:h-8 sm:text-sm hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:bg-muted disabled:text-muted-foreground disabled:opacity-100"
          >
            {isBooked ? "Booked" : "Book Now"}
          </button>
        </div>
      </div>
    </article>
  );
}