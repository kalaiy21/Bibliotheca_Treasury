
import React, { useEffect, useState } from "react";
import Tablehead from "./components/Table";
import TableRow from "./components/TableRow";
import TotalAssets from "./components/TotalAssets";
import logo from "./resources/lords-icon.png"
import right_arrow_icon from "./resources/arrow-right.png"
import Address from "./components/address";
import Nft_list from "./components/Nft_list";
import Nft_img from "./components/Nft_img";

const TableRowsData=[
  {id:1,token:"ETH",usdValue:"$315,1512",percentage:"33.5%",tokenValue:"151,6511"},
  {id:2,token:"Lords",usdValue:"$712,512,22",percentage:"30%",tokenValue:"290,611,5165"},
  {id:3,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},,

  {id:4,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:5,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:6,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:8,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:9,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:10,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
]

        



const walletaddress = "0xef3155450bAA054ffE7950509CE2042613EE6586"

// reference nfs names and count for mapping 

// const nft_assets = [                            
//   {id:1,name:"Realms",number:"25"},
//   {id:2,name:"Flipflop",number:"5"},
//   {id:3,name:"Assassin",number:"2"},
//   {id:4,name:"Creed",number:"10"},
//   {id:5,name:"Pubg",number:"1"},
//   {id:6,name:"Bitcoin",number:"6"},
//   {id:7,name:"Niftbees",number:"150"},
//   {id:8,name:"Roadmap",number:"26"},
//   {id:9,name:"Realms",number:"25"},
//   {id:10,name:"Flipflop",number:"5"},
//   {id:13,name:"Assassin",number:"2"},
//   {id:41,name:"Creed",number:"10"},
//   {id:51,name:"Pubg",number:"1"},
//   {id:61,name:"Bitcoin",number:"6"},
//   {id:71,name:"Niftbees",number:"150"},
//   {id:81,name:"Roadmap",number:"26"}
// ]


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
    <div className="py-[4rem] px-[8rem]">
      <h1 className="text-center text-white xl:text-8xl lg:text-6xl title tracking-[4px] mb-[5rem] font-EB_Garamond">
        Bibliotheca <span className="text-[#8D795B] inline-block">Treasury</span>
      </h1>

      <div className="font-Inconsolata flex items-center justify-between mb-[5rem]">
        <p className="text-white text-[1.5rem] font-light w-[60%] tracking-[2px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non.
          Enim nulla aliquet porttitor lacus luctus accumsan.
          <br />
          <br />
          Ac turpis egestas integer eget. Vestibulum morbi blandit cursus risus at ultrices. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
        </p>
        <img className="w-[27rem]" src={logo} alt="treasury image" />
      </div>

      <Address address={walletaddress} />
      
      {/* insert the table here */}

      <div className="mb-[2rem] border-double border-4 border-[#8D795B] py-[2rem] ">
        <TotalAssets></TotalAssets>
        <div className="h-[30rem] overflow-auto overflow-x-hidden scrolling max-w-full">
        <Tablehead></Tablehead>
        {table.map( (TableRowData,index) => <TableRow key={TableRowData.name} id={index+1} token={TableRowData.name} usdValue={TableRowData.inUsd} percentage={TableRowData.percent}tokenValue={TableRowData.balance}/>)}
        </div>
      </div>

      <div className="text-white">
        <h1 className=" text-3xl font-EB_Garamond tracking-[2px] mb-[2rem]">NFT Assets</h1>
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

            {nfts.map(nft =><Nft_img key={nft.id} url={nft.url} name={nft.name} />)}

          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
