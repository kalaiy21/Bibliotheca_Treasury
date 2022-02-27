import React from"react";


function TotalAssets(){
    return(
    <div className="mx-10 mb-8 bg-[#141518] pl-[5%]">
        <div className="flex items-center gap-x-[2rem]">
            <p className="text-white text-[1.5rem] font-light font-Inconsolate text-center">Total assets</p>
            <div className="border-2 bg-[#202023] border-[#8D795B] p-2 rounded-[10px]">
                <p className= "text-white text-[1.5rem] font-light font-Inconsolate text-center">$254,325,234,543</p>
            </div>
        </div>
    </div>
    );
}


export default TotalAssets;