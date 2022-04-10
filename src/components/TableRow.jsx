import React from "react";

function TableRow(props){
    return(
  
    <div className="mx-10 text-white desktop:text-[1.5rem] laptop:text-[1.3rem] minilap:text-[1.3rem] tablet:text-[1rem] phone:text-[1rem] smphone:text-[0.8rem] smphone:overflow-x-scroll smphone:w-[100%] font-light grid grid-cols-[.5fr,2fr,2fr,2fr,2fr]  bg-[#141518] border-[1px] border-[#8D795B] m-0.5">
    <p className="right-5  text-white font-light font-Inconsolate text-center p-2 ">{props.id}</p>
    <p className="text-white font-light font-Inconsolate text-left p-2">{props.token}</p>  
    <p className= "text-white font-light font-Inconsolate text-right border-3 m-2 bg-[#8D795B] border-[#8D795B] tracking-wide"> {props.usdValue}</p>
    <p className="text-white font-light font-Inconsolate text-right p-2 ">{props.percentage} %</p>
    <p className="text-white font-light font-Inconsolate text-right p-2 ">{props.tokenValue}</p>
    </div>

    );
}

export default TableRow;


