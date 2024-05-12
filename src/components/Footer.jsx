import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center">
      <div>
        <p>+45 55 10 85 300</p>
        <p>Skovdistrict 223</p>
        <p>4100 Ringsted</p>
      </div>
      <Image
        src="/images/logo.svg"
        width={500}
        height={500}
        alt="Pagan folk festival logo"
      />
      <div>
        <p>social media goes here</p>
      </div>
    </footer>
  );
}
