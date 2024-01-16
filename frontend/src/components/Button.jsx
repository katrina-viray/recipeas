import React, {useState} from 'react';

const Button = ({title}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
      };
      
    return (
        <div>
            <button 
                className={`${isClicked ? 'bg-main-blue': 'bg-white'} ${isClicked ? 'text-white': 'text-black'}
                ${isClicked ? 'border-slate-500': 'border'} ${isClicked ? 'drop-shadow': ''} ${isClicked ? 'border-none': ''} 
                ${isClicked ? 'hover:bg-blue-500': 'hover:bg-gray-300'} hover:border
                border-solid border font-bold py-1.5 w-36 rounded-full hover:drop-shadow`}
                onClick={handleClick}
                >{title}
            </button>
        </div>
    )
}

export default Button