let total=0;
function tableDestruct(tableData){

    // Eth calcultion
    const ethPrice=tableData.ETH.price.rate;
    const ethBalance=tableData.ETH.balance;
    const ethInUSD=ethPrice*ethBalance; 
    // let ethInusd = new Intl.NumberFormat('en-US');
    // let output = ethInusd.format(ethINUSD);
    //Remaining Tokens

    ({address,ETH,countTxs,tokens} = tableData);
    // console.log(tokens);
    tokArr=[]

    let total=0;
    tokens.forEach(token=>{
        ({tokenInfo,balance}=token);
        decimal=tokenInfo.decimals;
        Balance=balance/Math.pow(10,decimal);
        RateOfCoin=tokenInfo.price.rate
        inUSD=Balance*RateOfCoin;
        total=total+inUSD; 

    });
    total+=ethInUSD;


    tokens.forEach(token=>{
        ({tokenInfo,balance}=token);
         tokenName=tokenInfo.name;
         decimal=tokenInfo.decimals;
         Balance=balance/Math.pow(10,decimal);
         RateOfCoin=tokenInfo.price.rate
         inUSD=Balance*RateOfCoin;
         
         percentage=Math.round((inUSD/total)*100).toFixed(1);  

        // console.log(Balance);
        // console.log(Balance2);
        tok={}
        tok.name=tokenName
        tok.balance=Math.round(Balance).toFixed(1)
        tok.inUsd=Math.round(inUSD).toFixed(1)
        tokArr.push(tok)

        tok.percent=percentage

    });
    tokEth={}
    tokEth.name="ETH"
    tokEth.balance=Math.round(ethBalance).toFixed(1)
    tokEth.inUsd=Math.round(ethInUSD).toFixed(1)
    const ethPercentage=Math.round((ethInUSD/total)*100).toFixed(1);
    tokEth.percent=ethPercentage
    tokArr.push(tokEth)

    tokArr.sort((a, b) => {
        return b.percent - a.percent;
    });
    

    return tokArr;
    // console.log(total);
    // console.log(balance);



}

module.exports=tableDestruct;