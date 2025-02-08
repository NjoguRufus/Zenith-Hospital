import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Stethoscope, 
  Baby, 
  Bone, 
  Activity, 
  LucideKey as Kidney, 
  Baby as Gynecology, 
  FlaskRound as Flask, 
  Microscope, 
  Pill 
} from 'lucide-react';

export const services = [
  {
    id: 'critical-care',
    name: 'Critical Care Unit',
    description: 'State-of-the-art ICU facility providing 24/7 intensive care with advanced life support systems.',
    icon: Activity,
    longDescription: 'Our Critical Care Unit is equipped with the latest medical technology and staffed by experienced intensive care specialists. We provide round-the-clock monitoring and care for critically ill patients.',
    features: [
      'Advanced Patient Monitoring',
      '24/7 Specialist Care',
      'Ventilator Support',
      'Emergency Response Team',
    ],
    treatments: [
      'Mechanical Ventilation',
      'Hemodynamic Monitoring',
      'Post-operative Care',
      'Trauma Care',
      'Sepsis Management',
      'Multi-organ Support',
    ],
    specialists: [
      {
        name: 'Dr. James Wilson',
        title: 'Critical Care Specialist',
        experience: '20+ years experience',
      },
      {
        name: 'Dr. Lisa Chen',
        title: 'Intensive Care Physician',
        experience: '15+ years experience',
      },
    ],
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    description: 'Comprehensive kidney care including dialysis services and transplant management.',
    icon: Kidney,
    longDescription: 'Our Nephrology Department provides expert care for all types of kidney diseases, from early detection to advanced treatment options including dialysis and transplant care.',
    features: [
      'Modern Dialysis Center',
      'Kidney Disease Management',
      'Transplant Care',
      'Preventive Nephrology',
    ],
    treatments: [
      'Hemodialysis',
      'Peritoneal Dialysis',
      'Kidney Transplant Care',
      'Hypertension Management',
      'Electrolyte Disorders',
      'Chronic Kidney Disease',
    ],
    specialists: [
      {
        name: 'Dr. Robert Kim',
        title: 'Senior Nephrologist',
        experience: '18+ years experience',
      },
      {
        name: 'Dr. Sarah Patel',
        title: 'Transplant Specialist',
        experience: '12+ years experience',
      },
    ],
  },
  {
    id: 'gynaecology',
    name: 'Gynaecology',
    description: "Specialized care for women's health including routine check-ups and advanced treatments.",
    icon: Gynecology,
    longDescription: "Our Gynaecology Department offers comprehensive women's healthcare services, from routine check-ups to complex surgical procedures, ensuring the best possible care for women at every stage of life.",
    features: [
      "Women's Wellness Clinic",
      'Minimally Invasive Surgery',
      'Fertility Services',
      'Prenatal Care',
    ],
    treatments: [
      'Routine Check-ups',
      'Fertility Treatment',
      'Laparoscopic Surgery',
      'Menopause Management',
      'Cancer Screening',
      'Family Planning',
    ],
    specialists: [
      {
        name: 'Dr. Maria Rodriguez',
        title: 'Senior Gynaecologist',
        experience: '16+ years experience',
      },
      {
        name: 'Dr. Emma Thompson',
        title: 'Reproductive Specialist',
        experience: '14+ years experience',
      },
    ],
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Advanced heart disease treatment and preventive care with state-of-the-art facilities.',
    icon: Heart,
    longDescription: 'Our Cardiology Department offers comprehensive care for all types of heart conditions. Using the latest technology and evidence-based practices, our team of experienced cardiologists provides both preventive care and advanced treatment options.',
    features: [
      'Advanced Cardiac Imaging',
      '24/7 Emergency Cardiac Care',
      'Non-invasive Cardiology',
      'Interventional Procedures',
    ],
    treatments: [
      'Coronary Angioplasty',
      'Cardiac Rehabilitation',
      'Heart Rhythm Management',
      'Preventive Cardiology',
      'Heart Failure Treatment',
      'Valve Disease Treatment',
    ],
    specialists: [
      {
        name: 'Dr. Sarah Johnson',
        title: 'Senior Cardiologist',
        experience: '15+ years experience',
      },
      {
        name: 'Dr. Michael Chen',
        title: 'Interventional Cardiologist',
        experience: '12+ years experience',
      },
    ],
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Expert care for bone, joint, and muscle conditions with advanced surgical options.',
    icon: Bone,
    longDescription: 'Our Orthopedics Department specializes in the diagnosis and treatment of musculoskeletal conditions. We offer both conservative and surgical treatment options for a wide range of orthopedic conditions.',
    features: [
      'Joint Replacement Center',
      'Sports Medicine',
      'Spine Surgery',
      'Trauma Care',
    ],
    treatments: [
      'Joint Replacement',
      'Arthroscopic Surgery',
      'Fracture Care',
      'Sports Injury Treatment',
      'Spine Surgery',
      'Physical Therapy',
    ],
    specialists: [
      {
        name: 'Dr. David Martinez',
        title: 'Senior Orthopedic Surgeon',
        experience: '18+ years experience',
      },
      {
        name: 'Dr. Jennifer Lee',
        title: 'Sports Medicine Specialist',
        experience: '14+ years experience',
      },
    ],
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    description: 'Comprehensive care for digestive system disorders with advanced endoscopy services.',
    icon: Pill,
    longDescription: 'Our Gastroenterology Department provides comprehensive care for disorders of the digestive system. We offer advanced diagnostic and therapeutic procedures including endoscopy and minimally invasive surgeries.',
    features: [
      'Advanced Endoscopy Center',
      'Liver Disease Management',
      'IBD Clinic',
      'Nutritional Support',
    ],
    treatments: [
      'Endoscopy',
      'Colonoscopy',
      'ERCP',
      'Liver Disease Treatment',
      'IBD Management',
      'Nutritional Therapy',
    ],
    specialists: [
      {
        name: 'Dr. Andrew Park',
        title: 'Senior Gastroenterologist',
        experience: '16+ years experience',
      },
      {
        name: 'Dr. Rachel Green',
        title: 'Hepatologist',
        experience: '13+ years experience',
      },
    ],
  },
  {
    id: 'laboratory',
    name: 'Laboratory Services',
    description: 'State-of-the-art diagnostic laboratory offering comprehensive testing services.',
    icon: Flask,
    longDescription: 'Our Laboratory Services Department is equipped with the latest diagnostic technology to provide accurate and timely test results. We offer a comprehensive range of clinical laboratory tests to support patient care.',
    features: [
      'Advanced Testing Equipment',
      '24/7 Emergency Testing',
      'Quick Result Reporting',
      'Quality Control Measures',
    ],
    treatments: [
      'Clinical Chemistry',
      'Hematology',
      'Microbiology',
      'Molecular Diagnostics',
      'Immunology',
      'Pathology Services',
    ],
    specialists: [
      {
        name: 'Dr. Thomas Wright',
        title: 'Laboratory Director',
        experience: '17+ years experience',
      },
      {
        name: 'Dr. Linda Chang',
        title: 'Clinical Pathologist',
        experience: '15+ years experience',
      },
    ],
  },
];

export function Services() {
  const navigate = useNavigate();

  return (
    <div id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive healthcare services delivered by expert medical professionals using cutting-edge technology.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
                <div className="mt-4">
                  <span className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group/link">
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
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
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}