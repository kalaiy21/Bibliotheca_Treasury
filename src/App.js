import React from "react";
import Tablehead from "./components/Table";
import TableRow from "./components/TableRow";
import TotalAssets from "./components/TotalAssets";
const TableRowsData=[
  {id:1,token:"ETH",usdValue:"$315,1512",percentage:"33.5%",tokenValue:"151,6511"},
  {id:2,token:"Lords",usdValue:"$712,512,22",percentage:"30%",tokenValue:"290,611,5165"},
  {id:3,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},,

  {id:4,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:5,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:6,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:7,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:8,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:9,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:10,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:11,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:12,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:13,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"},
  {id:14,token:"USDC",usdValue:"$802,511,69",percentage:"35.5%",tokenValue:"954,632,08"}

  
]
function App() {
  return (
    <div>
    <TotalAssets></TotalAssets>
    <Tablehead></Tablehead>
      <div className="h-[30rem] overflow-auto">
        {TableRowsData.map( TableRowData => <TableRow key={TableRowData.id} id={TableRowData.id} token={TableRowData.token} usdValue={TableRowData.usdValue} percentage={TableRowData.percentage}tokenValue={TableRowData.tokenValue}/>)}
      </div>
        

    </div>
  );
}



export default App;
