import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="hero-text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Passionate Problem Solver & Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a dedicated Computer Science student with a strong foundation in 
              programming fundamentals and a passion for creating innovative solutions. 
              My journey in technology started with curiosity about how things work, 
              and has evolved into a deep commitment to mastering both theoretical 
              concepts and practical applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With expertise in multiple programming languages and modern web 
              technologies, I enjoy tackling complex challenges and building 
              scalable applications. I'm particularly passionate about Data 
              Structures & Algorithms, which helps me write efficient and 
              optimized code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm usually exploring new technologies, 
              contributing to open-source projects, or solving algorithmic 
              problems on competitive programming platforms.
            </p>
          </motion.div>

          {/* Right Side - Education & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education Card */}
            <Card className="project-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="skill-icon">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">Education</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-primary">B.Tech - Computer Science Engineering</h5>
                        <p className="text-sm text-muted-foreground">JECRC University</p>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          2022 - 2026
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card border border-border rounded-lg"
              >
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card border border-border rounded-lg"
              >
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">DSA Problems Solved</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card border border-border rounded-lg"
              >
                <div className="text-2xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years of Learning</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card border border-border rounded-lg"
              >
                <div className="text-2xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </motion.div>
            </div>

            {/* Interests */}
            <Card className="project-card">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Key Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Competitive Programming",
                    "Web Development",
                    "Mobile App Development",
                    "System Design",
                    "Open Source",
                    "Machine Learning"
                  ].map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}