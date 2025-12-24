 
    // import React, { useState, useEffect } from 'react';

    // function Sidebar({ initialWantToCookData }) {
    //   const [wantToCook, setWantToCook] = useState(initialWantToCookData || []); // Initialize with an empty array if initial data is not provided or is null/undefined

    //   useEffect(() => {
    //     // Example: If data is fetched asynchronously
    //     if (initialWantToCookData) {
    //       setWantToCook(initialWantToCookData);
    //     }
    //   }, [initialWantToCookData]);

    //   // ... rest of your component code
    // }
    
// const Sidebar = (wantToCook) => {
//     return (
        
//             <div className="p-4 border rounded-lg">
//       <h2 className="text-xl font-bold">
//         Want to Cook ({wantToCook.length})
//     </h2>

//      <table className="table-auto w-full mt-4">
//         <thead>
//           <tr>
//             <th>#</th>
//            <th>Name</th>
//             <th>Time</th>
//             <th>Calories</th>
//             <th></th>
//           </tr>
//         </thead>
//     <tbody>
//         {Array.isArray(wantToCook) && wantToCook.map((recipe, index) => ( // Add Array.isArray check
//             <tr key={recipe.recipe_id}>
//               <td>{index + 1}</td>
//               <td>{recipe.recipe_name}</td>
//               <td>{recipe.preparation_time} min</td>
//               <td>{recipe.calories} kcal</td>
//               <td>
//                 <button className="btn btn-sm bg-yellow-500">
//                   Preparing
//                 </button>
//               </td>
//             </tr>
//           ))}
        
//         </tbody> 
//       </table>
      
//     </div>
            
    
//     );
// };

// export default Sidebar;
const Sidebar = ({ wantToCook }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Want to Cook ({wantToCook.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="px-3 py-2 border">#</th>
              <th className="px-3 py-2 border">Name</th>
              <th className="px-3 py-2 border">Time</th>
              <th className="px-3 py-2 border">Calories</th>
              <th className="px-3 py-2 border"></th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(wantToCook) &&
              wantToCook.map((recipe, index) => (
                <tr
                  key={recipe.recipe_id}
                  className="hover:bg-gray-50 text-sm"
                >
                  <td className="px-3 py-2 border">{index + 1}</td>
                  <td className="px-3 py-2 border font-medium">
                    {recipe.recipe_name}
                  </td>
                  <td className="px-3 py-2 border">
                    {recipe.preparation_time} min
                  </td>
                  <td className="px-3 py-2 border">
                    {recipe.calories} kcal
                  </td>
                  <td className="px-3 py-2 border">
                    <button className="px-3 py-1 text-xs rounded bg-yellow-500 text-white hover:bg-yellow-600 transition">
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
