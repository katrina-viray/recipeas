import React, { useState } from 'react';
import Button from '../components/Button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const AddButtonForm = () => {
  const [size, setSize] = useState('')
  const [time, setTime] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [directions, setDirections] = useState([])

  const [inputBars, setInputBars] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  const handleAddIngredients = () => {
    const newId = ingredients.length + 1;
    setIngredients([...ingredients, { id: newId }]);
  };

  const handleDeleteIngredients = (id) => {
    const updatedIngredients = ingredients.filter((bar) => bar.id !== id);
    setIngredients(updatedIngredients);
  };

  const handleAddDirections = () => {
    const newId = directions.length + 1;
    setDirections([...directions, { id: newId }]);
  };

  const handleDeleteDirections = (id) => {
    const updatedDirections = directions.filter((bar) => bar.id !== id);
    setDirections(updatedDirections);
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <p className="text-white pb-2">Which type of food would you like to add?</p>

        <div className="py-1.5 flex">
            <Button title="Breakfast"/>
            <div className="pl-2">
                <Button title="Lunch" />
            </div>
        </div>

        <div className="py-1.5 flex">
            <Button title="Dinner"/>
            <div className="pl-2">
                <Button title="Dessert" />
            </div>
        </div>

        <div className="py-1.5 pr-9">
            <Button title="Snacks" />
        </div>

        <p className="text-white pt-6">Serving Size</p>
        <input type="text" 
        placeholder="E.g. 1 serving"
        onChange={(e) => setSize(e.target.value)}
        value = {size}
        className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"/>

        <p className="text-white pt-4">Cook Time</p>
        <input type="text"
        placeholder="E.g. 1 hour"
        onChange={(e) => setTime(e.target.value)}
        value = {time}
        className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"/>

        <p className="text-white pt-4">Ingredients</p>
        <div className="relative w-full" >
          {ingredients.map((ingredient) => (
            <div key={ingredient.id} className="relative mb-4 flex items-center">
              <input
                type="text"
                className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"
                placeholder="Type here..."
              />
              <div className="pl-5">
                <button
                    onClick={() => handleDeleteIngredients(ingredient.id)}
                    className="text-black hover:text-second-purple"
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
          <div className="relative flex items-center">
            <input
              type="text"
              className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"
              placeholder="Type here..."
            />
            <button
              onClick={handleAddIngredients}
              className="bg-white text-main-purple hover:bg-main-blue hover:text-white py-1 px-2 rounded-3xl ml-3"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        <p className="text-white pt-4">Directions</p>
        <div className="relative w-full">
          {directions.map((direction) => (
              <div key={direction.id} className="relative mb-4 flex items-center">
                <input
                  type="text"
                  className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"
                  placeholder="Type here..."
                />
                <div className="pl-5">
                  <button
                      onClick={() => handleDeleteDirections(direction.id)}
                      className="text-black hover:text-second-purple"
                  >
                      <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
            <div className="relative flex items-center">
              <input
                type="text"
                className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"
                placeholder="Type here..."
              />
              <button
                onClick={handleAddDirections}
                className="bg-white text-main-purple hover:bg-main-blue hover:text-white py-1 px-2 rounded-3xl ml-3"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
        </div>

        <div className="flex justify-center item-center pt-9">
          <button className="bg-second-purple text-white hover:bg-main-blue
          hover:text-white hover:border-slate-500 hover:drop-shadow 
          hover:outline-none font-bold py-1.5 w-36
          rounded-full">Save Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default AddButtonForm;
