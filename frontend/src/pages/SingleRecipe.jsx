import { useParams } from "react-router-dom";
import logo from '../assets/single-recipe-logo.png'
import Header from '../components/RecipeHeader.jsx'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const SingleRecipe = () => {
    return (
        //const { id } = useParams();
        <div className="flex flex-col h-full min-h-screen bg-main-gray items-center">
            <Header title="Overnight Oats" logo={logo} />
            <div className="RecipeList flex items-start pt-9 h-screen">
                <div className="bg-white pt-6 pb-6 px-10 rounded-3xl">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div>
                            <p>Serving Size:</p>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div>
                            <p>1</p>
                            </div>
                        </div>
                        <Divider orientation="vertical" flexItem style={{ height: '50px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div>
                            <p>Cook Time:</p>
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div>
                            <p>30 minutes</p>
                            </div>
                        </div>
                    </div>

                    <Divider orientation="horizontal" flexItem style={{ width: '600px', margin: '10px 0' }} />

          <div className="flex flex-col items-start mt-6">
            <h2 className="font-bold">Ingredients:</h2>
            <List>
              <ListItem>
                <span className="bullet">&#8226;&nbsp;</span>
                <ListItemText primary="Ingredient 1" />
              </ListItem>
              <ListItem>
                <span className="bullet">&#8226;&nbsp;</span>
                <ListItemText primary="Ingredient 2" />
              </ListItem>
              <ListItem>
                <span className="bullet">&#8226;&nbsp;</span>
                <ListItemText primary="Ingredient 3" />
              </ListItem>
              {/* Add more ingredients as needed */}
            </List>

            {/* Horizontal Divider */}
            <Divider orientation="horizontal" flexItem style={{ width: '100%', margin: '5px 0' }} />

            <h2 className="font-bold pt-5">Instructions:</h2>
            <List>
              <ListItem>
                <span className="bullet">&#8226;&nbsp;</span>
                <ListItemText primary="Step 1: Do something" />
              </ListItem>
              <ListItem>
                <span className="bullet">&#8226;&nbsp;</span>
                <ListItemText primary="Step 2: Do something else" />
              </ListItem>
              <ListItem>
                <span className="bullet">&#8226;&nbsp;</span>
                <ListItemText primary="Step 3: Finish up" />
              </ListItem>
              {/* Add more instructions as needed */}
            </List>
          </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRecipe