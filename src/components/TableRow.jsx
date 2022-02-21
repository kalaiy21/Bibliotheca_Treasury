import React from "react";

function TableRow(props){
    return(
  
    <div className="mx-10 text-white text-[1.5rem] font-light grid grid-cols-5  bg-[#141518] border-[1px] border-[#8D795B] m-0.5">
    <p className="right-5 mx-10 text-white text-[1.5rem] font-light font-Inconsolate text-center p-2 ">{props.id}</p>
    <p className="mx-10 text-white text-[1.5rem] font-light font-Inconsolate text-center p-2">{props.token}</p>
    <p className= "mx-10 text-white text-[1.5rem] font-light font-Inconsolate text-center border-3 m-2 bg-[#8D795B] border-[#8D795B]">{props.usdValue}</p>
    <p className="mx-10 text-white text-[1.5rem] font-light font-Inconsolate text-center p-2 ">{props.percentage}</p>
    <p className="mx-10 text-white text-[1.5rem] font-light font-Inconsolate text-center p-2 ">{props.tokenValue}</p>
    </div>

    );
}

export default TableRow;