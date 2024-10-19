import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-sakhumzi-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-2">Sakhumzi Restaurant</h3>
          <p className="mb-4">Authentic South African Cuisine</p>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sakhumzi-gold transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-sakhumzi-gold transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sakhumzi-gold transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>Follow our official social media accounts on Facebook, Instagram, Twitter and TikTok for event updates, lunch voucher competitions, booking information and specials.</p>
          <p className="mt-4">&copy; 2024 | Sakhumzi Restaurant</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}