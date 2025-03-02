import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Code, Database, BarChart, Terminal, Github, 
  Server, Dock, FileSpreadsheet, Workflow, Brain,
  Users, LineChart, CloudCog, ScrollText, BookOpen
} from 'lucide-react';

const Skills = () => {
  const programmingSkills = [
    { name: "Python (pandas, NumPy, scikit-learn, matplotlib)", level: 95 },
    { name: "SQL (requêtes complexes)", level: 90 },
    { name: "R", level: 80 },
    { name: "Scala", level: 75 },
    { name: "Java", level: 70 },
    { name: "TensorFlow / PyTorch", level: 85 },
    { name: "Apache Spark / Hadoop", level: 85 },
    { name: "Apache Airflow", level: 80 },
    { name: "Docker / Kubernetes", level: 75 },
    { name: "Talend / Dataiku / Amph.ai", level: 85 }
  ];

  const dataManagementSkills = [
    { name: "PostgreSQL / MySQL / SQL Server", level: 90 },
    { name: "MongoDB (NoSQL)", level: 85 },
    { name: "AWS (Redshift, S3)", level: 80 },
    { name: "Excel avancé", level: 90 },
    { name: "ETL & Data Pipelines", level: 85 },
    { name: "Data Modeling", level: 80 },
    { name: "Data Quality & Governance", level: 75 },
    { name: "Big Data Processing", level: 80 }
  ];

  const projectTools = [
    { name: "Git / GitHub", level: 90 },
    { name: "Jira / Trello", level: 85 },
    { name: "Scrum / Kanban", level: 85 },
    { name: "Terraform / Ansible", level: 75 },
    { name: "Power BI", level: 90 },
    { name: "Tableau", level: 85 },
    { name: "Powerpoint", level: 90 },
    { name: "Documentation technique", level: 85 }
  ];

  const softSkills = [
    { name: "Esprit analytique", level: 95 },
    { name: "Capacité d'adaptation", level: 90 },
    { name: "Collaboration et esprit d'équipe", level: 90 },
    { name: "Curiosité intellectuelle", level: 95 },
    { name: "Résolution de problèmes", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Gestion du temps", level: 85 },
    { name: "Autonomie", level: 90 }
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

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <motion.div 
      variants={itemVariants}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium text-primary">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </motion.div>
  );

  const SkillCategory = ({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: { name: string; level: number }[] }) => (
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
        <SkillBar key={index} name={skill.name} level={skill.level} />
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
            Un aperçu détaillé des compétences techniques et transversales que j'ai développées
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
                <ScrollText className="h-4 w-4 text-primary" />
                <span>Certifications en cours (Data Engineering, Cloud)</span>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 text-primary" />
                <span>Projets open-source et collaboratifs</span>
              </li>
              <li className="flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4 text-primary" />
                <span>Veille technologique régulière</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Participation à des hackathons et événements tech</span>
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
