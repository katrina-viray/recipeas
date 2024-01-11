import logo from '../assets/recipes-logo.png'

const Home = () => {
    return(
        <div className="">
            <div className="Recipes">
                {recipes && recipes.map(() => (
                    <p key={ recipe._id }>{ recipe.title }</p>
                ))}
            </div>
        </div>
    )
}

export default Home