import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RecipeDetails = ({ recipe }) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
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
    <div className="flex">
      <Link to={`/recipes/${recipe._id}`}>
        <p className={`pl-3 pr-${titlePadding}`}>{recipe.title}</p>
      </Link>

      <div className={`pl-3 pr-${typePadding}`}>
        <p className="bg-main-blue py-0.5 px-4 rounded-3xl">
          {recipe.type}
        </p>
      </div>

      <div className="pl-5" onClick={handleClick}>
        {isFilled ? <FavoriteIcon className="text-main-purple" /> : <FavoriteBorderIcon className="text-slate-300" />}
      </div>
    </div>
  );
};

export default RecipeDetails;
