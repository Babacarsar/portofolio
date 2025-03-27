import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Contactez-Moi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ou souhaitez discuter de collaboration ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-xl mx-auto"
          >
            <h3 className="text-2xl font-semibold">Informations de Contact</h3>
            <p className="text-muted-foreground">
              Je suis ouvert aux opportunités professionnelles et aux collaborations intéressantes. 
              N'hésitez pas à me contacter via l'un des moyens ci-dessous.
            </p>

            <div className="space-y-6">
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:ba66bacar@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">ba66bacar@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Téléphone</h4>
                  <a href="tel:0775806799" className="text-muted-foreground hover:text-primary transition-colors">07 75 80 67 99</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Âge</h4>
                  <p className="text-muted-foreground">22 ans</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Localisation</h4>
                  <p className="text-muted-foreground">Paris, France</p>
                </div>
              </motion.div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Réseaux Sociaux</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.linkedin.com/in/babacar-sarr-a3888a247" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-muted p-3 rounded-full transition-colors"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </motion.a>
                <motion.a 
                  href="https://github.com/Babacarsar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-muted p-3 rounded-full transition-colors"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <Github className="h-5 w-5 text-primary" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;