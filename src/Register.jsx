import React, { useState } from "react";

const Register=()=>
{
    const[data,setdata]=useState({
        name:"",
        email:"",
        Phone:""
    })

    const handlechange=(e)=>
    {
       const {value,name}=e.target
       setdata((newdata)=>({...newdata,[name]:value})) 
    }
    
    return(
        <div className="h-screen flex justify-center items-center">
        <div className="flex items-center justify-center h-100 w-200 bg-gray-300">
        <div className=" w-full max-w-md bg-gray-200 rounded-lg h-80">
        <div className="font-bold text-2xl p-5">Registration</div>
        <div className="p-4">  
        <form >
        <div className="mb-4 text-left ">
        <label className="text-medium ml-6 ">Name</label>
        <input 
        type="text"
        value={data.name}
        name="name"
        onChange={handlechange}
        className=" border-2 w-50 ml-25"
        />
        </div>
        <div className="mb-4 text-left  ">
        <label className="text-medium ml-6">E-mail ID</label>
        <input 
        type="text" 
        value={data.email}
        name="email"
        onChange={handlechange}
        className="border-2 w-50 ml-20"
        />
        </div>
         <div className="mb-4 p-0.5 text-left">
        <label className="text-medium ml-6 "> Phone number</label>
        <input 
        type="text" 
        value={data.Phone}
        name="phone"
        onChange={handlechange}
        className="border-2 w-50 ml-10"
        />
        </div>
        <div className="p-5">
        <button className="bg-red-500 h-8 w-20 rounded ">Continue</button>
        </div>
       </form>
       </div>  
       </div>
       </div>
       </div>
    )
}
export default Register