import React, { useState } from "react";

const Basicinfo=()=>
{
    const[data,setdata]=useState({
      name:"",
      professional:"",
      about:"",
    })

    const[contact,setcontact]=useState({
      contactno:"",
      country:"",
      city:"",
      email:"",
      pincode:"",
      address:""
    })

    const handlechange=(event)=>
    {
      const{value,name}=event.target
      setdata((newdata)=>({
        ...newdata,[name]:value
      }))
    }

     const handlecontact=(event)=>
     {
       const{value,name}=event.target
     }

    return(

            <div className=" absolute w-full left-0 bg-gray-400 h-screen flex">
                <div className="w-1/3 bg-red-400 p-6 ">  
                   <div className="w-full flex flex-col items-center">
                     <div className="w-30 h-30 rounded-2xl justify-center items-center bg-amber-300 ml-5 "></div>
                     <span className="font-bold">David Matin</span><br/>
                     <span>Web Developer</span>
                   </div>
                    <div className="mt-20 space-y-3">
                      <div className="p-2 border-1 ">Profile</div>
                      <div className="p-2 border-1 ">My Cart</div>
                      <div className="p-2 border-1 ">Wishlist</div>
                      <div className="p-2 border-1 ">Shop</div>
                      <div className="p-2 border-1 ">Help Desk</div>
                      <div className="p-2 border-1 ">Logout</div>
                    </div>      
                </div>

                <div className="w-2/3 p-8"> 
                  <div className="mb-4 text-left font-bold">BASIC INFORMATION</div>
                  <hr className="border-black border-t-4"/>
                    <form className="space-y-6 max-w-md ">
                      <div>
                      <label className="block text-left">Full Name</label>
                      <input 
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handlechange}
                      className=" w-full p-2 border-2"
                      />
                      <br/>
                      </div>
                      <div>
                       <label className="block text-left">Professional Title*</label>
                      <input 
                      type="text"
                      name="professioanl"
                      value={data.professional}
                      onChange={handlechange}
                      className="w-full p-2 border-2"
                      />
                      <br/>
                      </div>
                      <div>
                       <label className="block text-left">About</label>
                      <input 
                      type="text"
                      name="about"
                      value={data.about}
                      onChange={handlechange}
                      className="w-full p-2 border-2 "
                      />
                      </div>
                    </form>
                    <br/>
                  
                    <div className="font-bold text-left mb-4">CONTACT INFORMATION</div>
                    <hr className="bg-black border-t-4 w-full"/>
                    <div>
                      <form className="space-y-6 max-w-md grid grid-cols-2 gap-4 ">
                        <div>
                        <label className="block text-left">Contact Number</label>
                        <input
                        type="text"
                        name="contactno"
                        value={setcontact.contactno}
                        onChange={handlecontact}
                        className="border-2 w-full p-2"
                        />
                        </div>
                        <div>
                        <label className="block text-left">Country</label>
                        <input
                        type="text"
                        name="country"
                        value={setcontact.country}
                        onChange={handlecontact}
                        className="border-2 w-full p-2"
                        />
                        </div>
                        <div>
                        <label className=" block text-left">Country</label>
                        <input
                        type="text"
                        name="city"
                        value={setcontact.city}
                        onChange={handlecontact}
                        className="border-2 w-full p-2"
                        />
                        </div>
                        <div>
                          <label className="text-left block">E-mail Address</label>
                          <input
                           type="text"
                           name="email"
                           value={setcontact.email}
                           onChange={handlechange}
                           className="border-2 w-full p-2"
                          />
                        </div>
                        <div>
                          <label className="text-left block">Pincode</label>
                          <input
                           type="text"
                           name="pincode"
                           value={setcontact.pincode}
                           onChange={handlechange}
                           className="border-2 w-full p-2"
                          />
                        </div>
                        <div>
                          <label className="block text-left">Full Address</label>
                          <input
                            type="text"
                            name="address"
                            value={setcontact.address}
                            onChange={handlechange}
                            className="border-2 w-full p-2"
                          />
                        </div>
                           <div className="col-span-2 justify-center items-center"><button className="bg-red-500 h-15 w-30 rounded ">Save Setting</button></div>
                      </form>
                    </div> 
                </div>
            </div>
      
    )
}

export default Basicinfo