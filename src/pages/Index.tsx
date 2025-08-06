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
      <div className="p-8 mt-16">
        <h1 className="text-4xl font-bold text-primary">Testing with Navbar</h1>
        <p className="text-lg mt-4 text-foreground">Navbar should appear above this.</p>
      </div>
    </div>
  );
};

export default Index;
