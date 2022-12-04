import React from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <div className="font-semibold text-center">
      <h1>Hallo</h1>
      <h2>Selamat Datang { user && user.data.name}</h2>
    </div>
  )
}

export default Welcome;
