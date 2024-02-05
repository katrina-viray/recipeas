import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import {useRecipesContext } from '../hooks/useRecipesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const AddButtonForm = () => {
  const { dispatch } = useRecipesContext()
  const [title, setTitle] = useState('');
  const [servingSize, setServingSize] = useState('');
  const [time, setTime] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  const [error, setError] = useState(null);
  const [type, setType] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = { type, title, servingSize, time, ingredients, directions };
    for (const key in recipe) {
      console.log(`${key}: ${recipe[key]}`);
    }
    console.log(ingredients);
   
    const response = await fetch('http://localhost:4000/api/recipes', {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    } else {
      setType('')
      setTitle('');
      setServingSize('');
      setTime('');
      setIngredients([]);
      setDirections([]);
      setError(null);
      setEmptyFields([]);
      console.log('New recipe added', json);
      dispatch({type: 'CREATE_RECIPE', payload: json})
    }
  };

  const handleClick = (buttonTitle) => {
    setType(buttonTitle);
  };

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
        {emptyFields.includes('type') ?  <p className="text-white font-bold">
          Please select one below* </p> :
          ""}

        <div className="py-1.5 flex">
          <Button
            title="Breakfast"
            onClick={() => handleClick('Breakfast')}
            isClicked={type === 'Breakfast'}
          />
          <div className="pl-2">
            <Button
              title="Lunch"
              onClick={() => handleClick('Lunch')}
              isClicked={type === 'Lunch'}
            />
          </div>
        </div>

        <div className="py-1.5 flex">
          <Button
            title="Dinner"
            onClick={() => handleClick('Dinner')}
            isClicked={type === 'Dinner'}
          />
          <div className="pl-2">
            <Button
              title="Dessert"
              onClick={() => handleClick('Dessert')}
              isClicked={type === 'Dessert'}
            />
          </div>
        </div>

        <div className="py-1.5 pr-9">
          <Button
            title="Snacks"
            onClick={() => handleClick('Snacks')}
            isClicked={type === 'Snacks'}
          />
        </div>

        <p className="text-white pt-6">Title</p>
        <input type="text" 
        placeholder="E.g. Apple pie"
        onChange={(e) => setTitle(e.target.value)}
        value = {title}
        className={emptyFields.includes('title') ? 'bg-red-50 border-2 border-red-500 rounded-md pl-3 py-1.5 pr-24 focus:outline-none' : 'rounded-md pl-3 py-1.5 pr-24 focus:outline-none'}
        />

        <p className="text-white pt-4">Serving Size</p>
        <input type="text" 
        placeholder="E.g. 1 serving"
        onChange={(e) => setServingSize(e.target.value)}
        value = {servingSize}
        className={emptyFields.includes('servingSize') ? 'bg-red-50 border-2 border-red-500 rounded-md pl-3 py-1.5 pr-24 focus:outline-none' : 'rounded-md pl-3 py-1.5 pr-24 focus:outline-none'}
        />

        <p className="text-white pt-4">Cook Time</p>
        <input type="text"
        placeholder="E.g. 1 hour"
        onChange={(e) => setTime(e.target.value)}
        value = {time}
        className={emptyFields.includes('time') ? 'bg-red-50 border-2 border-red-500 rounded-md pl-3 py-1.5 pr-24 focus:outline-none' : 'rounded-md pl-3 py-1.5 pr-24 focus:outline-none'}
        />

        <p className="text-white pt-4">Ingredients</p>
        <div className="relative w-full" >
          {ingredients.map((ingredient) => (
            <div key={ingredient.id} className="relative mb-4 flex items-center">
              <input
                type="text"
                className={emptyFields.includes('ingredients') ? 'bg-red-50 border-2 border-red-500 rounded-md pl-3 py-1.5 pr-24 focus:outline-none' : 'rounded-md pl-3 py-1.5 pr-24 focus:outline-none'}
                placeholder="Type here..."
              />
              <div className="pl-5">
                <button
                    onClick={() => handleDeleteIngredients(ingredient.id)}
                    className="text-black hover:text-second-purple"
                    type='button'
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
          <div className="relative flex items-center">
            <input
              type="text"
              className={emptyFields.includes('ingredients') ? 'bg-red-50 border-2 border-red-500 rounded-md pl-3 py-1.5 pr-24 focus:outline-none' : 'rounded-md pl-3 py-1.5 pr-24 focus:outline-none'}
              placeholder="Type here..."
            />
            <button
              onClick={handleAddIngredients}
              className="bg-white text-main-purple hover:bg-main-blue hover:text-white py-1 px-2 rounded-3xl ml-3"
              type='button'
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
                  className={emptyFields.includes('directions') ? 'bg-red-50 border-2 border-red-500 rounded-md pl-3 py-1.5 pr-24 focus:outline-none' : 'rounded-md pl-3 py-1.5 pr-24 focus:outline-none'}
                  placeholder="Type here..."
                />
                <div className="pl-5">
                  <button
                      onClick={() => handleDeleteDirections(direction.id)}
                      className="text-black hover:text-second-purple"
                      type='button'
                  >
                      <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
            <div className="relative flex items-center">
              <input
                type="text"
                className={emptyFields.includes('directions') ? 'bg-red-50 border-2 border-red-500 rounded-md pl-3 py-1.5 pr-24 focus:outline-none' : 'rounded-md pl-3 py-1.5 pr-24 focus:outline-none'}
                placeholder="Type here..."
              />
              <button
                onClick={handleAddDirections}
                className="bg-white text-main-purple hover:bg-main-blue hover:text-white py-1 px-2 rounded-3xl ml-3"
                type='button'
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
        </div>

        <div className="flex justify-center item-center pt-9 pr-8">
          <button type="submit"
          className="bg-second-purple text-white hover:bg-main-blue
          hover:text-white hover:border-slate-500 hover:drop-shadow 
          hover:outline-none font-bold py-1.5 w-36
          rounded-full">Save Recipe</button>
        </div>
        
        <div className="pt-4 pr-8">
          {error && <div className="w-64 mx-auto text-center pt-2 pb-2 text-red-500 bg-red-50 border-2 border-red-500 rounded-lg">{error}</div> }
        </div>
      </form>
    </div>
  );
};

export default AddButtonForm;
