import React from "react";

const Footer = () => {
  return (
    
  <div className=" container flex-grow "> 
  <div className="">
  <footer className="bg-blue-600 w-full py-10 p-4 absolute left-0 ">
    <div className="container  flex flex-col md:flex-row justify-between items-center md:items-start max-w-screen-lg px-5">
      
      <div className="w-full md:w-1/3 text-center md:text-left">
        <h1 className="font-bold text-lg text-white">Robert Food</h1>
        <p className="text-white">1986 Hilltop Drive, Borger, TX 79007</p>
        <p className="text-white">7:30 AM - 9:30 PM</p>
        <p className="text-white">+880 1630-225015</p>
        <p className="underline cursor-pointer text-white">Click to View Google Map</p>
      </div>

      <div className="w-full md:w-1/3 text-center md:text-left mt-6 md:mt-0">
        <h1 className="font-bold text-lg text-white">Mark A. Reed Food</h1>
        <p className="text-white">4877 Rose Avenue, New Orleans, LA 70112</p>
        <p className="text-white">7:30 AM - 9:30 PM</p>
        <p className="underline cursor-pointer text-white">Click to View Google Map</p>
      </div>

      <div className="w-full md:w-1/3 text-center md:text-left mt-6 md:mt-0">
        <h1 className="font-bold text-lg text-white">Karie K. Hill Food</h1>
        <p className="text-white">1509 Peaceful Lane, Cleveland, OH 44115</p>
        <p className="text-white">7:30 AM - 9:30 PM</p>
        <p className="underline cursor-pointer text-white">Click to View Google Map</p>
      </div>

    </div>
  </footer>
  </div>
</div>



    // <footer className="mx-auto bg-gray-800 text-white py-6 border-t boreder-red-400 w-full ">
    // <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
    // <nav className="flex space-x-4">
    //       <a href="#home" className="hover:underline">Home</a>
    //       <a href="#about" className="hover:underline">About</a>
    //       <a href="#contact" className="hover:underline">Contact Us</a>
    //     </nav>

    //     {/* Center - Contact Details */}
    //     <div className="text-center md:text-left mt-4 md:mt-0">
    //       <p>Email: support@busbooking.com</p>
    //       <p>Contact: +123 456 7890</p>
    //     </div>

    //     {/* Right - Copyright Information */}
    //     <div className="mt-4 md:mt-0">
    //       <p>&copy; {new Date().getFullYear()} Bus Booking. All rights reserved.</p>
    //     </div>
    // </div>  
    // </footer>


    // <footer className="  px-4 md:px-16 lg:px-28">
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
    //    <div>
    //     <h2 className="text-lg font-bold mb-4">Bout us</h2>
    //    </div>
    //   </div>
    // </footer>
  );
};


export default Footer