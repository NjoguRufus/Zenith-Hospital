import React from 'react';
import { X } from 'lucide-react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MapModal({ isOpen, onClose }: MapModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
        
        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7970192674975!2d36.80468047496567!3d-1.2964244986912608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10ea41e75c63%3A0x2c08c88e6ee9bffd!2sZenith%20Medical%20Centre!5e0!3m2!1sen!2ske!4v1739028910597!5m2!1sen!2ske"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 text-gray-600">
          <p className="font-medium">Zenith Medical Centre</p>
          <p>Ngong Road, Opposite Prestige Plaza</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
}