import { useEffect, useState } from 'react'
import {useRecipesContext } from '../hooks/useRecipesContext'
import RecipeDetails from '../components/RecipeDetails'
import Header from '../components/RecipeHeader.jsx'
import Button from '../components/Button.jsx'
import Dropdown from '../components/Dropdown.jsx'
import logo from '../assets/recipes-logo.png'
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
  };

const Recipes = () => {
    // const [recipes, setRecipes] = useState(null);
    const {recipes, dispatch} = useRecipesContext()

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('http://localhost:4000/api/recipes')
            const json = await response.json()

            if(response.ok){
                //setRecipes(json)
                
                // payload returns the full array of data
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchRecipes()
    }, [])

    return(
        <div className="flex flex-col h-full min-h-screen bg-main-gray">
            <Header title="Recipes" logo={logo} />

            <div className="flex">
                <div className="flex-col ml-10">
                    <div className="pt-8 pr-9">
                        <Dropdown options={["Sort by: Favorited", "Sort by: Favorited"]}/>
                    </div>
                                    
                    <div className="py-3 pt-10 pr-9">
                        <Button title="Breakfast"/>
                    </div>

                    <div className="py-3 pr-9">
                        <Button title="Lunch" />
                    </div>

                    <div className="py-3 pr-9">
                        <Button title="Dinner" />
                    </div>

                    <div className="py-3 pr-9">
                        <Button title="Dessert" />
                    </div>

                    <div className="py-3 pr-9">
                        <Button title="Snacks" />
                    </div>
                </div>

                <div className="flex-col items-center mt-2">
                    <div className="Searchbar pt-5 relative mx-auto text-gray-600">
                        <input type="search" placeholder="Search for your recipe here"
                        className="border border-main-purple bg-white h-12 pl-10 w-96 \
                        rounded-3xl text-sm focus:outline-none" />
                        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                            
                        </button>
                    </div>

                    <div className="RecipeList flex items-start pt-9 h-screen">
                        <div className="bg-white pt-5 pb-5 px-5 rounded-3xl">
                            <div className="flex flex-col items-start">
                                <div className="font-bold pb-2 pl-3.5 flex">
                                    <h2 className="pr-64">Name</h2>
                                    <h2 className="pr-36">Tags</h2>
                                    <h2 className="">Favorite</h2>
                                </div>
                                <Divider orientation="horizontal" flexItem style={{ width: '600px', margin: '5px 0' }} />
                                {recipes && recipes.map((recipe) => (
                                    <div className="recipe-preview" key={recipe.id}>
                                       <RecipeDetails key={recipe._id} recipe={recipe} />
                                       <Divider orientation="horizontal" flexItem style={{ width: '600px', margin: '5px 0' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Recipes