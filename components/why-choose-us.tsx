import {
  Award,
  Clock,
  UserCheck,
  MessageCircle,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Artisan orienté particuliers",
    description: "Un service personnalisé adapté à vos besoins spécifiques.",
  },
  {
    icon: Award,
    title: "Plus de 20 ans d'expérience",
    description: "Une expertise solide dans le domaine du bâtiment.",
  },
  {
    icon: Clock,
    title: "Spécialiste chauffage et sanitaire",
    description: "Un savoir-faire technique reconnu et éprouvé.",
  },
  {
    icon: MessageCircle,
    title: "Travail soigné et conseils clairs",
    description:
      "Des interventions de qualité avec des explications transparentes.",
  },
  {
    icon: Headphones,
    title: "Interlocuteur unique et disponible",
    description: "Un contact direct pour un suivi optimal de vos projets.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="pourquoi" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold text-balance md:text-4xl">
            Pourquoi choisir Nico Chauffage ?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Des valeurs fortes au service de votre confort
          </p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex w-full flex-col items-center text-center sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div className="bg-primary/10 mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                <reason.icon className="text-primary h-7 w-7" />
              </div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
