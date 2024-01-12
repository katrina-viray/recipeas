import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/food-logo.png'

const Home = () => {
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
        <div>
            <Navbar/>
            <div className="flex flex-col h-screen">
            <div className="bg-gradient-to-t from-white to-main-purple ">
                <div className="Recipes">
                    {recipes && recipes.map(() => (
                        <p key={ recipe._id }>{ recipe.title }</p>
                    ))}
                </div>
                <div className="text-white text-center py-5">
                    <h2 className="font-bold text-3xl">Welcome to Katnando's Recipeas!</h2>
                    <p className="text-xl ">Organize your recipes easily with Recipeas.</p>
                    <img src = { logo } alt = "Logo " className="mx-auto flex justify-between items-center py-14"></img>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home