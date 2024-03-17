import { useEffect, useState } from 'react'
import {useRecipesContext } from '../hooks/useRecipesContext'
import RecipeDetails from '../components/RecipeDetails'
import Header from '../components/RecipeHeader.jsx'
import Button from '../components/Button.jsx'
// import Dropdown from '../components/Dropdown.jsx'
import logo from '../assets/recipes-logo.png'
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import {useAuthContext} from '../hooks/useAuthContext'


const Recipes = () => {
    // const [recipes, setRecipes] = useState(null);
    const {recipes, dispatch} = useRecipesContext()
    const {user} = useAuthContext()
    const [selectedButton, setSelectedButton] = useState('');
    const [searchItem, setSearchItem] = useState('')
    const [filteredItems, setFilteredItems] = useState(recipes)
    const [lineCount, setLineCount] = useState(0);
    const [additionalLinesNeeded, setAdditionalLinesNeeded] = useState(Math.max(10 - lineCount, 0));

    useEffect(() => {
        const fetchRecipes = async () => {
          // send authorization header w/user's token. if valid, then we have
          // access to this endpoint
            const response = await fetch('http://localhost:4000/api/recipes', {
              headers: {
                'Authorization': `Bearer ${user.token}`
              }
            })
            const json = await response.json()

            if(response.ok){
                //setRecipes(json)
                
                // payload returns the full array of data
                dispatch({type: 'SET_RECIPES', payload: json})
                setFilteredItems(json) 
                setLineCount(json.length)
            }
        }
        
        if (user){
          fetchRecipes()
        }
    }, [dispatch, user])

    const handleClick = (buttonTitle) => {
      setSelectedButton(selectedButton === buttonTitle ? '' : buttonTitle);
      setLineCount(recipes.length);

      if (selectedButton === buttonTitle) {
        // If the button that was clicked matches the selectedButton, clear the filter
        setFilteredItems(recipes);
        setAdditionalLinesNeeded(Math.max(10 - recipes.length, 0))
      } else {
        // Filter the recipes based on the buttonTitle
        const filteredItems = recipes.filter((recipe) =>
          recipe.type.includes(buttonTitle)
        );
        setFilteredItems(filteredItems);
        setAdditionalLinesNeeded(Math.max(10 - filteredItems.length, 0))
      }
    };

    const handleInputChange = (e) => { 
      const searchTerm = e.target.value;
      setSearchItem(searchTerm)

      const filteredItem = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm))

      setFilteredItems(filteredItem);
      setAdditionalLinesNeeded(Math.max(10 - filteredItems.length, 0))
    }  

    return(
      <div>
        <Header title="Recipes" logo={logo} />
        <div className="flex items-center justify-center h-full min-h-screen bg-main-gray">
            <div className="flex">
                <div className="flex-col ml-10">
                    <div className="pt-20 pr-9">
                      {/*
                        <Dropdown options={["Sort by: Favorited", "Sort by: Favorited"]}/>
                      */}
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
                      type="input"
                      placeholder="Search for your recipe here"
                      onChange={handleInputChange}
                      value={searchItem}
                      className="border border-main-purple bg-white h-12 pl-14 w-full \
                      rounded-3xl text-sm focus:outline-none"
                    />
                    <button type="submit"
                     className="absolute left-0 top-0 mt-7 ml-5 p-1 rounded-full"
                     >
                      <SearchIcon style={{ color: '#635BFF' }} />
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
                                {filteredItems && filteredItems.map((recipe) => (
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
      </div>
    )
}

export default Recipes