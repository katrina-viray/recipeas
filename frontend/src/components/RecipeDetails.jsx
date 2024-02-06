// RecipeDetails.jsx
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


const RecipeDetails = ({ recipe, handleUpdateRecipe }) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = async () => {
    setIsFilled(!isFilled);

  /*
    const response = await fetch('/api/recipes/' + recipe._id, {
      method: 'UPDATE',
    });

    // document which is just deleted is saved in json
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'UPDATE_RECIPE', payload: json });
    }
    setIsModalOpen(false); // Close the modal after deleting
  };
  */
  };

  const titlePadding = Math.max(0, 64 - recipe.title.length);
  const typePadding = Math.max(0, 36 - recipe.type.length);

  return (
    <tr className="border-b">
      <td className="">
        <Link to={`/recipes/${recipe._id}`}>
          <p className="pl-3">{recipe.title}</p>
        </Link>
      </td>

      <td className="py-1.5">
        <p className="bg-main-blue py-0.5 px-4 rounded-3xl inline-block">
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
