import Navbar from '../components/Navbar'
import logo from '../assets/food-logo.png'

const Home = () => {
    return(
        <div>
            <Navbar/>
            <div className="flex flex-col">
            <div className="bg-gradient-to-t from-white to-main-purple h-full min-h-screen">
                <div className="flex items-center justify-center h-screen">
                    <div className="text-white text-center ">
                        <h2 className="font-bold text-3xl">Welcome to Katnando's Recipeas!</h2>
                        <p className="text-xl ">Organize your recipes easily with Recipeas.</p>
                        <img src = { logo } alt = "Logo " className="mx-auto flex justify-between items-center py-14"></img>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home