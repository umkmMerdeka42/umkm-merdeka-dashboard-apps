import React from "react";

const Alert = (message) => {
  return (
    <div className="bg-red-400 text-white text-xs md:text-base rounded-md text-center px-4 py-3 mb-5">
      <p>{message}</p>
    </div>
  )
}

export default Alert