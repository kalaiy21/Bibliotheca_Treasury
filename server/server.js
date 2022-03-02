const express = require('express');
const axios = require('axios');
const destruct = require('./nftsdestruct');

const app = express();



app.get('/nftsapi',async function (req,res) {

    const walletaddress = '0xef3155450baa054ffe7950509ce2042613ee6586'

    const url = `https://api.rarible.org/v0.1/items/byOwner?owner=ETHEREUM:${walletaddress}`

    axios.get(url)
      .then(function (response) {
        const data = response.data
        
        res.send(destruct(data))
      })
      .catch(function (error) {
        console.log(error);
      })
})

app.get('/tableapi',async function (req,res) {

    const walletaddress = '0xef3155450baa054ffe7950509ce2042613ee6586'
    const apikey = 'EK-pYffx-aL5xsQC-o7WsN'  // need to put as env
    const url = `http://api.ethplorer.io/getAddressInfo/${walletaddress}?apiKey=${apikey}`

    axios.get(url)
      .then(function (response) {
        const data = response.data
        console.log(data)
        res.send(data)
      })
      .catch(function (error) {
        console.log(error);
      })
})

app.listen(5000,function () {
    console.log("server started in port 5000");
})