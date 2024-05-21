import { getOrder } from "@/utils/orderdetailsapi";
import TicketInformationForm from "@/components/TicketInformationForm";

export const dynamic = "force-dynamic";

export default async function BookingInformation({ params }) {
  const orderid = params.id;
  const data = await getOrder(orderid);

  const forms = data.map((order) => {
    return order.amount;
  });
  const cleanNumber = forms[0];

  return (
    <section>
      {Array(cleanNumber)
        .fill(true)
        .map((index) => (
          <TicketInformationForm key={index} />
        ))}
    </section>
  );
}
