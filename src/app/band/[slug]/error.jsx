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
      <button
        type="refresh"
        className="bg-brand-five-100 text-base md:text-2xl rounded-lg shadow-[3px_3px_0_1px] shadow-brand-five-150 px-10 md:px-16 py-2 md:py-4 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree"
      >
        Refresh
      </button>
    </section>
  );
}
