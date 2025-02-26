
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, ChartBar } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
    >
      <div className="text-primary mb-4">{project.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/5 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Compétences221",
      description: "Plateforme d'offres d'emploi avec gestion dynamique des annonces et système de candidature intégré",
      technologies: ["Angular", "Node.js", "Bootstrap", "API REST"],
      icon: <Globe size={24} />
    },
    {
      title: "Analyse PDZP",
      description: "Étude d'évaluation des effets du Projet de Désenclavement des Zones de Production avec visualisation des données",
      technologies: ["Power BI", "Excel", "Kobotoolbox", "Power Query"],
      icon: <ChartBar size={24} />
    },
    {
      title: "Site Web MGG",
      description: "Développement et optimisation du site web de Malick Galaxie Groupe avec focus sur le SEO",
      technologies: ["WordPress", "PHP", "JavaScript", "SEO"],
      icon: <Code2 size={24} />
    },
    {
      title: "Système de Gestion DGID",
      description: "Analyse de satisfaction des usagers pour l'Administration fiscale et foncière",
      technologies: ["Analyse de données", "Excel", "Power BI", "Reporting"],
      icon: <Database size={24} />
    }
  ];

  return (
    <section id="projects" className="py-24 bg-section">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Projets</h2>
          <p className="section-subtitle">
            Une sélection de mes réalisations les plus significatives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
