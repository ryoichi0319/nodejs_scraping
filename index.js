const PORT = 8002
const express = require('express')
const axios = require("axios")
const cheerio = require("cheerio")
const app = express()

const URL = "https://search.rakuten.co.jp/search/mall/one+piece+comic/"
const data = []
axios(URL)
 .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser)

    const $ = cheerio.load(htmlParser)
    $(".searchresultitem", htmlParser).each(function(){
        const text = $(this).text();
        const price = $(this).find(".price--OX_YW").text()
        data.push({ text, price})
        console.log(data);
    })

 }).catch(error => console.log(error))

app.listen(PORT, console.log("server running 8002"))