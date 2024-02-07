import React from 'react'
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate("/login");
    };

  return (
    <div className="h-full flex items-center justify-center mt-24 relative">
      <div className="rounded-lg p-8 max-w-md w-full flex flex-col items-center relative z-10">
        <h1 className="text-9xl font-bold mb-24 text-white relative ">
        Invoicer
        </h1>
        <p className=" text-white text-center font-semibold text-lg">
  Invoicing app for managing payments and finances.
</p>

          <button onClick={handleButtonClick} className=" mt-5 btn-outline btn-primary hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:animate-glow">
            Login
          </button>
      </div>
    </div>
  )
}

export default LandingPage
