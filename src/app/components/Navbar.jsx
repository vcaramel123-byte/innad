'use client'

import React, { useState } from 'react'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (

    <div className="w-full bg-gradient-to-l from-white/80 to-purple-500 backdrop-blur-md p-4 fixed top-0 left-0 z-999 flex flex-col items-center">
      
      {/* Desktop & Main Navbar Wrapper */}
      <div className="w-full max-w-6xl bg-white/30 backdrop-blur border border-white/20 flex justify-between items-center py-4 px-6 rounded-3xl shadow-lg">
        
        {/* Logo */}
        <div className="logo flex items-center">
          <img src="/i&n.png" alt="logo" className="w-10 h-10 rounded-full object-cover" />
        </div>

        {/* Menu Desktop: Ditambahkan hidden md:flex agar sembunyi di mobile */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-slate-700">
          <li><a href="/beranda" className="hover:text-blue-500 transition-colors">Beranda</a></li>
          <li><a href="/kenangan" className="hover:text-blue-500 transition-colors">Kenangan</a></li>
          <li><a href="/cerita" className="hover:text-blue-500 transition-colors">Cerita</a></li>
          <li><a href="/musik" className="hover:text-blue-500 transition-colors">Musik</a></li>
          <li><a href="/tanggal" className="hover:text-blue-500 transition-colors">Tanggal Penting</a></li>
        </ul>

        {/* Tombol Hamburger: Hanya muncul di mobile (md:hidden) */}
        <div className="flex md:hidden">
          <button 
            onClick={() => setOpen(!open)}
            className="text-slate-700 hover:text-blue-500 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8 cursor-pointer"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12" // Icon X
                    : "M4 6h16M4 12h16M4 18h16" // Icon Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Menggunakan animasi transisi sederhana mumpung berbasis conditional class */}
      <div className={`${open ? "max-h-70 bg-gradient-to-r from-white/80 to-purple-200 opacity-100 mt-3" : "max-h-0 opacity-0 pointer-events-none"} md:hidden w-full max-w-6xl bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-md transition-all duration-300 ease-in-out`}>
        <div className="px-4 py-4 shadow-inner">
          <ul className="flex flex-col gap-4 font-medium text-slate-700">
            <li><a href="/beranda" className="block py-1 hover:text-blue-500" onClick={() => setOpen(false)}>Beranda</a></li>
            <li><a href="/kenangan" className="block py-1 hover:text-blue-500" onClick={() => setOpen(false)}>Kenangan</a></li>
            <li><a href="/cerita" className="block py-1 hover:text-blue-500" onClick={() => setOpen(false)}>Cerita</a></li>
            <li><a href="/musik" className="block py-1 hover:text-blue-500" onClick={() => setOpen(false)}>Musik</a></li>
            <li><a href="/tanggal" className="block py-1 hover:text-blue-500" onClick={() => setOpen(false)}>Tanggal Penting</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar