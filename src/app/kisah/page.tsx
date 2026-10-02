'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MagicCard } from '@/components/ui/magic-card'
import Image from 'next/image'
import  Footer from '../components/Footer'

const page = () => {

  const [filterKisah, setFilterKisah] = useState('kisah');

  const kisah = [
    {
      id:1,
      halaman:"story",
      judul:  "— Kisah I ❤️ N",
      cerita: "/stories/1.svg",
      isi:    "thumbnail",
      style:  "p-2 border border-cyan-700 bg-emerald-700 text-lg mt-3  text-white font-bold rounded-xl"
    },
    { id:2,
      halaman:"pembuka",
      judul:  "— Rumah Kecil di Ujung Desa",
      cerita: "/stories/2.svg",
      isi:    "Pembuka",
      style:  "p-2 border border-cyan-700 bg-emerald-500 text-lg mt-3  text-white font-bold rounded-xl"
    },
    {
      id:3,
      halaman:"pengenalan",
      judul:  "— Pengenalan",
      cerita: "/stories/3.svg",
      isi:    "pengenalan",
      style:  "p-2 border border-cyan-700 bg-blue-700 text-lg mt-3  text-white font-bold rounded-xl"
    },
    {
      id:4,
      halaman:"bab_1",
      judul:  "— Pertemuan Yang Sederhana",
      cerita: "/stories/4.svg",
      isi:    "bab 1",
      style:  "p-2 border border-cyan-700 bg-red-600 text-lg mt-3  text-white font-bold rounded-xl"
    },
    {
      id:5,
      halaman:"bab_2.1",
      judul:  "— Gadis dari Desa ",
      cerita: "/stories/5.svg",
      isi:    "bab 2",
      style:  "p-2 border border-cyan-700 bg-emerald-900 text-lg mt-3  text-white font-bold rounded-xl"
    },
    {
      id:6,
      halaman:"bab_2.2",
      judul:  "— Laki-laki Sederhana",
      cerita: "/stories/6.svg",
      isi:    "bab 2",
      style:  "p-2 border border-cyan-700 bg-black text-lg mt-3  text-white font-bold rounded-xl"
    },
    {
      id:7,
      halaman:"bab_3",
      judul:  "— Mimpi yang Mereka Bangun",
      cerita: "/stories/7.svg",
      isi:    "bab 3",
      style:  "p-2 border border-cyan-700 bg-emerald-900 text-lg mt-3  text-white font-bold rounded-xl"
    },
    {
      id:8,
      halaman:"bab_4",
      judul:  "— Rumah Kecil Itu",
      cerita: "/stories/8.svg",
      isi:    "bab 4",
      style:  "p-2 border border-cyan-700 bg-cyan-900 text-lg mt-3  text-white font-bold rounded-xl"
    },
    {
      id:9,
      halaman:"bab_5",
      judul:  "— Hadirnya Seorang Anak",
      cerita: "/stories/9.svg",
      isi:    "bab 5",
      style:  "p-2 border border-cyan-700 bg-pink-700 text-lg mt-3  text-white font-bold rounded-xl"
    },
    {
      id:10,
      halaman:"bab_6",
      judul:  "— Kebahagiaan yang Tidak Mewah",
      cerita: "/stories/10.svg",
      isi:    "bab 6",
      style:  "p-2 border border-cyan-700 bg-blue-500 text-lg mt-3  text-white font-bold rounded-xl"
    },
    {
      id:11,
      halaman:"bab_7",
      judul:  "— Sore di Depan Rumah",
      cerita: "/stories/11.svg",
      isi:    "bab 7",
      style:  "p-2 border border-cyan-700 bg-black text-lg mt-3  text-white font-bold rounded-xl"
    },
    {
      id:12,
      halaman:"penutup",
      judul:  "— Pesan",
      cerita: "/stories/12.svg",
      isi:    "pesan",
      style:  "p-2 border border-cyan-700 bg-pink-400 text-lg mt-3  text-white font-bold rounded-xl"

    }
  ]


  const filter = filterKisah === 'kisah'
  ? kisah.slice(0, 1)
  : kisah.filter(m => m.halaman === filterKisah)

  return ( 
    <div className='flex justify-center items-center bg-pink-500 flex-col'>
      <main className="flex flex-col flex justify-center items-center max-w-full">
      <Navbar />
      <div className='mt-25 p-8 flex flex-col justify-center items-center'>

          <div className="grid grid-cols-1 w-full md:max-w-3xl max-w-7xl justify-center items-center p-4">
            {filter.map((stories) => (
              <div key={stories.id} className="p-2"> 
            <Card className="w-full max-w-2xl border-none p-0 shadow-none cursor-pointer mx-auto">
              <MagicCard className="border-border border-b p-4 [.border-b]:pb-4 flex flex-col gap-5">
                <CardHeader className="mb-3 border border-b border-2 p-2"> 
                  <CardTitle className="font-bold">{stories.judul}</CardTitle>
                </CardHeader>
                <CardContent className="mb-3">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a1a8e6" fillOpacity="1" d="M0,256L0,64L41.1,64L41.1,256L82.3,256L82.3,192L123.4,192L123.4,288L164.6,288L164.6,32L205.7,32L205.7,288L246.9,288L246.9,288L288,288L288,256L329.1,256L329.1,256L370.3,256L370.3,256L411.4,256L411.4,320L452.6,320L452.6,192L493.7,192L493.7,256L534.9,256L534.9,96L576,96L576,32L617.1,32L617.1,224L658.3,224L658.3,192L699.4,192L699.4,320L740.6,320L740.6,32L781.7,32L781.7,96L822.9,96L822.9,224L864,224L864,128L905.1,128L905.1,288L946.3,288L946.3,320L987.4,320L987.4,96L1028.6,96L1028.6,160L1069.7,160L1069.7,160L1110.9,160L1110.9,256L1152,256L1152,320L1193.1,320L1193.1,160L1234.3,160L1234.3,288L1275.4,288L1275.4,320L1316.6,320L1316.6,96L1357.7,96L1357.7,192L1398.9,192L1398.9,256L1440,256L1440,0L1398.9,0L1398.9,0L1357.7,0L1357.7,0L1316.6,0L1316.6,0L1275.4,0L1275.4,0L1234.3,0L1234.3,0L1193.1,0L1193.1,0L1152,0L1152,0L1110.9,0L1110.9,0L1069.7,0L1069.7,0L1028.6,0L1028.6,0L987.4,0L987.4,0L946.3,0L946.3,0L905.1,0L905.1,0L864,0L864,0L822.9,0L822.9,0L781.7,0L781.7,0L740.6,0L740.6,0L699.4,0L699.4,0L658.3,0L658.3,0L617.1,0L617.1,0L576,0L576,0L534.9,0L534.9,0L493.7,0L493.7,0L452.6,0L452.6,0L411.4,0L411.4,0L370.3,0L370.3,0L329.1,0L329.1,0L288,0L288,0L246.9,0L246.9,0L205.7,0L205.7,0L164.6,0L164.6,0L123.4,0L123.4,0L82.3,0L82.3,0L41.1,0L41.1,0L0,0L0,0Z"></path></svg>
                  <Image 
                    src={stories.cerita} 
                    alt={stories.judul} 
                    width={400} 
                    height={300}
                    className="w-full h-auto object-contain rounded-md"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 320"><path fill="#9ca5f5" fillOpacity="1" d="M0,288L0,192L41.1,192L41.1,96L82.3,96L82.3,96L123.4,96L123.4,32L164.6,32L164.6,128L205.7,128L205.7,160L246.9,160L246.9,96L288,96L288,128L329.1,128L329.1,32L370.3,32L370.3,32L411.4,32L411.4,160L452.6,160L452.6,224L493.7,224L493.7,128L534.9,128L534.9,256L576,256L576,160L617.1,160L617.1,32L658.3,32L658.3,256L699.4,256L699.4,160L740.6,160L740.6,224L781.7,224L781.7,0L822.9,0L822.9,224L864,224L864,192L905.1,192L905.1,192L946.3,192L946.3,32L987.4,32L987.4,32L1028.6,32L1028.6,64L1069.7,64L1069.7,32L1110.9,32L1110.9,224L1152,224L1152,160L1193.1,160L1193.1,64L1234.3,64L1234.3,128L1275.4,128L1275.4,160L1316.6,160L1316.6,32L1357.7,32L1357.7,64L1398.9,64L1398.9,192L1440,192L1440,320L1398.9,320L1398.9,320L1357.7,320L1357.7,320L1316.6,320L1316.6,320L1275.4,320L1275.4,320L1234.3,320L1234.3,320L1193.1,320L1193.1,320L1152,320L1152,320L1110.9,320L1110.9,320L1069.7,320L1069.7,320L1028.6,320L1028.6,320L987.4,320L987.4,320L946.3,320L946.3,320L905.1,320L905.1,320L864,320L864,320L822.9,320L822.9,320L781.7,320L781.7,320L740.6,320L740.6,320L699.4,320L699.4,320L658.3,320L658.3,320L617.1,320L617.1,320L576,320L576,320L534.9,320L534.9,320L493.7,320L493.7,320L452.6,320L452.6,320L411.4,320L411.4,320L370.3,320L370.3,320L329.1,320L329.1,320L288,320L288,320L246.9,320L246.9,320L205.7,320L205.7,320L164.6,320L164.6,320L123.4,320L123.4,320L82.3,320L82.3,320L41.1,320L41.1,320L0,320L0,320Z"></path></svg>
                </CardContent>
                <CardFooter className={stories.style}>{stories.halaman}</CardFooter>
              </MagicCard>
            </Card>
              </div>
            ))}
          </div>

        <div className="flex flex-wrap gap-3 w-full max-w-xl text-xs mb-10 bg-black p-4 shadow-md rounded-xl">
          {['kisah', 'pembuka', 'pengenalan', 'bab_1', 'bab_2.1', 'bab_2.2', 'bab_3', 'bab_4', 'bab_5', 'bab_6', 'bab_7', 'penutup' ].map((nad) => (
              <button key={nad} onClick={() => setFilterKisah(nad)} 
              className={`px-3 py-1 rounded-md border capitalize transition-all ${
                filterKisah === nad
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-700' 
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}>
                {nad}
              </button>
          ))}
        </div>

      </div>
      </main>
      <Footer/>
    </div>
  )
}

export default page
