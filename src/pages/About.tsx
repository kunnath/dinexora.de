import React from 'react';

function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Dinexora</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading the way in digital transformation and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Dinexora, we're committed to empowering businesses through innovative technology solutions. Our mission is to drive digital transformation and deliver exceptional value to our clients.
            </p>
            <p className="text-lg text-gray-600">
              We combine expertise in AI, automation, and DevOps to create cutting-edge solutions that help businesses thrive in the digital age.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Innovation',
              description: 'Pushing boundaries with cutting-edge technology solutions'
            },
            {
              title: 'Excellence',
              description: 'Delivering exceptional quality in every project'
            },
            {
              title: 'Partnership',
              description: 'Building lasting relationships with our clients'
            }
          ].map((value) => (
            <div key={value.title} className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;