"use client";
import { useState } from "react";

export default function ProgramInformation(props) {
  const [chosenDay, setChosenDay] = useState("mon");

  const [activeBtn, setActiveBtn] = useState(1);

  const data = props.program;

  const start = data.Midgard[chosenDay].map((newstart) => {
    return newstart.start;
  });

  const end = data.Midgard[chosenDay].map((newend) => {
    return newend.end;
  });

  const midgard = data.Midgard[chosenDay].map((newact) => {
    return newact.act;
  });

  const vanaheim = data.Vanaheim[chosenDay].map((newact) => {
    return newact.act;
  });

  const jotunheim = data.Jotunheim[chosenDay].map((newact) => {
    return newact.act;
  });

  const newarray = start.map((newstart, index) => {
    return {
      act_time: [`${newstart} - ${end[index]}`],
      act_midgard: midgard[index],
      act_vanaheim: vanaheim[index],
      act_jotunheim: jotunheim[index],
    };
  });

  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl pt-12 pb-14 md:pt-16 md:pb-28">
        Festival program
      </h1>
      <div className="flex justify-center gap-4 flex-wrap">
        <button
          className={
            activeBtn === 1
              ? "rounded-lg border-4 border-brand-tree bg-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-grey-scale-grey-nine mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
              : "rounded-lg border-4 border-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-brand-tree mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
          }
          onClick={() => {
            setChosenDay("mon");
            setActiveBtn(1);
          }}
        >
          Monday
        </button>
        <button
          className={
            activeBtn === 2
              ? "rounded-lg border-4 border-brand-tree bg-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-grey-scale-grey-nine mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
              : "rounded-lg border-4 border-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-brand-tree mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
          }
          onClick={() => {
            setChosenDay("tue");
            setActiveBtn(2);
          }}
        >
          Tuesday
        </button>
        <button
          className={
            activeBtn === 3
              ? "rounded-lg border-4 border-brand-tree bg-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-grey-scale-grey-nine mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
              : "rounded-lg border-4 border-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-brand-tree mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
          }
          onClick={() => {
            setChosenDay("wed");
            setActiveBtn(3);
          }}
        >
          Wednesday
        </button>
        <button
          className={
            activeBtn === 4
              ? "rounded-lg border-4 border-brand-tree bg-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-grey-scale-grey-nine mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
              : "rounded-lg border-4 border-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-brand-tree mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
          }
          onClick={() => {
            setChosenDay("thu");
            setActiveBtn(4);
          }}
        >
          Tursday
        </button>
        <button
          className={
            activeBtn === 5
              ? "rounded-lg border-4 border-brand-tree bg-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-grey-scale-grey-nine mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
              : "rounded-lg border-4 border-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-brand-tree mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
          }
          onClick={() => {
            setChosenDay("fri");
            setActiveBtn(5);
          }}
        >
          Friday
        </button>
        <button
          className={
            activeBtn === 6
              ? "rounded-lg border-4 border-brand-tree bg-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-grey-scale-grey-nine mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
              : "rounded-lg border-4 border-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-brand-tree mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
          }
          onClick={() => {
            setChosenDay("sat");
            setActiveBtn(6);
          }}
        >
          Saturday
        </button>
        <button
          className={
            activeBtn === 7
              ? "rounded-lg border-4 border-brand-tree bg-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-grey-scale-grey-nine mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
              : "rounded-lg border-4 border-brand-tree py-1 md:py-2 px-3 md:px-6 text-title-col md:hover:bg-brand-tree mb-[-4px] text-xs md:text-base shadow-[3px_3px_0_1px_rgba(70,52,41,1)]"
          }
          onClick={() => {
            setChosenDay("sun");
            setActiveBtn(7);
          }}
        >
          Sunday
        </button>
      </div>
      <div className=" pb-10 pt-8">
        <table className="mx-auto table-fixed">
          <thead>
            <tr>
              <th className="sr-only py-8 md:py-16 text-lg md:text-3xl">
                Time
              </th>
              <th className="text-brand-five-100 py-8 md:py-16 text-lg md:text-3xl">
                Midgard
              </th>
              <th className="text-brand-five-100 py-8 md:py-16 text-lg md:text-3xl">
                Vanaheim
              </th>
              <th className="text-brand-five-100 py-8 md:py-16 text-lg md:text-3xl">
                Jotunheim
              </th>
            </tr>
          </thead>
          <tbody>
            {newarray.map((act) => {
              return (
                <tr
                  className="text-center align-middle h-24"
                  key={`time${act.act_time}`}
                >
                  <td className="text-brand-one-100 text-sm md:px-8 md:py-4 md:text-base">
                    {act.act_time}
                  </td>
                  <td className="md:px-8 md:py-4 text-sm md:text-xl">
                    {act.act_midgard}
                  </td>
                  <td className="md:px-8 md:py-4 text-sm md:text-xl">
                    {act.act_vanaheim}
                  </td>
                  <td className="md:px-8 md:py-4 text-sm md:text-xl">
                    {act.act_jotunheim}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
