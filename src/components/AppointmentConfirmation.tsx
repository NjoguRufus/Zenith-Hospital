import React from 'react';
import { CheckCircle, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from './BackButton';

export function AppointmentConfirmation() {
  const navigate = useNavigate();

  return (
    <>
      <BackButton />
      <div className="min-h-screen bg-gray-50">
        <div className="relative h-64 mb-8">
          <img
            src="https://images.unsplash.com/photo-1638202993928-7d113b8e4559?auto=format&fit=crop&q=80"
            alt="Medical appointment confirmation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent" />
        </div>
        
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform -translate-y-16">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You for Your Request
            </h2>
            
            <p className="text-gray-600 mb-8">
              We have received your appointment request. Our team will review your information
              and get back to you as soon as possible to confirm your appointment.
            </p>

            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}