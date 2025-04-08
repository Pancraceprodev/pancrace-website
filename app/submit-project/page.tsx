'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  company: z.string().min(1, {
    message: "Veuillez entrer le nom de votre entreprise.",
  }),
  projectType: z.string({
    required_error: "Veuillez sélectionner un type de projet.",
  }),
  budget: z.string({
    required_error: "Veuillez sélectionner une fourchette de budget.",
  }),
  timeline: z.string({
    required_error: "Veuillez sélectionner un délai.",
  }),
  description: z.string().min(10, {
    message: "La description du projet doit contenir au moins 10 caractères.",
  }),
});

const ProjectSubmissionForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send this to your backend
    console.log(values);
    toast({
      title: "Projet soumis avec succès!",
      description: "Nous vous contacterons bientôt pour discuter des détails.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom complet</FormLabel>
                <FormControl>
                  <Input placeholder="Votre nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="votre@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entreprise / Organisation</FormLabel>
              <FormControl>
                <Input placeholder="Nom de votre entreprise" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type de projet</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="website">Site Web</SelectItem>
                    <SelectItem value="webapp">Application Web</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="mobile">Application Mobile</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="less-5k">Moins de 5 000 €</SelectItem>
                    <SelectItem value="5-10k">5 000 € - 10 000 €</SelectItem>
                    <SelectItem value="10-20k">10 000 € - 20 000 €</SelectItem>
                    <SelectItem value="more-20k">Plus de 20 000 €</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Délai</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-month">Moins d'un mois</SelectItem>
                    <SelectItem value="1-3-months">1-3 mois</SelectItem>
                    <SelectItem value="3-6-months">3-6 mois</SelectItem>
                    <SelectItem value="more-6-months">Plus de 6 mois</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description du projet</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Décrivez votre projet, objectifs, fonctionnalités souhaitées..." 
                  rows={6}
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Plus votre description est détaillée, mieux je pourrai comprendre vos besoins.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full md:w-auto bg-french-blue hover:bg-french-navy">
          Soumettre mon projet
        </Button>
      </form>
    </Form>
  );
};

export default ProjectSubmissionForm;
