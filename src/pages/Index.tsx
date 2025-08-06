import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-blue-600">Test: Site is Working!</h1>
        <p className="text-lg mt-4">If you can see this, React is working.</p>
      </div>
      {/* Temporarily comment out components to isolate the issue */}
      {/*
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      */}
    </div>
  );
};

export default Index;
