import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="text-center space-y-8">
      <div className="background-icon window-cleaner"></div>
      <h1 className="text-4xl font-bold">Kontakt Os</h1>
      <p className="text-lg">Har du spørgsmål? Kontakt os via vores kontaktformular.</p>
      <form className="space-y-4 max-w-md mx-auto">
        <div>
          <label htmlFor="name" className="block text-left">Navn</label>
          <Input id="name" type="text" placeholder="Dit Navn" />
        </div>
        <div>
          <label htmlFor="email" className="block text-left">Email</label>
          <Input id="email" type="email" placeholder="Din Email" />
        </div>
        <div>
          <label htmlFor="message" className="block text-left">Besked</label>
          <Textarea id="message" placeholder="Din Besked" />
        </div>
        <Button type="submit" variant="primary" size="lg">Send Besked</Button>
      </form>
    </div>
  );
};

export default Contact;