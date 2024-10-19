"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Vilakazi() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative min-h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Vilakazi Street"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Sakhumzi Vilakazi</h1>
          <p className="text-xl mb-8 max-w-2xl">Experience the heart of Soweto at our Vilakazi Street location</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Vilakazi Location</h2>
          <p className="text-lg text-gray-700 mb-6">
            Situated on the historic Vilakazi Street in Soweto, our flagship restaurant offers an authentic taste of South African cuisine in a vibrant setting. This location holds special significance as it's where our journey began in 2001.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Vilakazi Street is famous for being the only street in the world to have housed two Nobel Peace Prize winners - Nelson Mandela and Archbishop Desmond Tutu. Our restaurant adds to this rich cultural heritage by offering a unique dining experience that celebrates South African flavors and hospitality.
          </p>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Location Details</h3>
            <p className="text-lg text-gray-700">Address: 6980 Vilakazi St, Orlando West, Soweto, 1804</p>
            <p className="text-lg text-gray-700">Phone: (011) 536-1379</p>
            <p className="text-lg text-gray-700">Hours: Monday - Sunday, 11:00 AM - 10:00 PM</p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="/" passHref>
              <Button variant="outline">Back to Home</Button>
            </Link>
            <Link href="/phefeni" passHref>
              <Button variant="outline">Visit Phefeni</Button>
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