import { getOrder } from "@/app/utils/orderdetailsapi";
import TicketInformationForm from "@/components/TicketInformationForm";
import CampingOptions from "@/components/CampingOptions";

export default async function BookingInformation({ params }) {
  const orderid = params.id;
  const data = await getOrder(orderid);

  const forms = data.map((order) => {
    return order.amount;
  });

  const cleanNumber = forms[0];

  return (
    <>
      <CampingOptions orderID={orderid} />

      {Array(cleanNumber)
        .fill()
        .map((item, index) => {
          return (
            <TicketInformationForm
              key={index}
              ticketAmount={index}
              orderID={orderid}
            />
          );
        })}
    </>
  );
}
