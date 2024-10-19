"use client"

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const menuItems = [
  { category: "Starters", items: [
    { name: "Chakalaka", price: "R45", description: "Spicy vegetable relish" },
    { name: "Mogodu", price: "R65", description: "Tripe served with pap" },
  ]},
  { category: "Main Courses", items: [
    { name: "Pap and Chakalaka", price: "R85", description: "Traditional maize porridge with spicy vegetable relish" },
    { name: "Umleqwa", price: "R120", description: "Traditional chicken stew" },
  ]},
  { category: "Desserts", items: [
    { name: "Malva Pudding", price: "R55", description: "Sweet and sticky sponge pudding" },
    { name: "Koeksisters", price: "R40", description: "Syrup-coated doughnut twists" },
  ]},
]

export default function Menu() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative min-h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80"
          alt="South African Cuisine"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl mb-8 max-w-2xl">Explore our selection of authentic South African dishes</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {menuItems.map((category) => (
            <div key={category.category} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{category.category}</h2>
              {category.items.map((item) => (
                <div key={item.name} className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-medium text-gray-900">{item.name}</h3>
                    <span className="text-lg text-gray-600">{item.price}</span>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}