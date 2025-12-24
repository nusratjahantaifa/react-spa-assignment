import PropTypes from 'prop-types'
import Sidebar from '../Sidebar/Sidebar';

function Recipe({ recipe, handleWantToCook }) {
  // Destructure the recipe object here, inside the function
  const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;

  return (
    <div className='card w-2/3 bg-gray-300 shadow-xl mt-4 ml-2 rounded p-2 gap-2'>
      <h1 className="text-2xl"> {recipe_name} </h1>
      <img src={recipe_image} alt='' />

      <p className='text-purple-500'>{short_description}</p>
      <ul className='text-blue-700 gap-2'> ingredients:
        {ingredients}
      </ul>
      <div className='flex gap-2 text-1xl'>
        <h4> {preparing_time}</h4>
        {calories}</div>

      <button onClick={() => handleWantToCook(recipe)}>
        Want to Cook
      </button>
      <Sidebar wantToCook={recipe || []} />
    </div>
  )
}
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default Recipe;

