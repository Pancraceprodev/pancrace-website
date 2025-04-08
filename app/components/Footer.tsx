
import { LiaGithub, LiaLinkedin, LiaInstagram,LiaTwitter } from "react-icons/lia";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-french-navy text-white py-12">
            <div className="container mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-5">
                            <span className="text-french-blue">Dev</span>
                            <span className="text-french-red">FullStack</span>
                        </h3>
                        <p className="text-white/80 mb-6 max-w-md">
                            Développeur Full Stack passionné par la création d'applications élégantes et performantes.
                            La "French Touch" du développement web.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-french-blue transition-colors"
                                aria-label="Github"
                            >
                                <LiaGithub size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-french-blue transition-colors"
                                aria-label="LinkedIn"
                            >
                                <LiaLinkedin size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-french-blue transition-colors"
                                aria-label="Twitter"
                            >
                                <LiaTwitter size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-french-blue transition-colors"
                                aria-label="Instagram"
                            >
                                <LiaInstagram size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-5">Navigation</h4>
                        <nav className="flex flex-col space-y-3">
                            <a href="#" className="text-white/80 hover:text-white transition-colors">Accueil</a>
                            <a href="#about" className="text-white/80 hover:text-white transition-colors">À propos</a>
                            <a href="#skills" className="text-white/80 hover:text-white transition-colors">Compétences</a>
                            <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projets</a>
                            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-5">Contactez Moi</h4>
                        <div className="space-y-3 text-white/80">
                            <p>Bénin, Cotonou</p>
                            <p>contact.pancracedev@gmail.com</p>
                            <p>+229 45 21 15 72</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/60 text-sm">
                    <p>&copy; {currentYear} Full Stack Developer. Tous droits réservés.</p>
                    <p className="mt-2">Conçu et développé avec <span className="text-french-red">❤</span> et beaucoup de café</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
