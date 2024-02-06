import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate("/");
    };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-bold text-center mb-4">ERROR</h1>
      <p className="text-lg pb-3">Not Found</p>
      <button onClick={handleButtonClick} className="btn btn-outline">Go back</button>
    </div>
  );
}

export default NotFound;
