import React, { useState } from "react";

const Login2=()=>
{

    const[data,setdata]=useState({
        name:"",
        password:""
    })
    const handlechange=(event)=>
    {
      const{name,value}=event.target
      setdata((newdata)=>({
        ...newdata,[name]:value
      }))
    }
    return(
        <div className="flex justify-center items-center w-200 h-100 ml-70 mr-70 bg-gray-100">
        <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
            <h1 className=" text-center font-bold text-2xl p-6" >Login</h1>
            <form className="flex flex-col gap-6 justify-center items-center ">
            <div className="">
                <label className="mb-1 font-medium">Username</label>
                <input 
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handlechange}
                    className="border rounded p-2 w-full bg-transparent"
                    placeholder="Enter Username"
                />
            </div>
               
                <div className="flex flex-col w-80 px-6">
                <label className="mb-1 font-medium">Password</label>
                <input 
                type="text"
                name="password"
                value={data.password}
                onChange={handlechange}
                className="border rounded p-2 w-full bg-transparent"
                placeholder="Enter password"
                />
                </div>
               
                <button className="border rounded  bg-red-500 w-30 justify-center items-center">Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login2;