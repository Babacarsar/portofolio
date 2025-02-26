
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, GitBranch, Calculator, LineChart } from 'lucide-react';

interface Project {
  title: string;
  period?: string;
  location?: string;
  description: string;
  details?: string[];
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
      {project.period && project.location && (
        <div className="text-sm text-muted-foreground mb-3">
          {project.period} | {project.location}
        </div>
      )}
      <p className="text-muted-foreground mb-4">{project.description}</p>
      {project.details && (
        <ul className="list-disc list-inside mb-4 text-sm text-muted-foreground space-y-2">
          {project.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
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
      title: "Pipeline de Traitement Temps Réel",
      period: "Février 2025",
      location: "EPSI Puteaux - La Défense",
      description: "Mise en place d'un pipeline de traitement en temps réel avec Kafka et Spark",
      details: [
        "Développement d'un Producer pour l'envoi de données en continu",
        "Implémentation d'un Consumer pour l'ingestion et l'analyse",
        "Traitement des flux avec Spark Streaming",
        "Déploiement et orchestration via Docker"
      ],
      technologies: ["Kafka", "Spark", "Scala", "Docker", "Spark Streaming"],
      icon: <GitBranch size={24} />
    },
    {
      title: "Architecture Décisionnelle VTC",
      period: "Octobre 2024 - Décembre 2024",
      location: "EPSI Puteaux - La Défense",
      description: "Mise en place d'une architecture décisionnelle complète pour l'analyse des données VTC de New York",
      details: [
        "Automatisation de la collecte dans un Data Lake (Python, MinIO)",
        "Développement d'un pipeline ETL avec Amphi.ai",
        "Construction d'un Data Mart en flocon",
        "Création d'un tableau de bord Power BI",
        "Orchestration avec Apache Airflow"
      ],
      technologies: ["Python", "MinIO", "PostgreSQL", "Power BI", "Apache Airflow", "ETL"],
      icon: <LineChart size={24} />
    },
    {
      title: "Configuration Cluster Hadoop",
      description: "Mise en place et configuration d'un cluster Hadoop sur Docker",
      details: [
        "Configuration des NameNodes et DataNodes",
        "Mise en place de YARN pour la gestion des ressources",
        "Déploiement sur conteneurs Docker",
        "Configuration de l'environnement distribué"
      ],
      technologies: ["Hadoop", "YARN", "Docker", "Linux"],
      icon: <Server size={24} />
    },
    {
      title: "Application de Gestion de Notes",
      description: "Conception et développement d'une application complète de gestion de notes pour établissement scolaire",
      details: [
        "Système de saisie et stockage des notes",
        "Calcul automatique des moyennes",
        "Génération de rapports personnalisés",
        "Interface utilisateur intuitive",
        "Système de notifications"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "React", "REST API"],
      icon: <Calculator size={24} />
    }
  ];

  return (
    <section id="projects" className="py-24 bg-section">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Projets</h2>
          <p className="section-subtitle">
            Mes projets significatifs en développement et data engineering
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
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
