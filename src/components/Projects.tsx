import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Women Security App",
    description: "A comprehensive Android application designed to enhance women's safety with emergency features, location tracking, and instant alerts to trusted contacts.",
    image: "🛡️",
    technologies: ["Java", "Firebase", "Android", "Google Maps API", "Material Design"],
    liveLink: "#",
    codeLink: "#",
    featured: true,
    category: "Mobile App"
  },
  {
    title: "DSA Tracker Web App",
    description: "A modern web application to track Data Structures and Algorithms progress with problem categorization, progress analytics, and study plans.",
    image: "📊",
    technologies: ["React.js", "Firebase", "Tailwind CSS", "Chart.js", "PWA"],
    liveLink: "#",
    codeLink: "#",
    featured: true,
    category: "Web App"
  },
  {
    title: "Portfolio Website",
    description: "A responsive and animated portfolio website showcasing projects, skills, and achievements with modern design principles and smooth user experience.",
    image: "💼",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveLink: "#",
    codeLink: "#",
    featured: false,
    category: "Web App"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management platform with real-time updates, team collaboration features, and productivity analytics.",
    image: "✅",
    technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Express"],
    liveLink: "#",
    codeLink: "#",
    featured: false,
    category: "Full Stack"
  },
  {
    title: "Weather Forecast App",
    description: "A sleek weather application providing accurate forecasts, interactive maps, and personalized weather alerts for multiple locations.",
    image: "🌤️",
    technologies: ["React Native", "OpenWeather API", "AsyncStorage", "Maps"],
    liveLink: "#",
    codeLink: "#",
    featured: false,
    category: "Mobile App"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with user authentication, payment integration, inventory management, and order tracking.",
    image: "🛒",
    technologies: ["React.js", "Firebase", "Stripe API", "Redux", "Material-UI"],
    liveLink: "#",
    codeLink: "#",
    featured: true,
    category: "Full Stack"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="hero-text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my technical skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <Card className="project-card h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl mb-2">{project.image}</div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.1 + techIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.liveLink, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    onClick={() => window.open(project.codeLink, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open("https://github.com/AnkitsinghaniaAKS", "_blank")}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}