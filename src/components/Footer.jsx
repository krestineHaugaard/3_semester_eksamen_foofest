import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto pb-4 pl-4 pr-4">
      <Image
        src="/images/logo.svg"
        width={500}
        height={500}
        alt="Pagan folk festival logo"
        sizes="(max-width: 500px) 100vw, 33vw"
        className="mx-auto md:-mb-48"
      />
      <div className="flex justify-between items-center flex-nowrap my-4 md:my-14">
        <div className="flex flex-col gap-4">
          <p className="text-nowrap md:text-xl text-center">+45 55 10 85 300</p>
          <div>
            <p className="text-nowrap md:text-xl text-center">
              Skovdistrict 223
            </p>
            <p className="text-nowrap md:text-xl text-center">4100 Ringsted</p>
          </div>
        </div>

        <div className="flex">
          <p className="text-nowrap md:text-xl text-center">
            social media goes here
          </p>
        </div>
      </div>
    </footer>
  );
}
