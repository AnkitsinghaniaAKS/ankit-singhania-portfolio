import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = ["DSA", "Java", "C++", "Python", "Firebase", "React"];

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/your-resume-id/view", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-section-gradient"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="text-lg text-primary font-medium">Hi, I'm 👋</h2>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="hero-text-gradient">Ankit Singhania</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Software Engineer | DSA | Java | Firebase | Web Developer
            </motion.p>

            {/* Animated Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-2"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-muted-foreground max-w-lg"
            >
              Passionate about solving complex problems through code and building 
              scalable applications. Currently pursuing B.Tech in Computer Science 
              at JECRC University.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={downloadResume}
                className="button-gradient group"
                size="lg"
              >
                Download Resume
                <motion.div
                  className="ml-2"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  📄
                </motion.div>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToAbout}
                className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex space-x-4 pt-4"
            >
              <a
                href="https://github.com/AnkitsinghaniaAKS"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/ankit-singhania-aks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://leetcode.com/u/AnkitSinghania/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Code className="h-6 w-6" />
              </a>
              <a
                href="mailto:ankitsinghaniaaks@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-hero-gradient p-1"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl md:text-8xl">
                  👨‍💻
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: 1
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl"
              >
                ⚛️
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  delay: 2
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-glow/20 rounded-full flex items-center justify-center text-lg"
              >
                ☕
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground cursor-pointer"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}