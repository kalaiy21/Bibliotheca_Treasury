import React from "react";

function Tablehead(){
    return(<div className="mx-10 grid grid-cols-5  bg-[#141518] fixed top-100 w-[70rem]">
    <p className="font-Inconsolate text-[#FBFBFB] text-center p-3">id</p>
    
    <p className="font-Inconsolate text-[#FBFBFB] text-center p-3">token</p>
    <p className="font-Inconsolate text-[#FBFBFB] text-center p-3">USD value</p>
    <p className="font-Inconsolate text-[#FBFBFB] text-center p-3">Percentage</p>
    <p className="font-Inconsolate text-[#FBFBFB] text-center p-3">token balance</p>
  
  </div>);
}

export default Tablehead;