import image from "../assets/mountain-scenery-minimalist-digital-art-4k-wallpaper-uhdpaper.com-848@1@m.jpg";

function Gallery() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4">
      <div className="col-span-2 row-span-2">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="col-span-1 row-span-2">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="col-span-1 row-span-1">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default Gallery;
