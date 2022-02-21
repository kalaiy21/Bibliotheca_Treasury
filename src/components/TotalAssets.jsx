import React from"react";


function TotalAssets(){
    return(<div className="mx-10 grid grid-cols-5  bg-[#141518] w-[60rem]">
    {/* <p className="text-white text-[1.5rem] font-light font-Inconsolate text-center m-5">Assets</p> */}
    <p className="text-white text-[1.5rem] font-light font-Inconsolate text-center m-5">Total assets</p>
    <p className= "w-full mx-10 text-white text-[1.5rem] font-light font-Inconsolate text-center border-2 m-4 bg-[#202023] border-[#8D795B] p-2 rounded-[10px]">$254,325,234,543</p>
    </div>);
}


export default TotalAssets;