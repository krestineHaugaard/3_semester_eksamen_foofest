import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto pb-4 pl-4 pr-4">
      <Image
        src="/images/logo.svg"
        width={500}
        height={500}
        alt="Pagan folk festival logo"
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

        <div className="flex gap-6">
          <Image
            src="/images/facebook_icon.svg"
            width={40}
            height={40}
            alt="facebook icon"
          />
          <Image
            src="/images/insta_icon.svg"
            width={40}
            height={40}
            alt="insta icon"
          />
          <Image
            src="/images/twitter_icon.svg"
            width={40}
            height={40}
            alt="twitter icon"
          />
        </div>
      </div>
    </footer>
  );
}
