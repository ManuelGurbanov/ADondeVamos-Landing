import React from "react"


export default function Banner2() {
  return (
    <>
      <section className="relative flex-row items-center justify-center px-8 mx-auto mt-5 text-left max-w-7xl lg:px-8" >
        <h1 className="ml-6 text-3xl font-bold tracking-tight text-white mt-7 ">¿Querés añadir tu local?</h1>
        <p className="m-6 text-lg leading-8 text-gray-300">Contactanos a través de nuestras redes sociales con toda la Información</p>

        <div className="flex-row items-start justify-start mt-7 mb-7">
          <button className="p-2 m-5 bg-instagram-gradient rounded-2xl">
            <a href="https://www.instagram.com/adondevamos.cafe/" className="m-6 text-sm font-semibold leading-6 text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">Instagram</a>
          </button>

          <button className="p-2 m-5 ring-1 ring-inset ring-blue-300 bg-zinc-900 rounded-2xl">
            <a href="https://www.tiktok.com/@a_donde_vamos_hoy" className="m-6 text-sm font-semibold leading-6 text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">Tik Tok</a>
          </button>
        </div>
      </section>
    </>
  )
}
