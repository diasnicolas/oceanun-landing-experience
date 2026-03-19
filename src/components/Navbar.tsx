import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Galeria", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="hidden md:inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Oceanun
        </div>
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contato"
          className="hidden md:inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-ocean transition-all hover:-translate-y-0.5 hover:opacity-90"
        >
          Fale Conosco
        </a>
        <button
          className="rounded-full border border-primary/20 bg-primary/5 p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="animate-fade-in border-t border-primary/10 bg-background/95 px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-primary/5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
