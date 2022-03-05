import React from "react";

function TableRow(props){
    return(
  
    <div className="mx-10 text-white text-[1.5rem] font-light grid grid-cols-[.5fr,2fr,2fr,2fr,2fr]  bg-[#141518] border-[1px] border-[#8D795B] m-0.5">
    <p className="right-5  text-white text-[1.5rem] font-light font-Inconsolate text-center p-2 ">{props.id}</p>
    <p className="text-white text-[1.5rem] font-light font-Inconsolate text-center p-2">{props.token}</p>
    <p className= " text-white text-[1.5rem] font-light font-Inconsolate text-center border-3 m-2 bg-[#8D795B] border-[#8D795B] tracking-wide">$ {props.usdValue}</p>
    <p className=" text-white text-[1.5rem] font-light font-Inconsolate text-center p-2 ">{props.percentage} %</p>
    <p className=" text-white text-[1.5rem] font-light font-Inconsolate text-center p-2 ">{props.tokenValue}</p>
    </div>

    );
}

export default TableRow;