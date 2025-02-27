
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Data Analysis", level: 95 },
    { name: "Deep Learning", level: 85 },
    { name: "SQL", level: 90 },
    { name: "Data Visualization", level: 85 },
    { name: "TensorFlow/PyTorch", level: 80 },
    { name: "Web Scraping", level: 75 },
    { name: "AWS/Cloud", level: 70 },
    { name: "R", level: 60 }
  ];

  const softSkills = [
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 95 },
    { name: "Team Work", level: 85 },
    { name: "Time Management", level: 80 },
    { name: "Critical Thinking", level: 90 },
    { name: "Project Management", level: 75 },
    { name: "Adaptability", level: 90 },
    { name: "Creativity", level: 85 }
  ];

  const tools = [
    { name: "Jupyter Notebook", level: 95 },
    { name: "VS Code", level: 90 },
    { name: "Git/GitHub", level: 85 },
    { name: "Tableau", level: 80 },
    { name: "Power BI", level: 80 },
    { name: "Excel", level: 85 },
    { name: "Docker", level: 70 },
    { name: "Kubernetes", level: 60 }
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-card shadow-sm border border-border"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Compétences Techniques</h3>
            <Separator className="mb-6" />
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-card shadow-sm border border-border"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Soft Skills</h3>
            <Separator className="mb-6" />
            {softSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-card shadow-sm border border-border"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Outils & Technologies</h3>
            <Separator className="mb-6" />
            {tools.map((tool, index) => (
              <SkillBar key={index} name={tool.name} level={tool.level} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
