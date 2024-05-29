"use client";
import { useState, useEffect } from "react";
export default function Newsletter() {
  const [isSubmittet, setIsSubmittet] = useState(1);
  //   Denne useEffect snippet er lavet ved hjælp af chatgpt da jeg var
  // usikker på brugen af setTimeOut og clearTimeout til at ændre state
  // Jeg valgte at inludere det som en UI validering selvom brugerens email ikke bliver gemt nogen steder
  // Man kunne sagtens hooke det up til en database over mail adresser der skal modtage nyhedsbrev, men det synes jeg ikke var nødvendigt her
  useEffect(() => {
    if (isSubmittet === 2) {
      const timer = setTimeout(() => {
        setIsSubmittet(1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmittet]);
  return (
    <article className="bg-bg-col-bg-dark rounded-lg shadow-[3px_3px_0_1px] shadow-brand-tree p-12">
      <h3 className="text-center text-3xl md:text-4xl">
        Sign up to our newsletter
      </h3>
      <form className="flex flex-wrap justify-center gap-0 md:gap-8 items-center md:pt-8 mt-2">
        <label
          htmlFor="newsletter_form"
          className="text-base md:text-xl mt-4 md:mt-0"
        >
          E-mail:
        </label>
        <input
          type="email"
          name="newsletter"
          id="newsletter_form"
          className="py-2.5 rounded-lg mt-4 md:mt-0"
        />
        <button
          // Jeg har aldrig prøvet at bruge type reset før, men i dette tilfælde hvor dataen i input ikke skal gemmes i en database,
          // så synes jeg at type submit var for meget da den refresher hele siden og tager brugeren tilbage øverst
          // Derfor indrog jeg også en falsk validering, fordi at default for type reset for brugeren ligner at deres input bare forsvinder
          // hvilket ikke er god UI
          type="reset"
          onClick={() => setIsSubmittet(2)}
          className="bg-brand-five-100 text-base md:text-xl rounded-lg shadow-[3px_3px_0_1px] shadow-brand-five-150 px-8 py-2 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree mt-4 md:mt-0"
        >
          Submit
        </button>
      </form>
      <p className="text-center mt-8 text-base md:text-lg underline underline-offset-8 decoration-2 decoration-brand-two">
        {isSubmittet === 1 ? "" : "You are now signed up!"}
      </p>
    </article>
  );
}
