const Button = ({title}) => {
    return (
        <div>
            <button className="bg-white border-solid border hover:bg-main-blue
                 hover:text-white hover:border-slate-500 hover:drop-shadow 
                hover:outline-none font-bold py-1.5 w-36
                  rounded-full">{title}</button>
        </div>
    )
}

export default Button