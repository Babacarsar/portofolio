
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, FileCheck } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  id?: string;
  skills?: string[];
  icon?: React.ReactNode;
}

const CertificationCard = ({ certification }: { certification: Certification }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col h-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-primary">
          {certification.icon || <Award size={24} />}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar size={16} className="mr-1" />
          {certification.date}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>
      <p className="text-muted-foreground mb-2">{certification.issuer}</p>
      {certification.id && (
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <FileCheck size={16} className="mr-1" />
          ID: {certification.id}
        </div>
      )}
      {certification.skills && certification.skills.length > 0 && (
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/5 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Devenir un expert de Power BI - La formation complète",
      issuer: "Udemy",
      date: "Février 2025",
      id: "UC-b1419a6e-5e1e-4fc2-b1a1-3da8a089a717",
      skills: ["Microsoft Power BI", "Microsoft Power Query"]
    },
    {
      title: "CI - Piloter l'informatique décisionnelle d'un SI [EISI I1]",
      issuer: "PRO-ALTERNA",
      date: "Janvier 2025",
      id: "7095641544399047",
      skills: ["Analyses Big Data", "Science des données", "Intelligence artificielle (IA)", "Système d'information"]
    },
    {
      title: "Dataiku ML Practitioner",
      issuer: "Dataiku",
      date: "Décembre 2024",
      id: "ht3asax326xx"
    },
    {
      title: "Excel : Analyse de données avec Power Query (Microsoft 365)",
      issuer: "Birdify - LMSAFP account",
      date: "Décembre 2024",
      id: "93c82716b25e33bd8160669ca3b18011e88f71d1a16936d40932af986994d672",
      skills: ["Microsoft Power Query", "Microsoft Excel"]
    },
    {
      title: "Apprendre l'analyse des données Partie 2 : Étendre et appliquer les connaissances de base",
      issuer: "Birdify - LMSAFP account",
      date: "Novembre 2024",
      id: "e35d84a09101e88db089531c68f6d38aa359995240348aa525dd6cbe05c2547b"
    },
    {
      title: "Dataiku Advanced Designer",
      issuer: "Dataiku",
      date: "Novembre 2024",
      id: "ojs8mya7re47",
      skills: ["Outils de collaboration", "Assurance qualité des données"]
    },
    {
      title: "Dataiku Core Designer",
      issuer: "Dataiku",
      date: "Novembre 2024",
      id: "myckyaxbr6bq",
      skills: ["Bases de données", "Extract, Transform, Load (ETL)", "Analyses Big Data"]
    },
    {
      title: "Les fondements du data engineering",
      issuer: "Birdify - LMSAFP account",
      date: "2024",
      id: "a752adc2306a8c7c4b983fdab96550db647f55fbffcfd45b7ff0b57223003072",
      skills: ["Big data", "Ingénierie des données"]
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Mes qualifications et certifications professionnelles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {certifications.map((certification, index) => (
              <CertificationCard key={index} certification={certification} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
