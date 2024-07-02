import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Fætterglans</h1>
        <p className="text-lg">We make your windows sparkle and shine!</p>
        <Button variant="primary" size="lg">Get a Free Quote</Button>
      </section>
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <p>We offer a range of window cleaning services for residential and commercial properties.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <p>See what our satisfied customers have to say about our services.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p>Have questions? Reach out to us through our contact form.</p>
      </section>
    </div>
  );
};

export default Index;
