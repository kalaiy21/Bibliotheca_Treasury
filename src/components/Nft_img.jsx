import React from "react";

function Nft_img(props) {
    return (
        <div className="flex flex-col w-[200px] h-[220px] items-center">
            <img src={props.url} alt="map" className="mb-[.5rem] rounded-[15%] w-[12rem]" />
            <p className="font-Inconsolata text-sm">{props.name}</p>
        </div>
    )
}

export default Nft_img