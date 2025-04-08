
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            <span className="text-french-blue">Mes</span> Compétences
          </h2>
          <p className="text-french-navy/80 max-w-2xl mx-auto">
            J'utilise les technologies les plus modernes pour créer des applications web performantes et élégantes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          <Card className="p-2">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">Développement Frontend</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">React & Next.js</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">TypeScript</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Tailwind CSS</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="p-2">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">Développement Backend</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Node.js</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Python</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">SQL & NoSQL</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="p-2">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">DevOps & Outils</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Docker</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">CI/CD</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">AWS/Azure</span>
                    <span>70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="p-2">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Gestion de Projet</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Collaboration</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Adaptabilité</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
