import React, { useState, useEffect } from 'react';
import { Menu, X, UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { AppointmentModal } from './AppointmentModal';
import { PatientPortalModal } from './PatientPortalModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleAppointmentSubmit = (formData: any) => {
    console.log('Appointment data:', formData);
    setIsModalOpen(false);
    navigate('/appointment-confirmation');
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo className="scale-90" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-colors">Doctors</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => setIsPortalModalOpen(true)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <UserCircle className="h-5 w-5" />
                <span>Patient Portal</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white">
            <div className="pt-20 pb-6 px-4 space-y-4">
              <a 
                href="#home" 
                className="block py-3 text-lg text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="block py-3 text-lg text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#doctors" 
                className="block py-3 text-lg text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Doctors
              </a>
              <a 
                href="#contact" 
                className="block py-3 text-lg text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 space-y-4">
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </button>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsPortalModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 text-lg text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <UserCircle className="h-5 w-5" />
                  <span>Patient Portal</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAppointmentSubmit}
      />

      <PatientPortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
      />
    </>
  );
}