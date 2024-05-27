import ProgramInformation from "@/components/ProgramInformation";
import { getData } from "@/utils/api";

export default async function Program() {
  const data = await getData("schedule");

  console.log(data.Midgard.mon);

  return (
    <section className="grid grid-cols-4 ">
      <ProgramInformation />
      <h1>hej</h1>
    </section>
  );
}
