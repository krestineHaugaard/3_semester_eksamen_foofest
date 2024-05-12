import { getData } from "@/utils/api";

export default async function Program() {
  const bands = await getData("schedule");
  return (
    <>
      {/* {bands.map((band) => {
        return (
          <article key={band.mon.act}>
            <h1>{band.mon.act}</h1>
            <p>{band.mon.start}</p>
            <p>{band.mon.end}</p>
          </article>
        );
      })} */}
    </>
  );
}
