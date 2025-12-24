 import { useState } from "react";
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Nav/Navbar'
import Recipes from './components/Recipes/Recipes'

import { ToastContainer, toast } from "react-toastify";

function App() {
    const [wantToCook, setWantToCook] = useState([]);
    const handleWantToCook = (recipe) => {
    const exists = wantToCook.find(item => item.recipe_id === recipe.recipe_id);


 if (exists) {
      toast.error("You already added this recipe!");
      return;
    }

    setWantToCook([...wantToCook, recipe]);
   } 
         return(
   <>
 <ToastContainer position="top-center" />
  <Navbar></Navbar>
   <Banner></Banner>
 <div className='md:flex'>
 <Recipes
  handleWantToCook={handleWantToCook}
></Recipes> 


</div>
 </>     
  );
}

export default App;
