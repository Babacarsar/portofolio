import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from "@/components/ui/separator";
import { 
  Code, Database, BarChart, Terminal, Github, 
  Server, Dock, FileSpreadsheet, Workflow, Brain,
  Users, LineChart, CloudCog, ScrollText, BookOpen,
  Cpu, Layers, PieChart, Container, Archive, Table,
  Pyramid, Settings, Monitor
} from 'lucide-react';

const Skills = () => {
  const programmingSkills = [
    { name: "Python", icon: <Cpu className="h-5 w-5 text-primary" /> },
    { name: "SQL", icon: <Table className="h-5 w-5 text-primary" /> },
    { name: "R", icon: <PieChart className="h-5 w-5 text-primary" /> },
    { name: "Scala", icon: <Layers className="h-5 w-5 text-primary" /> },
    { name: "Java", icon: <Monitor className="h-5 w-5 text-primary" /> },
    { name: "Machine Learning", icon: <Pyramid className="h-5 w-5 text-primary" /> }
  ];

  const dataManagementSkills = [
    { name: "Bases de données relationnelles", icon: <Database className="h-5 w-5 text-primary" /> },
    { name: "NoSQL", icon: <Archive className="h-5 w-5 text-primary" /> },
    { name: "Cloud Data Solutions", icon: <CloudCog className="h-5 w-5 text-primary" /> },
    { name: "ETL", icon: <Workflow className="h-5 w-5 text-primary" /> },
    { name: "Modélisation de données", icon: <Settings className="h-5 w-5 text-primary" /> }
  ];

  const projectTools = [
    { name: "Gestion de version", icon: <Github className="h-5 w-5 text-primary" /> },
    { name: "Gestion de projet", icon: <Dock className="h-5 w-5 text-primary" /> },
    { name: "Conteneurisation", icon: <Container className="h-5 w-5 text-primary" /> },
    { name: "Business Intelligence", icon: <BarChart className="h-5 w-5 text-primary" /> },
    { name: "Automatisation", icon: <Settings className="h-5 w-5 text-primary" /> }
  ];

  const softSkills = [
    { name: "Analyse critique", icon: <Brain className="h-5 w-5 text-primary" /> },
    { name: "Adaptabilité", icon: <Workflow className="h-5 w-5 text-primary" /> },
    { name: "Travail d'équipe", icon: <Users className="h-5 w-5 text-primary" /> },
    { name: "Communication", icon: <ScrollText className="h-5 w-5 text-primary" /> }
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

  const SkillItem = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
    <motion.div 
      variants={itemVariants}
      className="flex items-center gap-3 mb-4 p-2 rounded-lg hover:bg-accent/10 transition-colors"
    >
      {icon}
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );

  const SkillCategory = ({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: { name: string; icon: React.ReactNode }[] }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6 rounded-lg bg-card shadow-sm border border-border"
    >
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="bg-primary/10 p-3 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>
      <Separator className="mb-6" />
      {skills.map((skill, index) => (
        <SkillItem key={index} name={skill.name} icon={skill.icon} />
      ))}
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Compétences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un aperçu détaillé des compétences techniques et transversales développées 
            tout au long de mon parcours professionnel et académique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory 
            title="Programmation" 
            icon={<Code className="h-5 w-5 text-primary" />} 
            skills={programmingSkills} 
          />

          <SkillCategory 
            title="Gestion des Données" 
            icon={<Database className="h-5 w-5 text-primary" />} 
            skills={dataManagementSkills} 
          />

          <SkillCategory 
            title="Outils & Méthodologies" 
            icon={<Terminal className="h-5 w-5 text-primary" />} 
            skills={projectTools} 
          />

          <SkillCategory 
            title="Soft Skills" 
            icon={<Brain className="h-5 w-5 text-primary" />} 
            skills={softSkills} 
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-card shadow-sm border border-border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <LineChart className="h-5 w-5 text-primary" />
              Domaines d'expertise
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Server className="h-4 w-4 text-primary" />
                <span>Architecture de données et ETL</span>
              </li>
              <li className="flex items-center gap-2">
                <BarChart className="h-4 w-4 text-primary" />
                <span>Analyse de données et visualisation</span>
              </li>
              <li className="flex items-center gap-2">
                <CloudCog className="h-4 w-4 text-primary" />
                <span>Cloud computing et infrastructures scalables</span>
              </li>
              <li className="flex items-center gap-2">
                <Database className="h-4 w-4 text-primary" />
                <span>Gestion de bases de données SQL et NoSQL</span>
              </li>
              <li className="flex items-center gap-2">
                <Workflow className="h-4 w-4 text-primary" />
                <span>Automatisation et orchestration de processus</span>
              </li>
            </ul>
          </div>

          <div className="bg-card shadow-sm border border-border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Formation continue
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 text-primary" />
                <span>Projets open-source et collaboratifs</span>
              </li>
              <li className="flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4 text-primary" />
                <span>Veille technologique régulière</span>
              </li>
              <li className="flex items-center gap-2">
                <Dock className="h-4 w-4 text-primary" />
                <span>Projets personnels d'automatisation et d'analyse</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;