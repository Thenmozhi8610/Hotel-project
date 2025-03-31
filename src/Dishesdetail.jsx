import React from "react";

const Dishesdetail=()=>
{
    return(
      <div className=" flex justify-center items-center">

        <div className="w-full overflow-x-auto ">    
            {/* for table */}
        <div className=" grid grid-cols-5 p-2 bg-red-500  ">    
            <div className="font-bold p-2">Product</div>
            <div className="font-bold p-2">ProductName</div>
            <div className="font-bold p-2">UserPrice</div>
            <div className="font-bold p-2">Quantity</div>
            <div className="font-bold p-2">Add to cart</div>  
        </div>

        <div className=" ">
        <div className="grid grid-cols-5 p-2">
            <div><img src="9.png" alt="" className="w-20 h-20 "/></div>
            <div className="mt-10">Chicken Skewers</div>
            <div className="mt-10">100</div>
            <div className="mt-10">1</div>
            <button className="bg-red-500 rounded h-10 w-30 mt-10">Add Cart</button>
        </div>

        <div className="grid grid-cols-5 p-2">
        <div><img src="9.png" alt="" className="w-20 h-20"/></div>
            <div className="mt-10">Chicken Skewers</div>
            <div className="mt-10">100</div>
            <div className="mt-10">1</div>
            <button className="bg-red-500 rounded h-10 w-30 mt-10">Add Cart</button>
        </div>

        <div className="grid grid-cols-5 p-2">
        <div><img src="9.png" alt="" className="w-20 h-20"/></div>
            <div className="mt-10">Chicken Skewers</div>
            <div className="mt-10">100</div>
            <div className="mt-10">1</div>
            <button className="bg-red-500 rounded h-10 w-30 mt-10">Add Cart</button>
        </div>

        <div className="grid grid-cols-5 p-2">
        <div><img src="9.png" alt="" className="w-20 h-20"/></div>
            <div className="mt-10">Chicken Skewers</div>
            <div className="mt-10">100</div>
            <div className="mt-10">1</div>
            <button className="bg-red-500 rounded h-10 w-30 mt-10">Add Cart</button>
        </div>

        <div className="grid grid-cols-5 p-2">
        <div><img src="9.png" alt="" className="w-20 h-20"/></div>
            <div className="mt-10">Chicken Skewers</div>
            <div className="mt-10">100</div>
            <div className="mt-10">1</div>
            <button className="bg-red-500 rounded h-10 w-30 mt-10">Add Cart</button>
        </div>
        </div>
      </div>
      </div>
    )
}
export default Dishesdetail