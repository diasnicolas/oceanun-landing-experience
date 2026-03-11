import mscImg from "@/assets/msc-cruise.jpg";
import costaImg from "@/assets/costa-cruise.jpg";
import royalImg from "@/assets/royal-caribbean.jpg";
import nclImg from "@/assets/ncl-cruise.jpg";

const companies = [
  {
    name: "MSC Cruzeiros",
    image: mscImg,
    features: [
      "Elegância Italiana com design sofisticado e toques modernos",
      "Roteiros globais do Mediterrâneo ao Caribe",
      "Gastronomia de alto nível com autêntica cozinha italiana",
      "Investimento em práticas ambientais sustentáveis",
    ],
  },
  {
    name: "Costa Cruzeiros",
    image: costaImg,
    features: [
      "Tradição italiana com forte legado de hospitalidade",
      "Diversidade de rotas: Europa, Ásia e América do Sul",
      "Ambiente familiar com programas para todas as idades",
      "Festas e eventos temáticos a bordo",
    ],
  },
  {
    name: "Royal Caribbean",
    image: royalImg,
    features: [
      "Pioneira em atrações: escalada, surfe e parques aquáticos",
      "Maiores e mais avançados navios do mundo",
      "Cobertura global: Caribe, Alasca, Mediterrâneo, Ásia",
      "Excursões exclusivas e experiências VIP a bordo",
    ],
  },
  {
    name: "Norwegian Cruise Line",
    image: nclImg,
    features: [
      "Freestyle Cruising: flexibilidade total em refeições",
      "Navios modernos com áreas exclusivas para adultos",
      "Vasta seleção de restaurantes de especialidades",
      "Spas de classe mundial e entretenimento ao vivo",
    ],
  },
];

const CompaniesSection = () => {
  return (
    <section id="companhias" className="section-shell bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-kicker">Parceiros</span>
          <h2 className="section-title">
            Principais <span className="text-gradient-ocean">Companhias</span>
          </h2>
          <p className="section-intro">
            Explore o mundo com as principais companhias marítimas, reconhecidas pela excelência em cruzeiros de luxo!
          </p>
          <div className="ocean-divider" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {companies.map((c) => (
            <div
              key={c.name}
              className="group overflow-hidden rounded-3xl border border-primary/10 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{c.name}</h3>
                <ul className="space-y-2">
                  {c.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-0.5">⎈</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
