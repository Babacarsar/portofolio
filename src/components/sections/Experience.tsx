
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "TechInnovate Solutions",
      period: "2021 - Présent",
      location: "Paris, France",
      description: [
        "Direction d'une équipe de 3 analystes data pour des projets d'intelligence d'affaires",
        "Conception et mise en œuvre d'algorithmes de machine learning pour la prévision des ventes, augmentant la précision des prévisions de 28%",
        "Développement d'une solution d'analyse de données en temps réel qui a permis de réduire les temps de traitement de 65%",
        "Collaboration avec les équipes produit pour intégrer des insights data dans la roadmap produit"
      ]
    },
    {
      title: "Data Analyst",
      company: "DataVision Corp",
      period: "2018 - 2021",
      location: "Lyon, France",
      description: [
        "Analyse de grandes quantités de données client pour identifier des tendances et opportunités commerciales",
        "Création de dashboards interactifs avec Tableau, améliorant la prise de décision des équipes commerciales",
        "Mise en œuvre de modèles prédictifs pour l'optimisation des campagnes marketing, augmentant le ROI de 35%",
        "Collaboration avec les équipes IT pour améliorer les processus de collecte et de stockage des données"
      ]
    },
    {
      title: "Data Analyst Junior",
      company: "AnalyticsPro",
      period: "2016 - 2018",
      location: "Bordeaux, France",
      description: [
        "Analyse des données de vente et des tendances du marché pour les rapports trimestriels",
        "Automatisation des processus de reporting avec Python, réduisant le temps de production de 75%",
        "Nettoyage et préparation des données pour les analyses avancées",
        "Support aux équipes marketing dans l'interprétation des résultats d'analyse"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon Expérience Professionnelle</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours professionnel et les projets sur lesquels j'ai eu l'opportunité de travailler
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2"></div>
                <div className="relative flex items-center justify-center md:justify-start md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-background"></div>
                  </div>
                </div>
                <div className="md:w-1/2 ml-8 md:ml-0 md:px-8 pb-8">
                  <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <h4 className="text-primary font-medium mb-2">{experience.company}</h4>
                    
                    <div className="flex flex-wrap text-sm text-muted-foreground mb-4">
                      <div className="flex items-center mr-4 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
