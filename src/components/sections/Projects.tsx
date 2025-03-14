
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, Database, FileCode, Terminal } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Atelier de traitement de données avec Spark, Kafka et Scala",
      description: "Mise en place d'un pipeline de traitement en temps réel avec Kafka, Spark et Scala. Développement d'un Producer pour l'envoi de données en continu et d'un Consumer pour leur ingestion et analyse. Traitement des flux avec Spark Streaming pour transformation et exploitation en temps réel. Déploiement et orchestration via Docker pour assurer scalabilité et performance.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Apache Spark", "Apache Kafka", "Scala", "Docker", "Real-time Processing"],
      links: {
        github: "https://github.com/Babacarsar/BIG_DATA_WITH_KAFKA_AND_SPARK",
        live: "https://example.com"
      },
      date: "Février 2025",
      location: "EPSI Puteaux - La Defense",
      icon: <Server className="h-8 w-8 text-primary" />
    },
    {
      title: "Atelier de déploiement d'une Architecture Décisionnelle",
      description: "Automatisation de la collecte et du stockage des données VTC de New York (nov. 2022 - août 2022) dans un Data Lake via des scripts Python et MinIO. Développement d'un pipeline ETL avec Amphi.ai pour alimenter une base PostgreSQL, suivi de la construction d'un Data Mart en flocon. Création d'un tableau de bord interactif Power BI pour l'analyse et la prise de décision, avec optimisation des mises à jour via Apache Airflow.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Python", "PostgreSQL", "Power BI", "Apache Airflow", "ETL", "Data Lake"],
      links: {
        github: "https://github.com/Babacarsar/ArchitectureDecisionnel",
        live: "https://example.com"
      },
      date: "Octobre 2024 - Décembre 2024",
      location: "EPSI Puteaux - La Défense",
      icon: <Database className="h-8 w-8 text-primary" />
    },
    {
      title: "Atelier Hadoop avec configuration Docker",
      description: "Configuration d'un cluster Hadoop complet sur Docker, incluant la mise en place des namenodes et datanodes. Configuration du YARN pour la gestion optimale des ressources. Implémentation de techniques avancées pour assurer la haute disponibilité et le traitement distribué des données massives.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Hadoop", "Docker", "YARN", "Big Data", "Distributed Systems"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      },
      date: "2024",
      location: "EPSI",
      icon: <Terminal className="h-8 w-8 text-primary" />
    },
    {
      title: "Application de Gestion de Notes",
      description: "Conception et implémentation d'une application complète de gestion de notes permettant de saisir, stocker, gérer et analyser les notes des étudiants. L'application inclut des fonctionnalités pour calculer des moyennes, générer des rapports personnalisés, suivre la progression des étudiants et envoyer des notifications aux utilisateurs, avec une interface utilisateur intuitive.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["UX/UI Design", "Database", "Frontend", "Backend", "Education Tech"],
      links: {
        github: "https://github.com/Babacarsar/Ges-ecole",
        live: "https://example.com"
      },
      date: "2024",
      location: "Univers Professionnel (Unipro)",
      icon: <FileCode className="h-8 w-8 text-primary" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Mes Projets</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les projets sur lesquels j'ai travaillé et qui démontrent mes compétences en analyse de données et en intelligence artificielle.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-muted relative overflow-hidden image-zoom">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <div className="font-bold">{project.title}</div>
                    {project.date && <div className="text-sm text-white/80">{project.date}</div>}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    {project.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                </div>
                
                {(project.date || project.location) && (
                  <div className="mb-3 text-sm text-muted-foreground">
                    {project.date && <span className="font-medium">{project.date}</span>}
                    {project.date && project.location && <span> • </span>}
                    {project.location && <span>{project.location}</span>}
                  </div>
                )}

                <p className="text-muted-foreground mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="hover-lift">{tag}</Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-primary hover:underline"
                    whileHover={{ x: 3 }}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </motion.a>
                  <motion.a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-primary hover:underline"
                    whileHover={{ x: 3 }}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
