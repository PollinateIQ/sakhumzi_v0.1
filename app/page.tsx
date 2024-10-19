"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ReservationForm from '@/components/ReservationForm'

const slides = [
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80",
    title: "Experience Authentic South African Cuisine",
    description: "Indulge in the flavors of Soweto at Sakhumzi Restaurant"
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
    title: "A Taste of Soweto's Heritage",
    description: "Join us for a culinary journey through South African traditions"
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80",
    title: "Discover Our Legendary Buffet",
    description: "Savor a wide variety of local dishes in our famous buffet spread"
  }
]

const features = [
  {
    number: "01",
    title: "Family Restaurant",
    description: "Our African restaurant is a culinary destination for adults and kids of all ages who want to enjoy an authentic African cuisine while enjoying the scenery on all our family-friendly restaurants."
  },
  {
    number: "02",
    title: "Experienced Team",
    description: "Our team members are well-trained and knowledgeable with regards to a variety of food and beverages. All our departments collectively work as one to deliver a quality brand experience for you and your family."
  },
  {
    number: "03",
    title: "Filming & Events",
    description: "We cater for birthday celebrations, bridal showers, baby showers, farewells and corporate events. Our venue is also ideal for radio, filming and television broadcasting for media as well as production houses."
  }
]

const locations = [
  {
    title: "Vilakazi",
    description: "Our flagship restaurant on the historic Vilakazi Street",
    address: "6980 Vilakazi St, Orlando West, Soweto, 1804",
    phone: "(011) 536-1379",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Phefeni",
    description: "Experience Sakhumzi in the heart of Soweto",
    address: "1695 Phefeni Street, Orlando West, Soweto, 1804",
    phone: "(011) 536-1380",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "ZooLake",
    description: "Enjoy our cuisine near Johannesburg's Zoo and Zoo Lake",
    address: "Prince of Wales Dr, Parkview, Johannesburg, 2193",
    phone: "(011) 536-1381",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60"
  }
]

const testimonials = [
  {
    text: "The food at Sakhumzi is absolutely delicious! It's like taking a culinary tour through South Africa.",
    name: "Sarah M."
  },
  {
    text: "I love the atmosphere at the Vilakazi Street location. It's a perfect blend of history and great food.",
    name: "John D."
  },
  {
    text: "The buffet at Sakhumzi is unbeatable. So many options, all authentically prepared!",
    name: "Lisa T."
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-100">
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src={slides[currentSlide].image}
          alt="African cuisine"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">{slides[currentSlide].title}</h1>
          <p className="text-xl mb-8 max-w-2xl">{slides[currentSlide].description}</p>
          <Link href="/menu" passHref>
            <Button size="lg" className="bg-sakhumzi-gold hover:bg-yellow-600 text-white hover-lift">View Our Menu</Button>
          </Link>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-20">
          <Button variant="outline" size="icon" onClick={prevSlide} className="bg-sakhumzi-black text-white hover:bg-sakhumzi-gold transition-colors duration-300">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="bg-sakhumzi-black text-white hover:bg-sakhumzi-gold transition-colors duration-300">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-sakhumzi-black animate-slideIn">Why Choose Sakhumzi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover-lift animate-scaleIn">
                <div className="text-4xl font-bold text-sakhumzi-gold mb-4">{feature.number}</div>
                <h3 className="text-xl font-semibold mb-2 text-sakhumzi-black">{feature.title}</h3>
                <p className="text-sakhumzi-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legendary Buffet Section */}
      <section className="py-16 bg-sakhumzi-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 animate-slideIn">Our Legendary Buffet</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-scaleIn">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60"
                alt="Buffet Plate"
                width={600}
                height={400}
                className="rounded-lg hover-lift"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 animate-slideIn">
              <h3 className="text-2xl font-semibold mb-4 text-sakhumzi-gold">Fulfill your culinary craving</h3>
              <p className="mb-4">Our buffet is served daily from 11h00 till late. Eat as much as you like for R270 per person (excluding drinks) for 2 hours.</p>
              <p className="mb-4">Our buffet consists of the following: Lamb Stew, Roasted Chicken Pieces, Boerewors, Tripe (Mogodu), Seasonal Vegetable selection, Rice, Pap, Samp and Beans, Tomato Gravy, Steamed Bread (Dombolo), Umqa, Ting, Soup of the Day, selection of salads & assortment of desserts & ice cream.</p>
              <p>Booking is mandatory for a group of 5 persons or more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-sakhumzi-black animate-slideIn">Make a Reservation</h2>
          <ReservationForm />
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-sakhumzi-black animate-slideIn">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover-lift animate-scaleIn">
                <Image
                  src={location.image}
                  alt={location.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-sakhumzi-black">{location.title}</h3>
                  <p className="text-sakhumzi-gray mb-4">{location.description}</p>
                  <p className="text-sakhumzi-gray mb-2">{location.address}</p>
                  <p className="text-sakhumzi-gray mb-4">{location.phone}</p>
                  <Link href={`/${location.title.toLowerCase()}`} passHref>
                    <Button className="w-full bg-sakhumzi-gold text-white hover:bg-yellow-600 transition-colors duration-300">Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-sakhumzi-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 animate-slideIn">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-sakhumzi-dark p-6 rounded-lg hover-lift animate-scaleIn">
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-sakhumzi-gold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}