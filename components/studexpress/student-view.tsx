"use client";

import { useState } from "react";
import { BookingDialog } from "@/components/studexpress/booking-dialog";
import { Pagination } from "@/components/studexpress/pagination";
import { SiteShell } from "@/components/studexpress/site-shell";
import { TripCard } from "@/components/studexpress/trip-card";
import { TRIP_LISTINGS } from "@/lib/studexpress-data";

const TRIPS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(TRIP_LISTINGS.length / TRIPS_PER_PAGE);

export function StudentView() {
  const [page, setPage] = useState(1);
  const [selectedTripId, setSelectedTripId] = useState<number | null>(null);
  const [bookedIds, setBookedIds] = useState<number[]>([]);

  const visibleTrips = TRIP_LISTINGS.slice(
    (page - 1) * TRIPS_PER_PAGE,
    page * TRIPS_PER_PAGE,
  );
  const selectedTrip =
    TRIP_LISTINGS.find((trip) => trip.id === selectedTripId) ?? null;

  return (
    <SiteShell>
      <main className="flex flex-col items-center px-6 pb-28 pt-14 md:pt-[60px]">
        <div className="flex max-w-[660px] flex-col items-center text-center">
          <h1 className="font-display text-[40px] font-bold leading-[1.2] tracking-[-0.01em] text-foreground md:text-[54px]">
            Available Trips to your Destination
          </h1>
          <p className="mt-6 text-[18px] leading-relaxed text-muted-foreground">
            Choose from verified providers, offering safe and affordable rides
            to your destination and book your seat in seconds.
          </p>
        </div>

        <ul className="mt-20 grid w-full max-w-[1282px] grid-cols-1 justify-items-center gap-x-[66px] gap-y-24 md:grid-cols-2 xl:grid-cols-3">
          {visibleTrips.map((trip) => (
            <li key={trip.id} className="flex w-full justify-center">
              <TripCard
                trip={trip}
                isBooked={bookedIds.includes(trip.id)}
                onBook={setSelectedTripId}
              />
            </li>
          ))}
        </ul>

        <div className="mt-20 w-full">
          <Pagination
            page={page}
            totalPages={TOTAL_PAGES}
            onPageChange={setPage}
          />
        </div>

        <BookingDialog
          trip={selectedTrip}
          onOpenChange={(open) => {
            if (!open) setSelectedTripId(null);
          }}
          onBooked={(tripId) => setBookedIds((ids) => [...ids, tripId])}
        />
      </main>
    </SiteShell>
  );
}