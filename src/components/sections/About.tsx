
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
              Passionné par la donnée sous toutes ses formes, je suis étudiant en Master d'Ingénierie des Données, à la recherche d'une alternance alliant Data Engineering et Data Analytics pour exploiter pleinement la chaîne de valeur des données.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Data Engineering</h3>
                <p className="text-muted-foreground">
                  Expertise en conception et développement de pipelines de données avec Apache Spark, Kafka, Airflow et Docker. Expérience dans la mise en place d'architectures Big Data et l'optimisation des flux ETL pour garantir des données fiables et de qualité. Maîtrise des environnements SQL (PostgreSQL) et NoSQL.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4">Data Analytics</h3>
                <p className="text-muted-foreground">
                  Capable d'extraire des insights stratégiques grâce à la visualisation de données (Power BI) et l'analyse statistique avec Python (Pandas, NumPy, Scikit-learn). Compétences en création de tableaux de bord interactifs et en modélisation prédictive pour faciliter la prise de décision.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md mt-8"
            >
              <h3 className="text-lg font-semibold mb-4 text-center">Objectif Professionnel</h3>
              <p className="text-muted-foreground text-center">
                Contribuer à l'excellence opérationnelle des entreprises en combinant ingénierie et analyse des données : concevoir des architectures data robustes tout en générant des insights actionnables pour optimiser les processus métier.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
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
                Data Analytics 
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
                Visualisation
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
