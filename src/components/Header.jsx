import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link
        href="/"
        prefetch={false}
        className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2"
      >
        <Image
          src="/images/logo.svg"
          width={300}
          height={500}
          alt="Pagan folk festival frontpage image"
        />
      </Link>
      <Link
        href="/program-overview"
        prefetch={false}
        className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2"
      >
        Festival program
      </Link>
      <Link
        href="/band-overview"
        prefetch={false}
        className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2"
      >
        Line-up
      </Link>
      <Link
        href="/booking"
        prefetch={false}
        className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2"
      >
        Buy tickets
      </Link>
      <Link
        href=""
        prefetch={false}
        className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2"
      >
        About us
      </Link>
    </header>
  );
}
