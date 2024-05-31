"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { updateOrder } from "@/utils/orderdetailsapi";
import { useState } from "react";

export default function CampingOptions(props) {
  const [preassembledAmount, setPreassembledAmount] = useState(0);
  const [twoPersAmount, setTwoPersAmount] = useState(0);
  const [threePersAmount, setThreePersAmount] = useState(0);
  const [shelterAmount, setShelterAmount] = useState(0);

  function handleTentChange(e) {
    setPreassembledAmount(e.target.value);
  }

  function handleTwoTentChange(e) {
    setTwoPersAmount(e.target.value);
  }

  function handleThreeTentChange(e) {
    setThreePersAmount(e.target.value);
  }

  function handleShelterChange(e) {
    setShelterAmount(e.target.value);
  }

  async function submit(e) {
    if (preassembledAmount == twoPersAmount * 2) {
      updateOrder(
        e.get("2_pers_tent_choice"),
        e.get("3_pers_tent_choice"),
        e.get("shelter_option"),
        props.orderID
      );
      redirect("/payment_for/" + id);
    } else if (preassembledAmount == threePersAmount * 3) {
      updateOrder(
        e.get("2_pers_tent_choice"),
        e.get("3_pers_tent_choice"),
        e.get("shelter_option"),
        props.orderID
      );
      redirect("/payment_for/" + id);
    } else {
      alert(
        "You have not chosen a correct amount of tents for your upgrade, please choose the correct amount before you continue"
      );
    }
  }

  const id = props.orderID;

  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl pt-12 pb-14 md:pt-16 md:pb-20 max-w-xl mx-auto">
        Upgrade your camping expirience (optionel)
      </h1>
      <form
        action={submit}
        className="flex flex-col items-center gap-14 md:pb-10"
      >
        <fieldset className="flex flex-col items-center gap-4">
          <legend className="text-lg md:text-2xl text-center text-wrap">
            Choose amount of preassembled tents upgrade
          </legend>
          <label
            htmlFor="preassembled_option"
            className="mt-4 text-base md:text-lg"
          >
            How many upgrades?
            <input
              id="preassembled_option"
              type="number"
              value={preassembledAmount}
              name="preassembled_option"
              onChange={handleTentChange}
              className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1 ml-4 max-w-24 text-center"
              min="0"
            />
          </label>

          {preassembledAmount > 0 && (
            <article className="border-y-2 mt-2 pb-4 border-brand-five-100">
              <h4 className="py-6 text-xl text-center">Choose type of tent</h4>
              <div className="flex flex-col items-center gap-4">
                <label htmlFor="2_pers_tent">
                  2 pers tent
                  <input
                    id="2_pers_tent"
                    type="number"
                    value={twoPersAmount}
                    name="2_pers_tent_choice"
                    onChange={handleTwoTentChange}
                    className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1 ml-4 max-w-24 text-center"
                    min="0"
                  />
                </label>

                <label htmlFor="3_pers_tent">
                  3 pers tent
                  <input
                    id="3_pers_tent"
                    type="number"
                    value={threePersAmount}
                    name="3_pers_tent_choice"
                    onChange={handleThreeTentChange}
                    className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1 ml-4 max-w-24 text-center"
                    min="0"
                  />
                </label>
                <div className="my-4 flex flex-col gap-1">
                  <p className="text-xs max-w-prose text-center">
                    You can only choose the tent type that matches your tent
                    upgrade amount
                  </p>
                  <p className="text-xs max-w-prose text-center">
                    ex. 4 upgrades = 2x 2 pers tent
                  </p>
                  <p className="text-xs max-w-prose text-center">
                    6 upgrades = 2x 3 pers tent or 3x 2 pers tent
                  </p>
                </div>
              </div>
            </article>
          )}
        </fieldset>
        <fieldset className="flex flex-col items-center gap-4">
          <legend className="text-lg md:text-2xl">
            Choose amount of shelter upgrades
          </legend>
          <label htmlFor="shelter_option" className="mt-4 text-base md:text-lg">
            How many upgrades?
            <input
              id="shelter_option"
              type="number"
              name="shelter_option"
              className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1 ml-4 max-w-24 text-center"
              min="0"
              value={shelterAmount}
              onChange={handleShelterChange}
            />
          </label>
        </fieldset>
        <div className="flex justify-center gap-4 md:gap-12 pb-12">
          <Link
            href={`/booking_for/${id}`}
            className="bg-brand-one-100 text-base md:text-2xl rounded-lg shadow-[3px_3px_0_1px] shadow-brand-one-150 px-10 md:px-16 py-4 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree"
          >
            <div className="max-w-5 md:max-w-12">
              <Image
                src="/images/arrow_back.svg"
                width={35}
                height={100}
                alt="Next step"
              />
            </div>
          </Link>
          <button
            type="submit"
            className="bg-brand-five-100 text-base md:text-2xl rounded-lg shadow-[3px_3px_0_1px] shadow-brand-five-150 px-10 md:px-16 py-4 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree"
          >
            <div className="max-w-5 md:max-w-12">
              <Image
                src="/images/arrow_next.svg"
                width={35}
                height={100}
                alt="Next step"
              />
            </div>
          </button>
        </div>
      </form>
    </>
  );
}
