import { getOrder } from "@/utils/orderdetailsapi";
import TicketInformationForm from "@/components/TicketInformationForm";

export default async function BookingInformation({ params }) {
  const orderid = params.id;
  const data = await getOrder(orderid);

  const forms = data.map((order) => {
    return order.amount;
  });

  console.log(orderid);

  const cleanNumber = forms[0];

  return (
    <>
      <TicketInformationForm ticketAmount={cleanNumber} orderID={orderid} />
    </>
  );
}
