import { getOrder } from "@/utils/orderdetailsapi";
import TicketInformationForm from "@/components/TicketInformationForm";
import CampingOptions from "@/components/CampingOptions";
import { postTicketHolderInfo } from "@/utils/orderdetailsapi";

export const dynamic = "force-dynamic";

export default async function BookingInformation({ params }) {
  const orderid = params.id;
  const data = await getOrder(orderid);

  const forms = data.map((order) => {
    return order.amount;
  });
  const cleanNumber = forms[0];

  async function submit(formdata) {
    "use server";

    const allTicketHolderInformation = [];

    formdata.forEach((form) => {
      const ticketinfo = {
        // first_name: form.first_name.value,
        // last_name: form.last_name.value,
        // email: form.email.value,
        // tlf_number: form.tlf_number.value,
        // birthday: form.birthday.value,
        // address_line: form.address_line.value,
        // postal_code: form.postal_code.value,
        city: "hej",
        // chose_vip: form.chose_vip.value,
        order_id: orderid,
      };
      console.log(ticketinfo);
      allTicketHolderInformation.push(ticketinfo);
      postTicketHolderInfo(allTicketHolderInformation);
    });
    console.log(allTicketHolderInformation);
  }

  return (
    <>
      <CampingOptions />
      <form action={submit}>
        {Array(cleanNumber)
          .fill()
          .map((item, index) => {
            return (
              <div key={index}>
                <h2>Ticket {index + 1}</h2>
                <div>
                  <label htmlFor={`ticket_reguler${index}`}>VIP</label>
                  <input
                    id={`ticket_reguler${index}`}
                    type="checkbox"
                    value="vip"
                    name="chose_vip"
                  />
                </div>
                <label htmlFor={`first_name${index}`}>First name</label>
                <input
                  id={`first_name${index}`}
                  type="text"
                  name="first_name"
                />
                <label htmlFor={`last_name${index}`}>Last name</label>
                <input id={`last_name${index}`} type="text" name="last_name" />
                <label htmlFor={`email${index}`}>E-mail</label>
                <input id={`email${index}`} type="e-mail" name="email" />
                <label htmlFor={`phone_number${index}`}>Phone number</label>
                <input id={`phone_number${index}`} type="text" name="phone" />
                <label htmlFor={`date_of_birth${index}`}>Date of birth</label>
                <input
                  id={`date_of_birth${index}`}
                  type="date"
                  name="birthday"
                />
                <label htmlFor={`address${index}`}>Address</label>
                <input id={`address${index}`} type="text" name="address" />
                <label htmlFor={`postal_code${index}`}>Postal code</label>
                <input
                  id={`postal_code${index}`}
                  type="text"
                  name="postal_code"
                />
                <label htmlFor={`city${index}`}>City</label>
                <input id={`city${index}`} type="text" name="city" />
              </div>
            );
          })}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
