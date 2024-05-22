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

  console.log(cleanNumber);

  async function submit(formdata) {
    "use server";

    formdata.map(
      (form) => form.get("first_name"),
      form.get("last_name"),
      form.get("email"),
      form.get("phone"),
      form.get("birthday"),
      form.get("address"),
      form.get("postal_code"),
      form.get("city"),
      form.get(`ticket_choice`),
      orderid
    );
  }
  // se om det kan laves og gemmes og postes som array til den opruindelige data base i stedet

  return (
    <section>
      <CampingOptions />
      <form action={submit}>
        {Array(cleanNumber)
          .fill()
          .map((item, index) => {
            return (
              <div key={index}>
                <h2>Ticket {index + 1}</h2>
                <div>
                  <div>
                    <label htmlFor={`ticket_reguler${index}`}>Regular</label>
                    <input
                      id={`ticket_reguler${index}`}
                      type="radio"
                      value="reguler"
                      name={"ticket_choice" + { index }}
                    />
                    <label htmlFor={`ticket_vip${index}`}>VIP</label>
                    <input
                      id={`ticket_vip${index}`}
                      type="radio"
                      value="vip"
                      name={"ticket_choice" + { index }}
                    />
                  </div>
                  <label htmlFor={`first_name${index}`}>First name</label>
                  <input
                    id={`first_name${index}`}
                    type="text"
                    name="first_name"
                  />
                  <label htmlFor={`last_name${index}`}>Last name</label>
                  <input
                    id={`last_name${index}`}
                    type="text"
                    name="last_name"
                  />
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
              </div>
            );
          })}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
