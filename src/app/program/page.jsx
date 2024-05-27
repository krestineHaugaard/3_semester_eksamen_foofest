import ProgramInformation from "@/components/ProgramInformation";
import { getData } from "@/app/utils/api";

export default async function Program() {
  const data = getData("schedule");

  return (
    <section className="grid grid-cols-4 ">
      {/* {data.Midgard.mon.map((act) => {
        return (
          <article key={act.index}>
            <h1>{act.act !== "break" ? act.act : ""}</h1>
            <p>{act.cancelled === true ? "Cancelled" : ""}</p>
          </article>
        );
      })} */}
      <ProgramInformation />
    </section>
  );
}
