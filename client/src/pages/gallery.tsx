import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { ScrollAreaHorizontalDemo } from "@/components/ui/ScrollAreaHorizontalDemo";
import { performances, recitals, school } from "../assets/Images/GalleryImages";

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

export default function GalleryPage() {
  const allImages = [...performances, ...recitals, ...school];

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
            {/* Tab Bar */}
            <div className="mb-8 flex justify-center">
              <TabsList className="bg-gray-100/80 rounded-2xl px-2 py-2 flex gap-4 overflow-x-auto max-w-full">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="performances">Performances</TabsTrigger>
                <TabsTrigger value="recitals">Recitals</TabsTrigger>
                <TabsTrigger value="school">School</TabsTrigger>
              </TabsList>
            </div>

            {/* ALL */}
            <TabsContent value="all">
              <ScrollAreaHorizontalDemo artworks={allImages} />
            </TabsContent>

            {/* PERFORMANCES */}
            <TabsContent value="performances">
              <GalleryGrid images={performances} />
            </TabsContent>

            {/* RECITALS */}
            <TabsContent value="recitals">
              <GalleryGrid images={recitals} />
            </TabsContent>

            {/* SCHOOL */}
            <TabsContent value="school">
              <GalleryGrid images={school} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <div
          key={image.id}
          className="overflow-hidden rounded-xl border shadow-sm bg-white"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-64 w-full object-cover"
            loading="lazy"
          />
          <div className="p-3 text-sm text-gray-600">{image.alt}</div>
        </div>
      ))}
    </div>
  );
}
