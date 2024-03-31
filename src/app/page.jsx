import ImageCard from "@/components/ImageCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        fill={true}
        quality={100}
        src={"/home-bg.png"}
        style={{
          objectFit: "cover",
          zIndex: "-2",
        }}
      />
      <div>
        <div className="mt-14 w-5/12 text-center m-auto">
          <div>
            <h1 className="p-4 m-8 text-primary-yellow text-5xl font-semibold ">
              We take care of your farm & grains
            </h1>
            <h2 className="text-xl mt-12 p-4 text-primary-yellow font-bold">
              From Seed to Harvest: Nurturing Your Farm, Protecting Your Grains,
              Ensuring Your Future.
            </h2>
          </div>

          <div className="flex mt-28 justify-center gap-20">
            <ImageCard imageSrc="/pre-harvest.png" imageTitle="Pre-Harvest" />
            <ImageCard imageSrc="/harvest-main.png" imageTitle="Harvest" />
            <ImageCard
              imageSrc="/post-harvest-main.png"
              imageTitle="Post-Harvest"
            />
          </div>
        </div>

        <div className="flex w-full justify-center p-8 items-center mt-16 gap-16">
          <div className="text-primary-green  w-5/12  text-5xl font-bold">
            Welcome to Agro-Culture Nurturing Grains, Enriching Farms.
          </div>
          <div className="text-primary-green w-7/12 text-lg font-semibold">
            Welcome to Agro-Culture, where tradition meets innovation in the
            heart of agriculture. Our comprehensive services and solutions are
            designed to support your farming journey every step of the way, from
            pre-harvest planning to the post-harvest process. Discover how we
            can help you maximize yields, optimize resources, and ensure the
            sustainability of your farm and grains.
            <div className="underline font-bold text-2xl">About us !</div>
          </div>
        </div>
      </div>
    </>
  );
}
