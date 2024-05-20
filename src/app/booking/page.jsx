import CampingAreas from "@/components/CampingAreas";

import { redirect } from "next/dist/server/api-utils";

import React from "react";

export default function Booking() {
  async function submit(formData) {
    "use server";
    const headersList = {
      "Content-Type": "application/json",
    };

    const bodyContent = JSON.stringify({
      area: formData.get("campingarea"),
      amount: formData.get("ticket"),
    });

    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "reserve-spot",
      {
        method: "PUT",
        body: bodyContent,
        headers: headersList,
      }
    );

    const data = await response.json();
  }
  return (
    <>
      <section>
        <h2>Remaning available spots:</h2>
        <CampingAreas />
        <h2>Choose camping area and ticket amount</h2>
        <form action={submit}>
          <select name="campingarea" id="area-select">
            <option value="Svartheim">Svartheim</option>
            <option value="Nilfheim">Nilfheim</option>
            <option value="Helheim">Helheim</option>
            <option value="Muspelheim">Muspelheim</option>
            <option value="Alfheim">Alfheim</option>
          </select>
          <input type="number" name="ticket" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
