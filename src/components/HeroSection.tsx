import heroBg from "@/assets/hero-cruise.jpg";
import { Anchor } from "lucide-react";
import logo from "@/assets/logo-oceanum.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <img
        src={heroBg}
        alt="Cruzeiro de luxo navegando em águas cristalinas"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute -left-10 top-28 hidden h-52 w-52 rounded-full bg-secondary/20 blur-3xl md:block" />
      <div className="absolute -right-10 bottom-20 hidden h-64 w-64 rounded-full bg-primary/30 blur-3xl md:block" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center animate-fade-in-up">
        <div className="mx-auto mb-6 w-fit rounded-[1.6rem] p-3 glass-surface-dark">
          <img src={logo} alt="Oceanun" className="h-16 w-16 rounded-2xl bg-primary-foreground/10 p-1 object-contain md:h-40 md:w-40" />
        </div>

        <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-primary-foreground/30 bg-card/10 px-4 py-2 backdrop-blur-sm">
          <Anchor className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium text-primary-foreground">Especialistas em Cruzeiros</span>
        </div>

        <h1 className="mb-6 text-4xl font-display font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
          Sua próxima aventura{" "}
          <span className="text-secondary">começa aqui</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-primary-foreground/85 md:text-xl">
          Cruzeiros marítimos, pacotes completos de viagens e experiências inesquecíveis planejadas com cuidado e atenção aos mínimos detalhes.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="rounded-xl bg-secondary px-8 py-4 text-lg font-semibold text-secondary-foreground shadow-ocean transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Solicite seu Orçamento
          </a>
          <a
            href="#sobre"
            className="rounded-xl border-2 border-primary-foreground/40 px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
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
