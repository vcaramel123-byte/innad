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
<div className="card z-900">
  <div className="wrap">
    <div className="terminal">
      <hgroup className="head">
        <p className="title">
          <svg
            width="16px"
            height="16px"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
          >
            <path
              d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
            ></path>
          </svg>
          indra❤️nadia (17/8/20026)
        </p>
        <button className="copy_toggle" tablndex="-1" type="button">
          <svg
            width="16px"
            height="16px"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
          >
            <path
              d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
            ></path>
            <path
              d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
            ></path>
          </svg>
        </button>
      </hgroup>

      <div className="body">
        <pre className="pre"> <code>-&nbsp;</code>
          <code className="flex flex-col md:flex-row"> <span>Tanggal</span> <span>&</span> <span>Bulan</span> <span>Jadian</span>  <span></span> &nbsp;</code>
          <code className="cmd" data-cmd="17.08.2026"></code>
        </pre>
      </div>
    </div>
  </div>
</div>

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