import ProgramInformation from "@/components/ProgramInformation";
import { getData } from "@/utils/api";

export default async function Program() {
  const data = await getData("schedule");

  return <ProgramInformation program={data} />;
}
