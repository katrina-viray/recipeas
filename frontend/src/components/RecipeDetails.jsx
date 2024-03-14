// RecipeDetails.jsx
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import {useAuthContext} from '../hooks/useAuthContext'



const RecipeDetails = ({ recipe, handleUpdateRecipe }) => {
  const [isFilled, setIsFilled] = useState(false);
  const {user} = useAuthContext()


  const handleClick = async () => {
    setIsFilled(!isFilled);

    const response = await fetch('http://localhost:4000/api/recipes/' + recipe._id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify({
        type: recipe.type,
        title: recipe.title,
        servingSize: recipe.servingSize,
        time: recipe.time,
        ingredients: recipe.ingredients,
        steps: recipe.steps,
        favorite: !isFilled
      }),
    });

    if (!response.ok){
      throw new Error('Failed to update favorite property.');
    }

  };

  const titlePadding = Math.max(0, 64 - recipe.title.length);
  const typePadding = Math.max(0, 36 - recipe.type.length);
  let typeColor, fontColor;

  switch(recipe.type) {
    case "Breakfast":
      typeColor="bg-breakfast-color"
      fontColor="black"
      break;
    case "Lunch":
      typeColor="bg-lunch-color"
      fontColor="black"
      break;
    case "Dinner":
      typeColor="bg-dinner-color"
      fontColor="black"
      break;
    case "Dessert":
      typeColor="bg-dessert-color"
      fontColor="black"
      break;
    case "Snack":
      typeColor="bg-snack-color"
      fontColor="black"
      break;
    default:
      typeColor="main-purple"
      fontColor="white"
  }


  return (
    <tr className="border-b">
      <td className="">
        <Link to={`/recipes/${recipe._id}`}>
          <p className="pl-4">{recipe.title}</p>
        </Link>
      </td>

      <td className="py-1.5">
          <p className={`${typeColor} text-${fontColor} py-0.5 px-4 rounded-3xl inline-block`}>
            {recipe.type}
          </p>
      </td>

      <td className="pl-6">
        <div onClick={handleClick}>
          {isFilled ? <FavoriteIcon className="text-main-purple" /> : <FavoriteBorderIcon className="text-slate-300" />}
        </div>
      </td>
    </tr>

  );
};

export default RecipeDetails;
