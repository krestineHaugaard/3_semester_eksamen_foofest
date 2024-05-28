import { getBands } from "@/utils/api";
import Image from "next/image";

export default async function SingleBand({ params }) {
  const slug = params.slug;
  const data = await getBands(slug);

  // console.log(data);
  return (
    <section className="grid md:grid-cols-2 py-8 md:py-10">
      <div>
        <h1 className="text-3xl md:text-5xl py-2 md:py-6">{data.name}</h1>
        <h2 className="text-xl md:text-2xl py-1 md:py-2 text-brand-one-100">
          {data.genre}
        </h2>
        <div className=" py-3 md:py-6 flex gap-5 flex-wrap">
          {data.members.map((member) => {
            return (
              <p key={member} className="md:text-lg text-title-col">
                {member}
              </p>
            );
          })}
        </div>
        <p>{data.bio}</p>
      </div>
      <div>
        <article className="bg-bg-col-bg-dark rounded-lg shadow-[3px_3px_0_1px] shadow-brand-two max-w-80  grid gap-5 p-8 mx-auto">
          <h3 className="text-center text-xl">Spotify</h3>
          <ol className="grid grid-rows-5 gap-3">
            <li className="flex justify-between items-center">
              <div>
                <Image
                  src="/images/small_no_picture.svg"
                  width={50}
                  height={100}
                  alt="No image"
                />
              </div>
              <p className="text-lg">1. Title</p>
              <div>
                <Image
                  src="/images/playbtn.svg"
                  width={25}
                  height={100}
                  alt="Play button"
                />
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <Image
                  src="/images/small_no_picture.svg"
                  width={50}
                  height={100}
                  alt="No image"
                />
              </div>
              <p className="text-lg">2. Title</p>
              <div>
                <Image
                  src="/images/playbtn.svg"
                  width={25}
                  height={100}
                  alt="Play button"
                />
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <Image
                  src="/images/small_no_picture.svg"
                  width={50}
                  height={100}
                  alt="No image"
                />
              </div>
              <p className="text-lg">3. Title</p>
              <div>
                <Image
                  src="/images/playbtn.svg"
                  width={25}
                  height={100}
                  alt="Play button"
                />
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <Image
                  src="/images/small_no_picture.svg"
                  width={50}
                  height={100}
                  alt="No image"
                />
              </div>
              <p className="text-lg">4. Title</p>
              <div>
                <Image
                  src="/images/playbtn.svg"
                  width={25}
                  height={100}
                  alt="Play button"
                />
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <Image
                  src="/images/small_no_picture.svg"
                  width={50}
                  height={100}
                  alt="No image"
                />
              </div>
              <p className="text-lg">5. Title</p>
              <div>
                <Image
                  src="/images/playbtn.svg"
                  width={25}
                  height={100}
                  alt="Play button"
                />
              </div>
            </li>
          </ol>
        </article>
      </div>
    </section>
  );
}
