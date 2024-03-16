import Navbar from './Navbar'

const Recipe = ({title, logo}) => {
    return(
        <div className="mx-auto bg-main-purple px-3">
            <Navbar />
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-7xl text-white pr-28 pl-10">{title}</h2>
                    <img src={logo} alt="Logo" className="h-80 w-80 max-w-full"></img>
                </div>
            </div>
        </div>
    )
}

export default Recipe
