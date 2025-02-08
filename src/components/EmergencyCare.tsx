import React from 'react';
import { Phone, Ambulance, Clock, MapPin } from 'lucide-react';

export function EmergencyCare() {
  return (
    <div id="emergency" className="bg-red-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Emergency Care
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            24/7 Emergency Medical Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Emergency Hotline */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-200">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Hotline</h3>
            <p className="text-gray-500 mb-6">Our emergency response team is available 24/7</p>
            <a
              href="tel:911"
              className="inline-flex items-center justify-center w-full bg-red-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors group"
            >
              <Phone className="h-5 w-5 mr-2 animate-pulse" />
              Call Emergency: 911
            </a>
          </div>

          {/* Ambulance Service */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-200">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <Ambulance className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ambulance Service</h3>
            <p className="text-gray-500 mb-6">Quick response ambulance service with advanced life support</p>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center w-full bg-red-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Ambulance
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Operating Hours */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <Clock className="h-6 w-6 text-red-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Operating Hours</h3>
            </div>
            <ul className="space-y-3 text-gray-500">
              <li className="flex justify-between">
                <span>Emergency Department:</span>
                <span className="font-medium">24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Trauma Center:</span>
                <span className="font-medium">24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Urgent Care:</span>
                <span className="font-medium">8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6 text-red-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Emergency Department Location</h3>
            </div>
            <p className="text-gray-500 mb-4">
              123 Healthcare Ave, Medical District<br />
              New York, NY 10001
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
            >
              Get Directions
              <MapPin className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}