import React, { useContext } from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

export default function RecipeList(props) {

    return (
        <>
            <RecipeSearch></RecipeSearch>
            <div className="container my-5 home-button">
                {props.showHomeButton && <button type="button"
                    className="btn btn-warning"
                    onClick={() => props.handleReturnHome()}>
                    Go Back Home
        </button>}
                <div className=" d-flex d-flex justify-content-center mb-3">
                    <h1 className="text-slaned ">Recipe List</h1>
                </div>

                <div className="row recipe-list">
                    {props.recipes.map(recipe => {
                        return <Recipe
                            key={recipe.recipe_id} recipe={recipe} />
                    })}
                </div>
            </div>
        </>
    )
}