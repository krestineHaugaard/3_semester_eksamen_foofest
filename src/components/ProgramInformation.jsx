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
      <h1>Festival program</h1>
      <p>
        Here is an overview of all the bands, what day they are playing, on what
        stage and at what time
      </p>
      <p>Click around and keep yourself updatet</p>
      <div className="flex justify-center gap-4">
        <button
          className={
            activeBtn === 1
              ? "rounded-t-lg border-4 border-brand-tree bg-brand-tree py-2 px-6 text-title-col hover:bg-grey-scale-grey-nine mb-[-4px]"
              : "rounded-t-lg border-4 border-brand-tree py-2 px-6 text-title-col hover:bg-brand-tree mb-[-4px]"
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
              ? "rounded-t-lg border-4 border-brand-tree bg-brand-tree py-2 px-6 text-title-col hover:bg-grey-scale-grey-nine mb-[-4px]"
              : "rounded-t-lg border-4 border-brand-tree py-2 px-6 text-title-col hover:bg-brand-tree mb-[-4px]"
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
              ? "rounded-t-lg border-4 border-brand-tree bg-brand-tree py-2 px-6 text-title-col hover:bg-grey-scale-grey-nine mb-[-4px]"
              : "rounded-t-lg border-4 border-brand-tree py-2 px-6 text-title-col hover:bg-brand-tree mb-[-4px]"
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
              ? "rounded-t-lg border-4 border-brand-tree bg-brand-tree py-2 px-6 text-title-col hover:bg-grey-scale-grey-nine mb-[-4px]"
              : "rounded-t-lg border-4 border-brand-tree py-2 px-6 text-title-col hover:bg-brand-tree mb-[-4px]"
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
              ? "rounded-t-lg border-4 border-brand-tree bg-brand-tree py-2 px-6 text-title-col hover:bg-grey-scale-grey-nine mb-[-4px]"
              : "rounded-t-lg border-4 border-brand-tree py-2 px-6 text-title-col hover:bg-brand-tree mb-[-4px]"
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
              ? "rounded-t-lg border-4 border-brand-tree bg-brand-tree py-2 px-6 text-title-col hover:bg-grey-scale-grey-nine mb-[-4px]"
              : "rounded-t-lg border-4 border-brand-tree py-2 px-6 text-title-col hover:bg-brand-tree mb-[-4px]"
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
              ? "rounded-t-lg border-4 border-brand-tree bg-brand-tree py-2 px-6 text-title-col hover:bg-grey-scale-grey-nine mb-[-4px]"
              : "rounded-t-lg border-4 border-brand-tree py-2 px-6 text-title-col hover:bg-brand-tree mb-[-4px]"
          }
          onClick={() => {
            setChosenDay("sun");
            setActiveBtn(7);
          }}
        >
          Sunday
        </button>
      </div>

      <table className="table-fixed border-b-4 border-t-4 border-brand-tree">
        <thead>
          <tr>
            <th className="sr-only">Time</th>
            <th className="text-brand-five-100">Midgard</th>
            <th className="text-brand-five-100">Vanaheim</th>
            <th className="text-brand-five-100">Jotunheim</th>
          </tr>
        </thead>
        <tbody>
          {newarray.map((act) => {
            return (
              <tr
                className="text-center align-middle h-24"
                key={`time${act.act_time}`}
              >
                <td className="text-brand-one-100">{act.act_time}</td>
                <td>{act.act_midgard}</td>
                <td>{act.act_vanaheim}</td>
                <td>{act.act_jotunheim}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
