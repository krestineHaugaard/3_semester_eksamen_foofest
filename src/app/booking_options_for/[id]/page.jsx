import { getOrder } from "@/utils/orderdetailsapi";
import CampingOptions from "@/components/CampingOptions";

export default async function BookingOptions({ params }) {
  const orderid = params.id;
  const data = await getOrder(orderid);

  const forms = data.map((order) => {
    return order.amount;
  });

  console.log(orderid);

  const cleanNumber = forms[0];

  return (
    <>
      <CampingOptions orderID={orderid} ticketamount={cleanNumber} />
    </>
  );
}
