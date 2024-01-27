import { useRecipesContext } from '../hooks/useRecipesContext';
import logo from '../assets/single-recipe-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/RecipeHeader.jsx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import React, { useState } from 'react';
import ConfirmationModal from '../components/ConfirmationModal.jsx'

const SingleRecipe = ({ recipe }) => {
  const { dispatch } = useRecipesContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = async () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    const response = await fetch('/api/recipes/' + recipe._id, {
      method: 'DELETE',
    });
    // document which is just deleted is saved in json
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_RECIPE', payload: json });
    }
    setIsModalOpen(false); // Close the modal after deleting
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false); // Close the modal if canceled
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-main-gray items-center">
      <Header title="Overnight Oats" logo={logo} />
      <div className="RecipeList flex items-start pt-9 h-screen">
        <div className="bg-white pt-6 pb-6 px-10 rounded-3xl relative">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div>
                <p>Serving Size:</p>
              </div>
              <Divider orientation="vertical" flexItem />
              <div>
                <p>1</p>
              </div>
            </div>
            <Divider
              orientation="vertical"
              flexItem
              style={{ height: '50px' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div className="flex">
                <p>Cook Time:</p>
                <button
                  onClick={handleClick}
                  className="text-black hover:text-second-purple"
                  style={{ position: 'absolute', top: '18px', right: '22px' }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                {isModalOpen && (
                <ConfirmationModal
                    message="Are you sure you want to delete this recipe?"
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                  />
                )}
              </div>
              <Divider orientation="vertical" flexItem />
              <div>
                <p>30 minutes</p>
              </div>
            </div>
          </div>

          <Divider
            orientation="horizontal"
            flexItem
            style={{ width: '600px', margin: '10px 0' }}
          />

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
            </List>

            <Divider
              orientation="horizontal"
              flexItem
              style={{ width: '100%', margin: '5px 0' }}
            />

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
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
