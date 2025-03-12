import React from 'react';
import { ArrowRight } from 'lucide-react';

const Partners = () => {
  const partners = [
    { name: 'TechCorp', logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=150' },
    { name: 'InnovateAI', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150' },
    { name: 'QualityTech', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150' },
    { name: 'DevStream', logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=150' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-24 object-contain mb-4"
              />
              <p className="text-center font-medium text-gray-800">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Become Our Partner
              </h3>
              <p className="text-gray-600 mb-6">
                Join our ecosystem of innovation and growth. Together, we can create
                groundbreaking solutions and drive digital transformation.
              </p>
              <button className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Join as a Partner
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Growth Opportunities</h4>
                  <p className="text-gray-600">Access new markets and customers through our network</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Co-innovation</h4>
                  <p className="text-gray-600">Collaborate on cutting-edge solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;