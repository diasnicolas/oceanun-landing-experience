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
  return (
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
              className={`overflow-hidden rounded-2xl shadow-ocean ${i === 0 || i === 5 ? "row-span-2" : ""}`}
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
  );
};

export default GallerySection;
