const Button = ({title}) => {
    return (
        <div>
            <button className="bg-white border-solid border hover:bg-main-blue
                 hover:text-white hover:border hover:drop-shadow 
                hover:outline-none font-bold py-1 w-36
                  rounded-full">{title}</button>
        </div>
    )
}

export default Button