import React from "react";

function Tablehead(){
    return(<div className="sticky mx-10 grid grid-cols-[.5fr,2fr,2fr,2fr,2fr] bg-[#141518] top-0">
    <p className="text-[#FBFBFB] p-3 font-Inconsolata text-2xl font-light tracking-[3px] laptop:text-xl minilap:text-lg tablet:text-base phone:text-sm">#</p>
    <p className=" text-[#FBFBFB] p-3 font-Inconsolata text-2xl font-light tracking-[3px]">token</p>
    <p className=" text-[#FBFBFB] p-3 left-10 font-Inconsolata text-2xl font-light ">USD value</p>
    <p className=" text-[#FBFBFB] p-3 font-Inconsolata text-2xl font-light tracking-[3px]">Percentage</p>
    <p className=" text-[#FBFBFB] p-3 font-Inconsolata text-2xl font-light tracking-[3px]">token balance</p>
  
  </div>);
}

export default Tablehead;