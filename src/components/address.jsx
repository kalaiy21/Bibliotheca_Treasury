import React from "react";

function address(props) {
    return <div className="text-white border-double border-4 border-[#8D795B] p-2 text-center mb-[5rem] tablet:mb-[3rem] smphone:p-2 phone:p-1">
        <a target="_blank" href={"https://etherscan.io/address/"+props.address} className="font-Inconsolata standard:text-[2rem] desktop:text-[1.7rem] laptop:text-[1.5rem] minilap:text-[1.2rem] tablet:text-[1rem] phone:text-[0.8rem] smphone:text-[0.6rem] phone:text-[0.4rem] font-light tracking-[3px] ">Address: {props.address}</a>
    </div>
}

export default address