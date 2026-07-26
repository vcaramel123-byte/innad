import React from 'react'

const Card = () => {
    const cardWeb = [
    {id:1, 
        judul:'Di saat aKu jatuh cinta', 
        keterangan: 'Cinta pertama dan terakhir, perasaan yang mengalir, pandangan dan tatapan pertama, di saat itu aku sadar bahwa aku sedang jatuh cinta.',
        layOut:'bg-gradient-to-r from-emerald-400 to-purple-300 card w-95 h-72 p-5 text-white rounded-lg shadow-lg ',
        icon:'/aset/heart.gif'
    },
    {id:2, 
        judul:'Memory bersamanya', 
        keterangan:'Banyak kenangan indah yang kita lalui bersama suka maupun duka, senang dan sedih galau dan ceria, semuanya kita lalui bersama dengan canda dan tawa.',
        layOut:'bg-gradient-to-r from-green-400 to-orange-300 card w-95 h-72 p-5 text-white rounded-lg shadow-lg ',
        icon:'/aset/camera.gif'
    },
    {id:3, 
        judul:'Pesan dan kesan pertama', 
        keterangan:'Pertemuan pertama kita adalah takdir terindah. Satu senyumanmu di hari itu sudah cukup untuk membuatku yakin bahwa kamulah orangnya.',
        layOut:'bg-gradient-to-r from-yellow-600 to-blue-300 card w-95 h-72 p-5 text-white rounded-lg shadow-lg ',
        icon:'/aset/picture.gif'
    },
    {id:4, 
        judul:'Mekar dalam kenangan, abadi dalam hati', 
        keterangan:'Karena bersamamu, hal-hal sederhana berubah menjadi kenangan yang luar biasa. Kamu adalah keindahan yang mekar di hidupku dan keahagiaan yang abadi di hatiku.',
        layOut:'bg-gradient-to-r from-emerald-800 to-purple-600 card w-95 h-72 p-5 text-white rounded-lg shadow-lg',
        icon:'/aset/flower.gif'
    }
    ]
  return (
    <div className="max-w-full p-6 p-10">
      <div className="parent w-full grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center justify-items-center items-center">
        {cardWeb.map((isi) => (
        <div key={isi.id} className={isi.layOut}>
          <h3 className="font-bold text-xl mb-2">{isi.judul}</h3>
          <p className="text-sm opacity-90 line-clamp-6">{isi.keterangan}</p>
          <img src={isi.icon} alt="icon" width={100} height={100}/>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Card
