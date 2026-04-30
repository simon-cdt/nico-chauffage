import { Flame } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image src={"/logo_black.png"} alt="Logo" width={1000} height={1000} className="h-28 max-md:h-14 w-fit"  />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-background/70">
            <a
              href="#services"
              className="hover:text-background transition-colors"
            >
              Prestations
            </a>
            <a
              href="#pourquoi"
              className="hover:text-background transition-colors"
            >
              Pourquoi nous
            </a>
            <a
              href="#contact"
              className="hover:text-background transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>
            &copy; {new Date().getFullYear()} Nico Chauffage – Chauffage et
            Sanitaire. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
