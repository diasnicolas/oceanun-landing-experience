import heroBg from "@/assets/hero-cruise.jpg";
import { Anchor } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Cruzeiro de luxo navegando em águas cristalinas"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-primary-foreground/20">
          <Anchor className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-primary-foreground">Especialistas em Cruzeiros</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
          Sua próxima aventura{" "}
          <span className="text-secondary">começa aqui</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 font-light">
          Cruzeiros marítimos, pacotes completos de viagens e experiências inesquecíveis planejadas com cuidado e atenção aos mínimos detalhes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-ocean"
          >
            Solicite seu Orçamento
          </a>
          <a
            href="#sobre"
            className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Conheça a Oceanun
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-wave">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground/60">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
