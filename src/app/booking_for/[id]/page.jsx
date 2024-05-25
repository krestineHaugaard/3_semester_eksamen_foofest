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

  // async function submit(e) {
  //   "use server";

  //   const formdata = new FormData(e);

  //   console.log(formdata);

  // const firstName = formdata.filter(firstNameArray);

  // console.log(firstName);

  // const combinedArray = firstName.map((firstName, index) => ({
  //   first_name: firstName.value,
  //   last_name: lastNames[index].value,
  // }));

  // console.log(combinedArray);

  // const allTicketHolderInformation = [formdata.forEach((form) =>
  //   {return
  //   {// first_name: ,
  //     // last_name: form.last_name.value,
  //     // email: form.email.value,
  //     // tlf_number: form.tlf_number.value,
  //     // birthday: form.birthday.value,
  //     // address_line: form.address_line.value,
  //     // postal_code: form.postal_code.value,
  //     city: "hej",
  //     // chose_vip: form.chose_vip.value,
  //     order_id: orderid,}
  //   }
  // )];
  // console.log(allTicketHolderInformation);
  // postTicketHolderInfo(allTicketHolderInformation);
  // }

  return (
    <>
      <CampingOptions />

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
