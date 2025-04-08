
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Marie Durand",
    position: "Directrice Marketing",
    company: "Tech Innovate",
    text: "Un travail exceptionnel ! J'ai été impressionnée par la qualité du code et la rapidité d'exécution. Je recommande vivement.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Thomas Bernard",
    position: "Fondateur",
    company: "StartupVision",
    text: "Collaboration parfaite du début à la fin. Excellente communication et résultats au-delà de mes attentes.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Sophie Martin",
    position: "Responsable Produit",
    company: "DigitalWave",
    text: "Professionnel, créatif et attentif aux détails. Notre application est exactement comme nous l'avions imaginée.",
    rating: 4,
    avatar: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-french-grey">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            <span className="text-french-blue">Témoignages</span> Clients
          </h2>
          <p className="text-french-navy/80 max-w-2xl mx-auto">
            Découvrez ce que mes clients pensent de mon travail et de ma collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
