
import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
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

const Skills = () => {
  const skillCategories = [
    {
      title: "Programmation et Outils de Développement",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "SQL",
        "R",
        "Scala",
        "Java",
        "TensorFlow",
        "PyTorch",
        "Apache Spark",
        "Hadoop",
        "Apache Airflow",
        "Docker",
        "Kubernetes",
        "Talend",
        "Dataiku",
        "Amph.ai"
      ]
    },
    {
      title: "Gestion de Projets et Méthodologies",
      skills: [
        "Scrum",
        "Kanban",
        "Terraform",
        "Ansible",
        "Git",
        "GitHub",
        "Jira",
        "Trello"
      ]
    },
    {
      title: "Visualisation et Présentation",
      skills: [
        "Power BI",
        "Matplotlib",
        "Powerpoint",
        "Excel Avancé",
        "Tableau"
      ]
    },
    {
      title: "Gestion et Traitement des Données",
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "MongoDB",
        "AWS Redshift",
        "AWS S3",
        "ETL",
        "Data Warehousing"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-section">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Compétences</h2>
          <p className="section-subtitle">
            Un ensemble complet de compétences techniques couvrant l'ensemble de la chaîne de valeur des données
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
