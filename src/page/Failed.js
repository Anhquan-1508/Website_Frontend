import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Failed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="bg-red-300 w-full max-w-md m-auto h-40 flex flex-col justify-center items-center font-semibold text-lg rounded-lg shadow-md p-4">
      <p className="text-red-800">Payment Failed</p>
      <p className="text-sm text-gray-700 mt-2">Please try again later.</p>
      <p className="text-xs text-gray-500 mt-1">Redirecting to homepage...</p>
    </div>
  );
};

export default Failed;
