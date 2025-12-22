import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
// import Sidebar from "../Sidebar/Sidebar";
const Recipes = () => {
   
   const [recipes, setRecipes] = useState([]) ;  
   useEffect(() =>{
    
fetch('recipes.json')
  .then(res => res.json())
  .then(data => setRecipes(data))
   }, []) 
   return (
      
        <div className="md:w-2/3">

  <div className="text-center bg-gray-100 gap-2">
     <h1 className="text-2xl">Our Recipes</h1>
          <p>
            Discover the perfect recipe card template for chefs and restaurants.
             Easily create, update, and test customer-favorite recipes.
             Start organizing with our customizable template today!

          
          </p> <h1 className="text-2xl">Recipes: {recipes.length}</h1>
  </div>
   <div className="grid grid-cols-2">
             {
              recipes.map(recipe => <Recipe key={recipe.recipe_id}
              recipe={recipe}></Recipe>) 
            }
     </div>      
     
</div>
 
   
    );
};

export default Recipes;