import { Headphones, Package, Shield, Star, Users, Compass } from "lucide-react";

const differentials = [
  {
    icon: Headphones,
    title: "Atendimento Especializado",
    desc: "Suporte completo antes, durante e após a sua viagem, com uma equipe dedicada a tornar sua experiência perfeita.",
  },
  {
    icon: Users,
    title: "Reserva Personalizada",
    desc: "Cuidamos de todas as etapas da sua viagem de cruzeiro, desde a escolha do pacote ideal até o desembarque.",
  },
  {
    icon: Package,
    title: "Pacotes Completos",
    desc: "Acomodação, alimentação, seguro, pacotes de bebidas, excursões e tudo em uma única reserva.",
  },
  {
    icon: Shield,
    title: "Tranquilidade e Segurança",
    desc: "Certeza de estar sendo atendido por especialistas em cruzeiros, com confiança em cada etapa.",
  },
  {
    icon: Star,
    title: "Atendimento Diferenciado",
    desc: "Nosso foco é você, com atenção especial e soluções personalizadas para todas as suas necessidades.",
  },
  {
    icon: Compass,
    title: "Experiência Inesquecível",
    desc: "Mais do que uma viagem — uma experiência planejada com cuidado e atenção aos mínimos detalhes.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Por que nos escolher</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Nossos <span className="text-gradient-ocean">Diferenciais</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <d.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{d.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
