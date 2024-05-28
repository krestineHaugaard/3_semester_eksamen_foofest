import CampingCard from "@/components/CampingCard";
import TicketCard from "@/components/TicketCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Pagan folk festival</h1>
      <Image
        src="/images/front-page-image.svg"
        width={1200}
        height={500}
        alt="Pagan folk festival frontpage image"
      />

      <h2 className="text-center text-xl md:text-3xl">
        Tickets and camping overview
      </h2>
      <div className="grid grid-cols-2">
        <TicketCard
          title="regular ticket"
          image="regular_ticket.svg"
          alttag="regular ticket"
          price="799"
          listtitle="7 days acces to"
          listitem={["Concert area", "Festival grounds", "Chosen camping area"]}
        />
        <TicketCard
          title="v.i.p ticket"
          image="vip_ticket.svg"
          alttag="vip ticket"
          price="1.299"
          listtitle="Regular ticket +"
          listitem={["VIP lounge pass", "VIP only bar", "VIP concert area"]}
        />
      </div>
      <CampingCard />
    </>
  );
}
