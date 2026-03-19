import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Por que não tem valores no site?",
    a: "Os valores variam conforme a temporada e personalização do pacote. Por isso, mantemos o site atemporal e fornecemos informações detalhadas e atualizadas de forma individual via WhatsApp.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "- À vista em reais via Pix.\n\nPara pacotes (voo + hotel):\n- Parcelamento em até 10x sem juros no cartão de crédito.\n- Até 10x no boleto bancário sem juros (após análise de crédito).\n\nPara cruzeiros:\n- Costa: parcelamento em até 12x sem juros no cartão de crédito.\n- MSC: parcelamento em até 12x sem juros no cartão de crédito ou entrada + até 12x sem juros no boleto bancário (após análise de crédito).\n\nDemais companhias marítimas:\n- Entrada + até 10x no cartão de crédito.\n\nApenas passagem:\n- Parcelamento de acordo com a cia aérea.",
  },
  {
    q: "É necessário passaporte para cruzeiro internacional?",
    a: "Em viagens para Argentina e Uruguai é permitido embarcar com o novo RG (CIN). Para os demais cruzeiros internacionais é necessário ter um passaporte válido. Recomendamos verificar as exigências de visto para os destinos incluídos no itinerário.",
  },
  {
    q: "Os valores dos pacotes mudam?",
    a: "Sim, os valores variam de acordo com a demanda e personalização. Para informações detalhadas e atualizadas, entre em contato via WhatsApp.",
  },
  {
    q: "O que está incluso nos pacotes de cruzeiro?",
    a: "Nossos pacotes geralmente incluem acomodação, alimentação, taxa de embarque, taxa de serviço, seguro e pacotes de bebidas. Detalhes específicos podem ser personalizados conforme suas necessidades.",
  },
  {
    q: "O que está incluso nos pacotes de viagens?",
    a: "Voo, acomodação, transfer (aeroporto/hotel/aeroporto), seguro e passeios. Detalhes específicos podem ser personalizados conforme suas necessidades.",
  },
  {
    q: "Como faço para reservar uma viagem com a Oceanun?",
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
              <AccordionContent className="whitespace-pre-line text-muted-foreground pb-5 leading-relaxed">
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
