
// function destruct(data) {                        old nft destruct function
//     ({total,items} = data)
//     nfts = []
//     items.forEach(item => {
//         ({id,meta} = item)
//         const nftname = meta.name
//         const url = meta.content[0].url
//         const ids = id
//         nft = {}
//         nft.id = ids
//         nft.name = nftname
//         nft.url = url
//         nfts.push(nft)
//     });
//     // console.log(nfts);
//     return nfts
// }

function destructList(data) {
    ({result} = data)
    listnames = []
    
    const getFrequency = (array) => {
        const map = {};
        array.forEach(item => {
           if(map[item]){
              map[item]++;
           }else{
              map[item] = 1;
           }
        });
        return map;
    };

    result.forEach(res =>{
        tokenid = res.name
        listnames.push(tokenid)
    })
    
    freq = getFrequency(listnames)


    newnftlist = []

    for (const [key, value] of Object.entries(freq)) {
        map = {}
        map.name = key
        map.count = value
        newnftlist.push(map)
    }
     
    return newnftlist
    
}

function nftitems(data) {
    result = data.result
    arr= []
    result.forEach(res =>{
        token_id = res.token_id
        token_name = res.name;
        meta = res.metadata
        nft = {}
        obj = JSON.parse(meta)
        nft.nftname = obj.name
        nft.tokenid = token_id
        nft.tokenname = token_name
        arr.push(nft)
    })
    return arr
}


function destruct(nftitem,data) {
    results = data.items
    newarr= []
    nftitem.forEach(nft=>{
        token_id=nft.tokenid
        results.forEach(result=>{
            restok = result.tokenId
            if(token_id === restok){
                url = result.meta.content[0].url
                nft.imgurl = url
                newarr.push(nft)
            }
        })
    })
    return nftitem
}

module.exports =  {destruct,destructList,nftitems} 

