
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos de Moi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours, mes passions et ma vision en tant que Data Analyst
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/lovable-uploads/b9003e23-995c-4060-956c-cc7b1c03d2f3.png" 
              alt="Photo professionnelle" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Analyste Data & IA Passionné</h3>
            <p className="text-muted-foreground mb-6">
              Passionné par l'analyse de données et l'intelligence artificielle, je m'efforce de transformer 
              des données complexes en insights stratégiques qui aident les organisations à prendre des 
              décisions éclairées. Mon parcours combine expertise technique, rigueur analytique et 
              compréhension approfondie des enjeux business.
            </p>
            <p className="text-muted-foreground mb-8">
              J'ai développé une solide expertise dans l'exploitation des données pour résoudre des problèmes 
              complexes et créer de la valeur ajoutée. Mon approche méthodique et ma curiosité naturelle me 
              permettent d'identifier des opportunités cachées dans les données.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Expérience professionnelle</h4>
                  <p className="text-muted-foreground text-sm">5+ ans dans l'analyse de données et les projets data</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Formation</h4>
                  <p className="text-muted-foreground text-sm">Master en Data Science & Intelligence Artificielle</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Passions</h4>
                  <p className="text-muted-foreground text-sm">Machine Learning, Visualisation de données, Innovation technologique</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">Ma Philosophie</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Je crois fermement au pouvoir transformateur des données lorsqu'elles sont analysées avec rigueur et 
            interprétées avec intelligence. Mon objectif est d'aider les organisations à exploiter pleinement le 
            potentiel de leurs données pour stimuler l'innovation, optimiser les processus et créer un impact positif.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
