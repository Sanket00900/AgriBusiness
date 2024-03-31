import Image from "next/image";

function ImageCard({ imageSrc, imageTitle }) {
  return (
    <div>
      <div className="rounded-md w-64">
        <Image
          width={400}
          height={400}
          quality={100}
          src={imageSrc}
          style={{}}
        />
        <div className="bg-imgCard-bg text-white p-4 text-3xl font-bold">
          {imageTitle}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
