import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Por que não tem valores no site?",
    a: "Os valores variam conforme a temporada e a localização. Por isso, mantemos o site atemporal e fornecemos informações detalhadas e atualizadas de forma personalizada via WhatsApp.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Temos 3 possibilidades: à vista em reais via Pix; parcelamento em até 12x sem juros no cartão de crédito; boleto bancário também sem juros se for reserva da MSC (após análise de crédito).",
  },
  {
    q: "Como entro em contato?",
    a: "Preencha o formulário na seção de contato e será redirecionado para o WhatsApp.",
  },
  {
    q: "É necessário passaporte para cruzeiro internacional?",
    a: "Sim, para cruzeiros internacionais é necessário ter um passaporte válido. Recomendamos verificar as exigências de visto para os destinos incluídos no itinerário.",
  },
  {
    q: "Há suporte durante toda a viagem?",
    a: "Sim, oferecemos atendimento especial desde o planejamento até o desembarque, garantindo que você tenha uma viagem tranquila e sem preocupações.",
  },
  {
    q: "Os valores dos pacotes de cruzeiro mudam?",
    a: "Sim, os valores variam de acordo com a temporada e a localização. Para informações detalhadas e atualizadas, entre em contato via WhatsApp.",
  },
  {
    q: "O que está incluso nos pacotes de cruzeiro?",
    a: "Nossos pacotes geralmente incluem acomodação, alimentação, seguro e pacotes de bebidas. Detalhes específicos podem ser personalizados conforme suas necessidades.",
  },
  {
    q: "Como faço para reservar um cruzeiro com a Oceanun?",
    a: "As reservas podem ser feitas diretamente via WhatsApp, onde nossa equipe oferecerá suporte personalizado para encontrar o pacote ideal para você.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-shell bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <span className="section-kicker">Tire suas dúvidas</span>
          <h2 className="section-title">
            Perguntas <span className="text-gradient-ocean">Frequentes</span>
          </h2>
          <div className="ocean-divider" />
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-primary/15 bg-card px-6 data-[state=open]:shadow-ocean"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
