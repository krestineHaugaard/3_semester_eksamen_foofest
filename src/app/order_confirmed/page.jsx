import Link from "next/link";

export default function OrderConfirmed() {
  async function generatenumber() {
    const newOrderNumber = crypto.randomUUID();
    return newOrderNumber;
  }

  return (
    <section className="bg-bg-col-bg-dark rounded-lg p-12 flex flex-col justify-between items-center shadow-[3px_3px_0_1px] shadow-brand-one-100 mx-auto max-w-4xl my-12 md:my-24">
      <h1 className="text-center text-3xl md:text-5xl pt-2 pb-6 md:pt-6 md:pb-10">
        Order confirmed
      </h1>
      <p className="max-w-prose  md:text-lg text-center p-2">
        Your order has been conformed and your tickets plus order confirmation
        will arrive on e-mail in a few minutes
      </p>
      <p className="max-w-prose text-lg md:text-xl text-center p-2">
        Order number: {generatenumber()}
      </p>
      <p className="max-w-prose md:text-lg text-center p-2">
        If you don`t receive any mail, save the order number and contact us
        through this mail
      </p>
      <p className="max-w-prose  md:text-lg text-center p-2" text>
        paganfolkfestival@fake-contact.com
      </p>
      <Link
        href="/"
        prefetch={false}
        className="bg-brand-five-100 text-base md:text-xl rounded-lg shadow-[3px_3px_0_1px] shadow-brand-five-150 px-8 py-2 mt-8 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree"
      >
        Back to frontpage
      </Link>
    </section>
  );
}
