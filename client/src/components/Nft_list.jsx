import React from "react";

function Nft_list(props) {
    return(
        <div className="flex justify-between items-center  px-[.5rem] py-[.3rem] hover:bg-[#202023]" >
            <p className="font-Inconsolata text-lg tracking-[2px]">{props.content}</p> 
            <p className="font-Inconsolata text-lg">{props.number}</p>
        </div>
    )
}

export default Nft_list