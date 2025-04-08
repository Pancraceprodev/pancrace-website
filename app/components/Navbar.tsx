'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCurrentLocation } from '@/lib/use-currentLocation';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetHeader, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useCurrentLocation();

    // Handle navbar background change on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation items
    const navItems = [
        { label: 'Accueil', path: '/', hash: '#hero' },
        { label: 'À Propos', path: '/', hash: '#about' },
        { label: 'Compétences', path: '/', hash: '#skills' },
        { label: 'Projets', path: '/', hash: '#projects' },
        { label: 'Services', path: '/services' },
        { label: 'Soumettre un Projet', path: '/submit-project' },
        { label: 'Contact', path: '/', hash: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-french-blue flex items-center">
                    <span className="font-serif">FD</span>
                    <span className="ml-2 text-sm font-normal hidden sm:inline-block">
                        Développeur Full Stack
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => {
                        const isActive =
                            location.pathname === item.path &&
                            (!item.hash || (location.hash === item.hash || (item.hash === '#hero' && !location.hash)));

                        const linkPath = item.path + (item.hash || '');

                        return (
                            <Link
                                key={item.label}
                                href={linkPath}
                                className={`text-sm font-medium hover:text-french-blue transition-colors ${isActive ? 'text-french-blue' : 'text-french-navy/70'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Contact Button (Desktop) */}
                <div className="hidden lg:block">
                    <Link href="/#contact">
                        <Button variant="default" className="bg-french-blue hover:bg-french-navy text-white">
                            Contact
                        </Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="lg:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <SheetHeader>
                            <SheetTitle><VisuallyHidden>PancraceFolio</VisuallyHidden></SheetTitle>

                        </SheetHeader>
                        <nav className="flex flex-col gap-4 mt-8">
                            {navItems.map((item) => {
                                const linkPath = item.path + (item.hash || '');

                                return (
                                    <Link
                                        key={item.label}
                                        href={linkPath}
                                        className="text-lg font-medium py-2 hover:text-french-blue transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Navbar;
