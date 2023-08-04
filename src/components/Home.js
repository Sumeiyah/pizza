// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=34cybUQKjUr2-gsYOdzxlnez3VRBusIhozf5eKp11HI="
        alt="Pizza Background"
        className="object-cover w-full h-full absolute inset-0 z-0"
      />
      <div className="bg-gradient-to-b from-black via-transparent to-black p-8 rounded-lg relative z-10">
        <h1 className="text-4xl font-pacifico text-white mb-4">
          Welcome to the Pizza App!
        </h1>
        <p className="text-lg text-white">
          We are your one-stop destination for the most delicious and mouth-watering pizza recipes.
          Explore our collection of hand-picked pizza recipes from around the world and try them
          out in your kitchen.
        </p>
      </div>
    </div>
  );
};

export default Home;
