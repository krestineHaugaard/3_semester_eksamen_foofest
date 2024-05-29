import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex justify-between md:items-center pt-4 pl-4 pr-4 max-w-6xl mx-auto">
      <div className="max-w-40 md:max-w-80">
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
      </div>
      <Nav />
    </header>
  );
}
