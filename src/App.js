
import React, { useEffect, useState } from "react";
import Tablehead from "./components/Table";
import TableRow from "./components/TableRow";
import TotalAssets from "./components/TotalAssets";
import logo from "./resources/Treasury-modified.png"
import right_arrow_icon from "./resources/arrow-right.png"
import Address from "./components/address";
import Nft_list from "./components/Nft_list";
import Nft_img from "./components/Nft_img";



const walletaddress = "0xef3155450bAA054ffE7950509CE2042613EE6586"



function App() {

  const[nfts,setnfts] = useState([]) // for nft img array of obj
  const[nftlist,setnftlist] = useState([])
  const[table,settable] = useState([]) // for table array of obj

  useEffect(() => {
    const getnft = async() => {
      const response = await fetch('/nftsapi')
      const data = await response.json()
      // console.log(data); //logging nfts data
      setnfts(data)
    }

    const getnftlist = async() => {
      const response = await fetch('/nftslistapi')
      const data = await response.json()
      // console.log(data); //logging nftlist data
      setnftlist(data)
    }

    const gettable = async() => {
      const response = await fetch('/tableapi')
      const data = await response.json()
      // console.log(data); //logging table data
      settable(data)
    }
    gettable()
    getnft()
    getnftlist()
  },[])

  return (
    <div className="py-[4rem] px-[8rem] tablet:px-[4rem]">
      <h1 className="text-center text-white title tracking-[4px] mb-[5rem] tablet:mb-[2.5rem] font-EB_Garamond standard:text-[6.5rem] desktop:text-[5.5rem] laptop:text-[4rem] minilap:text-[2.7rem] tablet:text-[1.8rem] phone:text-[1.3rem]smphone:text-[1rem]">
        Bibliotheca <span className="text-[#8D795B] inline-block">DAO</span> <span className="inline-block">Treasury</span>
      </h1>

      <div className="font-Inconsolata flex items-center justify-between mb-[5rem] tablet:flex-col-reverse">
        <div className="text-white font-light w-[60%] tablet:w-[100%] tracking-[2px] standard:text-[1.5rem] desktop:text-[1.4rem] desktop:text-[1.3rem] minilap:text-[1rem] tablet:text-[1.2rem] phone:text-[0.4rem] smphone:text-[0.2rem]">
        The treasury funds managed by community members will be used to enable the DAO's mission, vision and goals.

 
        <p className="text-[#8D795B] my-[1rem] text-[2.3rem]">Principles :</p>
        <ul className="list-disc pl-[3rem]">
          <li>clarity on allocation and distribution of funds</li>
          <li>robust counsel on key risk mitigation of community wallet</li>
          <li>real-time dashboard of state of the treasury</li>
        </ul>
        </div>
        <img className="standard:w-[27rem] standard:h-[25rem] desktop:w-[25rem] desktop:h-[23rem] laptopo:w-[23rem] laptop:h-[21rem] minilap:w-[19rem] minilap:h-[18rem] tablet:w-[15rem] tablet:h-[15rem] phone:w-[15rem] phone:h-[14rem] smphone:w-[13rem] smphone:h-[12rem] tablet:mb-[2rem]" src={logo} alt="treasury image" />
      </div>

      <Address address={walletaddress} />
      
      {/* insert the table here */}

      <div className="mb-[2rem] border-double border-4 border-[#8D795B] py-[2rem] ">
        <TotalAssets></TotalAssets>
        <div className="max-h-[30rem] overflow-auto overflow-x-hidden scrolling max-w-full">
        <Tablehead></Tablehead>
        {table.map( (TableRowData,index) => <TableRow key={TableRowData.name} id={index+1} token={TableRowData.name} usdValue={TableRowData.inUsd} percentage={TableRowData.percent}tokenValue={TableRowData.balance}/>)}
        </div>
      </div>

      <div className="text-white">
        <h1 className="font-EB_Garamond tracking-[2px] mb-[2rem]">NFT Assets</h1>
        <div className="border-double border-4 border-[#8D795B] h-[80vh] grid grid-cols-[.55fr,2fr]">
          <div className="h-full border-solid border-r-2 border-[#8D795B] overflow-auto nft_asset">

            <div className="py-[2.5rem] px-[1.5rem]">

              {/* inside this div where nfs assets names will placed */}

              <div className="flex justify-between items-center mb-[.1rem] hover:bg-[#202023] px-[.5rem] py-[.3rem]">
                <p className="font-Inconsolata text-lg">All</p> 
                <img src={right_arrow_icon} alt="icon" className="w-6 h-6" /> 
              </div>
              
              {nftlist.map( asset => <Nft_list key={asset.name} content={asset.name} number={asset.count} />)}

            </div>

          </div>
          <div className="h-full p-[2rem] nft_asset_imgs grid grid-cols-4 overflow-y-scroll gap-x-[2rem] gap-y-[1rem]">

            {/* inside this div where nfs assets img will placed */}

            {nfts.map(nft =><Nft_img key={nft.tokenid} url={nft.imgurl} name={nft.nftname} />)}

          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
