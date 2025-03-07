import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <header className="text-center text-4xl font-bold mb-6">
        MD Yeasin Rahat
      </header>
      <p className="text-center text-lg mb-10">Photographer | Sports Media | DevOps Enthusiast</p>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">About Me</h2>
        <p>
          I am a photographer working with Bangladesh's biggest sports TV channel, T Sports, and the BPL team, Rangpur Riders. I also have experience with Docker and Jenkins in DevOps.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
        <ul className="list-disc pl-6">
          <li>Photography & Sports Media</li>
          <li>Photo Editing & Post Processing</li>
          <li>Docker & Containerization</li>
          <li>Jenkins & CI/CD</li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Contact</h2>
        <p>Feel free to connect with me:</p>
        <div className="flex gap-4 mt-4">
          <a href="#" className="text-blue-400 hover:underline">Facebook</a>
          <a href="#" className="text-pink-400 hover:underline">Instagram</a>
          <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;