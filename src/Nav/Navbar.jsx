

const Navbar = () => {
    return (
                 <div className='flex gap-6 ml-4 w-full m-4'>
      
      <nav className='flex gap-8'>
        <h2 className='text-2xl '>Recipe Calories</h2>
       
       
      <ul className='text-blue-600 flex gap-8'>
        <li>Home</li>
        <li>Recipe</li>
        <li>About</li>
        <li>Search</li>
      </ul>
      <button className="btn btn-wide pr-14 rounded pl-2 text-center bg-gray-200">search</button>
       
      </nav> 
    
        </div>
    );
};

export default Navbar;