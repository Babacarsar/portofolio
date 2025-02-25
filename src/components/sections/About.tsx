
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-section">
      <div className="section-container">
        <div className="animate-on-scroll space-y-12">
          <h2 className="section-title">À Propos</h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg">
            <p className="font-medium text-xl text-center">
              Étudiant en Master d'Ingénierie des Données, je suis en recherche d'une alternance en Data Engineering pour appliquer mes compétences en gestion et transformation des flux de données.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Expertise Technique</h3>
                <p className="text-muted-foreground">
                  Spécialisé dans la modélisation de bases de données, l'ingestion et l'orchestration des données, j'ai travaillé sur des pipelines complexes avec Apache Spark, Kafka, Airflow, Python, SQL et Docker. Mon expérience inclut également la mise en place de Data Lakes et Data Warehouses (MinIO, PostgreSQL) et le déploiement d'infrastructures scalables.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Objectif Professionnel</h3>
                <p className="text-muted-foreground">
                  Je souhaite contribuer à la mise en place de solutions Big Data robustes et optimisées, en développant des pipelines ETL performants et en améliorant la qualité et la fiabilité des données pour une meilleure exploitation analytique.
                </p>
              </motion.div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-primary/10 rounded-full"
              >
                Data Engineering
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-primary/10 rounded-full"
              >
                Big Data
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-primary/10 rounded-full"
              >
                ETL Pipeline
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
