"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="bg-secondary mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="bg-primary h-2 w-2 rounded-full" />
            <span className="text-foreground text-sm font-medium">
              Plus de 20 ans d&apos;expérience
            </span>
          </div>

          <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold text-balance md:text-6xl">
            Chauffage et sanitaire
            <br />
            <span className="text-primary">de confiance</span>
          </h1>

          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-pretty md:text-xl">
            Un artisan de confiance au service des propriétaires, locataires et
            familles souhaitant des installations fiables et durables.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-base">
              <a href="#contact" onClick={handleScrollToContact}>
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent text-base"
            >
              <a href="tel:+41786414978">+41 (0)78 641 49 78</a>
            </Button>
          </div>

          <div className="text-muted-foreground flex flex-wrap justify-center gap-6 text-sm">
            {[
              "Compréhension des logements existants",
              "Interventions adaptées",
              "Solutions cohérentes",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-4 w-4" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
