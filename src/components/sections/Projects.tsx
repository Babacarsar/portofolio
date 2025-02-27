
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Système de Recommandation E-commerce",
      description: "Développement d'un système de recommandation basé sur le machine learning pour une plateforme e-commerce, augmentant les ventes croisées de 23%.",
      image: "/placeholder.svg",
      tags: ["Python", "TensorFlow", "AWS", "Recommender Systems"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "Plateforme d'Analyse Prédictive",
      description: "Création d'une plateforme d'analyse prédictive pour le secteur financier, permettant la détection de fraudes en temps réel avec une précision de 94%.",
      image: "/placeholder.svg",
      tags: ["Python", "Scikit-learn", "SQL", "Tableau", "Machine Learning"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "Dashboard Marketing Analytics",
      description: "Conception et développement d'un dashboard interactif d'analytics marketing intégrant des KPIs avancés et des visualisations personnalisées.",
      image: "/placeholder.svg",
      tags: ["Power BI", "Python", "Data Visualization", "Marketing Analytics"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "Analyse de Sentiment pour Réseaux Sociaux",
      description: "Implémentation d'un système d'analyse de sentiment en temps réel pour surveiller la réputation de marque sur les réseaux sociaux.",
      image: "/placeholder.svg",
      tags: ["NLP", "Python", "Deep Learning", "Social Media Analytics"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "Optimisation de Supply Chain",
      description: "Développement d'un modèle d'optimisation de supply chain réduisant les coûts logistiques de 18% tout en améliorant les délais de livraison.",
      image: "/placeholder.svg",
      tags: ["Python", "Optimization", "Supply Chain", "Data Modeling"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "Segmentation Clientèle Avancée",
      description: "Analyse et segmentation avancée de la base clients d'une entreprise retail, permettant des campagnes marketing ciblées et personnalisées.",
      image: "/placeholder.svg",
      tags: ["Clustering", "Python", "Customer Analytics", "Marketing"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
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
    <section id="projects" className="py-20 bg-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les projets sur lesquels j'ai travaillé et qui démontrent mes compétences en analyse de données et en intelligence artificielle.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-muted relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </a>
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
