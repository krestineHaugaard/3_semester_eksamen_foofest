import { getData } from "@/utils/api";

export default async function Program() {
  const data = await getData("events");

  const isCancelled = data.map((band) => {
    return band.act.cancelled;
  });

  const cancelation = isCancelled.toString();

  if (cancelation === "true") {
    return (
      <article className="bg-bg-col-bg-dark rounded-lg shadow-[3px_3px_0_1px] shadow-brand-one-100 p-12 mt-4 ">
        <h3 className="text-center text-2xl md:text-4xl">
          ! Important information !
        </h3>
        <div className="flex flex-col items-center pt-4 md:pt-8">
          <p className="text-center text-lg md:text-xl max-w-sm py-4">
            We are sorry to inform about cancellations to this years festival
            program
          </p>
          <ul className="list-disc list-inside border-y-2 border-alert-col py-4">
            {data.map((band) => {
              return (
                <li
                  key={band.act.act}
                  className="text-center text-sm md:text-base max-w-sm py-4"
                >
                  The band {band.act.act} playing on {band.scene} on{" "}
                  {band.day === "mon" && "monday"}
                  {band.day === "tue" && "tuesday"}
                  {band.day === "wed" && "wednesday"}
                  {band.day === "thu" && "thursday"}
                  {band.day === "fri" && "friday"}
                  {band.day === "sat" && "saturday"}
                  {band.day === "sun" && "sunday"} at {band.act.start}-
                  {band.act.end}, has cancelled their show
                </li>
              );
            })}
          </ul>
          <p className="text-center text-lg md:text-xl max-w-sm py-4">
            We are working hard on finding {data.length === 1 ? "a" : ""}{" "}
            replacement
            {data.length > 1 ? "s" : ""}
          </p>
        </div>
      </article>
    );
  }
}
