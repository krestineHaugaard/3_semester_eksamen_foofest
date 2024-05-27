import { postTicketHolderInfo } from "@/utils/orderdetailsapi";

export default function TicketInformationForm(props) {
  console.log(props.index);
  async function submit(formdata) {
    "use server";

    postTicketHolderInfo(
      formdata.get("ticket_choice"),
      formdata.get("first_name"),
      formdata.get("last_name"),
      formdata.get("email"),
      formdata.get("phone_number"),
      formdata.get("birthday"),
      formdata.get("address"),
      formdata.get("postal_code"),
      formdata.get("city"),
      props.orderID
    );
  }
  return (
    <>
      <h2>Ticket {props.ticketAmount + 1}</h2>
      <form id={props.ticketAmount + 1} action={submit}>
        <div>
          <label htmlFor="ticket_reguler">Regular</label>
          <input
            id="ticket_reguler"
            type="radio"
            value="reguler"
            name="ticket_choice"
          />
          <label htmlFor="ticket_vip">VIP</label>
          <input
            id="ticket_vip"
            type="radio"
            value="vip"
            name="ticket_choice"
          />
        </div>
        <label htmlFor="first_name">First name</label>
        <input id="first_name" type="text" name="first_name" />
        <label htmlFor="last_name">Last name</label>
        <input id="last_name" type="text" name="last_name" />
        <label htmlFor="email">E-mail</label>
        <input id="email" type="e-mail" name="email" />
        <label htmlFor="phone_number">Phone number</label>
        <input id="phone_number" type="number" name="phone_number" />
        <label htmlFor="date_of_birth">Date of birth</label>
        <input id="date_of_birth" type="date" name="birthday" />
        <label htmlFor="address">Address</label>
        <input id="address" type="text" name="address" />
        <label htmlFor="postal_code">Postal code</label>
        <input id="postal_code" type="number" name="postal_code" />
        <label htmlFor="city">City</label>
        <input id="city" type="text" name="city" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
