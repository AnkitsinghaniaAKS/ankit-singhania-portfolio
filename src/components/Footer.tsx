import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, Code, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/AnkitsinghaniaAKS",
    color: "hover:text-gray-800 dark:hover:text-gray-200"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/ankit-singhania-aks",
    color: "hover:text-blue-600"
  },
  {
    name: "LeetCode",
    icon: Code,
    url: "https://leetcode.com/u/AnkitSinghania/",
    color: "hover:text-orange-500"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:ankitsinghaniaaks@gmail.com",
    color: "hover:text-red-500"
  }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left: Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-xl font-bold hero-text-gradient mb-2">
                Ankit Singhania
              </h3>
              <p className="text-muted-foreground text-sm">
                Software Engineer & Problem Solver
              </p>
            </motion.div>

            {/* Center: Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-3 rounded-full bg-secondary/50 text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-secondary ${social.color}`}
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Right: Back to Top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
              >
                Back to Top
                <ArrowUp className="h-4 w-4 ml-2 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Ankit Singhania. All rights reserved.
              </p>
            </div>

            {/* Made with Love */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center text-sm text-muted-foreground"
            >
              <span>Made with</span>
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="mx-2"
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.div>
              <span>and ☕ by Ankit Singhania</span>
            </motion.div>

            {/* Tech Stack */}
            <div className="text-center md:text-right">
              <p className="text-xs text-muted-foreground">
                Built with React.js, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-primary/5 rounded-full"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 30, 0],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 5
            }}
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-glow/5 rounded-full"
          />
        </div>
      </div>
    </footer>
  );
}