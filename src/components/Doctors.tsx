import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { AppointmentModal } from './AppointmentModal';
import { useNavigate } from 'react-router-dom';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
    experience: '15+ years experience',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80',
    experience: '12+ years experience',
  },
  {
    name: 'Dr. Emily Williams',
    specialty: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80',
    experience: '10+ years experience',
  },
  {
    name: 'Dr. David Martinez',
    specialty: 'Orthopedic Surgeon',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80',
    experience: '18+ years experience',
  },
];

export function Doctors() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const navigate = useNavigate();

  const handleConsultation = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    setIsModalOpen(true);
  };

  const handleAppointmentSubmit = (formData: any) => {
    console.log('Appointment data:', formData);
    setIsModalOpen(false);
    navigate('/appointment-confirmation');
  };

  return (
    <>
      <div id="doctors" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Specialists
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Expert healthcare professionals committed to providing you with the best medical care.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                  <p className="mt-2 text-gray-500">{doctor.experience}</p>
                  <button 
                    onClick={() => handleConsultation(doctor.name)}
                    className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center justify-center group"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAppointmentSubmit}
      />
    </>
  );
}