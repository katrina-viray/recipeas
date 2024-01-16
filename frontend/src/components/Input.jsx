import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const AddButtonForm = () => {
  const [inputBars, setInputBars] = useState([]);

  const handleAdd = () => {
    const newId = inputBars.length + 1;
    setInputBars([...inputBars, { id: newId }]);
  };

  const handleDelete = (id) => {
    const updatedInputBars = inputBars.filter((bar) => bar.id !== id);
    setInputBars(updatedInputBars);
  };

  return (
    <div>
      {inputBars.map((inputBar) => (
        <div key={inputBar.id} className="relative mb-4 flex items-center">
          <input
            type="text"
            className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"
            placeholder="Type here..."
          />
          <div className="pl-5">
            <button
                onClick={() => handleDelete(inputBar.id)}
                className="text-black hover:text-second-purple"
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
      <div className="relative flex items-center">
        <input
          type="text"
          className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"
          placeholder="Type here..."
        />
        <button
          onClick={handleAdd}
          className="bg-white text-main-purple hover:bg-main-blue hover:text-white py-1 px-2 rounded-3xl ml-3"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default AddButtonForm;
