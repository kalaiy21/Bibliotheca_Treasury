
async function NftListClick(clickedList) {

    // console.log(clickedList);

    let query = {
        list : clickedList
    }

    // const options = {
    //     method: "post",
    
    //     headers: { 
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(query)
    // }

    const response = await fetch('/listclicked', {
        method: 'POST',
        body: JSON.stringify(query),
        headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
    
    console.log(data);
    

      
    // const getnft = async() => {
    //     const response = await fetch('/listclicked?clickedList='+clickedList)
    //     const data = await response.json()
    //     // console.log(data); //logging nfts data
    // }

}

export default NftListClick