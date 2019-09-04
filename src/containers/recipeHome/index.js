import React, { useContext, useState, useEffect  } from 'react';
import Recipe from '../../components/recipe/Recipe';
import { RecipeContext } from './Context'

let api = `https://api.myjson.com/bins/t7szj`
const apiKey = `7cdab426afc366070dab735500555521`
function RecipeHome() {
    let url = `https://www.food2fork.com/api/search?key=${apiKey}`
    const [showHomeButton, setShowHomeButton] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    const appContext = useContext(RecipeContext)

    const fetchRecipe = async () => {
        try {
            const recipeData = await fetch(api)
            const { recipes } = await recipeData.json()
            setRecipes(recipes)
            setLoading(false)
            console.log(recipes)
        } catch (e) {
            if (e) {
                console.log(e.message, 'Try updating the API key')
            }
        }
    }

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        setLoading(true)
        const searchUrl = `${url}&q=${search}`
        const searchedRecipeData = await fetch(searchUrl)
        const { recipes } = await searchedRecipeData.json()
        setRecipes(recipes)
        setLoading(false)
        setShowHomeButton(true)
    } catch (e) {
        console.log(e)
    }
}
const handleSearchChange = (e) => {
    setSearch(e.target.value)
}
const handleReturnHome = () => {
    fetchRecipe()
    setShowHomeButton(false)
}

useEffect(() => {
    fetchRecipe()

}, [])
    return (
        <div className="maindiv" style={{paddingTop:30}}>
            {loading ? <h1 className="text-center">...fetching {search} recipe</h1> :
                <div>
                    <div className="container d-flex justify-content-center my-5">
                        <form className="form-inline" onSubmit={(e) => handleSubmit(e)}>
                            <label htmlFor="search" >Search:&nbsp;&nbsp;</label>
                            <input data-age="Love" onChange={(e) => handleSearchChange(e)} type="text" className="form-control" id="search" placeholder="coffeee" name="search" />&nbsp;
                            <button type="submit" className="btn btn-primary" >submit<i className="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className="container my-5 home-button">
                        {showHomeButton && <button type="button"
                            className="btn btn-warning"
                            onClick={() => handleReturnHome()}>
                            Go Back Home
        </button>}
                        <div className=" d-flex d-flex justify-content-center mb-3">
                            <h1 className="text-slaned ">Recipe List</h1>
                        </div>

                        <div className="row recipe-list">
                            {recipes.map(recipe => {
                                return <Recipe
                                    key={recipe.recipe_id} recipe={recipe} />
                            })}
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default RecipeHome;