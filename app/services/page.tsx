'use client';
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Clock, Code, Layout, Database, Rocket, Award, Puzzle, Users } from 'lucide-react';


const Services = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Services & Qualifications | Portfolio';
  }, []);

  const servicesList = [
    {
      title: "Développement Front-end",
      icon: <Layout className="h-10 w-10 text-french-blue" />,
      description: "Interfaces utilisateur modernes et réactives utilisant les dernières technologies (React, TypeScript, Tailwind CSS)",
      features: [
        "Applications React performantes",
        "Interfaces responsives",
        "Animations fluides"
      ]
    },
    {
      title: "Développement Back-end",
      icon: <Database className="h-10 w-10 text-french-blue" />,
      description: "Architecture robuste et évolutive pour votre application avec les meilleures pratiques",
      features: [
        "API RESTful",
        "Bases de données SQL et NoSQL",
        "Authentification sécurisée"
      ]
    },
    {
      title: "Architecture Full Stack",
      icon: <Code className="h-10 w-10 text-french-blue" />,
      description: "Solutions complètes de bout en bout, du serveur au navigateur",
      features: [
        "CI/CD pour déploiement continu",
        "Performance et optimisation",
        "Tests automatisés"
      ]
    },
    {
      title: "Conseil Technique",
      icon: <Puzzle className="h-10 w-10 text-french-blue" />,
      description: "Expertise et conseil pour vous guider dans vos choix technologiques",
      features: [
        "Audit de code et performance",
        "Choix technologiques adaptés",
        "Stratégie d'évolution"
      ]
    }
  ];

  const qualificationsList = [
    {
      title: "Formation & Diplômes",
      items: [
        "Master en Informatique, spécialisation Développement Web",
        "Certification AWS Solutions Architect",
        "Formation continue en UX/UI Design"
      ]
    },
    {
      title: "Compétences Techniques",
      items: [
        "JavaScript/TypeScript, React, Node.js",
        "Python, Django, Flask",
        "AWS, Docker, Kubernetes"
      ]
    },
    {
      title: "Langues",
      items: [
        "Français (langue maternelle)",
        "Anglais (courant)",
        "Espagnol (intermédiaire)"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-french-grey/30">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-10 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Mes <span className="gradient-text">Services</span> & <span className="gradient-text">Qualifications</span>
              </h1>
              <p className="text-lg md:text-xl text-french-navy/80 mb-10 animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Découvrez mes compétences techniques, mes services et comment je peux vous aider à concrétiser votre projet numérique.
              </p>
            </div>
          </div>
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-french-blue/5 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-french-red/5 blur-3xl"></div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 text-center">
              Services <span className="gradient-text">Proposés</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesList.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-french-blue/10 bg-white shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-french-blue/5 rounded-lg mr-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-french-navy/80 mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check size={16} className="text-french-blue mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-french-blue/5">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 text-center">
              Mon <span className="gradient-text">Processus</span> de Travail
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-french-blue/10 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-french-blue/10 text-french-blue rounded-full mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Consultation</h3>
                <p className="text-french-navy/80">
                  Je prends le temps de comprendre vos besoins, objectifs et contraintes pour proposer une solution adaptée.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-french-blue/10 animate-slide-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-french-blue/10 text-french-blue rounded-full mb-4">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Développement</h3>
                <p className="text-french-navy/80">
                  Développement itératif avec des points réguliers pour vous tenir informé et ajuster si nécessaire.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-french-blue/10 animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-french-blue/10 text-french-blue rounded-full mb-4">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Livraison</h3>
                <p className="text-french-navy/80">
                  Déploiement, tests finaux, et support pour garantir que tout fonctionne parfaitement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 text-center">
              Mes <span className="gradient-text">Qualifications</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {qualificationsList.map((qual, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-xl border border-french-blue/10 bg-white shadow-sm animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-french-blue/10 text-french-blue rounded-full mb-4">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{qual.title}</h3>
                  <ul className="space-y-2">
                    {qual.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check size={16} className="text-french-blue mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-french-blue to-french-navy text-white">
          <div className="container mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90 animate-slide-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Discutons de votre projet et voyons comment je peux vous aider à le concrétiser avec des solutions techniques adaptées et performantes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <Button size="lg" className="bg-white text-french-blue hover:bg-french-grey">
                Me contacter <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Voir mes projets
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 text-center">
              Questions <span className="gradient-text">Fréquentes</span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="p-6 rounded-xl border border-french-blue/10 bg-white shadow-sm animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <h3 className="text-xl font-semibold mb-3">Quels sont vos tarifs ?</h3>
                <p className="text-french-navy/80">
                  Mes tarifs varient selon la complexité et l'ampleur du projet. Je propose généralement des forfaits à prix fixe basés sur les spécifications du projet ou un tarif journalier pour des missions plus flexibles.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border border-french-blue/10 bg-white shadow-sm animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                <h3 className="text-xl font-semibold mb-3">Combien de temps faut-il pour réaliser un projet ?</h3>
                <p className="text-french-navy/80">
                  La durée dépend de la complexité et de l'étendue du projet. Un site vitrine simple peut prendre 2-3 semaines, tandis qu'une application web complète peut nécessiter 2-3 mois ou plus.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border border-french-blue/10 bg-white shadow-sm animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <h3 className="text-xl font-semibold mb-3">Comment se déroule la collaboration ?</h3>
                <p className="text-french-navy/80">
                  Je propose une approche agile avec des cycles de développement courts et des points réguliers. Nous définissons ensemble les objectifs, je développe de manière itérative, et vous pouvez suivre l'avancement et donner votre feedback tout au long du projet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
