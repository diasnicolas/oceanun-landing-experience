import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Casal apreciando o pôr do sol no cruzeiro" },
  { src: gallery2, alt: "Ilha tropical com cruzeiro" },
  { src: gallery3, alt: "Piscina no deck do navio" },
  { src: gallery4, alt: "Santorini vista do mar" },
  { src: gallery5, alt: "Restaurante de luxo a bordo" },
  { src: gallery6, alt: "Fiordes noruegueses" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((c) => (c === null ? null : c === 0 ? images.length - 1 : c - 1));
  const next = () => setLightbox((c) => (c === null ? null : c === images.length - 1 ? 0 : c + 1));

  return (
    <>
      <section id="galeria" className="py-20 md:py-28 bg-ocean-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Inspiração</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
              Galeria de <span className="text-gradient-ocean">Viagens</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                className={`overflow-hidden rounded-2xl shadow-ocean cursor-pointer ${i === 0 || i === 5 ? "row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 min-h-[200px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
