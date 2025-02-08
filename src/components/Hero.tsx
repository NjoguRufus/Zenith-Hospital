import React, { useState } from 'react';
import { Clock, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppointmentModal } from './AppointmentModal';
import { MapModal } from './MapModal';

export function Hero() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const handleEmergency = () => {
    const element = document.getElementById('emergency');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAppointmentSubmit = (formData: any) => {
    console.log('Appointment data:', formData);
    setIsModalOpen(false);
    navigate('/appointment-confirmation');
  };

  return (
    <>
      <div id="home" className="relative bg-white pt-16">
        <div className="absolute inset-0 h-[600px]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920"
            alt="Modern hospital building"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/75" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">World-Class Healthcare</span>
              <span className="block text-blue-200">For Your Family</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-blue-100 sm:max-w-3xl">
              Providing compassionate care with cutting-edge technology and experienced healthcare professionals.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group w-full sm:w-auto flex-none bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-all duration-200 inline-flex items-center justify-center"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleEmergency}
                  className="w-full sm:w-auto flex-none bg-white text-blue-900 text-lg font-semibold py-3 px-8 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Emergency Care
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
                  <p className="text-gray-600">24/7 Emergency Care</p>
                  <p className="text-gray-600">Mon-Fri: 8:00 - 20:00</p>
                </div>
              </div>
            </div>
            <div className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Emergency Line</h3>
                  <p className="text-gray-600">+254 722 123 456</p>
                  <p className="text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>
            <div 
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setIsMapModalOpen(true)}
            >
              <div className="flex items-center">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Ngong Road</p>
                  <p className="text-gray-600">Opposite Prestige Plaza</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAppointmentSubmit}
      />

      <MapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
      />
    </>
  );
}