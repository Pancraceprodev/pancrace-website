import { Code, Globe, Monitor, Server } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                            À propos <span className="text-french-blue">de moi</span>
                        </h2>

                        <p className="text-french-navy/80 mb-6">
                            Je suis un développeur Full Stack passionné avec une expertise dans les technologies front-end et back-end.
                            Mon approche est centrée sur la création d'expériences utilisateur élégantes soutenues par
                            des architectures solides et performantes.
                        </p>

                        <p className="text-french-navy/80 mb-6">
                            Avec plusieurs années d'expérience dans le développement web, j'ai travaillé sur divers projets
                            allant des applications d'entreprise aux plateformes e-commerce innovantes. Ma philosophie de développement
                            combine l'excellence technique avec un sens aigu du design et une attention aux détails.
                        </p>

                        <p className="text-french-navy/80">
                            Je m'adapte rapidement aux nouvelles technologies et méthodologies, ce qui me permet de rester
                            à la pointe de l'innovation dans un domaine en constante évolution.
                        </p>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-french-grey p-6 rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-full bg-french-blue/10 flex items-center justify-center mb-4">
                                    <Monitor className="text-french-blue" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Front-End</h3>
                                <p className="text-french-navy/70">
                                    Création d'interfaces utilisateur réactives et intuitives avec les technologies modernes.
                                </p>
                            </div>

                            <div className="bg-french-grey p-6 rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-full bg-french-blue/10 flex items-center justify-center mb-4">
                                    <Server className="text-french-blue" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Back-End</h3>
                                <p className="text-french-navy/70">
                                    Développement d'APIs robustes et de services scalables pour des applications performantes.
                                </p>
                            </div>

                            <div className="bg-french-grey p-6 rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-full bg-french-blue/10 flex items-center justify-center mb-4">
                                    <Code className="text-french-blue" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Architecture</h3>
                                <p className="text-french-navy/70">
                                    Conception de systèmes maintenables et évolutifs avec des patterns modernes.
                                </p>
                            </div>

                            <div className="bg-french-grey p-6 rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-full bg-french-blue/10 flex items-center justify-center mb-4">
                                    <Globe className="text-french-blue" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Déploiement</h3>
                                <p className="text-french-navy/70">
                                    Mise en place d'infrastructures CI/CD et optimisation des performances d'applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
