import Image from "next/image";
import Link from "next/link";

export default function TicketCard(props) {
  return (
    <article className="bg-bg-col-bg-dark rounded-lg p-8 flex flex-col justify-between items-center max-w-80 mx-auto shadow-[3px_3px_0_1px] shadow-brand-four">
      <h3 className="sr-only">{props.title}</h3>
      <Image
        src={`/images/${props.image}`}
        width={200}
        height={200}
        alt={props.alttag}
      />
      <p className="text-4xl mt-4">{props.price},-</p>
      <p className="text-sm mt-1">+ Booking fee 99,-*</p>
      <p className="text-2xl mt-4">{props.listtitle}</p>
      <ul className="list-disc flex flex-col mt-4">
        {props.listitem.map((item) => {
          return (
            <li key={item} className="text-base text-wrap ml-6 max-w-32">
              {item}
            </li>
          );
        })}
      </ul>
      <Link
        href="/booking"
        prefetch={false}
        className="bg-brand-five-100 text-xl rounded-lg shadow-[3px_3px_0_1px] shadow-brand-five-150 px-8 py-2 mt-3 md:mt-8 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree"
      >
        Book now
      </Link>
      <p className="text-xs mt-8">
        * Booking fee is obligated and will only be payed once pr booking, even
        if multiple tickets are bought
      </p>
    </article>
  );
}
