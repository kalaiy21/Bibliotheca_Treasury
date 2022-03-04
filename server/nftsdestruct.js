
function destruct(result) {
    ({total,items} = result)
    // console.log(items);

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

module.exports =  destruct 

