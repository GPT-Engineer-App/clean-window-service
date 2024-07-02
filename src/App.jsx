import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Star, MessageSquare, Mail } from "lucide-react"; // Corrected icons
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import ServicesPage from "./pages/Services.jsx";
import TestimonialsPage from "./pages/Testimonials.jsx";
import ContactPage from "./pages/Contact.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
{
    title: "Services",
    to: "/services",
    icon: <Star className="h-4 w-4" />, // Changed icon
  },
  {
    title: "Testimonials",
    to: "/testimonials",
    icon: <MessageSquare className="h-4 w-4" />, // Changed icon
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />, // Changed icon
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ThemeProvider attribute="class">
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="testimonials" element={<TestimonialsPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;