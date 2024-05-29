import CampingCard from "@/components/CampingCard";
import Newsletter from "@/components/Newsletter";
import TicketCard from "@/components/TicketCard";
import DataImportantNews from "@/components/DataImportantNews";
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
      <div className="max-w-72 md:max-w-3xl  mx-auto py-12 md:py-24">
        <DataImportantNews />
      </div>

      <h2 className="text-center text-3xl md:text-5xl pt-12 md:pt-24">
        Tickets and camping overview
      </h2>
      <div className="grid md:grid-cols-2 max-w-72 md:max-w-3xl  mx-auto gap-16 py-12 md:py-24">
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
        <CampingCard />
      </div>
      <div className="max-w-72 md:max-w-3xl mx-auto py-12 md:py-24">
        <Newsletter />
      </div>
    </>
  );
}
