import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="text-lg">Have questions? Reach out to us through our contact form.</p>
      <form className="space-y-4 max-w-md mx-auto">
        <div>
          <label htmlFor="name" className="block text-left">Name</label>
          <Input id="name" type="text" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-left">Email</label>
          <Input id="email" type="email" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="message" className="block text-left">Message</label>
          <Textarea id="message" placeholder="Your Message" />
        </div>
        <Button type="submit" variant="primary" size="lg">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;