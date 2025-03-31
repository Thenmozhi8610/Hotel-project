import React from "react";

const Home=()=>
{
    return(
      
        <div className=" absolute inset-0 w-full min-h-screen flex flex-col overflow-hidden   bg-amber-200 ">
          <div className="  w-full h-full ">
           <div className="flex justify-center items-center  w-full  ">
             <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-10">
             <div className="text-center md:text-left space-y-4">  
             <div className="text-red-800">Best in Town</div>
             <div className="text-blue-950 text-5xl font-mono ">ENJOY OUR CHICKEN <br/> BURGER FAST FOOD</div>
            </div>  

           <div>
              <img src="image1.png" alt="Burger" className="w-100 md:w-100 object-contain" />
           </div>

           <div className="col-span-2 justify-center items-center w-full left-300"><button className=" bg-red-500 w-30 h-10 rounded">Order Now</button></div>
           </div>
           </div>

        {/* popular dishes */}

        <div className="p-20 flex flex-col items-center">
  <div>Food items</div>
  <div className="font-bold text-4xl text-red-500 p-2">Popular Dishes</div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-8 w-full max-w-6xl place-items-center">
    {["popul1.png", "popul2.png", "popul3.png", "popul4.png", "popul5.png"].map((src, index) => (
      <div key={index} className="w-full">
        <img src={src} alt={`Popular dish ${index + 1}`} className="h-[150px] w-[300px] object-cover rounded-lg shadow-lg" />
      </div>
    ))}
  </div>
</div>



       <div>
         <div className="p-2">RICH & HEALTHY</div>
         {/* <div className="text-red-500 text-3xl">Highly quality artisangrains,proteins & seasonal ingredients</div> */}
         {/* <div className="flex">
         <img src="man.png" alt="" className="w-50 h-100"/>
         <div ></div>
         <img src="" alt="" />
         </div> */}
         <div className="p-5 flex ">
          <div className="w-1/2 ">
           <img src="man.png" alt="" className="h-120 w-120  sm:w-50 sm:h-80 md:w-80 md:h-100  rounded-3xl ml-15 sm:ml-15 md:ml-40" />
          </div>
          <div className="w-2/2 ">
            <p className="text-red-500 font-bold text-4xl text-left ml-10 sm:ml-30  md:ml-30 ">Highly quality artisangrains,<br/>proteins & seasonal ingredients</p>
            <p className="text-left sm:ml-23 md:ml-23 p-7">Righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure <br/> of the moment, so blinded by desires, that they cannot foresee.</p>
            <ol className="list-decimal pl-5 text-left sm:ml-30 md:ml-30">
              <li>Simple and easy to distinguish</li>
              <li>Pleasure of the momentblinded desire</li>
              <li>Able to do what we like best</li>
            </ol>
            <button className="h-10 w-40 bg-red-600 rounded-2xl mt-5">Read More</button>
          </div>
         </div>
       </div>

       <div className="p-20">
        <p className="font-medium text-red-500 text-3xl">Bigg Offer</p>
        <p className="p-5 text">For in this week, take your food, buy your best one.</p>
        <div className=" grid grid-cols-3 gap-3 md:ml-20">
         <img src="banner1.png" alt=""  className="  sm:h-25 md:w-100 md:h-50"/>
         <img src="banner2.png" alt="" className="sm:h-25 md:w-100 md:h-50" />
         <img src="banner3.png" alt="" className="sm:h-25 md:w-150 md:h-50" />
        </div>
       </div>

       <div>
        <p className="text-red-500 ">SPECIALS</p>
        <p className="text-blue-950 text-2xl font-medium p-3">Check out our menu</p>
        <p>Demoralized by the charms of pleasure of the moment so blinded except to some advantage.</p>
          <div className="grid grid-cols-5  p-5 ml-15 sm:ml-15 md:ml-35">
            <button className="bg-white sm:h-10 sm:w-30 md:h-10 md:w-60 ">BREAKFAST</button>
            <button className="bg-white sm:h-10 sm:w-30 md:h-10 md:w-60">LUNCH</button>
            <button className="bg-white sm:h-10 sm:w-30 md:h-10 md:w-60">DINNER</button>
            <button className="bg-white sm:h-10 sm:w-30 md:h-10 md:w-60">STARTERS</button>
            <button className="bg-white sm:h-10 sm:w-30 md:h-10 md:w-60">BEVERAGES</button>
          </div>
          <div className="flex">
          <div className="w-1/2 sm:ml-20 md:ml-40">
            <img src="perfectbreakfast.png" alt="" className="sm:h-90 sm:w-60 md:w-100 md:h-100"/>
          </div>
          <div className="w-2/2 text-left sm:ml-10">
            <div className="p-1">
            <p className="text-red-500">Gazpacho Garlic</p>
            <p>Chilled tomato, cucumber, garlic, red pepper soup.</p>
            </div>
            <hr className="border-t-2 border-gray-500  md:w-1/2 sm:w-1/0.5" />
            <div className="p-1">
            <p className="text-red-500">Pan Con Berenjina Frita</p>
            <p>Marinated seabass with sour sauce, dill & coriander on bread.</p>
            </div>
            <hr className="border-t-2 border-gray-500  md:w-1/2 sm:w-1/0.5" />
            <div className="p-1">
            <p className="text-red-500">New Lubina Marinada</p>
            <p>Fried aubergine with almond on bread (2 pieces).</p>
            </div>
            <hr className="border-t-2 border-gray-500  md:w-1/2 sm:w-1/0.5" />
            <div className="p-1">
            <p className="text-red-500">Gazpacho</p>
            <p>Atlantic cod fillet, chips, salad, tartare, lemon.</p>
            </div>
            <hr className="border-t-2 border-gray-500  md:w-1/2 sm:w-1/0.5" />
            <div className="p-1">
            <p className="text-red-500">Coconut Chia Bowl</p>
            <p>Marinated seabass with sour saucel & coriander on bread.</p>
            </div>
            <hr className="border-t-2 border-gray-500  md:w-1/2 sm:w-1/0.5" />
            <div className="p-1">
            <p className="text-red-500">New Lubina Marinada</p>
            <p>Atlantic cod fillet, chips, salad, tartare, lemon.</p>
            </div> 
          </div>
          </div>
       </div>

        </div>
        </div>

        
    )
}

export default Home