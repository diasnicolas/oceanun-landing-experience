import logo from "@/assets/logo-oceanum.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ocean-radial py-12 text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,hsla(54,100%,50%,0.18),transparent_32%)]" />
      <div className="container mx-auto px-4">
        <div className="relative z-10 flex flex-col items-center justify-between gap-8 rounded-3xl border border-primary-foreground/15 p-7 glass-surface-dark md:flex-row md:p-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Oceanun" className="h-20 w-20 rounded-xl bg-primary-foreground/10 p-1 object-contain" />
          </div>
          <div className="text-center md:text-right space-y-2 text-sm text-primary-foreground/75">
            <p>CNPJ: 50.309.568/0001-67</p>
            <p>WhatsApp: +55 (19) 97819-4930</p>
            <a
              href="https://instagram.com/oceanun.ag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-secondary transition-colors"
            >
              Instagram: @oceanun.ag
            </a>
          </div>
        </div>
        <div className="relative z-10 mt-8 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Oceanun — Todos os direitos reservados.
          <p className="mt-2">
            Desenvolvido por{" "}
            <a
              href="https://zapturize.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              ZapTurize
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
