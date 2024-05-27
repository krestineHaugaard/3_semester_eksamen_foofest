import { getAvailableSpots } from "@/utils/api";

export default async function CampingAreas() {
  const data = await getAvailableSpots();

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
    </>
  );
}
