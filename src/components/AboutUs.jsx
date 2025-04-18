import React from 'react';

const AboutUs = () => {
return (
    <section className="min-h-screen bg-white text-gray-800 py-16 px-6 md:px-20">
    <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
        Welcome to our image gallery! We’re passionate about showcasing beautiful visuals that spark inspiration.
        </p>
        <p className="text-lg leading-relaxed mb-4">
        This platform was built using React and Vite, with a modern, responsive UI powered by Tailwind CSS. Our mission is to make finding high-quality images quick and fun.
        </p>
        <p className="text-lg leading-relaxed">
        Built by tech enthusiasts, this app fetches data from the Pixabay API and brings you a seamless browsing experience.
        </p>
    </div>
    </section>
);
};

export default AboutUs;
