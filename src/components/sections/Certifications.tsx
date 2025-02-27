
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Certifications = () => {
  const certifications = [
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "Avril 2023",
      description: "Certification validant l'expertise avancée en développement de modèles de machine learning et deep learning avec TensorFlow.",
      link: "https://www.tensorflow.org/certificate"
    },
    {
      title: "AWS Certified Data Analytics - Specialty",
      issuer: "Amazon Web Services",
      date: "Janvier 2023",
      description: "Certification attestant des compétences en conception et implémentation de solutions d'analyse de données sur AWS.",
      link: "https://aws.amazon.com/certification/certified-data-analytics-specialty/"
    },
    {
      title: "Professional Data Scientist",
      issuer: "DataCamp",
      date: "Septembre 2022",
      description: "Certification validant les compétences en science des données, incluant la maîtrise de Python, SQL, et les techniques avancées d'analyse de données.",
      link: "https://www.datacamp.com/certification"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "Juin 2022",
      description: "Spécialisation complète en deep learning, incluant les réseaux de neurones, l'amélioration des algorithmes de deep learning, et la structuration de projets d'IA.",
      link: "https://www.deeplearning.ai/deep-learning-specialization/"
    },
    {
      title: "Machine Learning Engineer Nanodegree",
      issuer: "Udacity",
      date: "Mars 2022",
      description: "Programme intensif couvrant les fondements et applications avancées du machine learning dans des contextes réels d'entreprise.",
      link: "https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t"
    },
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "Novembre 2021",
      description: "Certification attestant de la maîtrise des fonctionnalités de Tableau Desktop pour l'analyse et la visualisation de données.",
      link: "https://www.tableau.com/learn/certification/desktop-specialist"
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
    <section id="certifications" className="py-20 bg-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les certifications que j'ai obtenues pour valider mon expertise dans le domaine de l'analyse de données et de l'intelligence artificielle.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-primary mr-3" />
                <h3 className="font-semibold text-xl">{certification.title}</h3>
              </div>
              <Separator className="mb-4" />
              <div className="mb-4">
                <div className="font-medium">{certification.issuer}</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{certification.date}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {certification.description}
              </p>
              <a 
                href={certification.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Voir la certification
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
