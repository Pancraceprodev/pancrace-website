import type { Metadata } from "next";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import "./globals.css";


export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A personal portfolio website showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div className="min-h-screen">
          <Navbar />
          <main>
            {children}
{/* 
            
            <ProjectsSection />
            <TestimonialsSection /> */}

           
          </main>
          <Footer />
        </div>

      </body>
    </html>
  );
}
