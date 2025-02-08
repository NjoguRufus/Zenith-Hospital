import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    text: 'The care I received at Zenith Hospital was exceptional. The staff was professional and caring throughout my stay.',
    role: 'Patient',
  },
  {
    name: 'Emma Davis',
    text: 'I am grateful for the outstanding care provided by the cardiology team. They saved my life!',
    role: 'Heart Surgery Patient',
  },
  {
    name: 'Michael Brown',
    text: 'The pediatric department took excellent care of my daughter. The doctors were patient and understanding.',
    role: 'Parent',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-blue-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Patient Testimonials
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            Hear what our patients say about their experience at Zenith Hospital.
          </p>
        </div>

        <div className="mt-20 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-xl shadow-xl p-8">
                      <Quote className="h-8 w-8 text-blue-600 mb-4" />
                      <p className="text-xl text-gray-700 italic mb-6">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center">
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-white' : 'bg-blue-200'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}