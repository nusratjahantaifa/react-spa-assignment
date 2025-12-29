
//   import background from '../../assets/img/7802632.jpg'
//  import Image from '../../assets/img/7802632.jpg'
const Banner = () => {
    return (

<div className="h-screen bg-[url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-black items-center justify-center">
 <div className="text-center pt-8">
     <h1 className="text-4xl">
    Discover an exceptional cooking 
          class tailored for you!
  </h1>
 
  <p>
    Paul Friedman is a Master Chef with over 40 
    years of experience in the restaurant industry,
    having owned and operated over 50 successful 
    restaurant concepts in South Africa, Germany, 
    and the U.S. Paul began his career as a manager
    and worked his way up to franchise owner,
            then Director of Operations. 
</p>
       <div className="text-center">
         <button className="bg-green-500 p-2 m-2 rounded">Explore Now</button>
       
        <button className="bg-gray-400 p-2 m-2 rounded">Our Feedback</button>
        </div>
</div>
</div>
);
};

export default Banner;