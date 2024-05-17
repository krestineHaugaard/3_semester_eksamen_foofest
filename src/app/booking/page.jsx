"use client";

import { useState } from "react";

import React from "react";
import CampingAreas from "@/components/CampingAreas";

export default function Booking() {
  const [ticketAmount, setTicketAmount] = useState(1);

  console.log("ticketAmount:", ticketAmount); // Add this line
  console.log("setTicketAmount:", setTicketAmount); // Add this line

  return (
    <section>
      <h2>Choose camping area</h2>
      <CampingAreas />
      <h2>Choose ticket amount</h2>
      <div>
        <button onClick={() => setTicketAmount(ticketAmount - 1)}>
          Remove ticket
        </button>
        <p>{ticketAmount}</p>
        <button onClick={() => setTicketAmount(ticketAmount + 1)}>
          Add ticket
        </button>
      </div>
    </section>
  );
}
