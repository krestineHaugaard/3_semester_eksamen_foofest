import { getData } from "@/utils/api";
import Link from "next/link";
import Image from "next/image";

export default async function BandList() {
  const bands = await getData("bands");
  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl pt-12 pb-14 md:pt-16 md:pb-20">
        This years line-up
      </h1>
      <section className="grid my-4 md:grid-cols-2 gap-12 md:my-8 lg:grid-cols-3 lg:gap-20 lg:my-16">
        {bands.map((band) => {
          return (
            <div
              key={band.slug}
              className="flex flex-col justify-between items-center gap-2 bg-bg-col-bg-dark rounded-lg p-4 md:p-8 shadow-[3px_3px_0_1px] shadow-brand-tree"
            >
              {/* <Image src={band.logo} width={300} height={300} alt="image" /> */}
              <h2 className="text-xl md:text-2xl text-center">{band.name}</h2>
              <h3 className="text-base md:text-lg text-brand-one-100 text-center">
                {band.genre}
              </h3>
              <div className="flex-wrap justify-center gap-x-5 hidden md:flex">
                {band.members.map((member) => {
                  return <p key={member}>{member}</p>;
                })}
              </div>
              <Link
                href={`/band/${band.slug}`}
                prefetch={false}
                className="bg-brand-five-100 rounded-lg shadow-[3px_3px_0_1px] shadow-brand-five-150 px-8 py-2 mt-3 md:mt-8 text-title-col active:bg-brand-four active:shadow-brand-five-150 hover:bg-brand-two hover:shadow-brand-tree"
              >
                Read more
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}
