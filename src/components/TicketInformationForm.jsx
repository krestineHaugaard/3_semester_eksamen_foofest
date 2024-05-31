import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { postTicketHolderInfo } from "@/utils/orderdetailsapi";

export default function TicketInformationForm(props) {
  async function submit(formData, index) {
    "use server";

    const choseVIP = formData.getAll(`chose${index}`);
    const firstName = formData.getAll("first_name");
    const lastName = formData.getAll("last_name");
    const eMail = formData.getAll("email");
    const phoneNumber = formData.getAll("phone_number");
    const birthDay = formData.getAll("birthday");
    const addressLine = formData.getAll("address");
    const postalCode = formData.getAll("postal_code");
    const city = formData.getAll("city");
    const orderID = props.orderID;

    const newArray = firstName.map((name, index) => {
      return {
        first_name: name,
        last_name: lastName[index],
        email: eMail[index],
        phone_number: phoneNumber[index],
        birthday: birthDay[index],
        address_line: addressLine[index],
        postal_code: postalCode[index],
        city: city[index],
        order_id: orderID,
        chose_vip: choseVIP[index],
      };
    });

    const isSubmit = await postTicketHolderInfo(newArray);

    console.log(isSubmit);

    const id = props.orderID;

    redirect("/booking_options_for/" + id);
  }
  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl pt-12 pb-14 md:pt-16 md:pb-20">
        Booking information
      </h1>
      <form action={submit} className="grid md:max-w-2xl gap-24 p-8  mx-auto">
        {Array(props.ticketAmount)
          .fill()
          .map((item, index) => {
            return (
              <div
                key={index}
                className="bg-bg-col-bg-dark rounded-lg shadow-[3px_3px_0_1px] shadow-brand-four p-12"
              >
                <h2 className="text-center text-xl md:text-3xl">
                  Ticket {index + 1}
                </h2>
                <div className=" pt-8">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-6 pt-4 border-b-2 border-brand-two">
                    <p className="pb-4 md:pb-0 md:text-lg">
                      Choose ticket type
                    </p>
                    <div className="flex justify-center gap-12 ">
                      <label
                        htmlFor={`ticket_regular${index}`}
                        className="md:text-lg"
                      >
                        Regular
                        <input
                          id={`ticket_regular${index}`}
                          type="radio"
                          name={`chose${index}`}
                          value="regular"
                          required
                          className="ml-2 accent-brand-five-100"
                        />
                      </label>

                      <label
                        htmlFor={`ticket_vip${index}`}
                        className="md:text-lg"
                      >
                        VIP
                        <input
                          id={`ticket_vip${index}`}
                          type="radio"
                          name={`chose${index}`}
                          value="vip"
                          required
                          className="ml-2 accent-brand-five-100"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4">
                    <label
                      htmlFor={`first_name${index}`}
                      className="flex flex-col md:col-span-2 md:text-lg"
                    >
                      First name
                      <input
                        id={`first_name${index}`}
                        type="text"
                        name="first_name"
                        required
                        className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1"
                      />
                    </label>
                    <label
                      htmlFor={`last_name${index}`}
                      className="flex flex-col md:col-span-2 md:text-lg"
                    >
                      Last name
                      <input
                        id={`last_name${index}`}
                        type="text"
                        name="last_name"
                        required
                        className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1"
                      />
                    </label>
                    <label
                      htmlFor={`email${index}`}
                      className="flex flex-col md:col-span-4 md:text-lg"
                    >
                      E-mail
                      <input
                        id={`email${index}`}
                        type="e-mail"
                        name="email"
                        required
                        className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1"
                      />
                    </label>

                    <label
                      htmlFor={`phone${index}`}
                      className="flex flex-col md:col-span-2 md:text-lg"
                    >
                      Phone number
                      <input
                        id={`phone${index}`}
                        type="number"
                        name="phone_number"
                        required
                        className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1"
                      />
                    </label>

                    <label
                      htmlFor={`birth${index}`}
                      className="flex flex-col md:col-span-2 md:text-lg"
                    >
                      Date of birth
                      <input
                        id={`birth${index}`}
                        type="date"
                        name="birthday"
                        required
                        className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1"
                      />
                    </label>

                    <label
                      htmlFor={`address${index}`}
                      className="flex flex-col md:col-span-4 md:text-lg"
                    >
                      Address
                      <input
                        id={`address${index}`}
                        type="text"
                        name="address"
                        required
                        className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1"
                      />
                    </label>

                    <label
                      htmlFor={`postal_code${index}`}
                      className="flex flex-col md:col-span-2 md:text-lg"
                    >
                      Postal code
                      <input
                        id={`postal_code${index}`}
                        type="number"
                        name="postal_code"
                        required
                        className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1"
                      />
                    </label>

                    <label
                      htmlFor={`city${index}`}
                      className="flex flex-col md:col-span-2 md:text-lg"
                    >
                      City
                      <input
                        id={`city${index}`}
                        type="text"
                        name="city"
                        required
                        className="text-bg-col-bg-dark text-base rounded-lg p-2 mt-1"
                      />
                    </label>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="flex justify-center gap-4 md:gap-12 pb-12">
          <Link
            href={`/booking`}
            className="bg-brand-one-100 text-base md:text-2xl rounded-lg shadow-[3px_3px_0_1px] shadow-brand-one-150 px-10 md:px-16 py-4 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree"
          >
            <div className="max-w-5 md:max-w-12">
              <Image
                src="/images/arrow_back.svg"
                width={35}
                height={100}
                alt="Next step"
              />
            </div>
          </Link>
          <button
            type="submit"
            className="bg-brand-five-100 text-base md:text-2xl rounded-lg shadow-[3px_3px_0_1px] shadow-brand-five-150 px-10 md:px-16 py-4 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree"
          >
            <div className="max-w-5 md:max-w-12">
              <Image
                src="/images/arrow_next.svg"
                width={35}
                height={100}
                alt="Next step"
              />
            </div>
          </button>
        </div>
      </form>
    </>
  );
}
