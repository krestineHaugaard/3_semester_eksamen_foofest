import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="/images/front-page-image.svg"
      width={1200}
      height={500}
      alt="Pagan folk festival frontpage image"
    />
  );
}
