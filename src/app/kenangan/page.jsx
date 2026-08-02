"use client"

import React, { useState } from "react"
import { Heart, Sparkles, Image as ImageIcon } from "lucide-react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pattern from "../components/Pattern"
import './style.css'

function Page() {
  // 1. Gabungkan semua data kenangan ke dalam satu array terpusat
  const semuaKenangan = [
    { id: 1, judul: 'Kenangan 1', foto: '/kenangan/1.svg', style: 'bg-yellow-500' },
    { id: 2, judul: 'Kenangan 2', foto: '/kenangan/2.svg', style: 'bg-blue-500' },
    { id: 3, judul: 'Kenangan 3', foto: '/kenangan/3.svg', style: 'bg-pink-500' },
    { id: 4, judul: 'Kenangan 4', foto: '/kenangan/4.svg', style: 'bg-emerald-500' },
    { id: 5, judul: 'Kenangan 5', foto: '/kenangan/5.svg', style: 'bg-orange-500' },
    { id: 6, judul: 'Kenangan 6', foto: '/kenangan/6.svg', style: 'bg-purple-700' },
    { id: 7, judul: 'Kenangan 7', foto: '/kenangan_2/1.svg', style: 'bg-purple-700' },
    { id: 8, judul: 'Kenangan 8', foto: '/kenangan_2/2.svg', style: 'bg-pink-700' },
    { id: 9, judul: 'Kenangan 9', foto: '/kenangan_2/3.svg', style: 'bg-red-700' },
    { id: 10, judul: 'Kenangan 10', foto: '/kenangan_2/4.svg', style: 'bg-emerald-700' },
    { id: 11, judul: 'Kenangan 11', foto: '/kenangan_2/5.svg', style: 'bg-blue-700' },
    { id: 12, judul: 'Kenangan 12', foto: '/kenangan_2/6.svg', style: 'bg-pink-700' },
    { id: 13, judul: 'Kenangan 13', foto: '/kenangan_2/7.svg', style: 'bg-purple-700' },
    { id: 14, judul: 'Kenangan 14', foto: '/kenangan_2/8.svg', style: 'bg-orange-600' },
    { id: 15, judul: 'Kenangan 15', foto: '/kenangan_2/9.svg', style: 'bg-yellow-400' },
    { id: 16, judul: 'Kenangan 16', foto: '/kenangan_2/10.svg', style: 'bg-green-700' },
    { id: 17, judul: 'Agustus Pertama', foto: '/i&n17.svg', style: 'bg-emerald-700' },

  ]

  // 2. State & Logika Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6 // Kamu bisa ganti angka ini sesuka hati (misal tiap halaman mau tampil 3, 6, atau 9 data)

  // Hitung total halaman
  const totalPages = Math.ceil(semuaKenangan.length / itemsPerPage)

  // Potong data sesuai dengan halaman aktif saat ini
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = semuaKenangan.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <div className="main flex flex-col justify-center items-center bg-yellow-500 ">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative mt-10 min-h-[80vh] w-full bg-[#4D96FF] flex flex-col items-center justify-center px-4 py-16 overflow-hidden border-b-4 border-black">
        <div className="absolute mt-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] left-7 w-20 h-20 flex justify-center items-center top-10 border-4 bg-gradient-to-l from-yellow-400 to-orange-200 bg-red-400 transform -rotate-15">
          <Sparkles width={80} height={80} className="transform bg-pink-500 text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-20 border-4 p-3"/>
        </div>
        <div className="max-w-6xl p-8 leading-none">
          <div className="hero-text flex flex-col justify-center gap-5 mt-10 max-w-auto p-10 tracking-tight">
            <div className="p-3 font-bold flex justify-center text-white bg-yellow-400 transform rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl md:text-5xl bg-pink-500 border-4 border-black p-4 transform -rotate-7 flex gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Kenangan manis dan indah saat bersamamu
                <Heart width={80} height={80}/>
              </h2> 
            </div>  
            <p className="font-bold border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white flex gap-2 text-xl md:text-4xl transform -rotate-3 border-4 p-2 bg-emerald-800 mt-4">
               Disini tersimpan semua kenangan dan momen saat kita bersama <ImageIcon width={80} height={80} className="text-white"/>
            </p>  
          </div>
        </div>
        <div className="absolute shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] right-7 w-20 h-20 flex justify-center items-center bottom-5 border-4 bg-gradient-to-l from-yellow-400 to-orange-200 bg-red-400 transform -rotate-15">
          <Heart width={80} height={80} className="transform bg-pink-500 text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-20 border-4 p-3"/>
        </div>
      </section>
      {/* Grid Card Kenangan (Hanya merender data halaman aktif) */}
      <div className="max-w-7xl z-10 mx-auto mt-3 py-16 px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {currentItems.map((isi) => (
          <div 
            key={isi.id} 
            className={`border-4 border-black p-5 w-full max-w-sm min-h-[420px] flex flex-col justify-between ${isi.style} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] duration-200`}
          >
            <div className="space-y-4 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-black text-center tracking-wide uppercase line-clamp-2">
                {isi.judul}
              </h3>
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-sm aspect-video">
                <img 
                  src={isi.foto} 
                  alt={isi.judul} 
                  className="w-full h-full object-cover target-image"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Karena video ditaruh manual di ujung, kita kondisikan agar video ini HANYA muncul di halaman terakhir */}
        {currentPage === totalPages && (
          <div className="border-4 border-black p-5 w-full max-w-sm min-h-[420px] flex flex-col justify-between bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] duration-200">
            <h3 className="text-xl md:text-2xl font-black text-center tracking-wide uppercase mb-4">Video Momen</h3>
            <div className="flex-1 flex items-center justify-center overflow-hidden rounded-sm aspect-video">
              <video className="w-full h-full object-cover target-image" src="/video/1.mp4" controls={true}></video>
            </div>
          </div>
        )}
      </div>

      {/* 3. Komponen Tombol Pagination Bergaya Neo-brutalist */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 my-10 z-50">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-6 py-3 font-black text-lg bg-pink-500 text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer disabled:cursor-not-allowed"
          >
            PREV
          </button>
          
          <div className="px-5 py-3 font-black text-lg bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
            PAGE {currentPage} / {totalPages}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-6 py-3 font-black text-lg bg-emerald-500 text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer disabled:cursor-not-allowed"
          >
            NEXT
          </button>
        </div>
      )}

      <Pattern />
       <svg className="z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e5ff00" fillOpacity="1" d="M0,288L0,224L68.6,224L68.6,192L137.1,192L137.1,224L205.7,224L205.7,224L274.3,224L274.3,192L342.9,192L342.9,224L411.4,224L411.4,64L480,64L480,160L548.6,160L548.6,288L617.1,288L617.1,64L685.7,64L685.7,192L754.3,192L754.3,160L822.9,160L822.9,192L891.4,192L891.4,288L960,288L960,160L1028.6,160L1028.6,224L1097.1,224L1097.1,96L1165.7,96L1165.7,288L1234.3,288L1234.3,96L1302.9,96L1302.9,128L1371.4,128L1371.4,0L1440,0L1440,320L1371.4,320L1371.4,320L1302.9,320L1302.9,320L1234.3,320L1234.3,320L1165.7,320L1165.7,320L1097.1,320L1097.1,320L1028.6,320L1028.6,320L960,320L960,320L891.4,320L891.4,320L822.9,320L822.9,320L754.3,320L754.3,320L685.7,320L685.7,320L617.1,320L617.1,320L548.6,320L548.6,320L480,320L480,320L411.4,320L411.4,320L342.9,320L342.9,320L274.3,320L274.3,320L205.7,320L205.7,320L137.1,320L137.1,320L68.6,320L68.6,320L0,320L0,320Z"></path></svg>
      <Footer />
    </div>
  )
}

export default Page