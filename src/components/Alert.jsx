import React from "react";

const Alert = (message) => {
  return (
    <div className="bg-red-400 text-white text-sm md:text-base rounded-md text-center px-4 py-3">
      <p><strong>Error! </strong>{message}</p>
    </div>
  )
}

export default Alert