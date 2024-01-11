import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="bg-main-purple py-10">
            <div className="text-white container mx-auto flex justify-between items-center">
                <Link to="/">
                    <h1 className="font-mono font-bold text-4xl">Recipeas</h1>
                </Link>
                <Link to="/recipes">
                    <h1 className="hover:font-bold">Recipes</h1>
                </Link>
                <Link to="/add">
                    <h1 className="hover:font-bold">Add</h1>
                </Link>
                <Link to="/login">
                    <button className="bg-second-purple hover:bg-main-blue font-bold py-1 px-9 rounded-full">Login</button>
                </Link>
            </div>
        </header>
    )
}

export default Navbar