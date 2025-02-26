
import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold">{experience.title}</h3>
      <div className="text-lg text-primary/80 font-medium mb-2">{experience.company}</div>
      <div className="text-sm text-muted-foreground mb-4">{experience.period}</div>
      <ul className="list-disc list-inside space-y-2 mb-4">
        {experience.description.map((item, index) => (
          <li key={index} className="text-muted-foreground">{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/5 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Développeur Front-end",
      company: "Competences221",
      period: "Août 2024 - Septembre 2024",
      description: [
        "Développement de composants dynamiques Angular pour la gestion des offres d'emploi",
        "Création d'interfaces responsives avec Bootstrap",
        "Intégration d'API REST et gestion des requêtes HTTP",
        "Implémentation de formulaires réactifs avec validations avancées"
      ],
      skills: [
        "Angular",
        "API REST",
        "JavaScript",
        "Bootstrap",
        "MySQL"
      ]
    },
    {
      title: "Analyste de Données",
      company: "Malick Galaxie Groupe",
      period: "Novembre 2023 - Mai 2024",
      description: [
        "Conception et paramétrage de questionnaires électroniques sous kobotoolbox",
        "Suivi et analyse de données d'enquêtes de satisfaction",
        "Traitement des données avec Power Query et tableaux dynamiques Excel",
        "Création de visualisations sous Excel et Power BI"
      ],
      skills: [
        "Analyse de données",
        "Power BI",
        "Excel",
        "Kobotoolbox",
        "Power Query"
      ]
    },
    {
      title: "Développeur Web",
      company: "Malick Galaxie Groupe",
      period: "Janvier 2022 - Juin 2022",
      description: [
        "Création et personnalisation de thèmes WordPress",
        "Optimisation des performances et du référencement",
        "Développement de fonctionnalités spécifiques en PHP",
        "Mise en place de stratégies SEO"
      ],
      skills: [
        "WordPress",
        "PHP",
        "JavaScript",
        "HTML/CSS",
        "SEO",
        "Talend"
      ]
    },
    {
      title: "Développeur Web",
      company: "Foundation 1 SN",
      period: "Avril 2021 - Mai 2021",
      description: [
        "Conception et développement de sites web",
        "Collaboration avec l'équipe de design pour l'UX/UI",
        "Optimisation des performances",
        "Intégration de plugins WordPress personnalisés"
      ],
      skills: [
        "WordPress",
        "MySQL",
        "UX/UI",
        "SEO"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Expérience Professionnelle</h2>
          <p className="section-subtitle">
            Un parcours riche combinant développement web et analyse de données
          </p>
          
          <div className="grid grid-cols-1 gap-6 mt-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
