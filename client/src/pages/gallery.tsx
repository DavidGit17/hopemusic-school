import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import {
  performances,
  recitals,
  facilities,
} from "@/assets/Images/GalleryImages";

export default function GalleryPage() {
  const allImages = [...performances, ...recitals, ...facilities];

  return (
    <div className="flex flex-col min-h-screen pt-20 font-inter">
      {/* HERO */}
      <section className="w-full py-12 md:py-20 bg-linear-to-b from-purple-50 to-white text-center">
        <h1 className="text-3xl sm:text-5xl font-bold font-playfair">
          Gallery
        </h1>
        <p className="max-w-3xl mx-auto mt-3 text-gray-600 md:text-lg">
          Explore moments from performances, recitals, and our music school.
        </p>
      </section>

      {/* GALLERY */}
      <section className="w-full py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <Tabs defaultValue="all" className="w-full">
              {/* Tab bar */}
              <div className="mb-8">
                <TabsList className="w-full bg-gray-100/80 rounded-2xl px-2 py-2">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="performances">Performances</TabsTrigger>
                  <TabsTrigger value="recitals">Recitals</TabsTrigger>
                  <TabsTrigger value="facilities">Facilities</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all">
                <GalleryGrid images={allImages} />
              </TabsContent>

              <TabsContent value="performances">
                <GalleryGrid images={performances} />
              </TabsContent>

              <TabsContent value="recitals">
                <GalleryGrid images={recitals} />
              </TabsContent>

              <TabsContent value="facilities">
                <GalleryGrid images={facilities} />
              </TabsContent>
            </Tabs>
            {/* ALL */}
            <TabsContent value="all">
              <GalleryGrid images={allImages} />
            </TabsContent>
            {/* PERFORMANCES */}
            <TabsContent value="performances">
              <GalleryGrid images={performances} />
            </TabsContent>
            {/* RECITALS */}
            <TabsContent value="recitals">
              <GalleryGrid images={recitals} />
            </TabsContent>
            {/* FACILITIES */}
            <TabsContent value="facilities">
              <GalleryGrid images={facilities} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

/** GRID COMPONENT */
type GalleryImage = {
  id: string | number;
  src: string;
  alt?: string;
};

function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-5
        gap-6
        place-items-center
      "
    >
      {images.map((img) => (
        <div
          key={img.id}
          className="
            aspect-square 
            w-full 
            max-w-[220px]
            bg-gray-200 
            rounded-xl 
            overflow-hidden 
            shadow-sm 
            hover:shadow-md 
            transition-all
          "
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}

