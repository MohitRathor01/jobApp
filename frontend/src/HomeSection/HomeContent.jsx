import React from 'react';

const HomeContent = () => {
  const data = [
    { image: '/homePageImage/welcome.jpg', heading: "Welcome to Our Platform", content: 'Join thousands of job seekers and employers on our dynamic platform. Discover opportunities that match your skills and connect with top companies looking for talent. Whether you are searching for your dream job or recruiting exceptional candidates, we are here to facilitate your journey.', imagePosition: 'left' },
    { image: '/homePageImage/hiring.jpg', heading: "Find Your Perfect Job", content: 'Explore a vast array of job listings spanning various industries and sectors. Our advanced search filters enable you to narrow down options based on location, experience level, and more. With user-friendly navigation and personalized recommendations, finding your perfect job has never been easier.', imagePosition: 'right' },
    { image: '/homePageImage/groth.jpg', heading: "Empower Your Career Growth", content: 'Take control of your professional journey with our resources and tools designed to empower your career growth. Access insightful articles, expert advice, and skill-building resources to enhance your capabilities and stay ahead in today’s competitive job market. Elevate your career trajectory with us.', imagePosition: 'left' },
    { image: '/homePageImage/hiring.jpg', heading: "Streamlined Recruitment Process", content: 'Simplify your recruitment process with our streamlined platform. Post job listings, review applications, and manage candidates efficiently from a centralized dashboard. Leverage our suite of tools, including applicant tracking and communication features, to streamline hiring and find the right fit for your team.', imagePosition: 'right' },

  ];
  return (
    <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Your App</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
  );
};

export default HomeContent;
