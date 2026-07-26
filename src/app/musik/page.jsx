'use client'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { Heart } from "lucide-react"
import Navbar from '../components/Navbar'
import  Footer  from '../components/Footer'
import './style.css'

function page() {
  return (
    <div>
      <Navbar />
      <main className='mt-40'>

     <div className="max-w-6xl mx-auto my-10 px-4 z-10 w-full">
  <div className="musik bg-purple-300 border-4 border-black p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative transform -rotate-1">
    
    {/* Aksen Label Tape ala Neo-Brutalist */}
    <div className="absolute -top-5 left-8 bg-yellow-400 border-4 border-black px-4 py-1 text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-3">
      🎤 by: I & N
    </div>

    {/* Kontainer Utama Animasi Ketik */}
    <div className="font-extrabold font-fredoka text-black text-white text-sm md:text-xl text-center leading-relaxed tracking-wide min-h-[150px] flex items-center justify-center">
      <Typewriter
        options={{
          strings: [
            "Kecup dulu sayang, Jangan malu-malu, <br/> Kalau cinta aku, Mana bukti kamu<br/>Peluk aku erat, Jangan cuma lihat<br/>Kalau cuma dadah, Aku bisa marah. <br/> <br/> Jangan marah-marah, Nanti cepat tua<br/>Senyummu yang indah, Punya aku semua <br/> Sini aku peluk, Sampai kamu ngantuk<br/>Gak bakal lepas, sampai rindu mu tuntas. <br/> <br/> Ini kisah kita, kisah cinta muda. Seluas benua sedalam samudra <br/> Janji-janji kita akan tetap ada sampe saatnya tiba. ❤️",
          ],
          autoStart: true,
          loop: true,
          delay: 100,       // Kecepatan ngetik per karakter (milidetik)
          deleteSpeed: 60, // Kecepatan menghapus teks sebelum ganti bait selanjutnya
          pauseFor: 5000,  // Berapa lama teks diam setelah selesai diketik (5 detik)
        }}
      />
    </div>

    {/* Hiasan Jantung Berdegup di Pojok Kanan Bawah */}
    <div className="absolute -bottom-6 right-8 text-pink-500 bg-white border-4 border-black p-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce">
      <Heart width={30} height={30} fill="currentColor" />
    </div>
  </div>
</div>  
 {/* PERBAIKAN: Mengganti max-w3xl (typo) ke max-w-6xl agar konsisten dengan box atas */}
<div className="max-w-6xl mx-auto my-16 px-4">
  
  {/* CONTAINER UTAMA (Background Hitam) */}
  <div className="bg-black/90 border-3 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-16">
    
    {/* BARIS 1: TEKS KIRI, VIDEO KANAN */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Teks Kiri */}
      <div className="w-full md:w-1/2 space-y-4 text-white text-sm md:text-base">
        <p className='p-2'>
         Lagu adalah serangkaian kata yang berirama, yang mampu menciptakan rasa: senang, sedih, bahagia, dan berbagai perasaan lainnya.
         Namun lagu pada dasarnya tidak tercipta begitu saja ada banyak faktor yang bisa membuat sebuah lagu bisa tercipta.
         Faktor paling seringnya adalah dikarenakan ada moment emosional sang penyanyi yang dikreasikan dan di bentuk sedemikian rupa supaya bisa di rasakan dan dipahami oleh pendengarnya.
        </p>
        <i className='p-2'>
         "A song is a series of rhythmic words capable of evoking feelings of joy, sadness, happiness, and various other emotions.
         However, songs don't just appear out of nowhere; many factors contribute to their creation. 
         The most common factor is an emotional moment experienced by the singer, which is crafted and shaped in such a way that the listeners can feel and understand it."
        </i>
        {/* Kalau mau nambah teks di baris pertama, taruh di bawah sini */}
      </div>

      {/* Video Kanan */}
      <div className="w-full md:w-1/2 max-w-sm h-[530px] border-4 border-black p-2 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] duration-200">
        <h3 className="text-xl font-fredoka md:text-2xl font-black text-center tracking-wide uppercase mb-4 text-black">Musik Create By: I & N</h3>
        <div className="overflow-hidden md:h-[420px] h-[400] w-[280] md:w-[350px] p-2 rounded-sm aspect-video border-2 border-black bg-gray-100 flex items-center justify-center">
          <video className="max-h-full min-w-full object-cover" src="/video/musik.mp4" controls={true}></video>
        </div>
      </div>
    </div>


    {/* BARIS 2: LIRIK KIRI, TEKS KANAN */}
    {/* md:flex-row-reverse berguna agar di HP/layar kecil, gambar lirik tetap muncul di atas teks */}
    <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-8">
      {/* Teks Kanan */}
      <div className="w-full md:w-1/2 space-y-4 text-white text-sm md:text-base">
        <p className='p-2'>
         Persamaan antara cinta dan lagu adalah keduannya ada karena sebuah perasaan, cinta ada karena perasaan sayang, saling melindungi, menghargai, dan ketulusan.
         Lagu ada karena sebuah perasaan emosional dari sang musisi.
        </p>
        <i>
          "The similarity between love and a song is that both exist because of feelings. 
          Love exists due to feelings of affection, mutual protection, respect, and sincerity. 
          Meanwhile, a song exists because of the emotional feelings of the musician."
        </i>
      </div>

      {/* Lirik Kiri */}
      <div className="w-full md:w-1/2 max-w-sm h-[530px] border-4 border-black p-2 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] duration-200">
        <h3 className="text-xl md:text-2xl font-black text-center tracking-wide uppercase mb-4 text-black">Lirik Lagu</h3>
        <div className="overflow-hidden md:h-[420px] h-[400] w-[280] md:w-[350px] rounded-sm aspect-video border-2 border-black bg-gray-100 flex items-center justify-center">
          <img src="/aset/7.svg" alt="lirik" className="max-h-full min-w-full object-cover" />
        </div>
      </div>
    </div>

  </div>
</div>
      </main>
      <Footer/>
    </div>
  )
}

export default page
