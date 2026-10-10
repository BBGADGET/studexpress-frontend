import type { Metadata } from "next";
import { AddTripForm } from "@/components/studexpress/add-trip-form";
import { SiteShell } from "@/components/studexpress/site-shell";

export const metadata: Metadata = { title: "StudExpress" };

export default function HomePage() {
  return (
    <SiteShell>
      <main className="flex flex-col items-center px-6 pb-24 pt-14 md:pt-[60px]">
        <h1 className="text-center font-display text-[40px] font-bold leading-tight tracking-[-0.01em] text-foreground md:text-[54px]">
          Add Trips with Ease
        </h1>
        <p className="mt-4 text-center text-[18px] text-muted-foreground">
          Easily add and edit your trips with no stress under 2 minutes
        </p>
        <div className="mt-16 flex w-full justify-center">
          <AddTripForm />
        </div>
      </main>
    </SiteShell>
  );
}