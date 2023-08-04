// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white mb-8">About Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <img
              src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=34cybUQKjUr2-gsYOdzxlnez3VRBusIhozf5eKp11HI="
              alt="About Us Image"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-white mb-6">
              At Pizza App, we are passionate about bringing you the best pizza recipes from around
              the globe. Our team of dedicated chefs work tirelessly to curate a collection of
              mouth-watering pizzas that will satisfy your cravings and ignite your taste buds.
            </p>
            <p className="text-lg text-white mb-6">
              Our mission is to make cooking and enjoying pizza a delightful experience for
              everyone. Whether you are a seasoned chef or a beginner in the kitchen, we've got
              recipes that will inspire and elevate your pizza-making skills.
            </p>
            <p className="text-lg text-white mb-6">
              Join us on this culinary journey, and let's create pizza masterpieces together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
