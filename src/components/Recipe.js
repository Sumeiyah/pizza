// src/components/Recipe.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza');
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold underline p-10 pb-2 text-center text-red-500 bg-gray-900">Pizza Recipes</h1>
      <div className="grid grid-cols-3 gap-4  bg-gray-900 min-h-screen py-16 text-white">
        {recipes.map((recipe) => (
          <div key={recipe.recipe_id}>
            <img src={recipe.image_url} alt={recipe.title} className="w-full h-32 object-cover rounded-md" />
            <p className="text-lg font-bold mt-2">{recipe.title}</p>
            <p className="text-lg">By: {recipe.publisher}</p>
            <a href={recipe.source_url} target="_self" rel="noopener noreferrer" className="text-blue-500 underline">
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
