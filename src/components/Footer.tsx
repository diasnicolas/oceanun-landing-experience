import logo from "@/assets/logo-oceanun.webp";

const Footer = () => {
  return (
    <footer className="bg-ocean-gradient text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Oceanun" className="h-14 w-14 object-contain rounded-lg bg-primary-foreground/10 p-1" />
            <div>
              <h3 className="font-display font-bold text-xl">Oceanun</h3>
              <p className="text-primary-foreground/70 text-sm">Agência de Turismo</p>
            </div>
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
        <div className="mt-8 pt-6 border-t border-primary-foreground/15 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Oceanun — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
