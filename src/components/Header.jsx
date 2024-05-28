import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-4 pl-4 pr-4 max-w-6xl mx-auto">
      <Link
        href="/"
        prefetch={false}
        className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2 text-lg"
      >
        <Image
          src="/images/logo.svg"
          width={300}
          height={500}
          alt="Pagan folk festival frontpage image"
        />
      </Link>
      <Link
        href="/program"
        prefetch={false}
        className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2 text-xl"
      >
        Festival program
      </Link>
      <Link
        href="/bands"
        prefetch={false}
        className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2 text-xl"
      >
        Line-up
      </Link>
      <Link
        href="/booking"
        prefetch={false}
        className="text-title-col hover:text-brand-two active:text-brand-five-100 underline underline-offset-8 decoration-2 text-xl"
      >
        Buy tickets
      </Link>
    </header>
  );
}
