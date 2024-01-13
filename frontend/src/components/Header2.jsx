import Navbar from './Navbar'

const Recipe = ({title, logo}) => {
    return(
        <div className="mx-auto flex justify-between items-center pt-1.5">
            <div className="rounded-3xl p-32 bg-main-purple">
                <Navbar />
                <h2 className="font-bold text-7xl text-white pr-28 pl-10">{title}</h2>
                <img src={logo} alt="Logo" className="h-80 w-80"></img>
            </div>
        </div>
    )
}

export default Recipe