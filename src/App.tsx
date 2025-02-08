import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { LazyComponent } from './components/LazyComponent';
import { services } from './components/Services';

// Lazy load components
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const ServiceDetail = lazy(() => import('./components/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const Doctors = lazy(() => import('./components/Doctors').then(m => ({ default: m.Doctors })));
const BookAppointment = lazy(() => import('./components/BookAppointment').then(m => ({ default: m.BookAppointment })));
const EmergencyCare = lazy(() => import('./components/EmergencyCare').then(m => ({ default: m.EmergencyCare })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const AppointmentConfirmation = lazy(() => import('./components/AppointmentConfirmation').then(m => ({ default: m.AppointmentConfirmation })));

function HomePage() {
  return (
    <>
      <Hero />
      <LazyComponent>
        <Services />
      </LazyComponent>
      <LazyComponent>
        <Doctors />
      </LazyComponent>
      <LazyComponent>
        <BookAppointment />
      </LazyComponent>
      <LazyComponent>
        <EmergencyCare />
      </LazyComponent>
      <LazyComponent>
        <Testimonials />
      </LazyComponent>
      <LazyComponent>
        <Contact />
      </LazyComponent>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/services/:serviceId"
              element={
                <LazyComponent>
                  <ServiceDetail
                    service={services.find((s) => s.id === window.location.pathname.split('/')[2]) || services[0]}
                  />
                </LazyComponent>
              }
            />
            <Route
              path="/appointment-confirmation"
              element={
                <LazyComponent>
                  <AppointmentConfirmation />
                </LazyComponent>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;