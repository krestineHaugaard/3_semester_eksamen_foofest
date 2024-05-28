import Image from "next/image";

export default function CampingCard() {
  return (
    <article className="bg-bg-col-bg-dark">
      <h3 className="text-center">Exstra camping options</h3>
      <p className="max-w-prose text-center">
        After choosing your ticket amount and your prefered camping spot, you
        have the option to upgrade your camping expirience with our to tent
        options
      </p>
      <div className="grid grid-cols-2">
        <Image
          src="/images/orange_tent.svg"
          width={200}
          height={200}
          alt="Orange tent illustration"
        />
        <div>
          <h4>Have our crew set up your camping spot</h4>
          <p>This way you just have to focus on having a good time.</p>
          <p>
            The number of tents must match the number of booked festival tickets
          </p>
          <ul className="list-disc list-inside">
            <li>2 pers tent 299,-</li>
            <li>3 pers tent 399,-</li>
          </ul>
        </div>
        <Image
          src="/images/green_tent.svg"
          width={200}
          height={200}
          alt="Green tent illustation"
        />
        <div>
          <h4>Want a green option?</h4>
          <p>
            You can book a spor in one of our shelters for a sustainable
            festival experience
          </p>
          <p>
            Our shelters are a shared expirience with all who book. Therefor you
            can only be sure to stay with your frindes, if you book festival
            tickets together
          </p>
          <ul className="list-disc list-inside">
            <li>249,- pr shelter upgrade</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
