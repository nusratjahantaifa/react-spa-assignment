
import './App.css'
 import Banner from './components/Banner/Banner'
import Navbar from './components/Nav/Navbar'
 import Recipes from './components/Recipes/Recipes'
import Tables from './components/Tables/Tables'

function App() {
   return (
    <>
   <Navbar></Navbar>
   <Banner></Banner> 
   <div className='md:flex'>
<Recipes></Recipes>
<Tables></Tables>
   </div>
    </>
  )
}

export default App
