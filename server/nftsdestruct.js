const { list } = require("postcss");


function destruct(data) {
    ({total,items} = data)
    nfts = []
    items.forEach(item => {
        ({id,meta} = item)
        const nftname = meta.name
        const url = meta.content[0].url
        const ids = id
        nft = {}
        nft.id = ids
        nft.name = nftname
        nft.url = url
        nfts.push(nft)
    });
    // console.log(nfts);
    return nfts
}

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
        
        // count = 0;
        // result.forEach(res =>{
        //     tokenname = res.name
        //     if(tokenid === tokenname){
        //         count++
        //     }
        // })
        // lists.name = tokenid
        // lists.count = count
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

module.exports =  {destruct,destructList} 

