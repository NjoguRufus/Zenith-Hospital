import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-gray-400">
              Providing world-class healthcare with compassion and excellence since 1995.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors hover:underline">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors hover:underline">Our Services</a>
              </li>
              <li>
                <a href="#doctors" className="text-gray-400 hover:text-white transition-colors hover:underline">Our Doctors</a>
              </li>
              <li>
                <a href="#appointments" className="text-gray-400 hover:text-white transition-colors hover:underline">Book Appointment</a>
              </li>
              <li>
                <a href="#emergency" className="text-gray-400 hover:text-white transition-colors hover:underline">Emergency Care</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Emergency: +254 722 123 456</p>
                  <p className="text-gray-400">Reception: +254 733 123 456</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">info@zenithmedical.co.ke</p>
                  <p className="text-gray-400">support@zenithmedical.co.ke</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-400">Ngong Road, Opposite Prestige Plaza<br />Nairobi, Kenya</p>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p className="font-medium text-white">Regular Hours</p>
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="mt-2 font-medium text-white">Emergency Care</p>
                  <p>24/7 Available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Zenith Medical Centre. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white transition-colors hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}