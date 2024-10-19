"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ZooLake() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative min-h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80"
          alt="ZooLake Restaurant"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Sakhumzi ZooLake</h1>
          <p className="text-xl mb-8 max-w-2xl">Enjoy South African cuisine in the serene setting of Johannesburg's ZooLake</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our ZooLake Location</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our ZooLake location brings the flavors of Soweto to the heart of Johannesburg. Situated near the picturesque Johannesburg Zoo and Zoo Lake, this restaurant offers a unique dining experience that combines our authentic South African cuisine with a tranquil park-side setting.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The ZooLake branch is perfect for those looking to escape the city bustle while enjoying the best of South African gastronomy. Whether you're visiting after a day at the zoo or looking for a peaceful dinner spot, Sakhumzi ZooLake welcomes you with open arms and delicious food.
          </p>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Location Details</h3>
            <p className="text-lg text-gray-700">Address: Prince of Wales Dr, Parkview, Johannesburg, 2193</p>
            <p className="text-lg text-gray-700">Phone: (011) 536-1381</p>
            <p className="text-lg text-gray-700">Hours: Monday - Sunday, 11:00 AM - 10:00 PM</p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="/" passHref>
              <Button variant="outline">Back to Home</Button>
            </Link>
            <Link href="/vilakazi" passHref>
              <Button variant="outline">Visit Vilakazi</Button>
            </Link>
            <Link href="/phefeni" passHref>
              <Button variant="outline">Visit Phefeni</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}