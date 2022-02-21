import React from "react";

function Tablehead(){
    return(<div className="sticky mx-10 grid grid-cols-5  bg-[#141518] w-[60rem] text-center">
    <p className="text-[#FBFBFB] text-center p-3 font-Inconsolata text-2xl font-light tracking-[3px]">id</p>
    
    <p className=" text-[#FBFBFB] text-center p-3 font-Inconsolata text-2xl font-light tracking-[3px]">token</p>
    <p className=" text-[#FBFBFB] p-3 left-10 font-Inconsolata text-2xl font-light ">USD value</p>
    <p className=" text-[#FBFBFB] text-right p-3 font-Inconsolata text-2xl font-light tracking-[3px]">Percentage</p>
    <p className=" text-[#FBFBFB] text-right p-3 font-Inconsolata text-2xl font-light tracking-[3px]">token balance</p>
  
  </div>);
}

export default Tablehead;