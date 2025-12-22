


const Sidebar = (wantToCook) => {
    return (
        
            <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold">
        Want to Cook ({wantToCook.length})
    </h2>

     <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th>#</th>
           <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            <th></th>
          </tr>
        </thead>

      <tbody>
        {wantToCook.map((recipe, index) => (
            <tr key={recipe.recipe_id}>
              <td>{index + 1}</td>
              <td>{recipe.recipe_name}</td>
              <td>{recipe.preparation_time} min</td>
              <td>{recipe.calories} kcal</td>
              <td>
                <button className="btn btn-sm bg-yellow-500">
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
            
    
    );
};

export default Sidebar;
