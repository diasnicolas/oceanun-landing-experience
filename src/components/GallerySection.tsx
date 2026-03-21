import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/galeria_1.jpg";
import gallery2 from "@/assets/galeria_2.jpg";
import gallery3 from "@/assets/galeria_3.jpg";
import gallery4 from "@/assets/galeria_4.jpg";
import gallery5 from "@/assets/galeria_5.jpg";
import gallery6 from "@/assets/galeria_6.jpg";
import gallery7 from "@/assets/galeria_7.jpg";
import gallery8 from "@/assets/galeria_8.jpg";
import gallery9 from "@/assets/galeria_9.jpg";
import gallery10 from "@/assets/galeria_10.jpg";
import gallery11 from "@/assets/galeria_11.jpg";
import gallery12 from "@/assets/galeria_12.jpg";
import gallery13 from "@/assets/galeria_13.jpg";
import gallery14 from "@/assets/galeria_14.jpg";
import gallery15 from "@/assets/galeria_15.jpg";

const images = [
  { src: gallery1, alt: "Foto de viagens 1" },
  { src: gallery2, alt: "Foto de viagens 2" },
  { src: gallery3, alt: "Foto de viagens 3" },
  { src: gallery4, alt: "Foto de viagens 4" },
  { src: gallery5, alt: "Foto de viagens 5" },
  { src: gallery6, alt: "Foto de viagens 6" },
  { src: gallery7, alt: "Foto de viagens 7" },
  { src: gallery8, alt: "Foto de viagens 8" },
  { src: gallery9, alt: "Foto de viagens 9" },
  { src: gallery10, alt: "Foto de viagens 10" },
  { src: gallery11, alt: "Foto de viagens 11" },
  { src: gallery12, alt: "Foto de viagens 12" },
  { src: gallery13, alt: "Foto de viagens 13" },
  { src: gallery14, alt: "Foto de viagens 14" },
  { src: gallery15, alt: "Foto de viagens 15" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((c) => (c === null ? null : c === 0 ? images.length - 1 : c - 1));
  const next = () => setLightbox((c) => (c === null ? null : c === images.length - 1 ? 0 : c + 1));

  return (
    <>
      <section id="galeria" className="section-shell bg-ocean-gradient-light py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-kicker">Inspiração</span>
            <h2 className="section-title">
              Galeria de <span className="text-gradient-ocean">Viagens</span>
            </h2>
            <div className="ocean-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                className={`cursor-pointer overflow-hidden rounded-3xl border border-primary/15 shadow-ocean ${i === 0 || i === 5 ? "row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="min-h-[200px] h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 transition-colors backdrop-blur-sm hover:bg-background/40"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-background/20 transition-colors backdrop-blur-sm hover:bg-background/40 md:left-8"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-background/20 transition-colors backdrop-blur-sm hover:bg-background/40 md:right-8"
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
