"use client"

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative min-h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Sakhumzi Restaurant Interior"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About Sakhumzi</h1>
          <p className="text-xl mb-8 max-w-2xl">Discover the story behind Soweto's favorite family restaurant</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            Sakhumzi Restaurant is a family-owned establishment that has been serving authentic South African cuisine since 2001. Our journey began on the historic Vilakazi Street in Soweto, and we've since expanded to multiple locations across Johannesburg.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to provide a genuine taste of South African heritage, combining traditional recipes with a modern dining experience. We take pride in sourcing local ingredients and supporting our community while offering a warm, welcoming atmosphere to all our guests.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're a local resident or an international visitor, we invite you to join us for a culinary journey through the flavors of South Africa. Experience the rich culture, history, and hospitality that Sakhumzi has to offer.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}