'use client'
import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast({
                title: "Message envoyé!",
                description: "Merci pour votre message. Je vous répondrai dès que possible.",
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <section id="contact" className="py-20 bg-french-grey">
            <div className="container mx-auto px-6 md:px-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                        <span className="text-french-blue">Contactez</span> Moi
                    </h2>
                    <p className="text-french-navy/80 max-w-2xl mx-auto">
                        Intéressé par mes services ou vous avez une question? N'hésitez pas à me contacter.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Nom
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Votre nom"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="votre@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Sujet
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Sujet de votre message"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Votre message..."
                                    rows={5}
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-french-blue hover:bg-french-navy text-white"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>

                    <div>
                        <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
                            <h3 className="text-2xl font-semibold mb-6">Informations de Contact</h3>

                            <div className="space-y-5">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-french-blue/10 flex items-center justify-center mr-4">
                                        <Mail className="text-french-blue" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-french-navy/70 mb-1">
                                            Email
                                        </h4>
                                        <a href="mailto:contact@example.com" className="text-french-navy hover:text-french-blue transition-colors">
                                            contact.pancracedev@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-french-blue/10 flex items-center justify-center mr-4">
                                        <Phone className="text-french-blue" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-french-navy/70 mb-1">
                                            Téléphone
                                        </h4>
                                        <a href="tel:+22945211572" className="text-french-navy hover:text-french-blue transition-colors">
                                            +229 45 21 15 72 
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-french-blue/10 flex items-center justify-center mr-4">
                                        <MapPin className="text-french-blue" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-french-navy/70 mb-1">
                                            Localisation
                                        </h4>
                                        <p className="text-french-navy">
                                            Bénin, Cotonou
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-semibold mb-6">Horaires de Disponibilité</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-french-navy/70">Lundi - Vendredi</span>
                                    <span className="font-medium">9:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-french-navy/70">Samedi</span>
                                    <span className="font-medium">10:00 - 15:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-french-navy/70">Dimanche</span>
                                    <span className="font-medium">Fermé</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
