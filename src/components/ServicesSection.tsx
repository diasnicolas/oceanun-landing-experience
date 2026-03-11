import { MessageCircle, Package, Map, Ship } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Atendimento",
    desc: "Atendimento personalizado e suporte completo via WhatsApp.",
  },
  {
    icon: Package,
    title: "Pacotes Completos",
    desc: "Oferecemos pacotes completos para que você possa ter a melhor experiência possível!",
  },
  {
    icon: Map,
    title: "Principais Rotas",
    desc: "América do Sul, Caribe, Travessia, Mediterrâneo e Norte da Europa.",
  },
  {
    icon: Ship,
    title: "Principais Cias Marítimas",
    desc: "MSC, Costa Cruzeiros, Royal Caribbean, NCL, entre outros.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-shell relative overflow-hidden py-20 md:py-28 bg-ocean-radial text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path fill="currentColor" d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,218.7C672,235,768,213,864,186.7C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L0,320Z" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-[0.22em]">O que fazemos</span>
          <h2 className="mt-3 text-3xl font-display font-bold md:text-5xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Pacotes completos de viagens e cruzeiros marítimos com atendimento especializado.
          </p>
          <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-secondary/80 to-primary-foreground/60" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-primary-foreground/20 p-8 text-center glass-surface-dark transition-all hover:-translate-y-1 hover:bg-primary-foreground/15"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
              <p className="text-primary-foreground/75 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
