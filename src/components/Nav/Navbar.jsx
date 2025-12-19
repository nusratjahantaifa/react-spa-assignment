import person from '../../assets/img/person-fill (1).svg'
const Navbar = () => {
    return (
                 <div  className='flex justify-between 
        item-center p-4 border-b-2
         max-w-7xl mx-auto'>
      
      <nav className='flex gap-8'>
        <h2 className='text-2xl '>Recipe Calories</h2>
       
       
      <ul className='text-blue-600 flex gap-8'>
        <li>Home</li>
        <li>Recipe</li>
        <li>About</li>
        <li>Search</li>
      </ul>
      <button className="btn btn-wide pr-14 rounded pl-2 text-center bg-gray-200">search</button>
       <img src= {person} alt=""/>
      </nav> 
    
        </div>
        
    );
};

export default Navbar;