import { getAvailableSpots } from "@/utils/api";
import TicketAmountChoise from "@/components/TicketAmountChoise";

export default async function Booking() {
  const data = await getAvailableSpots();
  console.log(data);
  return (
    <>
      {data.map((spot) => {
        return (
          <article key={spot.area}>
            <h1>{spot.area}</h1>
            <p>Spots available: {spot.available}</p>
          </article>
        );
      })}
      <TicketAmountChoise />
    </>
  );
}
