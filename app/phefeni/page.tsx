"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Phefeni() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative min-h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
          alt="Phefeni Restaurant"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Sakhumzi Phefeni</h1>
          <p className="text-xl mb-8 max-w-2xl">Discover the flavors of South Africa in the heart of Soweto</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Phefeni Location</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our Phefeni location brings the authentic taste of Sakhumzi to another vibrant part of Soweto. This restaurant continues our tradition of serving delicious South African cuisine in a warm and welcoming atmosphere.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Located in the bustling heart of Soweto, our Phefeni restaurant offers a perfect blend of traditional flavors and modern dining experience. It's an ideal spot for both locals and visitors to immerse themselves in the rich culinary culture of South Africa.
          </p>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Location Details</h3>
            <p className="text-lg text-gray-700">Address: 1695 Phefeni Street, Orlando West, Soweto, 1804</p>
            <p className="text-lg text-gray-700">Phone: (011) 536-1380</p>
            <p className="text-lg text-gray-700">Hours: Monday - Sunday, 11:00 AM - 10:00 PM</p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="/" passHref>
              <Button variant="outline">Back to Home</Button>
            </Link>
            <Link href="/vilakazi" passHref>
              <Button variant="outline">Visit Vilakazi</Button>
            </Link>
            <Link href="/zoolake" passHref>
              <Button variant="outline">Visit ZooLake</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}