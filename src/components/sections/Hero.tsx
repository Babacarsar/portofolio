
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Briefcase, Code, FileText, User, Zap, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const sectionCards = [
    {
      title: "À propos",
      description: "Découvrez mon parcours et mes motivations professionnelles",
      icon: <User className="h-8 w-8 text-primary" />,
      link: "/about",
      color: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
    },
    {
      title: "Expérience",
      description: "Explorez mon parcours professionnel et mes réalisations",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      link: "/experience",
      color: "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20"
    },
    {
      title: "Projets",
      description: "Consultez les projets concrets sur lesquels j'ai travaillé",
      icon: <Code className="h-8 w-8 text-primary" />,
      link: "/projects",
      color: "from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20"
    },
    {
      title: "Certifications",
      description: "Parcourez mes certifications et qualifications professionnelles",
      icon: <Award className="h-8 w-8 text-primary" />,
      link: "/certifications",
      color: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20"
    },
    {
      title: "Compétences",
      description: "Examinez mes compétences techniques et mon expertise",
      icon: <Zap className="h-8 w-8 text-primary" />,
      link: "/skills",
      color: "from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20"
    },
    {
      title: "Contact",
      description: "Besoin de discuter d'un projet ? Contactez-moi dès maintenant !",
      icon: <FileText className="h-8 w-8 text-primary" />,
      link: "/contact",
      color: "from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="home" className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <div className="pt-20 pb-10 md:pt-0 md:pb-0 min-h-[80vh] flex items-center justify-center relative">
        <div className="section-container flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Bienvenue sur mon Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Analyste Data & Intelligence Artificielle passionné par la transformation des données en insights stratégiques
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              Je vous invite à explorer mon parcours, mes compétences et mes réalisations pour découvrir comment je peux contribuer à votre succès grâce à l'analyse avancée de données et l'IA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="group button-shimmer">
                <Link to="/contact">
                  Me contacter
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group relative overflow-hidden bg-gradient-to-r from-background to-background hover:from-primary/10 hover:to-primary/5 transition-all hover-glow">
                <a href={import.meta.env.BASE_URL + 'cv.pdf'} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <span className="relative z-10">Télécharger mon CV complet</span>
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform relative z-10" />
                  <div className="absolute right-0 top-0 h-full w-0 bg-primary/10 transition-all duration-300 group-hover:w-full -z-0"></div>
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-72 md:h-72 mb-16"
          >
            <img
              src={import.meta.env.BASE_URL + 'photoidentite.jpeg'}
              alt="Portrait professionnel"
              className="rounded-full object-cover w-full h-full shadow-lg border-4 border-white dark:border-gray-800"
            />
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-primary/20 border-dashed"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-subtle-bounce hidden md:block"
          >
            <ChevronDown className="h-8 w-8 text-primary/60" />
          </motion.div>
        </div>
      </div>

      <div className="bg-section py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            >
              Explorez Mon Portfolio
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Découvrez les différentes facettes de mon profil professionnel à travers ces sections spécialement conçues pour vous
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sectionCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group spotlight"
              >
                <Link to={card.link} className="block h-full">
                  <div className={`bg-gradient-to-br ${card.color} p-6 rounded-lg shadow-sm h-full border border-border/50 hover:shadow-md transition-all`}>
                    <motion.div 
                      className="flex items-center mb-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 0, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {card.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold ml-3">{card.title}</h3>
                    </motion.div>
                    <p className="text-muted-foreground mb-4">{card.description}</p>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                      Découvrir
                      <ChevronDown className="h-4 w-4 ml-2 rotate-270 transform -rotate-90" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
