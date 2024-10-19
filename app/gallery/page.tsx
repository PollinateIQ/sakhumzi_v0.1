"use client"

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5", alt: "South African dish" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", alt: "Restaurant interior" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", alt: "Traditional meal" },
  { src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf", alt: "Grilled meat" },
  { src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88", alt: "Colorful vegetables" },
  { src: "https://images.unsplash.com/photo-1576867757603-05b134ebc379", alt: "Dessert" },
]

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative min-h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1920&q=80"
          alt="Sakhumzi Restaurant Gallery"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl mb-8 max-w-2xl">A visual journey through our culinary delights and vibrant atmosphere</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}