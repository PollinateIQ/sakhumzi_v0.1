"use client"

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative min-h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1920&q=80"
          alt="Sakhumzi Restaurant Contact"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl mb-8 max-w-2xl">Get in touch with us for reservations, inquiries, or feedback</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-lg" required></textarea>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Vilakazi</h3>
                <p>6980 Vilakazi St, Orlando West, Soweto, 1804</p>
                <p>Phone: (011) 536-1379</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Phefeni</h3>
                <p>1695 Phefeni Street, Orlando West, Soweto, 1804</p>
                <p>Phone: (011) 536-1380</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">ZooLake</h3>
                <p>Prince of Wales Dr, Parkview, Johannesburg, 2193</p>
                <p>Phone: (011) 536-1381</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}