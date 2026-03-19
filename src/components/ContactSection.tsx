import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", whatsapp: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}. Meu whatsapp é ${form.whatsapp}. ${form.mensagem}`;
    const phone = "5519978194930";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="section-shell bg-ocean-gradient-light py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <span className="section-kicker">Vamos conversar</span>
          <h2 className="section-title">
            Entre em <span className="text-gradient-ocean">Contato</span>
          </h2>
          <p className="section-intro max-w-xl">
            Preencha o formulário e será redirecionado para o nosso WhatsApp.
          </p>
          <div className="ocean-divider" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-primary/15 p-8 shadow-ocean glass-surface md:p-10"
        >
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Nome</label>
            <input
              type="text"
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Seu nome completo"
              className="w-full rounded-lg border border-input bg-background/80 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">WhatsApp</label>
            <input
              type="tel"
              required
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              placeholder="(00) 00000-0000"
              className="w-full rounded-lg border border-input bg-background/80 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Como podemos ajudar?</label>
            <textarea
              required
              rows={4}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              placeholder="Descreva o que você precisa..."
              className="w-full resize-none rounded-lg border border-input bg-background/80 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-lg font-semibold text-primary-foreground shadow-ocean transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            <Send className="w-5 h-5" />
            Enviar via WhatsApp
          </button>
        </form>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-center">
          <a
            href="https://instagram.com/oceanun.ag"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @oceanun.ag
          </a>
          <a
            href="https://youtube.com/@oceanun.agencia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.017 3.017 0 00-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.376.55A3.017 3.017 0 00.502 6.186 31.665 31.665 0 000 12a31.665 31.665 0 00.502 5.814 3.017 3.017 0 002.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.376-.55a3.017 3.017 0 002.122-2.136A31.665 31.665 0 0024 12a31.665 31.665 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
            </svg>
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
