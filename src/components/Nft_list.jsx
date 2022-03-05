import React from "react";

function Nft_list(props) {
    return(
        <div className="flex justify-between items-center  pl-[.5rem] pr-[.8rem] py-[.3rem] hover:bg-[#202023]" >
            <p className="font-Inconsolata text-lg tracking-[2px] truncate w-[60%]">{props.content}</p> 
            <p className="font-Inconsolata text-lg">{props.number}</p>
        </div>
    )
}

export default Nft_list