import React from 'react';
import { Heart, Brain, Stethoscope, Baby, Bone, ChevronFirst as FirstAid } from 'lucide-react';

const departments = [
  {
    name: 'Cardiology',
    description: 'Advanced heart disease treatment and preventive care.',
    icon: Heart,
  },
  {
    name: 'Neurology',
    description: 'Expert care for brain and nervous system disorders.',
    icon: Brain,
  },
  {
    name: 'General Medicine',
    description: 'Comprehensive healthcare for all your medical needs.',
    icon: Stethoscope,
  },
  {
    name: 'Pediatrics',
    description: 'Specialized care for infants, children, and adolescents.',
    icon: Baby,
  },
  {
    name: 'Orthopedics',
    description: 'Treatment for bone, joint, and muscle conditions.',
    icon: Bone,
  },
  {
    name: 'Emergency Care',
    description: '24/7 emergency medical services and trauma care.',
    icon: FirstAid,
  },
];

export function Departments() {
  return (
    <div id="departments" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Departments
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Specialized healthcare services delivered by expert medical professionals.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <dept.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{dept.name}</h3>
                <p className="mt-2 text-gray-500">{dept.description}</p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}