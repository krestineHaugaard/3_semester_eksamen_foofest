import CampingAreas from "@/components/CampingAreas";
import AreasAndAmount from "@/components/AreasAndAmount";
import BookingInformation from "@/components/BookingInformation";
import Payment from "@/components/Payment";

import React from "react";

export default function Booking() {
  return (
    <>
      <section>
        <CampingAreas />
        <AreasAndAmount />
      </section>
      <section>
        <BookingInformation />
      </section>
      <section>
        <Payment />
      </section>
    </>
  );
}
