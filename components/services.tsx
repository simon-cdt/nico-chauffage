import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Thermometer, Wrench, AlertCircle, Droplets } from "lucide-react";

const services = [
  {
    icon: Thermometer,
    title: "Installation de chauffage",
    description:
      "Systèmes de chauffage adaptés aux habitations individuelles et immeubles résidentiels.",
    items: [
      "Pompe à chaleur",
      "Radiateurs",
      "Chauffage au sol",
    ],
  },
  {
    icon: Wrench,
    title: "Entretien de chauffage",
    description:
      "L'entretien régulier est essentiel pour garantir le bon fonctionnement et la longévité.",
    items: [
      "Nettoyage des installations",
      "Rinçage du chauffage au sol",
      "Contrôle de la tuyauterie",
    ],
  },
  {
    icon: AlertCircle,
    title: "Dépannage chauffage et sanitaire",
    description:
      "Intervention rapide en cas de dysfonctionnement pour rétablir vos installations.",
    items: [
      "Identification rapide du problème",
      "Rétablissement du fonctionnement",
      "Solutions durables",
    ],
  },
  {
    icon: Droplets,
    title: "Installations sanitaires",
    description:
      "Réalisation de vos installations sanitaires pour la maison ou l'appartement.",
    items: [
      "Pose et remplacement d'équipements",
      "Réparations",
      "Adaptations selon vos besoins",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold text-balance md:text-4xl">
            Nos prestations pour votre logement
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Chaque intervention est réalisée avec soin, dans un esprit de
            proximité et de confiance.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardHeader>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <service.icon className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-card-foreground text-xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex items-center gap-3"
                    >
                      <span className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
