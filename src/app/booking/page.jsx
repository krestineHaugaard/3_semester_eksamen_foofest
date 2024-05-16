import { getAvailableSpots } from "@/utils/api";
import TicketAmountChoise from "@/components/TicketAmountChoise";
import React from "react";

export default async function Booking() {
  "use client";

  const data = await getAvailableSpots();

  return (
    <section>
      {data.map((spot) => {
        return (
          <article key={spot.area}>
            <h1>{spot.area}</h1>
            <p>Spots available: {spot.available}</p>
          </article>
        );
      })}
      <TicketAmountChoise />
    </section>
  );
}
