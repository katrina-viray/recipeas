const Button = ({title}) => {
    return (
        <div>
            <button className="bg-white border-solid border hover:bg-main-blue
                 hover:text-white hover:border hover:drop-shadow 
                 hover:border-slate-200 font-bold py-1 px-9
                  rounded-full">{title}</button>
        </div>
    )
}

export default Button