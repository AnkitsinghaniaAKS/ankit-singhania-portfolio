import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Code, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "ankitsinghaniaaks@gmail.com",
    link: "mailto:ankitsinghaniaaks@gmail.com",
    color: "text-red-500"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "AnkitsinghaniaAKS",
    link: "https://github.com/AnkitsinghaniaAKS",
    color: "text-gray-800 dark:text-gray-200"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "ankit-singhania-aks",
    link: "https://linkedin.com/in/ankit-singhania-aks",
    color: "text-blue-600"
  },
  {
    icon: Code,
    title: "LeetCode",
    value: "AnkitSinghania",
    link: "https://leetcode.com/u/AnkitSinghania/",
    color: "text-orange-500"
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="hero-text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's connect and discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 mr-3 text-primary" />
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just 
                want to say hello, I'd love to hear from you. I'm currently looking 
                for internship opportunities and exciting projects to work on.
              </p>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-card border border-border rounded-lg hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg bg-secondary/50 ${method.color} group-hover:scale-110 transition-transform mr-4`}>
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">
                      {method.title}
                    </h4>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-primary/5 border border-primary/20 rounded-lg"
            >
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">Currently Based</span>
              </div>
              <p className="text-muted-foreground">
                Jaipur, Rajasthan, India
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Open to remote opportunities and relocation
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-5 w-5 mr-2 text-primary" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="transition-all duration-300 focus:scale-105 resize-none"
                      />
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full button-gradient group"
                    size="lg"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-4 w-4 mr-2"
                      >
                        ⏳
                      </motion.div>
                    ) : (
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    )}
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}