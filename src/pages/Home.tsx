import React from 'react';
import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 relative -top-4">
              Digital Innovation & Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto relative -top-6">
              Empowering businesses with cutting-edge AI solutions and digital transformation.
            </p>
            <a
              href="https://calendly.com/dinexora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Book a Consultation
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI & ML Solutions',
                description: 'Cutting-edge artificial intelligence and machine learning solutions.',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500'
              },
              {
                title: 'Quality Assurance',
                description: 'Comprehensive testing and quality assurance services.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500'
              },
              {
                title: 'DevOps Excellence',
                description: 'Streamlined development and operations processes.',
                image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500'
              }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;