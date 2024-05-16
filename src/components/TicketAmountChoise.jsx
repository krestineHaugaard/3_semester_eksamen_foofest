"use client";

import React, { useState } from "react";

export default function TicketAmountChoise() {
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setNumber(parseInt(inputValue)); // Parse input value to an integer
  };

  const increment = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const decrement = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <button onClick={decrement}> - </button>
      <input type="number" value={number} onChange={handleChange} />
      <button onClick={increment}> + </button>
    </div>
  );
}

// this is made with chat gpt, it will be changed and updated
