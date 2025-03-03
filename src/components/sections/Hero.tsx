
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Briefcase, Code, FileText, User, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const sectionCards = [
    {
      title: "À propos",
      description: "Découvrez mon parcours et mes motivations professionnelles",
      icon: <User className="h-8 w-8 text-primary" />,
      link: "/about",
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Expérience",
      description: "Explorez mon parcours professionnel et mes réalisations",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      link: "/experience",
      color: "from-emerald-50 to-emerald-100"
    },
    {
      title: "Projets",
      description: "Consultez les projets concrets sur lesquels j'ai travaillé",
      icon: <Code className="h-8 w-8 text-primary" />,
      link: "/projects",
      color: "from-violet-50 to-violet-100"
    },
    {
      title: "Certifications",
      description: "Parcourez mes certifications et qualifications professionnelles",
      icon: <Award className="h-8 w-8 text-primary" />,
      link: "/certifications",
      color: "from-amber-50 to-amber-100"
    },
    {
      title: "Compétences",
      description: "Examinez mes compétences techniques et mon expertise",
      icon: <Zap className="h-8 w-8 text-primary" />,
      link: "/skills",
      color: "from-rose-50 to-rose-100"
    },
    {
      title: "Contact",
      description: "Besoin de discuter d'un projet ? Contactez-moi dès maintenant !",
      icon: <FileText className="h-8 w-8 text-primary" />,
      link: "/contact",
      color: "from-cyan-50 to-cyan-100"
    }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text mb-6">
              Bienvenue sur mon Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Analyste Data & Intelligence Artificielle passionné par la transformation des données en insights stratégiques
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              Je vous invite à explorer mon parcours, mes compétences et mes réalisations pour découvrir comment je peux contribuer à votre succès grâce à l'analyse avancée de données et l'IA.
            </p>
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
              className="rounded-full object-cover w-full h-full shadow-lg border-4 border-white"
            />
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-dashed animate-[spin_20s_linear_infinite]"></div>
          </motion.div>
        </div>
      </div>

      <div className="bg-section py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Explorez Mon Portfolio
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Découvrez les différentes facettes de mon profil professionnel à travers ces sections spécialement conçues pour vous
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <Link to={card.link} className="block h-full">
                  <div className={`bg-gradient-to-br ${card.color} p-6 rounded-lg shadow-sm h-full border border-border/50 hover:shadow-md transition-all`}>
                    <div className="flex items-center mb-4">
                      {card.icon}
                      <h3 className="text-xl font-semibold ml-3">{card.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{card.description}</p>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                      Découvrir
                      <ChevronDown className="h-4 w-4 ml-2 rotate-270 transform -rotate-90" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
