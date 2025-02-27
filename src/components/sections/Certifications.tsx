
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Shield, Database, FileCode, FileSpreadsheet, Briefcase } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Certifications = () => {
  const certifications = [
    {
      title: "Devenir un expert de Power Bi - La formation complète",
      issuer: "Udemy",
      date: "Février 2025",
      description: "Formation complète sur Microsoft Power BI incluant Power Query et des techniques avancées d'analyse de données.",
      id: "UC-b1419a6e-5e1e-4fc2-b1a1-3da8a089a717",
      skills: ["Microsoft Power BI", "Microsoft Power Query"],
      icon: <FileCode className="h-8 w-8 text-primary mr-3" />
    },
    {
      title: "CI - Piloter l'informatique décisionnelle d'un SI [EISI I1]",
      issuer: "PRO-ALTERNA",
      date: "Janvier 2025",
      description: "Certification spécialisée dans le pilotage de l'informatique décisionnelle des systèmes d'information.",
      id: "7095641544399047",
      skills: ["Analyses Big Data", "Science des données", "Intelligence artificielle (IA)", "Système d'information"],
      icon: <Briefcase className="h-8 w-8 text-primary mr-3" />
    },
    {
      title: "Dataiku ML Practitioner",
      issuer: "Dataiku",
      date: "Décembre 2024",
      description: "Certification validant les compétences pratiques en machine learning sur la plateforme Dataiku.",
      id: "ht3asax326xx",
      skills: [],
      icon: <Award className="h-8 w-8 text-primary mr-3" />
    },
    {
      title: "Excel : Analyse de données avec Power Query (Microsoft 365)",
      issuer: "Birdify - LMSAFP account",
      date: "Décembre 2024",
      description: "Certificat d'accomplissement sur l'analyse de données avec Microsoft Power Query et Excel.",
      id: "93c82716b25e33bd8160669ca3b18011e88f71d1a16936d40932af986994d672",
      skills: ["Microsoft Power Query", "Microsoft Excel"],
      icon: <FileSpreadsheet className="h-8 w-8 text-primary mr-3" />
    },
    {
      title: "Apprendre l'analyse des données Partie 2 : Étendre et appliquer les connaissances de base",
      issuer: "Birdify - LMSAFP account",
      date: "Novembre 2024",
      description: "Formation avancée sur l'analyse de données, étendant les connaissances fondamentales.",
      id: "e35d84a09101e88db089531c68f6d38aa359995240348aa525dd6cbe05c2547b",
      skills: [],
      icon: <Award className="h-8 w-8 text-primary mr-3" />
    },
    {
      title: "Dataiku Advanced Designer",
      issuer: "Dataiku",
      date: "Novembre 2024",
      description: "Certification de niveau avancé sur la plateforme Dataiku, axée sur la conception de projets d'analyse de données complexes.",
      id: "ojs8mya7re47",
      skills: ["Outils de collaboration", "Assurance qualité des données"],
      icon: <Shield className="h-8 w-8 text-primary mr-3" />
    },
    {
      title: "Dataiku Core Designer",
      issuer: "Dataiku",
      date: "Novembre 2024",
      description: "Certification fondamentale sur la plateforme Dataiku, couvrant les bases de la conception de projets de données.",
      id: "myckyaxbr6bq",
      skills: ["Bases de données", "Extract, Transform, Load (ETL)", "Analyses Big Data"],
      icon: <Database className="h-8 w-8 text-primary mr-3" />
    },
    {
      title: "Les fondements du data engineering",
      issuer: "Birdify - LMSAFP account",
      date: "",
      description: "Formation sur les fondamentaux de l'ingénierie des données et les concepts de big data.",
      id: "a752adc2306a8c7c4b983fdab96550db647f55fbffcfd45b7ff0b57223003072",
      skills: ["Big data", "Ingénierie des données"],
      icon: <Database className="h-8 w-8 text-primary mr-3" />
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
                {certification.icon}
                <h3 className="font-semibold text-xl">{certification.title}</h3>
              </div>
              <Separator className="mb-4" />
              <div className="mb-4">
                <div className="font-medium">{certification.issuer}</div>
                {certification.date && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{certification.date}</span>
                  </div>
                )}
              </div>
              <p className="text-muted-foreground mb-4">
                {certification.description}
              </p>
              
              {certification.id && (
                <div className="mb-4">
                  <div className="text-sm font-medium">ID de certification:</div>
                  <div className="text-sm text-muted-foreground break-all">{certification.id}</div>
                </div>
              )}
              
              {certification.skills && certification.skills.length > 0 && (
                <div className="mb-4">
                  <div className="text-sm font-medium mb-1">Compétences:</div>
                  <div className="flex flex-wrap gap-1">
                    {certification.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
