import FakeSpotify from "@/components/FakeSpotify";
import { getBands } from "@/utils/api";

export const revalidate = 1800;

export default async function SingleBand({ params }) {
  const slug = params.slug;
  const data = await getBands(slug);

  return (
    <section className="grid md:grid-cols-2 py-8 md:py-10">
      <div>
        <h1 className="text-3xl md:text-5xl">{data.name}</h1>
        <h2 className="text-xl md:text-2xl py-2 md:py-4 text-brand-one-100">
          {data.genre}
        </h2>
        <div className=" py-4 md:py-8 flex gap-x-5 flex-wrap">
          {data.members.map((member) => {
            return (
              <p key={member} className="md:text-lg text-title-col">
                {member}
              </p>
            );
          })}
        </div>
        <p className="my-4">{data.bio}</p>
      </div>
      <div>
        <FakeSpotify />
      </div>
    </section>
  );
}
