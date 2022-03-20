import React from "react";

function address(props) {
    return <div className="text-white border-double border-4 border-[#8D795B] p-2 text-center mb-[5rem]">
        <a target="_blank" href={"https://etherscan.io/address/"+props.address} className="font-Inconsolata text-2xl font-light tracking-[3px]">Address: {props.address}</a>
    </div>
}

export default address