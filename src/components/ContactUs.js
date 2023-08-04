// src/components/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
      <p className="text-lg text-white">
        Got any questions, suggestions, or just want to say hello? We'd love to hear from you! Feel free to reach out to
        us using the contact information provided below:
      </p>
      <div className="flex items-center my-4">
        <span className="text-2xl pr-2">&#128222;</span>
        <a href="tel:+11234567890" className="text-red-500 text-lg font-bold">+1 (123) 456-7890</a>
      </div>
      <div className="flex items-center my-4">
        <span className="text-2xl pr-2">&#128231;</span>
        <a href="mailto:contact@pizzaapp.com" className="text-red-500 text-lg font-bold">contact@pizzaapp.com</a>
      </div>
      <div className="flex items-center my-4">
        <span className="text-2xl pr-2">&#127968;</span>
        <p className="text-red-500 text-lg font-bold">123 Pizza Street, New York, USA</p>
      </div>
      <button className="bg-yellow-200 hover:bg-pink-600 text-black font-bold py-2 px-4 rounded-md mt-4">
        Get in Touch
      </button>
    </div>
  );
};

export default ContactUs;
