import clsx from "clsx";
const Mosaic = () => {
  return (
    <div className="w-full h-[400px] md:h-[450px] overflow-hidden mt-10">
      <div className="flex gap-7 h-full">
        {[
          "./mosaic/chrome-gallery-1.webp",
          "./mosaic/chrome-gallery-2.webp",
          "./mosaic/chrome-gallery-3.webp",
          "./mosaic/chrome-gallery-4.webp",
          "./mosaic/chrome-gallery-5.webp",
        ].map((url, index) => (
          <img
            key={index}
            className={clsx(
              "h-full w-auto",
              (index + 1) % 2 === 0 && "shadow-md"
            )}
            src={url}
            alt={`Gallery image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Mosaic;
