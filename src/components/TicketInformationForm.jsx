export default function TicketInformationForm(props) {
  console.log(props.index);
  async function submit(e) {
    "use server";

    const orderid = props.orderID;

    const formdata = e;

    const newFormData = {
      first_name: formdata.get("first_name"),
      last_name: formdata.get("last_name"),
      email: formdata.get("email"),
      order_id: orderid,
    };

    console.log(newFormData);
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
        <input id="phone_number" type="text" name="phone_number" />
        <label htmlFor="date_of_birth">Date of birth</label>
        <input id="date_of_birth" type="date" name="birth" />
        <label htmlFor="address">Address</label>
        <input id="address" type="text" name="address" />
        <label htmlFor="postal_code">Postal code</label>
        <input id="postal_code" type="text" name="postal_code" />
        <label htmlFor="city">City</label>
        <input id="city" type="text" name="city" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
