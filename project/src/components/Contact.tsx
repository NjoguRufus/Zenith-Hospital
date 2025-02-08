import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { MapModal } from './MapModal';

export function Contact() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <div id="contact" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Get in touch with our medical team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-500">Main: +254 722 123 456</p>
                      <p className="text-gray-500">Emergency: +254 733 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-500">info@zenithmedical.co.ke</p>
                      <p className="text-gray-500">support@zenithmedical.co.ke</p>
                    </div>
                  </div>

                  <div 
                    className="flex items-start cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => setIsMapModalOpen(true)}
                  >
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-500">
                        Ngong Road<br />
                        Opposite Prestige Plaza<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-500">Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-500">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-500">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div 
                className="mt-8 bg-white rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300"
                onClick={() => setIsMapModalOpen(true)}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Find Us</h3>
                <div className="relative w-full h-0 pb-[75%] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7970192674975!2d36.80468047496567!3d-1.2964244986912608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10ea41e75c63%3A0x2c08c88e6ee9bffd!2sZenith%20Medical%20Centre!5e0!3m2!1sen!2ske!4v1739028910597!5m2!1sen!2ske"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        required
                        className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center"
                    >
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
      />
    </>
  );
}