import React from "react";
import logo from "./resources/lords-icon.png"
import right_arrow_icon from "./resources/arrow-right.png"
import Address from "./components/address";
import Nft_list from "./components/Nft_list";
import map from "./resources/map.png";

const address = "0xC949c2f384f0E0fc848A41052E7D0c467Ca43D54"

// reference nfs names and count for mapping 

const nft_assets = [                            
  {id:1,name:"Realms",number:"25"},
  {id:2,name:"Flipflop",number:"5"},
  {id:3,name:"Assassin",number:"2"},
  {id:4,name:"Creed",number:"10"},
  {id:5,name:"Pubg",number:"1"},
  {id:6,name:"Bitcoin",number:"6"},
  {id:7,name:"Niftbees",number:"150"},
  {id:8,name:"Roadmap",number:"26"},
  {id:9,name:"Realms",number:"25"},
  {id:10,name:"Flipflop",number:"5"},
  {id:13,name:"Assassin",number:"2"},
  {id:41,name:"Creed",number:"10"},
  {id:51,name:"Pubg",number:"1"},
  {id:61,name:"Bitcoin",number:"6"},
  {id:71,name:"Niftbees",number:"150"},
  {id:81,name:"Roadmap",number:"26"}
]

function App() {
  return (
    <div className="py-[4rem] px-[8rem]">
      <h1 className="text-center text-white sm:text-8xl title tracking-[4px] mb-[5rem] font-EB_Garamond">
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

      <Address address={address} />
      
      {/* insert the table here */}
      
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
              
              {nft_assets.map( asset => <Nft_list key={asset.id} content={asset.name} number={asset.number} />)}

            </div>

          </div>
          <div className="h-full p-[2rem] nft_asset_imgs">

            {/* inside this div where nfs assets img will placed */}

            <div className="flex flex-col w-[200px] h-[210px] items-center">
              <img src={map} alt="map" className="mb-[.5rem]" />
              <p className="font-Inconsolata text-sm">Assassin</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
