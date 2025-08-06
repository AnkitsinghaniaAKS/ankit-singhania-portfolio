import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
      </main>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-primary">Hero section above</h1>
        <p className="text-foreground">Can you see the hero section?</p>
      </div>
    </div>
  );
};

export default Index;
