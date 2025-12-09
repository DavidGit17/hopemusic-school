import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
};

export function ScrollAreaHorizontalDemo({
  artworks,
}: {
  artworks: GalleryItem[];
}) {
  return (
    <ScrollArea className="w-full rounded-xl border whitespace-nowrap">
      <div className="flex w-max space-x-6 p-4">
        {artworks.map((item) => (
          <figure key={item.id} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-4/3 h-64 w-96 object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="text-muted-foreground pt-2 text-xs">
              {item.alt}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
