import Image from "next/image";

export default function FakeSpotify() {
  return (
    <article className="bg-bg-col-bg-dark rounded-lg shadow-[3px_3px_0_1px] shadow-brand-two max-w-80  grid gap-5 p-8 mx-auto my-8 md:my-0">
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
  );
}
