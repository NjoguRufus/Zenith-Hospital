import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, MessageSquare } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
}

export function AppointmentModal({ isOpen, onClose, onSubmit }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    availability: '',
    time: '',
    problem: '',
  });

  // Prevent body scroll when modal is open
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors p-2 touch-manipulation"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6">
          <div className="relative w-full h-32 rounded-t-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80"
              alt="Medical appointment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Book an Appointment</h2>
          <p className="text-gray-500">Fill in your details to schedule a consultation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                required
                className="pl-10 block w-full rounded-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-sm"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Available Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="date"
                required
                className="pl-10 block w-full rounded-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-sm"
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="time"
                required
                className="pl-10 block w-full rounded-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-sm"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Medical Concern</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea
                required
                rows={4}
                className="pl-10 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-sm"
                value={formData.problem}
                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                placeholder="Please describe your medical concern..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-base sm:text-sm font-medium hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center touch-manipulation"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}