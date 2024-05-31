export default function OrderOverview(props) {
  const data = props.data;

  const ticketAmount = data.map((ticket) => {
    return ticket.amount;
  });

  const vipUpgrade = data.map((ticket) => {
    return ticket.amount;
  });
  const bookingFee = 1;

  const shelterUpgrade = data.map((shelter) => {
    return shelter.choose_shelter;
  });

  const twoTentUpgrade = data.map((twotent) => {
    return twotent.choose_preassembled_two_tent;
  });

  const threeTentUpgrade = data.map((threetent) => {
    return threetent.choose_preassembled_three_tent;
  });

  return (
    <>
      <section className="bg-bg-col-bg-dark rounded-lg shadow-[3px_3px_0_1px] shadow-brand-two max-w-2xl mx-auto">
        <table className="mx-auto table-fixed border-separate md:border-spacing-x-20 md:border-spacing-y-3 p-8 md:p-12">
          <thead>
            <tr>
              <th className="text-brand-five-100 text-lg md:text-xl pb-4">
                Order details
              </th>
              <th className="text-brand-five-100  text-lg md:text-xl pb-4">
                Amount
              </th>
              <th className="text-brand-five-100 text-lg md:text-xl pb-4">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-base md:text-lg">Ticket amount</td>
              <td className="text-base md:text-lg text-center">
                {ticketAmount}
              </td>
              <td className="text-base md:text-lg text-end">
                {ticketAmount * 799}
              </td>
            </tr>
            <tr className="">
              <td className="text-base md:text-lg">VIP upgrade</td>
              <td className="text-base md:text-lg text-center">{vipUpgrade}</td>
              <td className="text-base md:text-lg text-end">
                {vipUpgrade * 500}
              </td>
            </tr>
            <tr className="">
              <td className="text-base md:text-lg">Booking fee</td>
              <td className="text-base md:text-lg text-center">{bookingFee}</td>
              <td className="text-base md:text-lg text-end">
                {bookingFee * 99}
              </td>
            </tr>
            <tr className="">
              <td className="text-base md:text-lg">Shelter upgrade</td>
              <td className="text-base md:text-lg text-center">
                {shelterUpgrade}
              </td>
              <td className="text-base md:text-lg text-end">
                {shelterUpgrade * 249}
              </td>
            </tr>
            <tr className="">
              <td className="text-base md:text-lg">2 tent upgrade</td>
              <td className="text-base md:text-lg text-center">
                {twoTentUpgrade}
              </td>
              <td className="text-base md:text-lg text-end">
                {twoTentUpgrade * 299}
              </td>
            </tr>
            <tr className="">
              <td className="text-base md:text-lg">3 tent upgrade</td>
              <td className="text-base md:text-lg text-center">
                {threeTentUpgrade}
              </td>
              <td className="text-base md:text-lg text-end">
                {threeTentUpgrade * 399}
              </td>
            </tr>
            <tr className="">
              <td className="text-lg md:text-xl pt-8">Combined price</td>
              <td className="text-lg md:text-xl pt-8">{threeTentUpgrade}</td>
              <td className="text-lg md:text-xl pt-8 text-end underline underline-offset-8 decoration-2 decoration-brand-five-100">
                {ticketAmount * 799 +
                  vipUpgrade * 500 +
                  bookingFee * 99 +
                  shelterUpgrade * 249 +
                  twoTentUpgrade * 299 +
                  threeTentUpgrade * 399}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
