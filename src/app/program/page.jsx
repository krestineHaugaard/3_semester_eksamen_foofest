import { getData } from "@/utils/api";

export default async function Program() {
  const data = await getData("schedule");

  const chosenDay = "mon";
  // skal opdateres

  return (
    <>
      {data.Midgard.mon.map((act) => {
        return (
          <article key={act.act}>
            <h1>{act.act}</h1>
            <p>{act.start}</p>
            <p>{act.end}</p>
            <p>{act.cancelled === true ? "Cancelled" : ""}</p>
          </article>
        );
      })}
    </>
  );
}
