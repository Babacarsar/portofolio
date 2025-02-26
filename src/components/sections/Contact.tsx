
import React from 'react';
import { Mail, Phone, Linkedin, Github, User } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactItem = ({ icon, label, value, link }: { 
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}) => {
  const content = (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
    >
      <div className="text-primary">{icon}</div>
      <div>
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="section-container">
        <div className="animate-on-scroll">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContactItem
                icon={<Mail size={24} />}
                label="Email"
                value="ba66bacar@gmail.com"
                link="mailto:ba66bacar@gmail.com"
              />
              
              <ContactItem
                icon={<Phone size={24} />}
                label="Téléphone"
                value="07 75 80 67 99"
                link="tel:+33775806799"
              />

              <ContactItem
                icon={<User size={24} />}
                label="Âge"
                value="22 ans"
              />

              <ContactItem
                icon={<Linkedin size={24} />}
                label="LinkedIn"
                value="Babacar Sarr"
                link="https://www.linkedin.com/in/babacar-sarr-a3888a247"
              />

              <ContactItem
                icon={<Github size={24} />}
                label="GitHub"
                value="Babacarsar"
                link="https://github.com/Babacarsar"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground">
                Je suis disponible pour discuter de vos projets et opportunités professionnelles
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
