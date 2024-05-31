"use client";

export default function Error() {
  return (
    <section className="flex flex-col justify-center items-center h-full gap-4">
      <h1 className="text-xl md:text-3xl text-center">Oh no!?...</h1>
      <p className="text-lg text-center">
        Something must have happend during our dark page creator spell
      </p>
      <p className="text-lg text-center">
        We will read the spell book agin, and in the mean time you can try
        visiting some of the other pages or try to reload this one
      </p>
    </section>
  );
}
