import React from 'react'

const Spinner = () => {
  return (
    <div className="fixed spinner inset-0 bg-black/50 flex justify-center items-center">
      <div className="flex justify-center items-center space-x-2">
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-sky-600" role="status"></div>
        <div className="spinner-grow hidden md:inline-block w-8 h-8 bg-current rounded-full opacity-0 text-sky-500" role="status"></div>
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-sky-400" role="status"></div>
        <div className="spinner-grow hidden md:inline-block w-8 h-8 bg-current rounded-full opacity-0 text-sky-300" role="status"></div>
        <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-sky-200" role="status"></div>
      </div>
    </div>
  )
};

export default Spinner;
