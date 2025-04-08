'use client'
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory[];
  githubLink?: string;
  demoLink?: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: ["fullstack"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: 2,
      title: "Application Mobile de Fitness",
      description: "Application de suivi de fitness avec des programmes d'entraînement personnalisés.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop",
      tags: ["React Native", "Firebase", "Redux"],
      category: ["mobile", "frontend"],
      githubLink: "#"
    },
    {
      id: 3,
      title: "Dashboard Analytique",
      description: "Tableau de bord analytique pour visualiser et analyser les données commerciales.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
      tags: ["Vue.js", "D3.js", "Express"],
      category: ["frontend", "fullstack"],
      demoLink: "#"
    },
    {
      id: 4,
      title: "API REST pour Blog",
      description: "API RESTful pour un système de blog avec authentification et autorisations.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop",
      tags: ["Node.js", "Express", "JWT", "MongoDB"],
      category: ["backend"],
      githubLink: "#"
    },
    {
      id: 5,
      title: "Site Portfolio Photography",
      description: "Site portfolio pour photographe avec galerie dynamique et gestion de contenu.",
      image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=500&auto=format&fit=crop",
      tags: ["React", "GSAP", "Sanity CMS"],
      category: ["frontend"],
      demoLink: "#"
    },
    {
      id: 6,
      title: "Système de Gestion de Tâches",
      description: "Application complète de gestion de tâches avec fonctionnalités collaboratives.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=500&auto=format&fit=crop",
      tags: ["TypeScript", "React", "Python", "FastAPI"],
      category: ["fullstack"],
      githubLink: "#",
      demoLink: "#"
    }
  ];

  const filters: { label: string; value: ProjectCategory }[] = [
    { label: 'Tous', value: 'all' },
    { label: 'Front-End', value: 'frontend' },
    { label: 'Back-End', value: 'backend' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Mobile', value: 'mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Mes <span className="text-french-blue">Projets</span>
          </h2>
          <p className="text-french-navy/80 max-w-2xl mx-auto">
            Une sélection de mes projets récents montrant mes compétences et mon expertise en développement web.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? 'bg-french-blue text-white'
                  : 'bg-french-grey text-french-navy hover:bg-french-blue/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-french-grey rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-french-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-french-blue hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-french-blue hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-french-navy/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-french-blue/10 text-french-blue text-xs py-1 px-2 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
