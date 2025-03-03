
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Heart, Database, BarChart } from 'lucide-react';
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
            Découvrez mon parcours, mes passions et ma vision en tant que Data Analyst & Engineer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/photoidentite.jpeg" 
              alt="Photo professionnelle" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Data Analyst & Engineer Passionné</h3>
            <p className="text-muted-foreground mb-6">
              Étudiant en Master d'Ingénierie des Données, je suis en recherche d'une alternance en Data Engineering 
              pour appliquer mes compétences en gestion et transformation des flux de données.
            </p>
            <p className="text-muted-foreground mb-6">
              Passionné par l'exploitation des données pour générer des insights stratégiques, je suis actuellement 
              en Master d'Ingénierie des Données et en recherche d'une alternance en Data Analytics.
            </p>
            <p className="text-muted-foreground mb-8">
              Spécialisé dans la modélisation de bases de données, l'ingestion et l'orchestration des données, j'ai 
              travaillé sur des pipelines complexes avec Apache Spark, Kafka, Airflow, Python, SQL et Docker. 
              Mon expérience inclut également la mise en place de Data Lakes et Data Warehouses (MinIO, PostgreSQL) 
              et le déploiement d'infrastructures scalables.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Domaine d'expertise</h4>
                  <p className="text-muted-foreground text-sm">Data Engineering, Data Analytics, Pipelines ETL, Big Data</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Expérience professionnelle</h4>
                  <p className="text-muted-foreground text-sm">0-2 ans d'expérience dans l'analyse de données et les projets data</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Formation</h4>
                  <p className="text-muted-foreground text-sm">Master en Ingénierie des Données</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Technologies clés</h4>
                  <p className="text-muted-foreground text-sm">Python, SQL, Power BI, Apache Spark, Kafka, Airflow, Docker</p>
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
          <h3 className="text-2xl font-semibold mb-4">Ma Vision</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Je souhaite contribuer à la mise en place de solutions Big Data robustes et optimisées, en développant des 
            pipelines ETL performants et en améliorant la qualité et la fiabilité des données. Mon objectif est d'apporter 
            une approche analytique et data-driven aux entreprises en développant des tableaux de bord interactifs, 
            en optimisant les processus de reporting et en mettant en place des modèles prédictifs pour faciliter la prise de décision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
