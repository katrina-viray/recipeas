import { useEffect, useState } from 'react'
import Header from '../components/RecipeHeader.jsx'
import logo from '../assets/recipes-logo.png'

const Recipes = () => {
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('http://localhost:4000/api/recipes')
            const json = await response.json()

            if(response.ok){
                setRecipes(json)
            }
        }

        fetchRecipes()
    }, [])

    return(
        <div className="">
            <div className="Recipes">
                {recipes && recipes.map(() => (
                    <p key={ recipe._id }>{ recipe.title }</p>
                ))}
            </div>

            <Header title="Recipes" logo={logo} />
        </div>
    )
}

export default Recipes