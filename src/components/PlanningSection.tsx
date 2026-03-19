import { BadgeCheck, Compass, Luggage, PlaneTakeoff } from "lucide-react";

const items = [
  {
    icon: PlaneTakeoff,
    title: "Reserva Personalizada",
    description:
      "Cuidamos de todas as etapas da sua viagem, seja de cruzeiro ou avião, desde a escolha do pacote ideal até o desembarque",
  },
  {
    icon: Luggage,
    title: "Pacotes Completos",
    description: "Acomodação, transporte, seguro, passeios, tudo em uma única reserva.",
  },
  {
    icon: BadgeCheck,
    title: "Experiência Inesquecível",
    description:
      "Mais do que uma viagem — uma experiência planejada com cuidado e atenção aos mínimos detalhes, por quem entende do assunto.",
  },
  {
    icon: Compass,
    title: "Principais Rotas",
    description: "Nordeste Brasileiro, América do Sul, Caribe, Mediterrâneo e Norte da Europa",
  },
];

const PlanningSection = () => {
  return (
    <section id="planejamento" className="section-shell bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="section-kicker">Planejamento Completo</span>
          <h2 className="section-title">
            Sua viagem com <span className="text-gradient-ocean">cuidado total</span>
          </h2>
          <div className="ocean-divider" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-primary/10 p-8 transition-all duration-500 glass-surface hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-display font-bold text-foreground">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanningSection;