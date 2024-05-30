import { getAvailableSpots, reserveSpot } from "@/utils/api";
import { orderRes } from "@/utils/orderdetailsapi";
import { redirect } from "next/navigation";
import Image from "next/image";

import React from "react";

async function submit(formData) {
  "use server";

  const data = await reserveSpot(
    formData.get("area_chosen"),
    formData.get("ticket")
  );

  const id = data;

  console.log(id);

  orderRes(formData.get("area_chosen"), formData.get("ticket"), id);

  redirect("/booking_for/" + id);
}

export default async function Booking() {
  const data = await getAvailableSpots();
  return (
    <>
      <section className="pb-16">
        <h1 className="text-center text-3xl md:text-5xl pt-12 pb-14 md:pt-16 md:pb-20 max-w-lg mx-auto">
          Choose camping area and ticket amount
        </h1>
        <form action={submit} className="flex flex-col items-center gap-12">
          <fieldset>
            <legend className="text-center text-xl md:text-2xl text-title-col">
              Chose camping area
            </legend>
            <div className="flex flex-wrap gap-8 justify-center mt-12 md:my-12">
              {data.map((spot) => {
                return (
                  <label
                    htmlFor={`area_${spot.area}`}
                    key={spot.area}
                    className={`bg-bg-col-bg-dark rounded-lg px-12 py-6 flex justify-between items-center shadow-[3px_3px_0_1px] ${
                      spot.area === "Svartheim" ? "shadow-brand-five-100" : ""
                    }${spot.area === "Nilfheim" ? "shadow-brand-tree" : ""}${
                      spot.area === "Muspelheim" ? "shadow-brand-two" : ""
                    }${spot.area === "Alfheim" ? "shadow-brand-one-100" : ""}${
                      spot.area === "Helheim" ? "shadow-brand-four" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-lg md:text-2xl text-title-col">
                        {spot.area}
                      </p>
                      <p className="text-sm md:text-base">
                        Spots available: {spot.available}
                      </p>
                    </div>
                    <input
                      id={`area_${spot.area}`}
                      type="radio"
                      value={spot.area}
                      name="area_chosen"
                      required
                      className="accent-brand-five-100 ml-8"
                    />
                  </label>
                );
              })}
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-center text-xl md:text-2xl text-title-col">
              Choose ticket amount
            </legend>
            <input
              type="number"
              name="ticket"
              placeholder={`ex. "1"`}
              min="1"
              required
              className="my-12 p-4 mx-auto text-center text-bg-col-bg-dark text-3xl rounded-lg placeholder:text-xl max-w-60"
            />
          </fieldset>
          <button
            type="submit"
            className="bg-brand-five-100 text-base md:text-2xl rounded-lg shadow-[3px_3px_0_1px] shadow-brand-five-150 px-16 py-4 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree"
          >
            <Image
              src="/images/arrow_next.svg"
              width={35}
              height={100}
              alt="Next step"
            />
          </button>
        </form>
      </section>
    </>
  );
}
