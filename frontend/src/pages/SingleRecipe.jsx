import SingleRecipeDetails from '../components/SingleRecipeDetails'
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {useAuthContext} from '../hooks/useAuthContext'

const SingleRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const {user} = useAuthContext()

  

  useEffect(() => {
    const fetchRecipe = async () => {
        const response = await fetch(process.env.REACT_APP_API_URL + `/api/recipes/${id}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });

        const json = await response.json()

        if(response.ok){
            setRecipe(json)
        }
    }

    fetchRecipe()
}, [id])

  return (
    <div className="">
      {recipe ? (
        <SingleRecipeDetails key={recipe._id} recipe={recipe} />
        
      ) :
      (<p>Loading...</p>)}
    </div>
  );
};

export default SingleRecipe;
