import Navbar from './Navbar'

const Recipe = ({title, logo}) => {
    return(
        <div className="container rounded-lg bg-main-purple">
            <Navbar />
            <div className=" mx-auto flex justify-between items-center">
                <h2 className="font-bold text-7xl text-white pr-28 pl-10">{title}</h2>
                <img src={logo} alt="Logo" className="h-80 w-80"></img>
            </div>
        </div>
    )
}

export default Recipe