import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="text-center space-y-8">
      <section className="space-y-4">
        <Image src="/images/home-hero.jpg" alt="Clean windows" width={1200} height={600} className="rounded-lg" />
        <h1 className="text-4xl font-bold">Velkommen til Fætterglans</h1>
        <p className="text-lg">Vi får dine vinduer til at skinne og glitre!</p>
        <Button variant="primary" size="lg">Få et Gratis Tilbud</Button>
      </section>
      <section className="space-y-4">
        <Image src="/images/services.jpg" alt="Window cleaning services" width={1200} height={600} className="rounded-lg" />
        <h2 className="text-3xl font-semibold">Vores Tjenester</h2>
        <p>Vi tilbyder en række vinduespudsningsydelser til private og erhverv.</p>
      </section>
      <section className="space-y-4">
        <Image src="/images/testimonials.jpg" alt="Happy customers" width={1200} height={600} className="rounded-lg" />
        <h2 className="text-3xl font-semibold">Udtalelser</h2>
        <p>Se hvad vores tilfredse kunder siger om vores tjenester.</p>
      </section>
      <section className="space-y-4">
        <Image src="/images/contact.jpg" alt="Contact us" width={1200} height={600} className="rounded-lg" />
        <h2 className="text-3xl font-semibold">Kontakt Os</h2>
        <p>Har du spørgsmål? Kontakt os via vores kontaktformular.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Tema</h2>
        <Button variant="secondary" size="lg" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Skift til {theme === 'dark' ? 'Lys' : 'Mørk'} Tilstand
        </Button>
      </section>
    </div>
  );
};

export default Index;