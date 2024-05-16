export default function TicketInformationForm() {
  return (
    <form action="">
      <div>
        <label htmlFor="">Regular</label>
        <input type="radio" />
        <label htmlFor="">VIP</label>
        <input type="radio" />
      </div>
      <label htmlFor="">First name</label>
      <input type="text" />
      <label htmlFor="">Last name</label>
      <input type="text" />
      <label htmlFor="">E-mail</label>
      <input type="e-mail" />
      <label htmlFor="">Phone number</label>
      <input type="text" />
      <label htmlFor="">Date of birth</label>
      <input type="date" />
      <label htmlFor="">Address</label>
      <input type="text" />
      <label htmlFor="">Postal code</label>
      <input type="text" />
      <label htmlFor="">City</label>
      <input type="text" />
    </form>
  );
}
