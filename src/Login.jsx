import React from "react";

function Login(){
    return(
        <div>
        <nav className="absolute inset-0 w-full h-16 bg-blue-600 text-white flex justify-between items-center px-6   left-0 right-0 top-0">
         <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Happy Restraunt</h1>
          <nav className="absolute  left-1/2 -translate-x-1/2flex space-x-4">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">About</a>
              <a href="#" className="hover:text-gray-300">Contact</a>
              <a href="#" className="hover:text-gray-300">Pages</a>
          </nav>
          <button className="bg-red-700 p-3 rounded w-20">Login</button>
          </div>
      </nav>
      </div>
    )
}

export default Login;