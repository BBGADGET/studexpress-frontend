"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TRIP_FORM_FIELDS } from "@/lib/studexpress-data";

export function AddTripForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [isAdded, setIsAdded] = useState(false);

  function handleChange(id: string, value: string) {
    setValues((current) => ({ ...current, [id]: value }));
    setIsAdded(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsAdded(true);
  }

  return (
    <section className="w-full max-w-[748px] rounded-[18px] bg-white px-6 pb-10 pt-[26px] shadow-[0_10px_40px_rgba(0,0,0,0.07)]">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-[30px] w-3 rounded-full bg-black" />
        <h2 className="font-display text-[22px] font-semibold text-[#1a1a1a]">
          Add Trip
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 grid grid-cols-1 gap-x-12 gap-y-[38px] md:mt-[53px] md:grid-cols-[280px_280px] md:justify-start md:pl-[62px] md:gap-y-[68px]"
      >
        {TRIP_FORM_FIELDS.map((field) => (
          <div key={field.id} className="flex flex-col gap-3">
            <Label
              htmlFor={field.id}
              className="text-sm font-bold text-[#1a1a1a]"
            >
              {field.label}
            </Label>
            <Input
              id={field.id}
              name={field.id}
              type="text"
              value={values[field.id] ?? ""}
              placeholder={field.placeholder}
              onChange={(event) => handleChange(field.id, event.target.value)}
              className="h-12 rounded-full border-[#e4e4e2] bg-white px-5 text-[15px] text-[#1a1a1a] placeholder:text-[#8a8a8a] focus-visible:ring-primary"
            />
          </div>
        ))}

        <div className="flex justify-center md:col-span-2 md:mt-6">
          <Button
            type="submit"
            className="h-12 w-full max-w-[315px] rounded-[4px] bg-primary text-[17px] font-normal text-primary-foreground hover:bg-primary/90"
          >
            {isAdded ? "Trip added" : "Add Trip"}
          </Button>
        </div>
      </form>
    </section>
  );
}