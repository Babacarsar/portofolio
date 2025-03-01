
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Code, Globe, Database, ChartBar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Développeur front-end",
      company: "Competences221",
      period: "Août 2024 - Septembre 2024",
      location: "Sur site",
      description: [
        "Développement de composants dynamiques avec Angular pour la gestion des offres d'emploi",
        "Création d'interfaces responsives adaptées à différents appareils (desktop, mobile, tablette) avec Bootstrap",
        "Intégration des API REST et gestion des requêtes HTTP via HttpClient",
        "Implémentation de formulaires réactifs (Reactive Forms) avec validations avancées",
        "Collaboration avec l'équipe backend utilisant Node.js"
      ],
      skills: ["MySQL", "API", "JavaScript", "Architecture logicielle", "Développement informatique", "AngularJS"],
      type: "Freelance"
    },
    {
      title: "Analyste de données",
      company: "Malick Galaxie Groupe",
      period: "Novembre 2023 - Mai 2024",
      location: "Sur site",
      description: [
        "Enquête sur l'évaluation des effets du Projet de Désenclavement des Zones de Production (PDZP)",
        "Conception de questionnaires électroniques sous kobotoolbox et paramétrage sous kobocollect",
        "Suivi à distance de la collecte de données et transfert des données vers Microsoft Excel",
        "Apurement des données avec Power Query et traitement avec les tableaux dynamiques d'Excel",
        "Création de graphiques sous Excel et Power BI et rédaction de rapports d'analyse détaillés"
      ],
      skills: ["Analyse des données", "Collecte de données", "Microsoft Excel", "Microsoft Power BI", "kobotoolbox", "Microsoft Power Query"],
      type: "Stage"
    },
    {
      title: "Développeur web",
      company: "Malick Galaxie Groupe",
      period: "Janvier 2022 - Juin 2022",
      location: "Sur site",
      description: [
        "Création et personnalisation de thèmes WordPress",
        "Intégration de plugins et fonctionnalités spécifiques selon les besoins",
        "Optimisation des performances des sites WordPress pour améliorer le référencement",
        "Mise en place de stratégies de référencement naturel (SEO)",
        "Développement de sites responsives et gestion de la sécurité par des mises à jour régulières"
      ],
      skills: ["JavaScript", "scriptcase", "Développement informatique", "WordPress", "PHP", "Bases de données", "kobotoolbox", "Talend"],
      type: "Stage"
    },
    {
      title: "Développeur site web",
      company: "Foundation 1 SN",
      period: "Avril 2021 - Mai 2021",
      location: "Sur site",
      description: [
        "Collaboration avec une équipe de designers pour créer une interface utilisateur intuitive",
        "Conception et développement de sites web",
        "Optimisation des performances des sites web pour une meilleure expérience utilisateur",
        "Intégration de plugins et fonctionnalités personnalisées selon les besoins clients",
        "Gestion de la maintenance et des mises à jour régulières des sites web"
      ],
      skills: ["MySQL", "Développement informatique", "WordPress", "Bases de données", "Optimisation pour les moteurs de recherche (SEO)"],
      type: "Stage"
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

  const getIcon = (title) => {
    if (title.toLowerCase().includes('développeur')) return <Code className="h-5 w-5 text-primary" />;
    if (title.toLowerCase().includes('analyste')) return <ChartBar className="h-5 w-5 text-primary" />;
    return <Briefcase className="h-5 w-5 text-primary" />;
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
                    <div className="flex items-center mb-2">
                      {getIcon(experience.title)}
                      <h3 className="text-xl font-semibold ml-2">{experience.title}</h3>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="text-primary font-medium">{experience.company}</span>
                      <span className="ml-2 text-sm text-muted-foreground">({experience.type})</span>
                    </div>
                    
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
                    
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    {experience.skills && experience.skills.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Compétences:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, i) => (
                            <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
