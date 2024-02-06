import { useEffect, useState } from 'react'
import {useRecipesContext } from '../hooks/useRecipesContext'
import RecipeDetails from '../components/RecipeDetails'
import Header from '../components/RecipeHeader.jsx'
import Button from '../components/Button.jsx'
import Dropdown from '../components/Dropdown.jsx'
import logo from '../assets/recipes-logo.png'
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';


const Recipes = () => {
    // const [recipes, setRecipes] = useState(null);
    const {recipes, dispatch} = useRecipesContext()
    const [selectedButton, setSelectedButton] = useState('');
    const [searchItem, setSearchItem] = useState('')
    const [lineCount, setLineCount] = useState(recipes ? recipes.length : 0);
    //const [additionalLinesNeeded, setAdditionalLinesNeeded] = Math.max(10 - lineCount, 0);
    const additionalLinesNeeded = Math.max(10 - lineCount, 0);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('http://localhost:4000/api/recipes')
            const json = await response.json()

            if(response.ok){
                //setRecipes(json)
                
                // payload returns the full array of data
                dispatch({type: 'SET_RECIPES', payload: json})
            }
        }

        fetchRecipes()
    }, [])

    const handleClick = (buttonTitle) => {
      setSelectedButton(buttonTitle);
      setLineCount(recipes.length);
      //setAdditionalLinesNeeded(Math.max(10 - lineCount, 0));
    };

    const handleInputChange = (e) => { 
      const searchTerm = e.target.value;
      setSearchItem(searchTerm)
    }  

    return(
        <div className="flex flex-col h-full min-h-screen bg-main-gray">
            <Header title="Recipes" logo={logo} />

            <div className="flex">
                <div className="flex-col ml-10">
                    <div className="pt-8 pr-9">
                        <Dropdown options={["Sort by: Favorited", "Sort by: Favorited"]}/>
                    </div>
                                    
                    <div className="py-3 pt-10 pr-9">
                    <Button
                      title="Breakfast"
                      onClick={() => handleClick('Breakfast')}
                      isClicked={selectedButton === 'Breakfast'}
                    />
                    </div>

                    <div className="py-3 pr-9">
                    <Button
                      title="Lunch"
                      onClick={() => handleClick('Lunch')}
                      isClicked={selectedButton === 'Lunch'}
                    />
                    </div>

                    <div className="py-3 pr-9">
                    <Button
                      title="Dinner"
                      onClick={() => handleClick('Dinner')}
                      isClicked={selectedButton === 'Dinner'}
                    />
                    </div>

                    <div className="py-3 pr-9">
                    <Button
                      title="Dessert"
                      onClick={() => handleClick('Dessert')}
                      isClicked={selectedButton === 'Dessert'}
                    />
                    </div>

                    <div className="py-3 pr-9">
                    <Button
                      title="Snacks"
                      onClick={() => handleClick('Snacks')}
                      isClicked={selectedButton === 'Snacks'}
                    />
                    </div>
                </div>

                <div className="flex-col items-center mt-2">

                  <div className="Searchbar pt-5 relative mx-auto text-gray-600" style={{ width: '600px' }}>
                    <input
                      type="search"
                      placeholder="Search for your recipe here"
                      onChange={handleInputChange}
                      value={searchItem}
                      className="border border-main-purple bg-white h-12 pl-14 w-full \
                      rounded-3xl text-sm focus:outline-none"
                    />
                    <button type="submit"
                     className="absolute left-0 top-0 mt-7 ml-5 bg-main-purple p-0.5 rounded-full"
                     >
                      <SearchIcon style={{ color: 'white' }} />
                    </button>
                  </div>

                  <div className="RecipeList flex items-start pt-9 h-screen">
                      <div className="bg-white pt-5 pb-5 px-5 rounded-3xl">
                          <div className="flex flex-col">
                            <table className="">
                              <thead className="pb-1">
                                <tr className="border-b font-bold pb-1 pl-3.5">
                                    <th className="pr-64">Name</th>
                                    <th className="pr-36">Tags</th>
                                    <th className="">Favorite</th>
                                </tr>
                              </thead>
                              <tbody className="pb-1">
                                {recipes && recipes.map((recipe) => (
                                  <RecipeDetails key={recipe._id} recipe={recipe} />
                                ))}
                              </tbody>
                            </table>
                          <div className="pb-4"></div>

                        {Array.from({ length: additionalLinesNeeded }).map((_, index) => (
                          <Divider key={`additional-line-${index}`} orientation="horizontal" flexItem style={{ width: '600px', margin: '22px 0' }} />
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