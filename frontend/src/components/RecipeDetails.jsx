import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RecipeDetails = ({ recipe }) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };
  console.log(recipe.title);
  console.log(recipe.id)
  return (
    <div className="flex">
      <Link to={`/recipes/${recipe._id}`}>
        <p className="pl-3">{recipe.title}</p>
      </Link>

      <p className="bg-main-blue py-0.5 px-4 rounded-3xl">
        {recipe.type}
      </p>

      <div onClick={handleClick}>
        {isFilled ? <FavoriteIcon className="text-main-purple" /> : <FavoriteBorderIcon className="text-slate-300" />}
      </div>
    </div>
  );
};

export default RecipeDetails;
