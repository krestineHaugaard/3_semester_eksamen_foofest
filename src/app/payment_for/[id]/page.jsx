import Link from "next/link";
import Image from "next/image";
import OrderOverview from "@/components/OrderOverview";
import { getOrder } from "@/utils/orderdetailsapi";
// import { fullfillResavation } from "@/utils/api";
import { redirect } from "next/navigation";

export default async function Payment({ params }) {
  const id = params.id;

  const getOrderInformation = await getOrder(id);

  async function submit(id) {
    "use server";
    const confirmed = await fullfillResavation(id);
    console.log(confirmed);
    redirect("/order_confirmed");
  }

  return (
    <section>
      <h1 className="text-center text-3xl md:text-5xl pt-12 pb-14 md:pt-16 md:pb-28">
        Payment information
      </h1>
      <h2 className="text-xl md:text-3xl pb-10 md:pb-16 text-center text-title-col">
        Order overview
      </h2>
      <OrderOverview data={getOrderInformation} />
      <h2 className="text-xl md:text-3xl pt-16 md:pt-28 pb-10 md:pb-16 text-center text-title-col">
        Payment details
      </h2>
      <form className="bg-bg-col-bg-dark rounded-lg shadow-[3px_3px_0_1px] shadow-brand-four max-w-2xl mx-auto p-12 grid grid-cols-2 gap-x-8 mb-20">
        <label htmlFor="card_number" className="flex flex-col col-span-2">
          Card number{" "}
          <input
            type="number"
            id="card_number"
            className="my-2 mb-6 p-1 text-bg-col-bg-dark text-base rounded-lg"
          />
        </label>
        <label htmlFor="name_of_holder" className="flex flex-col col-span-2">
          Name on card{" "}
          <input
            type="text"
            id="name_of_holder"
            className="my-2 mb-6 p-1 text-bg-col-bg-dark text-base rounded-lg"
          />
        </label>
        <label
          htmlFor="expiration_date"
          className="flex flex-col col-span-2 md:col-span-1"
        >
          Expiration date{" "}
          <input
            type="date"
            id="expiration_date"
            className="my-2 mb-6 p-1 text-bg-col-bg-dark text-base rounded-lg"
          />
        </label>
        <label htmlFor="cvr" className="flex flex-col col-span-2 md:col-span-1">
          CVR{" "}
          <input
            type="number"
            id="cvr"
            maxLength={3}
            className="my-2 mb-6 p-1 text-bg-col-bg-dark text-base rounded-lg"
          />
        </label>
        <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
          <label htmlFor="terms_and_condition">
            <input
              type="checkbox"
              id="terms_and_condition"
              className="cursor-pointer accent-brand-five-100"
            />{" "}
            Accept terms and conditions, read more about it{" "}
            <span className="underline cursor-pointer">here</span>
          </label>
          <label htmlFor="newsletter">
            <input
              type="checkbox"
              id="newsletter"
              className="cursor-pointer accent-brand-five-100"
            />{" "}
            Sign up to our newsletter
          </label>
        </div>
      </form>
      <div className="flex justify-center gap-4 md:gap-12 pb-12 md:pb-24 md:pt-12">
        <Link
          href={`/booking_options_for/${id}`}
          className="bg-brand-one-100 text-base md:text-2xl rounded-lg shadow-[3px_3px_0_1px] shadow-brand-one-150 px-10 md:px-16 py-2 md:py-4 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree"
        >
          <div className="max-w-10 pt-2 md:pt-0 md:max-w-12">
            <Image
              src="/images/arrow_back.svg"
              width={35}
              height={100}
              alt="Next step"
            />
          </div>
        </Link>
        <button
          type="button"
          onClick={submit}
          className="bg-brand-five-100 text-base md:text-2xl rounded-lg shadow-[3px_3px_0_1px] shadow-brand-five-150 px-10 md:px-16 py-2 md:py-4 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree"
        >
          Complete purchase
        </button>
      </div>
    </section>
  );
}
