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
      isi:    "thumbnail"
    },
    { id:2,
      halaman:"pembuka",
      judul:  "— Rumah Kecil di Ujung Desa",
      cerita: "/stories/2.svg",
      isi:    "Pembuka"
    },
    {
      id:3,
      halaman:"pengenalan",
      judul:  "— Pengenalan",
      cerita: "/stories/3.svg",
      isi:    "pengenalan"
    },
    {
      id:4,
      halaman:"bab_1",
      judul:  "— Pertemuan Yang Sederhana",
      cerita: "/stories/4.svg",
      isi:    "bab 1"
    },
    {
      id:5,
      halaman:"bab_2.1",
      judul:  "— Gadis dari Desa ",
      cerita: "/stories/5.svg",
      isi:    "bab 2"
    },
    {
      id:6,
      halaman:"bab_2.2",
      judul:  "— Laki-laki Sederhana",
      cerita: "/stories/6.svg",
      isi:    "bab 2"
    },
    {
      id:7,
      halaman:"bab_3",
      judul:  "— Mimpi yang Mereka Bangun",
      cerita: "/stories/7.svg",
      isi:    "bab 3"
    },
    {
      id:8,
      halaman:"bab_4",
      judul:  "— Rumah Kecil Itu",
      cerita: "/stories/8.svg",
      isi:    "bab 4"
    },
    {
      id:9,
      halaman:"bab_5",
      judul:  "— Hadirnya Seorang Anak",
      cerita: "/stories/9.svg",
      isi:    "bab 5"
    },
    {
      id:10,
      halaman:"bab_6",
      judul:  "— Kebahagiaan yang Tidak Mewah",
      cerita: "/stories/10.svg",
      isi:    "bab 6"
    },
    {
      id:11,
      halaman:"bab_7",
      judul:  "— Sore di Depan Rumah",
      cerita: "/stories/11.svg",
      isi:    "bab 7"
    },
    {
      id:12,
      halaman:"penutup",
      judul:  "— Pesan",
      cerita: "/stories/12.svg",
      isi:    "pesan"
    }
  ]


  const filter = filterKisah === 'kisah'
  ? kisah.slice(0, 1)
  : kisah.filter(m => m.halaman === filterKisah)

  return ( 
    <div className='flex justify-center items-center bg-pink-500 flex-col'>
      <main className="flex flex-col flex justify-center items-center max-w-full">
      <Navbar />
      <div className='mt-30 p-8 flex flex-col justify-center items-center'>
        <div className="flex flex-wrap gap-2 text-xs mb-10 bg-black p-6 shadow-md rounded-xl">
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

          <div className="grid grid-cols-1 w-full max-w-4xl justify-center items-center">
            {filter.map((stories) => (
              <div key={stories.id}>  
            <Card className="w-full max-w-2xl border-none p-0 shadow-none cursor-pointer mx-auto">
              <MagicCard className="border-border border-b p-4 [.border-b]:pb-4">
                <CardHeader>
                
                  <CardTitle>{stories.judul}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image 
                    src={stories.cerita} 
                    alt={stories.judul} 
                    width={400} 
                    height={300}
                    className="w-full h-auto object-contain rounded-md"
                  />
                </CardContent>
                <CardFooter>{stories.halaman}</CardFooter>
              </MagicCard>
            </Card>
              </div>
            ))}
          </div>
      </div>
      </main>
      <Footer/>
    </div>
  )
}

export default page
