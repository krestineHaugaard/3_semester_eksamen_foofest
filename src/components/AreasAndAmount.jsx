import { redirect } from "next/dist/server/api-utils";

export default function AreasAndAmount() {
  async function submit(formData) {
    "use server";
    const headersList = {
      "Content-Type": "application/json",
    };

    const bodyContent = JSON.stringify({
      area: formData.get("campingarea"),
      amount: formData.get("ticket"),
    });

    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "reserve-spot",
      {
        method: "PUT",
        body: bodyContent,
        headers: headersList,
      }
    );

    const data = await response.json();
    const id = data.id;
    redirect(`/booking_for/${id}`);
  }

  return (
    <>
      <form action={submit}>
        <select name="campingarea" id="area-select">
          <option value="Svartheim">Svartheim</option>
          <option value="Nilfheim">Nilfheim</option>
          <option value="Helheim">Helheim</option>
          <option value="Muspelheim">Muspelheim</option>
          <option value="Alfheim">Alfheim</option>
        </select>
        <input type="number" name="ticket" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
