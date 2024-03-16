import { Link } from 'react-router-dom';
import {useLogout} from '../hooks/useLogout'
import {useAuthContext} from '../hooks/useAuthContext'

const Navbar = () => {
  const {logout} = useLogout()
  const {user} = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <header className="bg-main-purple pt-10 px-10">
      <div className="text-white container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="font-mono font-bold text-4xl">Recipeas</h1>
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/recipes" className="hover:font-bold">
            <h1>Recipes</h1>
          </Link>
          <Link to="/add" className="hover:font-bold">
            <h1>Add</h1>
          </Link>
        </div>

        {user && (
          <div className="">
            <span className="pr-5">{user.email}</span>
            <button className="bg-second-purple hover:bg-main-blue font-bold py-1 px-9 rounded-full"
            onClick={handleClick}>Log out</button>
          </div>)}

        {!user && (
          <div>
            <Link to="/login">
            <button className="bg-second-purple hover:bg-main-blue font-bold py-1 px-9 rounded-full">
            Login
            </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
