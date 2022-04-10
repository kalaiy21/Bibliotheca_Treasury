import React from "react";

function Tablehead(){
    return(<div className="sticky mx-10 grid grid-cols-[.5fr,2fr,2fr,2fr,2fr] bg-[#141518] top-0 desktop:text-[1.5rem] laptop:text-[1.20rem] minilap:text-[1rem] tablet:text-[0.8rem]">
    <p className="text-[#FBFBFB] p-3 font-Inconsolata font-light tracking-[3px]">#</p>
    <p className="text-[#FBFBFB] p-3 font-Inconsolata font-light tracking-[3px]">token</p>
    <p className="text-[#FBFBFB] p-3 left-10 font-Inconsolata font-light ">USD value</p>
    <p className="text-[#FBFBFB] p-3 font-Inconsolata font-light tracking-[3px]">Percentage</p>
    <p className="text-[#FBFBFB] p-3 font-Inconsolata font-light tracking-[3px]">token balance</p>
  
  </div>);
}

export default Tablehead;