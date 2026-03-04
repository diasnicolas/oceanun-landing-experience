import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { Building2, Heart, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const divisions = [
  {
    icon: Building2,
    title: "A Agência",
    text: [
      "A agência foi fundada em Abril de 2023, com o intuito de levar experiências marcantes para todos os viajantes.",
      "A princípio, nosso nome era outro, mas com o tempo, precisávamos nos reinventar e escolhemos um novo, com mais significado: OCEANUM — da palavra em latim \"oceano\".",
      "Afinal, somos especialistas em cruzeiros marítimos.",
    ],
    images: [gallery2, gallery1, gallery3],
    imageAlt: "Destino paradisíaco com cruzeiro",
  },
  {
    icon: Heart,
    title: "A Fundadora",
    text: [
      "Fundada por Débora Puorro, natural de Campinas/SP, formada em Administração de Empresas e Ciências Contábeis.",
      "Apaixonada por viagens e com o sonho de conhecer o mundo desde criança. Atualmente, tem a bagagem de morar na Europa desde 2018, onde passou 1 ano na Itália e o restante em Londres.",
      "Visitou diversas cidades em mais de 10 países e 8 estados brasileiros, e tem planos para viajar muito mais...",
    ],
    images: [gallery1, gallery3, gallery2],
    imageAlt: "Viajantes apreciando o pôr do sol no cruzeiro",
  },
  {
    icon: Sparkles,
    title: "O Sonho",
    text: [
      "Débora juntou a vontade de ter o próprio negócio, o amor por viajar, planejar viagens e a vontade de ajudar as pessoas a realizarem seus sonhos para criar a Oceanum junto com o seu marido Renan.",
      "Fizeram cursos na área de turismo, hotelaria e empreendedorismo e estão em constante estudo e treinamento para te entregar o que há de melhor.",
    ],
    images: [gallery3, gallery2, gallery1],
    imageAlt: "Deck de piscina no cruzeiro",
  },
];

const ImageSlider = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-ocean">
      <img
        src={images[current]}
        alt={alt}
        className="w-full h-64 md:h-96 object-cover transition-all duration-500"
      />
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-background"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-background"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary scale-110" : "bg-background/60"}`}
          />
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-ocean-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Nossa História</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Conheça a <span className="text-gradient-ocean">Oceanun</span>
          </h2>
        </div>
        <div className="space-y-20 md:space-y-28">
          {divisions.map((div, i) => (
            <div
              key={div.title}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-14 items-center`}
            >
              <div className="w-full md:w-1/2">
                <ImageSlider images={div.images} alt={div.imageAlt} />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <div className="inline-flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <div.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {div.title}
                  </h3>
                </div>
                {div.text.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
