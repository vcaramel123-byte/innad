"use client" 

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './style.css'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-image-container", {
      scrollTrigger: {
        trigger: ".hero-image-container", 
        start: "top 85%",               
        end: "top 50%",                  
        scrub: 1,                         
      },
      scale: 0.9,                        
      y: 50,
      opacity: 0,
      ease: "power2.out"
    });

    gsap.from(".parent", {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.from(".animate-title", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(".animate-subtitle", {
      y: 20,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out"
    });

    gsap.from(".card", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <main className='hero-image-container p-6 md:p-12 max-w-7xl mx-auto w-full flex flex-col justify-center items-center gap-12 md:mt-0 mt-10' ref={container}>
      <div className="parent-hero w-full h-85 flex flex-col justify-center items-center bg-emerald-700 shadow-md rounded-lg">
    <div className="max-w-7xl flex absolute left-3 md:top-40 top-40 sm:top-2">
    </div>


        <div className="text flex flex-col gap-2 p-2">
          <h1 className="animate-title font-cinzel text-4xl text-center text-emerald-600">
            Welcome To Website in'nad
          </h1>
          <span className="animate-subtitle font-fredoka text-lg text-center block text-white">
            Selalu ada cerita di balik sebuah kenangan!
          </span>
        </div>
        <div className="button mt-5 flex flex-col sm:flex-col md:flex-row gap-5">
          <button className='px-3 py-2 w-50 text-center text-white bg-transparent border border-1 rounded-lg hover:bg-emerald-300 cursor-pointer'>Get Start</button>
          <button className='px-3 py-2 w-50 text-center text-white bg-blue-700 hover:bg-blue-500 rounded-lg cursor-pointer'>View</button>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="hero-image-container w-full max-w-2xl">
          <div className="glass-panel">
            <div className="panel-header">
              <div className="dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
            </div>
            <div className="cover">
              <img src="/aset/download.jpg" alt="ilustrasi" className='w-full h-70 object-cover position-center'/>
            </div>
            <div className="p-4 flex flex-col ">
              <h2 className='text-2xl font-fredoka'>Banyak Kenangan Indah</h2>
              <p className='p-2'>
                Dari setiap tempat yang pernah kita singgahi,
                selalu ada tawa yang tertinggal dan cerita yang tidak pernah habis untuk diceritakan kembali. 
                Waktu mungkin terus berjalan dan hari-hari berganti, 
                tetapi semua momen sederhana bersamamu selalu tersimpan rapi sebagai bagian terbaik dalam hidupku. 
                Kita tidak hanya berbagi hari, tetapi juga merajut mimpi-mimpi kecil yang perlahan-lahan menjadi nyata.
              </p>
            </div>
            <div className="panel-body">
              <div className="code-line w-3/4"></div>
              <div className="code-line w-1/2"></div>
              <div className="code-line w-5/6"></div>
              <div className="code-line w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero