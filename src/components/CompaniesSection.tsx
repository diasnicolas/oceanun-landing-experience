import { useState } from "react";
import { Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    name: "Elizabete Resende",
    text: "Débora quero te agradecer pelo carinho e dedicação, fez toda a diferença! Foi maravilhosa a viagem.",
  },
  {
    name: "Florena Cadetti",
    text: "Oi Débora, queria agradecer pela atenção e carinho. A viagem foi inesquecível, maravilhosa, uma experiência incrível mesmo, amamos! Já tô indicando pra todo mundo!",
  },
  {
    name: "Adriana Carvalho",
    text: "Oi Débora!! A viagem foi ótima, tenho que agradecer muito a vc !! Foi nosso 'anjo da guarda' em Londres, que se tornou o nosso local preferido...queremos muito voltar.😊 Falei para minhas amigas de vc ....que nem te conheci pessoalmente e sentia você como uma amiga. Que o quanto é bom fazer um passeio desse com uma agência séria e uma pessoa de coração tão bom como vc.",
  },
  {
    name: "Suelen de Brito",
    text: "Oie Débora, quero te agradecer por todo suporte que você me deu para que essa viagem saísse da melhor forma possível. Seu atendimento realmente fez a diferença! Nós amamos a viagem, minha família queria fazer cruzeiro mas isso era apenas um sonho que eles tinham e eu não sabia, acertei em cheio na surpresa. Realmente ser cliente Yach Club é um diferencial, fomos muito bem recepcionados no porto e o embarque foi imediato e sem filas. Agradeço mais uma vez todo suporte que vc me deu para que tudo se realizasse como sonhei. Logo logo estarei entrando em contato para agendar a próxima viagem😉☺️",
  },
  {
    name: "Pedro Sasso",
    text: "Débora muito obrigado pela sua atenção e cuidado conosco. Sempre prestativa. Viagem maravilhosa.",
  },
  {
    name: "Mayara Martinez",
    text: "Nossa foi surpreendentemente maravilhoso 😍😍😍😍 Obrigada por tudo!",
  },
  {
    name: "Ana Varani",
    text: "Obrigada Débora, por todo o suporte, pelas dicas valiosas e espero que seja só a primeira de muitas 🛳️🌍 foi tudo perfeito! 🤩",
  },
  {
    name: "Regina Almeida",
    text: "Debora!!! Obrigada por essa oportunidade e experiência deslumbrante que foi esses dias no Costa Favolosa, organizado pela Oceanun… Gratidão 🙏🏽👏🏻👏🏻🥰",
  },
  {
    name: "Rayssa Gonçalves",
    text: "Ficamos apaixonadas com a viagem e o Cruzeiro. Sempre tive muita vontade de fazer, mas superou todas as minhas expectativas. Tudo no Cruzeiro era impecável e conhecer tanto país em pouco tempo foi incrível. E pra fechar com chave de ouro, ontem no final da noite teve um sorteio no Cruzeiro que eu fui a ganhadora !!",
  },
];

const LONG_TEXT_THRESHOLD = 170;

const CompaniesSection = () => {
  const isMobile = useIsMobile();
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<string, boolean>>({});

  const handleToggleExpand = (name: string) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((c) => {
            const isExpanded = expandedTestimonials[c.name];
            const shouldShowToggle = isMobile || c.text.length > LONG_TEXT_THRESHOLD;
            const shouldClamp = shouldShowToggle && !isExpanded;

            return (
              <div
                key={c.name}
                className="group rounded-3xl border border-primary/10 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
                <p
                  className={`${shouldShowToggle ? "mb-2" : "mb-6"} text-muted-foreground leading-relaxed`}
                  style={
                    shouldClamp
                      ? {
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }
                      : {
                          display: "block",
                        }
                  }
                >
                  "{c.text}"
                </p>
                {shouldShowToggle ? (
                  <button
                    type="button"
                    onClick={() => handleToggleExpand(c.name)}
                    className="mb-6 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    {isExpanded ? "Ler menos" : "Ler mais"}
                  </button>
                ) : (
                  <div className="mb-6" />
                )}
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">{c.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
