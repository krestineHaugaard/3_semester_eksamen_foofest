"use client";

import { updateOrder } from "@/utils/orderdetailsapi";
import { useState } from "react";

export default function CampingOptions(props) {
  const [preassembledAmount, setPreassembledAmount] = useState(0);
  const [twoPersAmount, setTwoPersAmount] = useState(0);
  const [threePersAmount, setThreePersAmount] = useState(0);

  console.log(props.orderid);

  function handleTentChange(e) {
    setPreassembledAmount(e.target.value);
  }

  function handleTwoTentChange(e) {
    setTwoPersAmount(e.target.value);
  }

  function handleThreeTentChange(e) {
    setThreePersAmount(e.target.value);
  }

  async function submit(e) {
    updateOrder(
      e.get("2_pers_tent_choice"),
      e.get("3_pers_tent_choice"),
      e.get("shelter_option"),
      props.orderID
    );
  }

  return (
    <form action={submit}>
      <h2>Upgrade your camping expirience (optionel) </h2>
      <fieldset>
        <legend>Choose amount of preassebled tents upgrade</legend>
        <label htmlFor="preassembled_option">Preassembled tents</label>
        <input
          id="preassembled_option"
          type="number"
          value={preassembledAmount}
          name="preassembled_option"
          onChange={handleTentChange}
        />
        {preassembledAmount > 0 && (
          <div>
            <label htmlFor="2_pers_tent">2 pers tent</label>
            <input
              id="2_pers_tent"
              type="number"
              value={twoPersAmount}
              name="2_pers_tent_choice"
              onChange={handleTwoTentChange}
            />
            <label htmlFor="3_pers_tent">3 pers tent</label>
            <input
              id="3_pers_tent"
              type="number"
              value={threePersAmount}
              name="3_pers_tent_choice"
              onChange={handleThreeTentChange}
            />
            <p>You can only choose</p>
          </div>
        )}
      </fieldset>
      <fieldset>
        <legend>Choose amount of shelter upgrades</legend>
        <label htmlFor="shelter_option">Shelter</label>
        <input id="shelter_option" type="number" name="shelter_option" />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
