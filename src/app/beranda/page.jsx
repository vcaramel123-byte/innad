"use client"; // <--- TAMBAHKAN BARIS INI DI PALING ATAS

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

function Page() {
  useEffect(() => {
    const tlHero = gsap.timeline({ defaults: { ease: 'power4.out' } });
    
    tlHero.from('.relative', {
      y: 200,
      opacity: 0,
      duration: 1.2,
      delay: 0.5
    });
    
   tlHero.to('.relative', {
      y: 0,
      opacity: 1,
      delay: 0.5
   })
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-gradient-to-l from-emerald-300 to-pink-400 text-slate-800 overflow-x-hidden">
      <Navbar />  
      <main className="flex-grow hero-title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path fill="#bbbedd" fillOpacity="1" d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,128C672,149,768,203,864,202.7C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <Hero />
        <Card />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#dceaf3" fillOpacity="1" d="M0,128L30,160C60,192,120,256,180,234.7C240,213,300,107,360,64C420,21,480,43,540,53.3C600,64,660,64,720,96C780,128,840,192,900,181.3C960,171,1020,85,1080,85.3C1140,85,1200,171,1260,181.3C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </main>
      <Footer />
    </div>
  );
}

export default Page;