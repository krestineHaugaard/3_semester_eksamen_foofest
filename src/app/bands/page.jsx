import { getData } from "@/utils/api";

export default async function BandList() {
  const bands = await getData("bands");
  return (
    <>
      {bands.map((band) => {
        return <h1 key={band.slug}>{band.name}</h1>;
      })}
    </>
  );
}
