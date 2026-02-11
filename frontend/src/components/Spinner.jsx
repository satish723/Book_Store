import React from 'react'
function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="animate-ping  w-16 h-16 bg-red-600 rounded-full " ></div>
    </div>
  )
}

export default Spinner