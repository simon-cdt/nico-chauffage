import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Contact – Chauffage & Sanitaire
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactez-nous pour une demande d&apos;information ou de devis.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-border">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-1">
                Nicolas Penifaure
              </h3>
              <p className="text-lg text-primary font-medium">Nico Chauffage</p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+41786414978"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <p className="font-medium text-foreground">
                    +41 (0)78 641 49 78
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@nico-chauffage.ch"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">
                    info@nico-chauffage.ch
                  </p>
                </div>
              </a>

              <a
                href="https://www.nico-chauffage.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Site web</p>
                  <p className="font-medium text-foreground">
                    www.nico-chauffage.ch
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1">
                <a href="tel:+41786414978">
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler maintenant
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 bg-transparent"
              >
                <a href="mailto:info@nico-chauffage.ch">
                  <Mail className="w-4 h-4 mr-2" />
                  Envoyer un email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
