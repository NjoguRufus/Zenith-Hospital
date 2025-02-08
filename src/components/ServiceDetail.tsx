import React from 'react';
import { Calendar, Clock, User, Shield, Award, ArrowRight } from 'lucide-react';
import { BookAppointment } from './BookAppointment';
import { BackButton } from './BackButton';

interface ServiceDetailProps {
  service: {
    name: string;
    description: string;
    icon: React.ElementType;
    longDescription: string;
    features: string[];
    treatments: string[];
    specialists: {
      name: string;
      title: string;
      experience: string;
    }[];
  };
}

const headerImages = {
  'critical-care': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80',
  'nephrology': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
  'gynaecology': 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80',
  'cardiology': 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80',
  'orthopedics': 'https://images.unsplash.com/photo-1612776572997-76cc42e058c3?auto=format&fit=crop&q=80',
  'gastroenterology': 'https://images.unsplash.com/photo-1631815589968-fdb09a223b3e?auto=format&fit=crop&q=80',
  'laboratory': 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80'
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon;
  const serviceId = service.name.toLowerCase().replace(/\s+/g, '-');
  const headerImage = headerImages[serviceId as keyof typeof headerImages] || headerImages.cardiology;

  return (
    <>
      <BackButton />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative bg-blue-900 text-white py-24">
          <div className="absolute inset-0">
            <img
              src={headerImage}
              alt={service.name}
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900/75" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Icon className="h-12 w-12" />
              <h1 className="text-4xl font-extrabold">{service.name}</h1>
            </div>
            <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Service Information */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-600">{service.longDescription}</p>
              </section>

              {/* Key Features */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm"
                    >
                      <Shield className="h-6 w-6 text-blue-600 mt-1" />
                      <p className="text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Available Treatments */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Treatments</h2>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.treatments.map((treatment, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Our Specialists */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Specialists</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.specialists.map((specialist, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-sm p-6 flex items-start space-x-4"
                    >
                      <User className="h-10 w-10 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{specialist.name}</h3>
                        <p className="text-blue-600">{specialist.title}</p>
                        <p className="text-gray-500 text-sm">{specialist.experience}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Quick Info & CTA */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Information</h3>
                
                {/* Timing */}
                <div className="flex items-start space-x-3 mb-6">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Working Hours</p>
                    <p className="text-gray-500">Mon-Fri: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-500">Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>

                {/* Appointment */}
                <div className="flex items-start space-x-3 mb-6">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Next Available</p>
                    <p className="text-gray-500">Tomorrow, 10:00 AM</p>
                  </div>
                </div>

                {/* Awards */}
                <div className="flex items-start space-x-3 mb-8">
                  <Award className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Certifications</p>
                    <p className="text-gray-500">JCI Accredited</p>
                    <p className="text-gray-500">ISO 9001:2015</p>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#book-appointment"
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>

          {/* Appointment Booking Section */}
          <div id="book-appointment" className="mt-16">
            <BookAppointment />
          </div>
        </div>
      </div>
    </>
  );
}