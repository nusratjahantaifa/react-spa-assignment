import { useEffect, useState } from "react";


const Recipes = () => {
   const [recipes, setRecipes] = useState([]) ;  
   useEffect(() =>{
    
fetch('recipes.json')
  .then(res => res.json())
  .then(data => setRecipes(data))
   }, []) 
   return (
    
        <div className="md:w-2/3 gap-4 text-center">
           <h1>Our Recipes</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis facilis nulla recusandae exercitationem totam obcaecati ipsum necessitatibus. Magni, pariatur animi. Inventore magni a ea suscipit 
            ad sapiente? Architecto, enim!</p>
          <div className="md:w-full flex justify-evenly">Recipes:{recipes.length}
 
          </div>
        </div>
        
    );
};

export default Recipes;