import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Camila e Rafael",
    route: "Cruzeiro no Caribe",
    text: "Cada detalhe foi pensado com muito carinho. Embarcamos com tudo organizado e vivemos uma experiência inesquecível.",
  },
  {
    name: "Priscila A.",
    route: "Pacote completo no Nordeste Brasileiro",
    text: "Foi nossa primeira viagem em família com esse nível de suporte. A Oceanun cuidou de tudo com agilidade e atenção.",
  },
  {
    name: "Daniel M.",
    route: "Mediterrâneo",
    text: "Atendimento impecável do início ao fim. Recebemos orientações claras e aproveitamos cada etapa sem preocupações.",
  },
  {
    name: "Fernanda e Lucas",
    route: "América do Sul",
    text: "A personalização do roteiro fez toda diferença. Voltamos com lembranças incríveis e já planejando a próxima viagem.",
  },
];

const CompaniesSection = () => {
  return (
    <section id="depoimentos" className="section-shell bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-kicker">Clientes Oceanun</span>
          <h2 className="section-title">
            O que nossos clientes <span className="text-gradient-ocean">dizem</span>
          </h2>
          <p className="section-intro">
            Histórias reais de viajantes que viveram experiências marcantes com a nossa curadoria.
          </p>
          <div className="ocean-divider" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((c) => (
            <div
              key={c.name}
              className="group rounded-3xl border border-primary/10 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Quote className="h-6 w-6 text-primary" />
              </div>
              <p className="mb-6 text-muted-foreground leading-relaxed">"{c.text}"</p>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">{c.name}</h3>
                <p className="text-sm text-primary mt-1">{c.route}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
