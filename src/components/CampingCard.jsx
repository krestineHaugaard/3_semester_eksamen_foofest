import Image from "next/image";

export default function CampingCard() {
  return (
    <article className="bg-bg-col-bg-dark rounded-lg shadow-[3px_3px_0_1px] shadow-brand-two md:col-span-2 p-12">
      <div className="flex flex-col items-center">
        <h3 className="text-center text-3xl md:text-4xl">
          Exstra camping options
        </h3>
        <p className="max-w-prose text-center mt-4 mb-12">
          After choosing your ticket amount and your prefered camping spot, you
          have the option to upgrade your camping expirience with our two tent
          options
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        <Image
          src="/images/orange_tent.svg"
          width={200}
          height={200}
          alt="Orange tent illustration"
          className="place-self-center pt-4 md:pt-0"
        />
        <div className="md:col-span-2">
          <h4 className="text-xl md:text-2xl pb-4 md:pb-2">
            Have our crew set up your camping spot
          </h4>
          <p className="pt-2">
            This way you just have to focus on having a good time.
          </p>
          <p className="pt-2">
            The number of tents must match the number of booked festival tickets
          </p>
          <ul className="list-disc list-inside pt-4 ">
            <li>2 pers tent 299,-</li>
            <li>3 pers tent 399,-</li>
          </ul>
        </div>
        <Image
          src="/images/green_tent.svg"
          width={200}
          height={200}
          alt="Green tent illustation"
          className="place-self-center pt-8 md:pt-0"
        />
        <div className="md:col-span-2">
          <h4 className="text-xl md:text-2xl pb-4 md:pb-2">
            Want a green option?
          </h4>
          <p className="pt-2">
            You can book a spor in one of our shelters for a sustainable
            festival experience
          </p>
          <p className="pt-2">
            Our shelters are a shared expirience with all who book. Therefore
            you can only be sure to stay with your frindes, if you book festival
            tickets together
          </p>
          <ul className="list-disc list-inside pt-4">
            <li>249,- pr shelter upgrade</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
