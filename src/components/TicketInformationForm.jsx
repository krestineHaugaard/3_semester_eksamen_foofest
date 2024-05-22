export default function TicketInformationForm(props) {
  console.log(props.index);
  async function handleSubmit(formdata) {
    "use server";
  }
  return (
    <>
      <h2>Ticket {props.index}</h2>
      <form action={handleSubmit} key={props.index}>
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
        <input id="first_name" type="text" />
        <label htmlFor="last_name">Last name</label>
        <input id="last_name" type="text" />
        <label htmlFor="email">E-mail</label>
        <input id="email" type="e-mail" />
        <label htmlFor="phone_number">Phone number</label>
        <input id="phone_number" type="text" />
        <label htmlFor="date_of_birth">Date of birth</label>
        <input id="date_of_birth" type="date" />
        <label htmlFor="address">Address</label>
        <input id="address" type="text" />
        <label htmlFor="postal_code">Postal code</label>
        <input id="postal_code" type="text" />
        <label htmlFor="city">City</label>
        <input id="city" type="text" />
      </form>
    </>
  );
}
