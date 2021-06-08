import React from 'react'

function Header(props) {
  return (
    <div className="mx-auto mb-4 w-full bg-red-200 font-serif text-center  shadow-lg border-2 hover:border-red-500 hover:text-red-600 active:bg-red-300">
      <h1 onClick={()=>{props.homeFunc()}} className="text-4xl cursor-pointer my-2">Where's Waldo</h1>
      
    </div>
  )
}

export default Header
