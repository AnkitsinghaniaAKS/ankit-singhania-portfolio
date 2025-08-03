import { motion } from "framer-motion";
import { 
  Code, 
  Globe, 
  Database, 
  Wrench, 
  Cpu,
  Smartphone
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C++", level: 90, icon: "💻" },
      { name: "Java", level: 85, icon: "☕" },
      { name: "Python", level: 80, icon: "🐍" },
      { name: "JavaScript", level: 85, icon: "🌟" },
    ]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "HTML/CSS", level: 95, icon: "🎨" },
      { name: "Tailwind CSS", level: 90, icon: "💨" },
      { name: "Node.js", level: 75, icon: "💚" },
    ]
  },
  {
    title: "Databases & Backend",
    icon: Database,
    skills: [
      { name: "Firebase", level: 85, icon: "🔥" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "MySQL", level: 80, icon: "🐬" },
      { name: "REST APIs", level: 85, icon: "🔌" },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 90, icon: "🚀" },
      { name: "VS Code", level: 95, icon: "📝" },
      { name: "Android Studio", level: 80, icon: "🤖" },
      { name: "Postman", level: 85, icon: "📮" },
    ]
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    skills: [
      { name: "Data Structures", level: 90, icon: "🏗️" },
      { name: "Algorithms", level: 85, icon: "🧠" },
      { name: "OOP", level: 90, icon: "🎯" },
      { name: "System Design", level: 75, icon: "🏛️" },
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Android", level: 80, icon: "📱" },
      { name: "React Native", level: 70, icon: "📲" },
      { name: "Flutter", level: 65, icon: "🦋" },
      { name: "Kotlin", level: 75, icon: "💎" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-section-gradient">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="hero-text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="flex items-center mb-6">
                <div className="skill-icon mr-4">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="bg-hero-gradient h-2 rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0 bg-white/20"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-full">
            <span className="text-sm text-muted-foreground mr-3">
              Always learning:
            </span>
            <div className="flex space-x-3">
              {["TypeScript", "Docker", "AWS", "GraphQL", "Next.js"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}